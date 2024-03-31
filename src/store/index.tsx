import { create } from "zustand";
import { ICartStore, INotification, } from "./types";

// const productStore =
// {name: "food"}, {name: "basket"}, {name: "table"}

// export const useProductList = create((set, get) => ({
//   products: [],
// }));



// notification
export const useNotification = create<INotification>((set) => ({
    card: true,
    hideCard: () => set(() => ({ card: false}))
  }));

// cart
export const useCartStore = create<ICartStore>((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => ({
      cart: [item, ...state.cart]
    })),
}));
