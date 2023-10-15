export type itemType = {
    id: number,
    type: string,
    name: string,
    mountain: string,
    image: string,
    quantity: number,
    days: number | null,
    price: number
}

export type partialItemType = {
    id: number;
    type: string,
    name: string;
    image: string;
    price: number;
  };