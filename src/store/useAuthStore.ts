import {create} from "zustand";

type AuthState = {
    user: unknown
}

export const useAuthStore = create<AuthState>(() => ({
    user: null,
}))

