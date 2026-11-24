import { Link } from 'react-router-dom'
import { discountPercent, formatPrice } from '../utils/format.js'

/*
 * Cartão de produto: imagem (292x321), categoria, nome, preço e preço com desconto.
 * Quando `id` é informado, o cartão leva para /product/:id.
 */
export default function ProductCard({ id, image, name, price, priceDiscount, category }) {
  const percent = discountPercent(price, priceDiscount)

  const content = (
    <>
      <div className="card__media">
        {percent > 0 && <span className="card__badge">{percent}% OFF</span>}
        <img src={image} alt={name} width="292" height="321" loading="lazy" />
      </div>

      {category && <span className="card__category">{category}</span>}
      <h3 className="card__name">{name}</h3>

      <p className="card__prices">
        {priceDiscount ? (
          <>
            <s>{formatPrice(price)}</s>
            <strong>{formatPrice(priceDiscount)}</strong>
          </>
        ) : (
          <strong>{formatPrice(price)}</strong>
        )}
      </p>
    </>
  )

  return id ? (
    <Link to={`/product/${id}`} className="card">
      {content}
    </Link>
  ) : (
    <div className="card">{content}</div>
  )
}
