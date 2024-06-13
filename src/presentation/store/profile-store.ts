import { create } from "zustand";

export interface ProfileState {
    name: string;
    email: string;
    changeProfile: (name: string, email: string) => void;
}

export const useProfleStore = create<ProfileState>()((set, get) => ({
    name: 'Jhon Deer',
    email: 'j@j.com',
    changeProfile: (name: string, email: string) => {
        set({ name, email })
    }
}))