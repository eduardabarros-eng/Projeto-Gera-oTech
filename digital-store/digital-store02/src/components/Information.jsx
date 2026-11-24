import { Link } from 'react-router-dom'

/*
 * Bloco de informações do rodapé.
 * informations: [{ text: 'Sobre Drip Store', link: '/about' }, ...]
 * Itens sem `link` são renderizados como texto simples (ex.: endereço).
 */
export default function Information({ title, informations }) {
  return (
    <div className="information">
      <h3>{title}</h3>
      <ul>
        {informations.map((item) => (
          <li key={item.text}>{item.link ? <Link to={item.link}>{item.text}</Link> : item.text}</li>
        ))}
      </ul>
    </div>
  )
}
