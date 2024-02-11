export const mockAddCard = jest.fn();

export const useCardStoreMock = jest.fn().mockImplementation(() => ({
  addCard: mockAddCard,
}));
