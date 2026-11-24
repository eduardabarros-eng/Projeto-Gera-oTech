import { useState } from 'react'
import arrowLeft from '../assets/arrow-left.svg'
import arrowRight from '../assets/arrow-right.svg'

const toNumber = (value) => (value === undefined ? undefined : parseInt(value, 10))

/*
 * Galeria de imagens com setas e miniaturas opcionais.
 *  - images:     [{ src: '/imagem.jpeg' }, ...]
 *  - width/height: tamanho do slide em px (ex.: "1440px"); a galeria encolhe em telas menores
 *  - radius:     arredondamento das bordas (ex.: "4px"), também aplicado às miniaturas
 *  - showThumbs: mostra as miniaturas (117x95) abaixo do slide
 *  - className:  classe extra no elemento pai
 */
export default function Gallery({ images, className = '', width, height, radius = '0px', showThumbs = false }) {
  const [current, setCurrent] = useState(0)

  const w = toNumber(width)
  const h = toNumber(height)
  const lastIndex = images.length - 1

  const goPrev = () => setCurrent((index) => Math.max(index - 1, 0))
  const goNext = () => setCurrent((index) => Math.min(index + 1, lastIndex))

  return (
    <div className={`gallery ${className}`} style={{ maxWidth: w ? `${w}px` : undefined }}>
      <div
        className="gallery__slider"
        style={{ aspectRatio: w && h ? `${w} / ${h}` : undefined, borderRadius: radius }}
      >
        <div className="gallery__track" style={{ transform: `translateX(-${current * 100}%)` }}>
          {images.map((image, index) => (
            <div className="gallery__slide" key={image.src} aria-hidden={index !== current}>
              <img src={image.src} alt={image.alt ?? `Imagem ${index + 1} de ${images.length}`} />
            </div>
          ))}
        </div>

        <button
          type="button"
          className="gallery__arrow gallery__arrow--left"
          onClick={goPrev}
          disabled={current === 0}
          aria-label="Imagem anterior"
        >
          <img src={arrowLeft} alt="" />
        </button>

        <button
          type="button"
          className="gallery__arrow gallery__arrow--right"
          onClick={goNext}
          disabled={current === lastIndex}
          aria-label="Próxima imagem"
        >
          <img src={arrowRight} alt="" />
        </button>
      </div>

      {showThumbs && (
        <ul className="gallery__thumbs">
          {images.map((image, index) => (
            <li key={image.src}>
              <button
                type="button"
                className={index === current ? 'is-selected' : ''}
                style={{ borderRadius: radius }}
                aria-label={`Ver imagem ${index + 1}`}
                aria-current={index === current}
                onClick={() => setCurrent(index)}
              >
                <img src={image.src} alt="" style={{ borderRadius: radius }} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
