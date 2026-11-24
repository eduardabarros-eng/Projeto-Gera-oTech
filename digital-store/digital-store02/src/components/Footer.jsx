import Logo from './Logo.jsx'
import Information from './Information.jsx'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'

const SOCIAL = [
  { name: 'Facebook', icon: facebook, href: 'https://www.facebook.com' },
  { name: 'Instagram', icon: instagram, href: 'https://www.instagram.com' },
  { name: 'Twitter', icon: twitter, href: 'https://twitter.com' },
]

const INFO = [
  { text: 'Sobre Drip Store', link: '/about' },
  { text: 'Segurança', link: '/security' },
  { text: 'Wishlist', link: '/wishlist' },
  { text: 'Blog', link: '/blog' },
  { text: 'Trabalhe conosco', link: '/careers' },
  { text: 'Meus Pedidos', link: '/meus-pedidos' },
]

const CATEGORIES = [
  { text: 'Camisetas', link: '/produtos' },
  { text: 'Calças', link: '/produtos' },
  { text: 'Bonés', link: '/produtos' },
  { text: 'Headphones', link: '/produtos' },
  { text: 'Tênis', link: '/produtos' },
]

const CONTACT = [
  { text: 'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161' },
  { text: '(85) 3051-3411' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Logo variant="footer" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris.
            </p>
            <ul className="footer__social">
              {SOCIAL.map((item) => (
                <li key={item.name}>
                  <a href={item.href} target="_blank" rel="noreferrer" aria-label={item.name}>
                    <img src={item.icon} alt="" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <Information title="Informações" informations={INFO} />
          <Information title="Categorias" informations={CATEGORIES} />
          <Information title="Contato" informations={CONTACT} />
        </div>

        <hr />
        <p className="footer__copy">© {new Date().getFullYear()} Digital Store</p>
      </div>
    </footer>
  )
}
