import type { Coffee } from '@/lib/type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartItem = {
  product: Coffee;
  quantity: number;
  status?: string;
};

type CartState = {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
};

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Coffee>) => {
      const product = action.payload;
      const existingItem = state.items.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        if (existingItem.quantity < product.stock) {
          existingItem.quantity += 1;
          existingItem.status = undefined;
          state.totalQuantity += 1;
          state.totalPrice += product.price;
        } else {
          existingItem.status = 'Cannot add more than available stock';
        }
      } else if (product.stock > 0) {
        state.items.push({ product, quantity: 1 });
        state.totalPrice += product.price;
        state.totalQuantity += 1;
      } else {
        alert('Product is out of stock');
      }
    },
    removeItemFromCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const existingItem = state.items.find(
        (item) => item.product.id === productId
      );
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.product.price * existingItem.quantity;
        state.items = state.items.filter(
          (item) => item.product.id !== productId
        );
      }
    },
    updateItemQuantity: (
      state,
      action: PayloadAction<{ productId: number; quantity: number }>
    ) => {
      const { productId, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item.product.id === productId
      );
      if (
        existingItem &&
        quantity <= existingItem.product.stock &&
        quantity > 0
      ) {
        state.totalQuantity += quantity - existingItem.quantity;
        state.totalPrice +=
          (quantity - existingItem.quantity) * existingItem.product.price;
        existingItem.quantity = quantity;
        existingItem.status = undefined;
      } else if (existingItem) {
        existingItem.status = 'Invalid quantity';
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
