import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase, FiAward } from 'react-icons/fi'

const timelineItems = [
  {
    type: 'internship',
    icon: <FiBriefcase />,
    title: 'Data Science & Machine Learning Intern',
    org: 'Infotact Solutions',
    date: 'Present',
    description:
      'Working on real-world data science and machine learning projects, building predictive models, analysing datasets, and deploying ML solutions in a professional environment.',
    color: '#00f5ff',
  },
  {
    type: 'internship',
    icon: <FiBriefcase />,
    title: 'IoT Implementation Intern',
    org: 'Ardent Computech Pvt. Ltd.',
    date: 'Oct 2023',
    description:
      'Hands-on implementation of IoT systems and embedded device integration in a professional engineering environment.',
    color: '#00f5ff',
  },
  {
    type: 'certification',
    icon: <FiAward />,
    title: 'Bootcamp on Blockchain',
    org: 'NIELIT Kolkata (FutureSkills PRIME)',
    date: 'Oct 2025',
    description:
      'Comprehensive blockchain technology training covering distributed ledger fundamentals, smart contracts, and DeFi protocols.',
    color: '#7c3aed',
  },
  {
    type: 'certification',
    icon: <FiAward />,
    title: 'TATA Data Visualisation',
    org: 'Forage',
    date: 'March 2025',
    description:
      'Virtual job simulation mastering data analytics, Tableau dashboards, and business intelligence storytelling for enterprise-scale data.',
    color: '#00f5ff',
  },
  {
    type: 'certification',
    icon: <FiAward />,
    title: 'Business Intelligence Essentials',
    org: 'IBM',
    date: '2024',
    description:
      'IBM-certified course in BI strategy, data warehousing, analytics pipelines, and Power BI report creation.',
    color: '#7c3aed',
  },
  {
    type: 'certification',
    icon: <FiAward />,
    title: 'Deep Learning for Developers',
    org: 'Infosys Springboard',
    date: '2024',
    description:
      'Neural network architectures, CNNs, RNNs, transfer learning, and deployment strategies for real-world deep learning applications.',
    color: '#00f5ff',
  },
]

export default function Timeline() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="timeline" style={{ padding: '6rem 0' }}>
      <div className="section-container" ref={ref}>
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ marginBottom: '0.75rem' }}
        >
          Experience
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{ marginBottom: '3.5rem' }}
        >
          My <span>Journey</span>
        </motion.h2>

        {/* Filter chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          style={{ display: 'flex', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}
        >
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.1em',
            padding: '0.3rem 0.85rem', border: '1px solid rgba(0,245,255,0.3)',
            color: 'var(--color-cyan)', background: 'rgba(0,245,255,0.05)',
          }}>
            <FiBriefcase style={{ display: 'inline', marginRight: 6 }} />
            2 Internships
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.1em',
            padding: '0.3rem 0.85rem', border: '1px solid rgba(124,58,237,0.3)',
            color: '#a78bfa', background: 'rgba(124,58,237,0.05)',
          }}>
            <FiAward style={{ display: 'inline', marginRight: 6 }} />
            5 Certifications
          </span>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '3rem' }}>
          {/* Vertical line */}
          <div className="timeline-line" />

          {timelineItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12, ease: 'easeOut' }}
              style={{
                position: 'relative',
                marginBottom: i < timelineItems.length - 1 ? '2.5rem' : 0,
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.5rem',
              }}
            >
              {/* Dot */}
              <div
                className="timeline-dot"
                style={{
                  position: 'absolute',
                  left: '-2.5rem',
                  top: '0.4rem',
                  background: item.color,
                  boxShadow: `0 0 10px ${item.color}, 0 0 20px ${item.color}60`,
                }}
              />

              {/* Content card */}
              <div
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  width: '100%',
                  border: `1px solid ${item.color}20`,
                }}
              >
                {/* Header */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '0.75rem',
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
                      <span style={{ color: item.color, fontSize: '0.9rem' }}>{item.icon}</span>
                      <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: 'var(--color-text)',
                      }}>
                        {item.title}
                      </h3>
                    </div>
                    <p style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: item.color,
                      letterSpacing: '0.05em',
                    }}>
                      {item.org}
                    </p>
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--color-text-muted)',
                    letterSpacing: '0.1em',
                    padding: '0.2rem 0.6rem',
                    border: '1px solid rgba(255,255,255,0.08)',
                    whiteSpace: 'nowrap',
                  }}>
                    {item.date}
                  </span>
                </div>

                <p style={{
                  color: 'var(--color-text-dim)',
                  fontSize: '0.875rem',
                  lineHeight: 1.7,
                }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
