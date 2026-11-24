/*
 * Grupo de filtros (checkbox ou radio).
 *  - title:     título do grupo
 *  - inputType: "checkbox" ou "radio"
 *  - options:   [{ text: 'Nike', value: 'Nike' }] (value é opcional; usa o text se faltar)
 *  - name:      nome do campo (necessário para radio)
 *  - selected:  valores marcados no momento
 *  - onChange:  função chamada com o value da opção clicada
 */
export default function FilterGroup({ title, inputType = 'checkbox', options, name, selected = [], onChange }) {
  return (
    <fieldset className="filter-group">
      <legend>{title}</legend>
      {options.map((option) => {
        const value = option.value ?? option.text

        return (
          <label key={value} className="filter-group__option">
            <input
              type={inputType}
              name={name ?? title}
              value={value}
              checked={selected.includes(value)}
              onChange={() => onChange?.(value)}
            />
            <span>{option.text}</span>
          </label>
        )
      })}
    </fieldset>
  )
}
