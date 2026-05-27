import { useState } from 'react'
import { Link } from 'react-router-dom'

const CardReticle = () => (
  <svg
    viewBox="0 0 100 100"
    className="io-card-reticle"
    aria-hidden
  >
    <circle cx="50" cy="50" r="38" strokeDasharray="3 3" />
    <circle cx="50" cy="50" r="16" />
    <line x1="50" y1="0" x2="50" y2="100" />
    <line x1="0" y1="50" x2="100" y2="50" />
  </svg>
)

const IntelCard = ({ subtitle, title, description, image, button, href, external }) => {
  const [hovered, setHovered] = useState(false)

  const inner = (
    <>
      <span className="io-card-corner io-card-corner-tl" aria-hidden />
      <span className="io-card-corner io-card-corner-tr" aria-hidden />
      <span className="io-card-corner io-card-corner-bl" aria-hidden />
      <span className="io-card-corner io-card-corner-br" aria-hidden />

      <div className="io-card-head">
        <p className="io-card-subtitle font-display">{subtitle}</p>
        <h3 className="io-card-title font-display">{title}</h3>
      </div>

      <div className="io-card-media">
        <div className="io-card-media-grid" aria-hidden />
        <div className="io-card-laser" aria-hidden />
        <CardReticle />
        <span className="io-card-media-corner io-card-media-corner-tl" aria-hidden />
        <span className="io-card-media-corner io-card-media-corner-tr" aria-hidden />
        <span className="io-card-media-corner io-card-media-corner-bl" aria-hidden />
        <span className="io-card-media-corner io-card-media-corner-br" aria-hidden />
        <span className="io-card-target font-display">
          <span className="io-card-target-dot" aria-hidden />
          TARGET ACTIVE
        </span>
        <img src={image} alt="" />
        <span className="io-card-ping" aria-hidden />
      </div>

      <p className="io-card-desc">{description}</p>

      <span className="io-card-btn font-display">
        <span>{button}</span>
      </span>
    </>
  )

  const className = `io-card interactive-ready${hovered ? ' is-hovered' : ''}`

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {inner}
      </a>
    )
  }

  return (
    <Link
      to={href}
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {inner}
    </Link>
  )
}

export default IntelCard
