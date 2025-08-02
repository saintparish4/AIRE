import { authApi } from "@/services/api/auth";
import { SecureStorage } from "@/services/storage/secure";
import { useAuthStore } from "@/store/authStore";
import type { LoginRequest, RegisterRequest } from "@/types/auth";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface AuthContextType {
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (credentials: LoginRequest) => Promise<void>;
    register: (userData: RegisterRequest) => Promise<void>;
    logout: () => Promise<void>;
    refreshToken: () => Promise<void>; 
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }: AuthProviderProps) => {
    const {
        user,
        tokens,
        isAuthenticated,
        isLoading,
        setUser,
        setTokens,
        setLoading,
        reset,
    } = useAuthStore();

    // Initialize auth state on app start
    useEffect(() => {
        initializeAuth();
    }, []);

    const initializeAuth = async () => {
        try {
            setLoading(true);
            const storedTokens = await SecureStorage.getTokens();
            
            if (storedTokens.accessToken && storedTokens.refreshToken) {
                // Validate token and get user data
                await refreshToken();
            }
        } catch (error) {
            console.error("Auth initialization error:", error);
            await SecureStorage.clearTokens();
        } finally {
            setLoading(false);
        }
    };

    const login = async (credentials: LoginRequest) => {
        try {
            const { user, tokens } = await authApi.login(credentials);

            await SecureStorage.setTokens(tokens.accessToken, tokens.refreshToken);
            setUser(user);
            setTokens(tokens); 
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
    };

    const register = async (userData: RegisterRequest) => {
        try {
            const { user, tokens } = await authApi.register(userData);

            await SecureStorage.setTokens(tokens.accessToken, tokens.refreshToken);
            setUser(user);
            setTokens(tokens);
        } catch (error) {
            console.error("Registration error:", error);
            throw error; 
        }
    };

    const logout = async () => {
        try {
            if (tokens?.refreshToken) {
                await authApi.logout(); 
            }
        } catch (error) {
            console.error("Logout error:", error); 
        } finally {
            await SecureStorage.clearTokens();
            reset(); 
        }
    };

    const refreshToken = async () => {
        try {
            const { refreshToken } = await SecureStorage.getTokens();

            if (!refreshToken) {
                throw new Error("No refresh token available");
            }

            const newTokens = await authApi.refreshToken(refreshToken);
            await SecureStorage.setTokens(newTokens.accessToken, newTokens.refreshToken);
            setTokens(newTokens);

            // Fetch current user data here if needed
            // const user = await userApi.getCurrentUser();
            // setUser(user); 
        } catch (error) {
            console.error("Token refresh error:", error);
            await logout();
            throw error;
        }
    };

    const value: AuthContextType = {
        isAuthenticated,
        isLoading,
        login,
        register,
        logout,
        refreshToken,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider"); 
    }
    return context;
}