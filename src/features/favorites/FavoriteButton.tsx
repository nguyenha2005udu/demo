import type { Product } from '../products/productsSlice'
import { useFavoritesStore } from './favoritesStore'

interface FavoriteButtonProps {
  product: Product
}

export function FavoriteButton({
  product,
}: FavoriteButtonProps) {
  const isFavorite = useFavoritesStore((state) =>
    state.isFavorite(product.id)
  )

  const toggleFavorite = useFavoritesStore(
    (state) => state.toggleFavorite
  )

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(product)}
      className={
        isFavorite
          ? 'favorite-button active'
          : 'favorite-button'
      }
    >
      {isFavorite
        ? '❤️ Bỏ yêu thích'
        : '♡ Thêm yêu thích'}
    </button>
  )
}