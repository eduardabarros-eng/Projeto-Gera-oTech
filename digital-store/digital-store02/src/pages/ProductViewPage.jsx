import { Link, useParams } from 'react-router-dom'
import Layout from './Layout.jsx'
import ProductDetails from '../components/ProductDetails.jsx'
import Section from '../components/Section.jsx'
import ProductListing from '../components/ProductListing.jsx'
import products from '../data/products.js'

export default function ProductViewPage() {
  const { id } = useParams()
  const product = products.find((item) => String(item.id) === id)

  if (!product) {
    return (
      <Layout>
        <div className="container message-page">
          <h1>Produto não encontrado</h1>
          <p>O produto que você procura não existe ou foi removido.</p>
          <Link to="/produtos" className="button">
            Ver todos os produtos
          </Link>
        </div>
      </Layout>
    )
  }

  // Recomendados: 4 outros produtos, priorizando a mesma categoria
  const recommended = products
    .filter((item) => item.id !== product.id)
    .sort((a, b) => Number(b.category === product.category) - Number(a.category === product.category))
    .slice(0, 4)

  return (
    <Layout tinted>
      <div className="container product-page">
        <nav className="breadcrumb" aria-label="Você está aqui">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/produtos">Produtos</Link>
          <span>/</span>
          <strong>{product.name}</strong>
        </nav>

        {/* key reinicia tamanho/cor quando o usuário abre outro produto */}
        <ProductDetails key={product.id} product={product} />

        <Section title="Produtos recomendados" titleAlign="left" link={{ text: 'Ver todos', href: '/produtos' }}>
          <ProductListing products={recommended} />
        </Section>
      </div>
    </Layout>
  )
}
