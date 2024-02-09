export interface IAuthStore {
  isAuthenticated: boolean,
  login: () => void
  logout: () => void,
};
