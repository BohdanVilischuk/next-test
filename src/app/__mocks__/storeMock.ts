

export const mockAddCard = jest.fn();

export const useCardStoreMock = jest.fn().mockImplementation(() => ({
  addCard: mockAddCard,
}));

// const useCardStoreMock = jest.mock('../store/useCardStore.ts', () => ({
//   __esModule: true, // Necessary for mocking named exports
//   default: jest.fn().mockImplementation(() => ({
//     cards: [{ id: 1, title: 'Test Card', description: 'Test Description' }],
//     addCard: jest.fn(),
//     // Add other methods or properties as needed
//   })),
// }));