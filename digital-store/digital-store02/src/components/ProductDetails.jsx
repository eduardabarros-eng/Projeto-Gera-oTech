import { useState } from 'react'
import Gallery from './Gallery.jsx'
import BuyBox from './BuyBox.jsx'
import ProductOptions from './ProductOptions.jsx'

/*
 * Parte de cima da página de produto: galeria ao lado do buy box.
 * Mantém o tamanho e a cor escolhidos; exige tamanho para "comprar".
 */
export default function ProductDetails({ product }) {
  const [size, setSize] = useState(null)
  const [color, setColor] = useState(null)
  const [feedback, setFeedback] = useState(null)

  function handleBuy() {
    if (!size || !color) {
      setFeedback({ type: 'error', text: 'Escolha um tamanho e uma cor antes de comprar.' })
      return
    }
    setFeedback({ type: 'success', text: 'Produto adicionado ao carrinho!' })
  }

  return (
    <div className="product-details">
      <Gallery images={product.images} width="700px" height="570px" radius="4px" showThumbs />

      <BuyBox
        name={product.name}
        reference={product.reference}
        stars={product.stars}
        rating={product.rating}
        price={product.price}
        priceDiscount={product.priceDiscount}
        description={product.description}
        onBuy={handleBuy}
        feedback={feedback}
      >
        <div className="buybox__options">
          <h2>Tamanho</h2>
          <ProductOptions
            options={product.sizes}
            shape="square"
            radius="4px"
            type="text"
            value={size}
            onChange={(option) => {
              setSize(option)
              setFeedback(null)
            }}
          />
        </div>

        <div className="buybox__options">
          <h2>Cor</h2>
          <ProductOptions
            options={product.colors}
            shape="circle"
            type="color"
            value={color}
            onChange={(option) => {
              setColor(option)
              setFeedback(null)
            }}
          />
        </div>
      </BuyBox>
    </div>
  )
}
