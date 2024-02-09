export const useRouterMock = jest.fn().mockImplementation(() => ({
  push: jest.fn(),
}));