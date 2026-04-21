import { useState } from 'react'
import { motion } from 'framer-motion'

const ALT = 'Sarbasish Bera - Full Stack Developer & AI Engineer'

/**
 * Reusable profile photo component.
 * Props:
 *   size     — number (px), default 280
 *   shape    — "circle" | "angular"
 *   section  — "hero" | "about"
 */
export default function ProfilePhoto({ size = 280, shape = 'circle', section = 'hero' }) {
  const [hasError, setHasError] = useState(false)

  const isHero = section === 'hero'
  const isCircle = shape === 'circle'

  // Entrance animation
  const motionProps = isHero
    ? {
        initial: { opacity: 0, x: 60 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.7, delay: 0.4, ease: 'easeOut' },
      }
    : {
        initial: { opacity: 0, x: -30 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.6, ease: 'easeOut' },
      }

  const clipPath = !isCircle
    ? 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)'
    : undefined

  const Fallback = () => (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: isCircle ? '50%' : 0,
        clipPath: !isCircle ? clipPath : undefined,
        background: 'linear-gradient(135deg, #00f5ff, #7c3aed)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: isHero ? '4rem' : '2rem',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        color: '#fff',
        flexShrink: 0,
      }}
    >
      SB
    </div>
  )

  if (isHero) {
    // Hero: rotating gradient ring wrapper
    return (
      <motion.div {...motionProps} style={{ flexShrink: 0 }}>
        <div className="photo-ring-wrapper" style={{ '--photo-size': `${size}px` }}>
          <div className="photo-ring-spin" />
          <div className="photo-inner">
            {hasError ? (
              <Fallback />
            ) : (
              <motion.img
                src="/images/sarbasish.jpg"
                alt={ALT}
                loading="lazy"
                onError={() => setHasError(true)}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                style={{
                  width: size,
                  height: size,
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  borderRadius: '50%',
                  display: 'block',
                }}
              />
            )}
          </div>
        </div>
      </motion.div>
    )
  }

  // About: angular grayscale photo
  return (
    <motion.div
      {...motionProps}
      className="about-photo-wrapper"
      style={{ flexShrink: 0 }}
    >
      {hasError ? (
        <Fallback />
      ) : (
        <img
          src="/images/sarbasish.jpg"
          alt={ALT}
          loading="lazy"
          onError={() => setHasError(true)}
          style={{
            width: size,
            height: size,
            objectFit: 'cover',
            objectPosition: 'top center',
            clipPath,
            display: 'block',
            transition: 'filter 0.5s ease',
          }}
          className="about-photo-img"
        />
      )}
    </motion.div>
  )
}
