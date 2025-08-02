import { create } from "zustand";
import type { AuthState, User, UserProfile, AuthTokens } from "../types/auth";

interface AuthStore extends AuthState {
    setUser: (user: User | null ) => void;
    setProfile: (profile: UserProfile | null) => void;
    setTokens: (tokens: AuthTokens | null) => void;
    setLoading: (loading: boolean) => void;
    reset: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
   user: null,
   profile: null,
   tokens: null,
   isAuthenticated: false,
   isLoading: false,

   setUser: (user) => set((state) => ({
    ...state,
    user,
    isAuthenticated: !!user 
   })),

   setProfile: (profile) => set((state) => ({
    ...state,
    profile
   })),

   setTokens: (tokens) => set((state) => ({
    ...state,
    tokens 
   })),

   setLoading: (isLoading) => set((state) => ({
    ...state,
    isLoading 
   })),

   reset: () => set({
    user: null,
    profile: null,
    tokens: null,
    isAuthenticated: false,
    isLoading: false 
   }),
}));  