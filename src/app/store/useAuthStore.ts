import { create } from 'zustand';
import { IAuthStore } from '../types/auth';

export const useAuthStore = create<IAuthStore>((set) => ({
  isAuthenticated: false,
  login: () => set(() => ({ isAuthenticated: true })),
  logout: () => set(() => ({ isAuthenticated: false })),
}));