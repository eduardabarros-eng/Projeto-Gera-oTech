import { useState } from 'react'

/*
 * Opções do produto (tamanhos ou cores).
 *  - options: ["39", "40"] ou ["#000", "#f00"]
 *  - shape:   "square" (caixa, usa radius) ou "circle" (31x31)
 *  - type:    "text" (mostra o valor) ou "color" (usa o valor como cor de fundo)
 *  - radius:  border-radius das caixas quando shape = "square"
 *  - value / onChange: opcionais; sem eles o componente guarda a seleção sozinho
 */
export default function ProductOptions({ options, shape = 'square', type = 'text', radius = '0px', value, onChange }) {
  const [internal, setInternal] = useState(null)
  const isControlled = value !== undefined
  const selected = isControlled ? value : internal

  function handleSelect(option) {
    if (!isControlled) setInternal(option)
    onChange?.(option)
  }

  return (
    <div className="product-options">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={`option option--${shape} option--${type} ${selected === option ? 'is-selected' : ''}`}
          style={{
            borderRadius: shape === 'circle' ? '50%' : radius,
            backgroundColor: type === 'color' ? option : undefined,
          }}
          aria-pressed={selected === option}
          aria-label={type === 'color' ? `Cor ${option}` : `Tamanho ${option}`}
          onClick={() => handleSelect(option)}
        >
          {type === 'text' ? option : null}
        </button>
      ))}
    </div>
  )
}
