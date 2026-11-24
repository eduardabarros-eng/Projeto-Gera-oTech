import starIcon from '../assets/star-icon.svg'
import { formatPrice } from '../utils/format.js'

/*
 * Caixa de compra: nome, referência, avaliação, preços, descrição,
 * opções (children) e botão COMPRAR.
 * Extras opcionais: onBuy (clique no botão) e feedback ({ type, text }).
 */
export default function BuyBox({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
  onBuy,
  feedback,
}) {
  return (
    <div className="buybox">
      <h1 className="buybox__name">{name}</h1>
      <p className="buybox__reference">Ref: {reference}</p>

      <div className="buybox__rating">
        <span className="buybox__stars">
          {stars}
          <img src={starIcon} alt="estrelas" width="16" height="16" />
        </span>
        <span className="buybox__reviews">({rating} avaliações)</span>
      </div>

      <p className="buybox__price">
        {priceDiscount ? (
          <>
            <strong>{formatPrice(priceDiscount)}</strong>
            <s>{formatPrice(price)}</s>
          </>
        ) : (
          <strong>{formatPrice(price)}</strong>
        )}
      </p>

      <div className="buybox__description">
        <h2>Descrição do produto</h2>
        <p>{description}</p>
      </div>

      {children}

      <button type="button" className="buybox__buy" onClick={onBuy}>
        COMPRAR
      </button>

      {feedback && (
        <p className={`buybox__feedback buybox__feedback--${feedback.type}`} role="status">
          {feedback.text}
        </p>
      )}
    </div>
  )
}
