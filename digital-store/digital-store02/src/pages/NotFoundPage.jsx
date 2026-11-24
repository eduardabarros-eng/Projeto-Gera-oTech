import { Link } from 'react-router-dom'
import Layout from './Layout.jsx'

export default function NotFoundPage() {
  return (
    <Layout>
      <div className="container message-page">
        <h1>Página não encontrada</h1>
        <p>O endereço que você acessou não existe.</p>
        <Link to="/" className="button">
          Voltar para a Home
        </Link>
      </div>
    </Layout>
  )
}
