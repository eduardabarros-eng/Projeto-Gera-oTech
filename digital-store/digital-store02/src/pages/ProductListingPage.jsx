import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Layout from './Layout.jsx'
import FilterGroup from '../components/FilterGroup.jsx'
import Section from '../components/Section.jsx'
import ProductListing from '../components/ProductListing.jsx'
import products, { FILTER_OPTIONS } from '../data/products.js'
import { finalPrice } from '../utils/format.js'

const EMPTY_FILTERS = { brand: [], category: [], gender: [], state: [] }

// Cada grupo: chave do produto, título exibido e tipo de campo
const FILTER_GROUPS = [
  { key: 'brand', title: 'Marca', inputType: 'checkbox' },
  { key: 'category', title: 'Categoria', inputType: 'checkbox' },
  { key: 'gender', title: 'Gênero', inputType: 'checkbox' },
  { key: 'state', title: 'Estado', inputType: 'radio' },
]

const SORTERS = {
  asc: (a, b) => finalPrice(a) - finalPrice(b),
  desc: (a, b) => finalPrice(b) - finalPrice(a),
}

export default function ProductListingPage() {
  const [params] = useSearchParams()
  const term = (params.get('filter') ?? '').trim()

  const [filters, setFilters] = useState(EMPTY_FILTERS)
  const [sort, setSort] = useState('asc')
  const [filtersOpen, setFiltersOpen] = useState(false)

  function handleChange(group, inputType, value) {
    setFilters((current) => {
      if (inputType === 'radio') return { ...current, [group]: [value] }

      const list = current[group]
      return {
        ...current,
        [group]: list.includes(value) ? list.filter((item) => item !== value) : [...list, value],
      }
    })
  }

  const visible = useMemo(() => {
    const search = term.toLowerCase()

    return products
      .filter((product) => {
        if (search && !`${product.name} ${product.brand}`.toLowerCase().includes(search)) return false
        return Object.entries(filters).every(
          ([key, values]) => values.length === 0 || values.includes(product[key]),
        )
      })
      .sort(SORTERS[sort])
  }, [term, filters, sort])

  const hasFilters = Object.values(filters).some((values) => values.length > 0)
  const total = `${visible.length} ${visible.length === 1 ? 'produto' : 'produtos'}`
  const title = term ? `Resultados para “${term}” - ${total}` : total

  return (
    <Layout tinted>
      <div className="container listing-page">
        <button
          type="button"
          className="listing-page__toggle"
          aria-expanded={filtersOpen}
          onClick={() => setFiltersOpen((open) => !open)}
        >
          {filtersOpen ? 'Ocultar filtros' : 'Ordenar e filtrar'}
        </button>

        <aside className={`sidebar ${filtersOpen ? 'sidebar--open' : ''}`}>
          <label className="sort">
            <span>Ordenar por</span>
            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              <option value="asc">Menor preço</option>
              <option value="desc">Maior preço</option>
            </select>
          </label>

          <div className="filters">
            <div className="filters__head">
              <h2>Filtrar por</h2>
              {hasFilters && (
                <button type="button" onClick={() => setFilters(EMPTY_FILTERS)}>
                  Limpar
                </button>
              )}
            </div>
            <hr />

            {FILTER_GROUPS.map((group) => (
              <FilterGroup
                key={group.key}
                title={group.title}
                inputType={group.inputType}
                name={group.key}
                options={FILTER_OPTIONS[group.key].map((text) => ({ text, value: text }))}
                selected={filters[group.key]}
                onChange={(value) => handleChange(group.key, group.inputType, value)}
              />
            ))}
          </div>
        </aside>

        <div className="listing-page__content">
          <Section title={title} titleAlign="left">
            {visible.length > 0 ? (
              <ProductListing products={visible} columns={3} />
            ) : (
              <p className="empty-text">Nenhum produto encontrado. Tente mudar os filtros ou a busca.</p>
            )}
          </Section>
        </div>
      </div>
    </Layout>
  )
}
