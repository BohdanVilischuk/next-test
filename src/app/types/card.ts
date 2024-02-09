export interface ICard {
    id: number;
    title?: string,
    description?: string
}
export interface ICardStore {
    cards: ICard[];
    addCard: (card: ICard) => void;
  }