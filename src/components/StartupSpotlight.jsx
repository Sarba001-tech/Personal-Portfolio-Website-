import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const tags = ['React Native', 'PostgreSQL', 'Razorpay', 'Socket.io', 'Prisma', 'West Bengal', 'Node.js', 'Cloudinary']

export default function StartupSpotlight() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="startup" style={{ padding: '6rem 0' }}>
      <div className="section-container" ref={ref}>
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ marginBottom: '0.75rem' }}
        >
          Startup
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{ marginBottom: '2.5rem' }}
        >
          Currently <span>Building</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div
            className="startup-card"
            style={{ padding: 'clamp(2rem, 5vw, 3.5rem)', position: 'relative', overflow: 'hidden' }}
          >
            {/* Glow blobs */}
            <div style={{
              position: 'absolute',
              top: '-40px',
              right: '-40px',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-40px',
              left: '30%',
              width: '250px',
              height: '250px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,245,255,0.07) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Header */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.25rem',
                marginBottom: '1.75rem',
                flexWrap: 'wrap',
              }}>
                <span style={{ fontSize: '3rem', lineHeight: 1 }}>🏠</span>
                <div>
                  <motion.h3
                    animate={inView ? { opacity: [0.5, 1] } : {}}
                    transition={{ delay: 0.4, duration: 1 }}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                      fontWeight: 800,
                      color: 'var(--color-text)',
                      lineHeight: 1.1,
                      marginBottom: '0.3rem',
                    }}
                  >
                    Rent Villas
                  </motion.h3>
                  <div style={{
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.15em',
                      padding: '0.2rem 0.65rem',
                      border: '1px solid rgba(124,58,237,0.5)',
                      color: '#a78bfa',
                      background: 'rgba(124,58,237,0.1)',
                    }}>
                      IN DEVELOPMENT
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--color-text-muted)',
                    }}>
                      Haldia & Kolkata, West Bengal
                    </span>
                  </div>
                </div>
              </div>

              {/* Pitch */}
              <p style={{
                color: 'var(--color-text-dim)',
                fontSize: '1.05rem',
                lineHeight: 1.8,
                maxWidth: '720px',
                marginBottom: '2rem',
              }}>
                A <span style={{ color: 'var(--color-cyan)' }}>zero-commission rental platform</span> for
                college students, industrial workers, and newly migrated citizens in Haldia & Kolkata.
                Featuring landlord SaaS subscriptions, real-time listings, digital rental agreements,
                and Razorpay-integrated payment flows — built to remove middlemen from Indian rental markets.
              </p>

              {/* Stats row */}
              <div style={{
                display: 'flex',
                gap: '2rem',
                flexWrap: 'wrap',
                marginBottom: '2rem',
                paddingBottom: '2rem',
                borderBottom: '1px solid rgba(124,58,237,0.15)',
              }}>
                {[
                  { val: 'West Bengal', lbl: 'Target Market' },
                  { val: '0%', lbl: 'Commission' },
                  { val: 'SaaS', lbl: 'Revenue Model' },
                  { val: 'Real-time', lbl: 'Listings' },
                ].map(({ val, lbl }) => (
                  <div key={lbl}>
                    <p style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.1rem',
                      color: 'var(--color-cyan)',
                      fontWeight: 700,
                      marginBottom: '0.2rem',
                    }}>{val}</p>
                    <p style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      color: 'var(--color-text-muted)',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                    }}>{lbl}</p>
                  </div>
                ))}
              </div>

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {tags.map(tag => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      padding: '0.3rem 0.75rem',
                      background: 'rgba(0,245,255,0.04)',
                      border: '1px solid rgba(0,245,255,0.15)',
                      color: 'var(--color-cyan-dim)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
