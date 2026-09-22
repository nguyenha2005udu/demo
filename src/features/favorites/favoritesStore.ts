import { create } from 'zustand'
import type { Product } from '../products/productsSlice'

interface FavoritesState {
  items: Product[]

  addFavorite: (product: Product) => void

  removeFavorite: (productId: number) => void

  toggleFavorite: (product: Product) => void

  isFavorite: (productId: number) => boolean
}

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  items: [],

  addFavorite: (product) =>
    set((state) => {
      const exists = state.items.some(
        (item) => item.id === product.id
      )

      if (exists) {
        return state
      }

      return {
        items: [...state.items, product],
      }
    }),

  removeFavorite: (productId) =>
    set((state) => ({
      items: state.items.filter(
        (item) => item.id !== productId
      ),
    })),

  toggleFavorite: (product) => {
    if (get().isFavorite(product.id)) {
      get().removeFavorite(product.id)
    } else {
      get().addFavorite(product)
    }
  },

  isFavorite: (productId) =>
    get().items.some(
      (item) => item.id === productId
    ),
}))