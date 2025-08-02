export interface User {
    id: string;
    email: string;
    phone?: string;
    status: 'pending' | 'active' | 'suspended' | 'closed';
    emailVerified: boolean;
    phoneVerified: boolean;
    createdAt: string;
    lastLoginAt?: string;
}

export interface UserProfile {
    id: string;
    userId: string;
    firstName?: string;
    lastName?: string;
    dateOfBirth?: string;
    nationality?: string;
    countryOfResidence?: string;
    address?: {
        line1?: string;
        line2?: string;
        city?: string;
        state?: string;
        postalCode?: string;
        country?: string;
    };
    timezone?: string;
    language: string;
}

export interface AuthTokens {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
}

export interface LoginRequest {
    email: string;
    password: string; 
}

export interface RegisterRequest {
    email: string;
    password: string;
    firstName: string;
    lastName: string; 
}

export interface AuthState {
    user: User | null;
    profile: UserProfile | null;
    tokens: AuthTokens | null;
    isAuthenticated: boolean;
    isLoading: boolean; 
}

