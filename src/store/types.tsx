export interface Product {
  name: string
}

export interface ICartStore {
    cart: Array<object>;
    addToCart: (param: Product) => void;
    // removeFromCart: (param: object) => void;
    // emptyCart: () => void;
  }

  export interface INotification {
    card: boolean
    hideCard: () => void
  }