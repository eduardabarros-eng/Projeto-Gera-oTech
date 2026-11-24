import ProductCard from './ProductCard.jsx'

/*
 * Lista de produtos em grade.
 *  - products: [{ id, name, image, price, priceDiscount, category }]
 *  - columns:  colunas no desktop (padrão 4); no mobile a grade se adapta sozinha
 */
export default function ProductListing({ products, columns = 4 }) {
  return (
    <div className="product-listing" style={{ '--cols': columns }}>
      {products.map((product) => (
        <ProductCard
          key={product.id ?? product.name}
          id={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          priceDiscount={product.priceDiscount}
          category={product.category}
        />
      ))}
    </div>
  )
}
