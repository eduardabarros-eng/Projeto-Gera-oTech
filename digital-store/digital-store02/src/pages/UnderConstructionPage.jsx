import { Link } from 'react-router-dom'
import Layout from './Layout.jsx'

// Página provisória para links do menu/rodapé que não fazem parte do escopo do projeto
export default function UnderConstructionPage({ title }) {
  return (
    <Layout>
      <div className="container message-page">
        <h1>{title}</h1>
        <p>Esta página ainda está em construção.</p>
        <Link to="/" className="button">
          Voltar para a Home
        </Link>
      </div>
    </Layout>
  )
}
