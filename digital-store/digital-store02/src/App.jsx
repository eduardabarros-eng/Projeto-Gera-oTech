import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ProductListingPage from './pages/ProductListingPage.jsx'
import ProductViewPage from './pages/ProductViewPage.jsx'
import UnderConstructionPage from './pages/UnderConstructionPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

// Páginas que existem no menu/rodapé mas não fazem parte do escopo do projeto
const PLACEHOLDER_PAGES = [
  { path: '/categorias', title: 'Categorias' },
  { path: '/meus-pedidos', title: 'Meus Pedidos' },
  { path: '/login', title: 'Entrar' },
  { path: '/cadastro', title: 'Cadastre-se' },
  { path: '/about', title: 'Sobre Drip Store' },
  { path: '/security', title: 'Segurança' },
  { path: '/wishlist', title: 'Wishlist' },
  { path: '/blog', title: 'Blog' },
  { path: '/careers', title: 'Trabalhe conosco' },
]

// O enunciado cita a rota /products para a busca; mantemos /produtos como rota oficial.
function RedirectToProducts() {
  const { search } = useLocation()
  return <Navigate to={`/produtos${search}`} replace />
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/produtos" element={<ProductListingPage />} />
      <Route path="/products" element={<RedirectToProducts />} />
      <Route path="/product/:id" element={<ProductViewPage />} />
      {PLACEHOLDER_PAGES.map(({ path, title }) => (
        <Route key={path} path={path} element={<UnderConstructionPage title={title} />} />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
