import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

// Layout compartilhado: cabeçalho + conteúdo da página (children) + rodapé
export default function Layout({ children, tinted = false }) {
  const { pathname } = useLocation()

  // Ao trocar de página, volta ao topo
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="layout">
      <Header />
      <main className={tinted ? 'main--tinted' : undefined}>{children}</main>
      <Footer />
    </div>
  )
}
