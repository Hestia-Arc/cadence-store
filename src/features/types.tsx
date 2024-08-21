// =============== PRODUCT
export interface IProduct {
  id: number;
  productName: string
  description: string
  image: string
  // reviews?: boolean
}


export interface ICartStore {
    cart: Array<object>;
    // addToCart: (param: Product) => void;
    // removeFromCart: (param: object) => void;
    // emptyCart: () => void;
  }

  // ============= NOTIFICATION
  export interface INotification {
    card: boolean
    hideCard: () => void
  }