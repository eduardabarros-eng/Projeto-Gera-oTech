# Digital Store

Projeto final de Front-end (Digital College): e-commerce da **Drip Store** feito em **React**, seguindo a documentação e o layout do [repositório base](https://github.com/digitalcollegebr/projeto-digital-store).

**Integrantes:** _[Seu nome]_ (inclua aqui o nome de todos da equipe)

## Páginas

| Rota | Página | O que tem |
|------|--------|-----------|
| `/` | Home | Galeria de imagens com setas, coleções em destaque e 8 produtos em alta |
| `/produtos` | Listagem de produtos | Ordenação por preço, filtros (marca, categoria, gênero, estado), busca e contagem de resultados |
| `/product/:id` | Visualização do produto | Galeria com miniaturas, buy box (preço, descrição, tamanho, cor, botão comprar) e produtos recomendados |

Links do menu e do rodapé que não fazem parte do escopo (Categorias, Meus Pedidos, Entrar, Cadastre-se etc.) levam a uma página "em construção".

A busca do cabeçalho redireciona para `/produtos?filter=termo`. A rota `/products` também funciona e redireciona para `/produtos`.

## Tecnologias

- React 18 + Vite
- React Router DOM 6
- CSS puro (cores oficiais definidas como variáveis em `src/styles/global.css`)

## Como rodar

Pré-requisito: Node.js 18 ou superior.

```bash
npm install
npm run dev      # abre em http://projeto-digitalstore.netlify.app
npm run build    # gera a versão de produção em /dist
npm run preview  # testa a versão de produção
```

## Estrutura

```
src/
├── assets/        # logos, ícones e redes sociais (SVG)
├── components/    # Logo, Header, Footer, Information, Section, ProductCard,
│                  # ProductListing, Gallery, FilterGroup, ProductOptions,
│                  # BuyBox, ProductDetails
├── pages/         # Layout, HomePage, ProductListingPage, ProductViewPage,
│                  # UnderConstructionPage, NotFoundPage
├── data/          # products.js (produtos e opções de filtro)
├── utils/         # format.js (preço em R$ e cálculo de desconto)
└── styles/        # global.css, components.css, pages.css
public/            # imagens dos slides, coleções e produtos
```

## Como personalizar

- **Cores:** variáveis no topo de `src/styles/global.css`.
- **Produtos:** `src/data/products.js` (nome, preços, marca, categoria, tamanhos, cores).
- **Slides da home:** lista `SLIDES` em `src/pages/HomePage.jsx` (imagens em `public/`).

## Deploy

O projeto inclui `vercel.json` e `public/_redirects` para as rotas funcionarem na Vercel e na Netlify (build `npm run build`, saída `dist`).
