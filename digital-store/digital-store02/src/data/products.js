/*
 * Dados dos produtos (mock).
 *
 * As imagens ficam em /public:
 *  - image:  miniatura usada nos cards (product-thumb-N.jpeg, 292x321)
 *  - images: fotos da galeria da página do produto (product-image-N.jpeg, 700x570)
 *
 * price          = preço original
 * priceDiscount  = preço com desconto (null quando não há desconto)
 * stars/rating   = nota e quantidade de avaliações
 */

export const FILTER_OPTIONS = {
  brand: ['Adidas', 'Calçados Bold', 'K-Swiss', 'Nike', 'Puma'],
  category: ['Esporte e lazer', 'Casual', 'Utilitário', 'Corrida'],
  gender: ['Masculino', 'Feminino', 'Unisex'],
  state: ['Novo', 'Usado'],
}

const GALLERY = [1, 2, 3, 4, 5].map((n) => ({ src: `/product-image-${n}.jpeg` }))
const SIZES = ['39', '40', '41', '42', '43']
const COLORS = ['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7']

const DESCRIPTION =
  'Tênis com cabedal macio e solado de borracha com ótima aderência. Palmilha anatômica que garante conforto o dia inteiro, com design que combina com qualquer look.'

function build(id, thumb, data) {
  return {
    id,
    image: `/product-thumb-${thumb}.jpeg`,
    images: GALLERY,
    sizes: SIZES,
    colors: COLORS,
    description: DESCRIPTION,
    reference: `3841${6000 + id}`,
    ...data,
  }
}

const products = [
  build(1, 1, { name: 'Tênis Nike Air Jordan 1 Mid', brand: 'Nike', category: 'Esporte e lazer', gender: 'Unisex', state: 'Novo', price: 899.9, priceDiscount: 749.9, stars: 4.8, rating: 132 }),
  build(2, 2, { name: 'Tênis Nike Air Jordan 1 High OG', brand: 'Nike', category: 'Esporte e lazer', gender: 'Masculino', state: 'Novo', price: 1199.9, priceDiscount: null, stars: 4.9, rating: 210 }),
  build(3, 3, { name: 'Tênis K-Swiss V8 - Masculino', brand: 'K-Swiss', category: 'Casual', gender: 'Masculino', state: 'Novo', price: 200, priceDiscount: 149.9, stars: 4.7, rating: 90 }),
  build(4, 4, { name: 'Tênis Bold Urban Teal', brand: 'Calçados Bold', category: 'Corrida', gender: 'Unisex', state: 'Usado', price: 349.9, priceDiscount: 279.9, stars: 4.4, rating: 41 }),
  build(5, 5, { name: 'Tênis Nike SuperRep Go', brand: 'Nike', category: 'Esporte e lazer', gender: 'Masculino', state: 'Novo', price: 599.9, priceDiscount: 499.9, stars: 4.6, rating: 78 }),
  build(6, 3, { name: 'Tênis Puma Street Brown - Feminino', brand: 'Puma', category: 'Casual', gender: 'Feminino', state: 'Novo', price: 289.9, priceDiscount: null, stars: 4.3, rating: 57 }),
  build(7, 4, { name: 'Tênis Adidas Urban Teal - Feminino', brand: 'Adidas', category: 'Casual', gender: 'Feminino', state: 'Novo', price: 399.9, priceDiscount: 329.9, stars: 4.5, rating: 64 }),
  build(8, 1, { name: 'Tênis Nike Air Jordan 1 Mid SE - Feminino', brand: 'Nike', category: 'Esporte e lazer', gender: 'Feminino', state: 'Novo', price: 949.9, priceDiscount: null, stars: 4.8, rating: 98 }),
  build(9, 5, { name: 'Tênis Puma Runner Pro', brand: 'Puma', category: 'Corrida', gender: 'Unisex', state: 'Novo', price: 459.9, priceDiscount: 389.9, stars: 4.2, rating: 36 }),
  build(10, 3, { name: 'Tênis K-Swiss Classic 88', brand: 'K-Swiss', category: 'Casual', gender: 'Unisex', state: 'Usado', price: 249.9, priceDiscount: null, stars: 4.1, rating: 22 }),
  build(11, 4, { name: 'Tênis Bold Trabalho Pro', brand: 'Calçados Bold', category: 'Utilitário', gender: 'Masculino', state: 'Usado', price: 199.9, priceDiscount: 159.9, stars: 4.0, rating: 15 }),
  build(12, 5, { name: 'Tênis Adidas Ultra Run', brand: 'Adidas', category: 'Corrida', gender: 'Masculino', state: 'Novo', price: 699.9, priceDiscount: 549.9, stars: 4.7, rating: 143 }),
]

export default products
