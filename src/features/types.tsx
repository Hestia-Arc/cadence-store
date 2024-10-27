// =============== PRODUCT
export interface IProduct {
  id: string;
  productName: string;
  description: string;
  price: number;
  image?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  reviews?: number;
  new?: string;
  favorite: boolean;
  measurement?: string;
  color: string[];
  category: string[];
  sku: number;
  moreInfo?: string;
  width?: string;
  height?: string;
  weight?: string;
  length?: string;
  package?: string;
}


// ================ CART
export interface ICart {
  image: string
  name: string
  color: string
  quantity: number
  price: string
}

export interface ICartStore {
  cart: Array<object>;
  // addToCart: (param: Product) => void;
  // removeFromCart: (param: object) => void;
  // emptyCart: () => void;
}

// ============= NOTIFICATION
export interface INotification {
  card: boolean;
  hideCard: () => void;
}
