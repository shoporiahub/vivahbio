import { create } from "zustand";
import { persist } from "zustand/middleware";

import {
    login as loginApi,
    register as registerApi,
    getCurrentUser,
    type LoginRequest,
    type RegisterRequest,
} from "../api/auth.service";

interface User {
    id: number;
    name: string;
    email: string;
    mobile: string;
}

interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    loading: boolean;

    login: (data: LoginRequest) => Promise<void>;
    register: (data: RegisterRequest) => Promise<void>;
    fetchCurrentUser: () => Promise<void>;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            user: null,
            token: null,
            isAuthenticated: false,
            loading: false,

            async login(data) {
                set({ loading: true });

                try {
                    const response = await loginApi(data);

                    localStorage.setItem("access_token", response.access_token);

                    set({
                        user: response.user,
                        token: response.access_token,
                        isAuthenticated: true,
                        loading: false,
                    });
                } catch (error) {
                    set({ loading: false });
                    throw error;
                }
            },

            async register(data) {
                set({ loading: true });

                try {
                    const response = await registerApi(data);

                    localStorage.setItem("access_token", response.access_token);

                    set({
                        user: response.user,
                        token: response.access_token,
                        isAuthenticated: true,
                        loading: false,
                    });
                } catch (error) {
                    set({ loading: false });
                    throw error;
                }
            },

            async fetchCurrentUser() {
                set({ loading: true });

                try {
                    const user = await getCurrentUser();

                    set({
                        user,
                        isAuthenticated: true,
                        loading: false,
                    });
                } catch {
                    set({ loading: false });
                    get().logout();
                }
            },

            logout() {
                localStorage.removeItem("access_token");

                set({
                    user: null,
                    token: null,
                    isAuthenticated: false,
                });
            },
        }),
        {
            name: "auth-storage",

            partialize: (state) => ({
                user: state.user,
                token: state.token,
                isAuthenticated: state.isAuthenticated,
            }),
        }
    )
);