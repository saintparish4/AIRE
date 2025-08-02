// Authentication API 

import { apiClient } from "@/services/api/client";
import type { LoginRequest, RegisterRequest, User, AuthTokens } from "@/types/auth";

export const authApi = {
    async login(credentials: LoginRequest): Promise<{ user: User; tokens: AuthTokens }> {
        const response = await apiClient.post<{ user: User; tokens: AuthTokens }>("/auth/login", credentials);
        return response.data;
    },
    
    async register(userData: RegisterRequest): Promise<{ user: User; tokens: AuthTokens }> {
        const response = await apiClient.post<{ user: User; tokens: AuthTokens }>("/auth/register", userData);
        return response.data;
    },

    async refreshToken(refreshToken: string): Promise<AuthTokens> {
        const response = await apiClient.post<AuthTokens>("/auth/refresh", { refreshToken });
        return response.data;
    },

    async logout(): Promise<void> {
        await apiClient.post("/auth/logout");
    },

    async forgotPassword(email: string): Promise<void> {
        await apiClient.post("/auth/forgot-password", { email });
    },

    async resetPassword(token: string, newPassword: string): Promise<void> {
        await apiClient.post("/auth/reset-password", { token, newPassword });
    },

    async verifyEmail(token: string): Promise<void> {
        await apiClient.post("/auth/verify-email", { token });
    },

    async resendVerificationEmail(email: string): Promise<void> {
        await apiClient.post("/auth/resend-verification", { email });
    },
};