const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export const formatPrice = (value) => currency.format(value)

// Preço que o cliente realmente paga (com desconto, se houver)
export const finalPrice = (product) => product.priceDiscount ?? product.price

// Percentual de desconto arredondado (0 quando não há desconto)
export const discountPercent = (price, priceDiscount) =>
  priceDiscount ? Math.round((1 - priceDiscount / price) * 100) : 0
