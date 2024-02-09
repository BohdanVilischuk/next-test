import { create } from 'zustand'
import { ICardStore } from '../types/card';

const useCardStore = create<ICardStore>((set) => ({
  cards: [
    {
      id: 1,
      title: 'Card 1',
      description: 'Description of Card 1'
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'Description of Card 2'
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'Description of Card 3'
    }
  ], // Initial cards array
  addCard: (card) => set((state) => ({ cards: [...state.cards, card] })),
}));

export default useCardStore;