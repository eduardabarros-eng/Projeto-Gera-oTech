import { Link } from 'react-router-dom'
import logoHeader from '../assets/logo-header.svg'
import logoFooter from '../assets/logo-footer.svg'

// variant: "header" (logo colorida) ou "footer" (logo branca)
export default function Logo({ variant = 'header' }) {
  const src = variant === 'footer' ? logoFooter : logoHeader

  return (
    <Link to="/" className="logo" aria-label="Digital Store - página inicial">
      <img src={src} alt="Digital Store" width="253" height="44" />
    </Link>
  )
}
