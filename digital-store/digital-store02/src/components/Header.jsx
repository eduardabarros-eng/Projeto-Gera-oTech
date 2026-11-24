import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from './Logo.jsx'
import miniCart from '../assets/mini-cart.svg'

export default function Header() {
  const [term, setTerm] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const closeMenu = () => setMenuOpen(false)

  // Clique na lupa ou Enter enviam o formulário
  function handleSubmit(event) {
    event.preventDefault()
    const value = term.trim()
    navigate(value ? `/produtos?filter=${encodeURIComponent(value)}` : '/produtos')
    closeMenu()
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <button
            type="button"
            className="header__menu-btn"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <Logo />

          <form className="search" onSubmit={handleSubmit} role="search">
            <input
              type="search"
              placeholder="Pesquisar produto..."
              aria-label="Pesquisar produto"
              value={term}
              onChange={(event) => setTerm(event.target.value)}
            />
            <button type="submit" aria-label="Buscar">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </button>
          </form>

          <div className="header__actions">
            <Link to="/cadastro" className="header__signup">
              Cadastre-se
            </Link>
            <Link to="/login" className="header__signin">
              Entrar
            </Link>
            <span className="header__cart" aria-label="Carrinho de compras">
              <img src={miniCart} alt="" width="20" height="21" />
              <i className="header__cart-dot" />
            </span>
          </div>
        </div>

        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Navegação principal">
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/produtos" end onClick={closeMenu}>Produtos</NavLink>
          <NavLink to="/categorias" onClick={closeMenu}>Categorias</NavLink>
          <NavLink to="/meus-pedidos" onClick={closeMenu}>Meus Pedidos</NavLink>
          {/* Visíveis só no menu mobile */}
          <Link to="/cadastro" className="nav__mobile-only" onClick={closeMenu}>Cadastre-se</Link>
          <Link to="/login" className="nav__mobile-only nav__mobile-only--button" onClick={closeMenu}>Entrar</Link>
        </nav>
      </div>
    </header>
  )
}
