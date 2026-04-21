import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCode, FiAward, FiPackage, FiBriefcase } from 'react-icons/fi'
import ProfilePhoto from './ProfilePhoto'

const stats = [
  { icon: <FiPackage />, value: '2+', label: 'Projects' },
  { icon: <FiAward />, value: '5+', label: 'Certifications' },
  { icon: <FiBriefcase />, value: '1', label: 'Startup' },
  { icon: <FiCode />, value: '2', label: 'Internships' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" style={{ padding: '6rem 0' }}>
      <div className="section-container" ref={ref}>
        {/* Section header */}
        <motion.p
          className="section-label"
          variants={fadeUp} custom={0}
          initial="hidden" animate={inView ? 'visible' : 'hidden'}
          style={{ marginBottom: '0.75rem' }}
        >
          About
        </motion.p>
        <motion.h2
          className="section-title"
          variants={fadeUp} custom={1}
          initial="hidden" animate={inView ? 'visible' : 'hidden'}
          style={{ marginBottom: '4rem' }}
        >
          Who Am <span>I</span>
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}>
          {/* Left — Bio */}
          <motion.div
            variants={fadeUp} custom={2}
            initial="hidden" animate={inView ? 'visible' : 'hidden'}
          >
            {/* Angular profile photo */}
            <div style={{ marginBottom: '1.75rem' }}>
              <ProfilePhoto size={180} shape="angular" section="about" />
            </div>

            {/* Code-style name block */}
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--color-text-muted)',
              marginBottom: '1.5rem',
              lineHeight: 2,
              padding: '1.25rem',
              background: 'rgba(0,245,255,0.02)',
              border: '1px solid rgba(0,245,255,0.08)',
            }}>
              <p><span style={{ color: 'var(--color-violet)' }}>const</span>{' '}
                <span style={{ color: 'var(--color-cyan)' }}>developer</span> = {'{'}</p>
              <p style={{ paddingLeft: '1.5rem' }}>
                name: <span style={{ color: '#a8ff78' }}>"Sarbasish Bera"</span>,
              </p>
              <p style={{ paddingLeft: '1.5rem' }}>
                degree: <span style={{ color: '#a8ff78' }}>"B.Tech CS/AI-ML"</span>,
              </p>
              <p style={{ paddingLeft: '1.5rem' }}>
                year: <span style={{ color: '#f9a825' }}>3</span>,
              </p>
              <p style={{ paddingLeft: '1.5rem' }}>
                college: <span style={{ color: '#a8ff78' }}>"HIT"</span>,
              </p>
              <p style={{ paddingLeft: '1.5rem' }}>
                role: <span style={{ color: '#a8ff78' }}>"Founder @ Rent Villas"</span>
              </p>
              <p>{'}'}</p>
            </div>

            <p style={{
              color: 'var(--color-text-dim)',
              fontSize: '1rem',
              lineHeight: 1.8,
              marginBottom: '1.5rem',
            }}>
              3rd-year B.Tech CS/AI-ML student at{' '}
              <span style={{ color: 'var(--color-text)' }}>Haldia Institute of Technology</span>.
              I build AI-powered systems, full-stack web apps, and real-world startups.
              Currently building{' '}
              <span style={{ color: 'var(--color-cyan)' }}>Rent Villas</span>{' '}
              — a zero-commission rental platform for West Bengal.
            </p>

            <p style={{
              color: 'var(--color-text-dim)',
              fontSize: '0.95rem',
              lineHeight: 1.7,
            }}>
              I'm passionate about bridging the gap between cutting-edge AI research and
              real-world impact — whether that's through semantic search systems, voice automation,
              or scalable SaaS products.
            </p>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            variants={fadeUp} custom={3}
            initial="hidden" animate={inView ? 'visible' : 'hidden'}
          >
            {/* Stats floating card */}
            <div className="glass-card" style={{
              padding: '2rem',
              marginBottom: '2rem',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem',
            }}>
              {stats.map(({ icon, value, label }) => (
                <div key={label} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1.25rem',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(0,245,255,0.08)',
                  textAlign: 'center',
                }}>
                  <span style={{ color: 'var(--color-cyan)', fontSize: '1.3rem' }}>{icon}</span>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: 'var(--color-cyan)',
                    lineHeight: 1,
                  }}>{value}</span>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--color-text-muted)',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}>{label}</span>
                </div>
              ))}
            </div>

            {/* Location chip */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.875rem 1.25rem',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(0,245,255,0.08)',
              marginBottom: '1rem',
            }}>
              <span style={{ color: 'var(--color-cyan)', fontSize: '0.9rem' }}>📍</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-text-dim)' }}>
                Haldia, West Bengal, India
              </span>
            </div>

            {/* Status chip */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.875rem 1.25rem',
              background: 'rgba(0,245,255,0.03)',
              border: '1px solid rgba(0,245,255,0.12)',
            }}>
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: 'var(--color-cyan)',
                  boxShadow: '0 0 8px var(--color-cyan)',
                  flexShrink: 0,
                }}
              />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-text-dim)' }}>
                Open to internships & collaborations
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
