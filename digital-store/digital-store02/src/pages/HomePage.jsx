import Layout from './Layout.jsx'
import Gallery from '../components/Gallery.jsx'
import Section from '../components/Section.jsx'
import ProductListing from '../components/ProductListing.jsx'
import products from '../data/products.js'

const SLIDES = Array.from({ length: 8 }, (_, index) => ({
  src: `/home-slide-${index + 1}.jpeg`,
  alt: `Destaque ${index + 1}`,
}))

const COLLECTIONS = [
  { src: '/collection-1.png', alt: 'Coleção Novo drop Supreme' },
  { src: '/collection-2.png', alt: 'Coleção Adidas' },
  { src: '/collection-3.png', alt: 'Coleção Beats Bass' },
]

export default function HomePage() {
  return (
    <Layout>
      <Gallery images={SLIDES} width="1440px" height="681px" className="home-gallery" />

      <div className="container">
        <Section title="Coleções em destaque" titleAlign="center">
          <div className="collections">
            {COLLECTIONS.map((collection) => (
              <img key={collection.src} src={collection.src} alt={collection.alt} />
            ))}
          </div>
        </Section>

        <Section title="Produtos em alta" titleAlign="left" link={{ text: 'Ver todos', href: '/produtos' }}>
          <ProductListing products={products.slice(0, 8)} />
        </Section>
      </div>
    </Layout>
  )
}
