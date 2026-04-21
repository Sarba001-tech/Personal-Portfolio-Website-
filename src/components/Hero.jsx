import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import ProfilePhoto from './ProfilePhoto'

const roles = [
  'Full Stack Developer',
  'AI/ML Engineer',
  'Startup Founder',
  'Problem Solver',
]

function Typewriter({ texts }) {
  const [displayed, setDisplayed] = useState('')
  const [textIdx, setTextIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) {
      const t = setTimeout(() => setPaused(false), 1500)
      return () => clearTimeout(t)
    }
    const current = texts[textIdx]
    const speed = deleting ? 40 : 80
    const t = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, charIdx + 1))
        setCharIdx(c => c + 1)
        if (charIdx + 1 === current.length) { setPaused(true); setDeleting(true) }
      } else {
        setDisplayed(current.slice(0, charIdx - 1))
        setCharIdx(c => c - 1)
        if (charIdx - 1 === 0) { setDeleting(false); setTextIdx(i => (i + 1) % texts.length) }
      }
    }, speed)
    return () => clearTimeout(t)
  }, [charIdx, deleting, paused, textIdx, texts])

  return (
    <span>
      <span style={{ color: 'var(--color-cyan)', fontFamily: 'var(--font-mono)' }}>{displayed}</span>
      <span className="typewriter-cursor" />
    </span>
  )
}

// Canvas particle grid
function ParticleCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId, particles = []
    const CYAN = 'rgba(0,245,255,'

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    function init() {
      particles = []
      const cols = Math.floor(canvas.width / 80)
      const rows = Math.floor(canvas.height / 80)
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          particles.push({
            x: (i / cols) * canvas.width + Math.random() * 40,
            y: (j / rows) * canvas.height + Math.random() * 40,
            alpha: Math.random() * 0.4 + 0.05,
            speed: Math.random() * 0.5 + 0.1,
            dir: Math.random() * Math.PI * 2,
            size: Math.random() * 1.5 + 0.5,
          })
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += Math.cos(p.dir) * p.speed * 0.3
        p.y += Math.sin(p.dir) * p.speed * 0.3
        p.alpha += Math.sin(Date.now() * 0.001 + p.x) * 0.01
        p.alpha = Math.max(0.02, Math.min(0.5, p.alpha))
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = CYAN + p.alpha + ')'
        ctx.fill()
      })
      particles.forEach((p1, i) => {
        particles.slice(i + 1, i + 5).forEach(p2 => {
          const dx = p1.x - p2.x, dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = CYAN + 0.06 * (1 - dist / 120) + ')'
            ctx.lineWidth = 0.5; ctx.stroke()
          }
        })
      })
      animId = requestAnimationFrame(draw)
    }

    resize(); draw()
    window.addEventListener('resize', resize)
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(animId) }
  }, [])

  return (
    <canvas ref={canvasRef} style={{
      position: 'absolute', inset: 0, zIndex: 0,
      pointerEvents: 'none', opacity: 0.7,
    }} />
  )
}

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '80px 1.5rem 2rem',
    }}>
      <ParticleCanvas />

      {/* Radial glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,245,255,0.04) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* 50/50 Split container */}
      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: '1200px', width: '100%', margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '3rem',
        flexWrap: 'wrap',
      }}>

        {/* LEFT — Text content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          style={{ flex: '1 1 320px', minWidth: 0 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
              color: 'var(--color-cyan)', letterSpacing: '0.25em',
              textTransform: 'uppercase', marginBottom: '1.25rem',
            }}
          >
            // Hello, World
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 800, lineHeight: 1.05,
              marginBottom: '1rem', letterSpacing: '-0.01em',
            }}
          >
            Hi, I'm{' '}
            <span style={{
              color: 'var(--color-cyan)',
              textShadow: '0 0 30px rgba(0,245,255,0.5), 0 0 60px rgba(0,245,255,0.2)',
            }}>
              Sarbasish Bera
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{
              fontSize: 'clamp(0.95rem, 2.5vw, 1.3rem)',
              marginBottom: '2.5rem',
              minHeight: '2rem',
              display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap',
            }}
          >
            <span style={{ color: 'var(--color-text-dim)' }}>I am a </span>
            <Typewriter texts={roles} />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            style={{
              display: 'flex', gap: '1rem',
              flexWrap: 'wrap', marginBottom: '2.5rem',
            }}
          >
            <a href="#projects" className="btn-primary"
              onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
              View My Work
            </a>
            <a href="/sarbasish_cv.pdf" download className="btn-secondary">
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            style={{ display: 'flex', gap: '1rem' }}
          >
            <a href="https://github.com/Sarba001-tech" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/sarbasish-bera-922bb5371" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="mailto:sarbasishbera12@gmail.com" className="social-link" aria-label="Email"><FiMail /></a>
          </motion.div>
        </motion.div>

        {/* RIGHT — Photo */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: '0 1 auto',
        }}>
          <ProfilePhoto size={280} shape="circle" section="hero" />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{
          position: 'absolute', bottom: '2rem',
          left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '0.5rem',
          color: 'var(--color-text-muted)',
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.2em' }}>SCROLL</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <FiArrowDown size={14} />
        </motion.div>
      </motion.div>

      {/* Mobile responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          #home > div > div:last-child { order: -1; }
          #home > div { justify-content: center; padding-top: 1rem; }
          #home > div > motion.div, #home > div > div { flex-basis: 100% !important; text-align: center; align-items: center; }
        }
      `}</style>
    </section>
  )
}
