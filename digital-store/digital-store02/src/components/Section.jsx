import { Link } from 'react-router-dom'

/*
 * Seção com título e link opcional.
 *  - title:      texto do título
 *  - titleAlign: "left" (padrão) ou "center"
 *  - link:       { text: 'Ver todos', href: '/produtos' }
 *  - children:   conteúdo da seção
 */
export default function Section({ title, titleAlign = 'left', link, children }) {
  const isExternal = link && /^https?:\/\//.test(link.href)

  return (
    <section className="section">
      <header className={`section__header section__header--${titleAlign}`}>
        <h2>{title}</h2>
        {link &&
          (isExternal ? (
            <a href={link.href} className="section__link">
              {link.text}
            </a>
          ) : (
            <Link to={link.href} className="section__link">
              {link.text}
            </Link>
          ))}
      </header>
      {children}
    </section>
  )
}
