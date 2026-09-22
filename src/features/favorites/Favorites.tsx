import { useFavoritesStore } from './favoritesStore'
import type { Product } from '../products/productsSlice'

export function Favorites() {
  const items = useFavoritesStore(
    (state) => state.items
  )

  const removeFavorite = useFavoritesStore(
    (state) => state.removeFavorite
  )

  return (
    <section className="favorites-section">
      <div className="favorites-header">
        <h2>
          ❤️ Sản phẩm yêu thích ({items.length})
        </h2>

        {items.length > 0 && (
          <button
            type="button"
            onClick={() => {
              items.forEach(
                (product: Product) =>
                  removeFavorite(product.id)
              )
            }}
          >
            Xóa tất cả
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <p>
          Chưa có sản phẩm nào trong danh sách
          yêu thích.
        </p>
      ) : (
        <div className="favorites-list">
          {items.map((product) => (
            <article
              key={product.id}
              className="favorite-item"
            >
              <img
                src={product.image}
                alt={product.title}
              />

              <div>
                <h3>{product.title}</h3>

                <p>
                  ${product.price.toFixed(2)}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    removeFavorite(product.id)
                  }
                >
                  Bỏ yêu thích
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}