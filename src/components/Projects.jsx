import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    id: 'isk-ai',
    title: 'ISK-AI',
    subtitle: 'Intelligent Search & Knowledge AI',
    description:
      'Production-grade RAG (Retrieval-Augmented Generation) system with semantic search over 384-dimensional FAISS embeddings, JWT-based authentication, and role-based access control. Built for enterprise knowledge management.',
    shortDesc: 'RAG system with FAISS semantic search, JWT auth & RBAC',
    tech: ['FastAPI', 'FAISS', 'React.js', 'Mistral LLM', 'JWT', 'RBAC', 'Sentence-Transformers', 'Python'],
    github: 'https://github.com/Sarba001-tech/ISK-AI-Intelligent-Search-Knowledge-AI',
    color: '#00f5ff',
    emoji: '🧠',
  },
  {
    id: 'voice-assistant',
    title: 'AI Voice Assistant',
    subtitle: 'Desktop Automation via Voice',
    description:
      'Python-based voice-controlled desktop automation system that listens for natural language commands, processes them with NLP, and executes system operations — from opening applications to web searches.',
    shortDesc: 'Voice-controlled Python automation with SpeechRecognition & pyttsx3',
    tech: ['Python', 'SpeechRecognition', 'pyttsx3', 'NLP', 'Automation'],
    github: 'https://github.com/Sarba001-tech/AI-Voice-Assistant-Desktop-Automation-Tool',
    color: '#7c3aed',
    emoji: '🎙️',
  },
  {
    id: 'rent-villas',
    title: 'Rent Villas',
    subtitle: 'Full-Stack Rental Platform',
    description:
      'Zero-commission rental marketplace for college students, industrial workers, and newly migrated citizens in Haldia & Kolkata. Features real-time messaging, payment integration, digital agreements, and a landlord SaaS subscription model.',
    shortDesc: 'Full-stack rental platform with real-time listings & payments',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'Razorpay', 'Socket.io', 'Cloudinary'],
    github: 'https://github.com/sarbasishbera/rent-villas',
    color: '#00f5ff',
    emoji: '🏠',
    isStartup: true,
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotX = ((y - cy) / cy) * -6
    const rotY = ((x - cx) / cx) * 6
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`
  }

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
    >
      <div
        ref={cardRef}
        className="project-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transition: 'transform 0.15s ease, border-color 0.4s ease, box-shadow 0.4s ease',
          height: '100%',
        }}
      >
        {project.isStartup && (
          <div style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            padding: '0.2rem 0.6rem',
            background: 'rgba(124,58,237,0.15)',
            border: '1px solid rgba(124,58,237,0.4)',
            color: '#a78bfa',
          }}>
            STARTUP
          </div>
        )}

        <div style={{ padding: '2rem' }}>
          {/* Emoji + title */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '1.75rem', lineHeight: 1 }}>{project.emoji}</span>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: 'var(--color-text)',
                marginBottom: '0.2rem',
              }}>
                {project.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: project.color,
                letterSpacing: '0.05em',
              }}>
                {project.subtitle}
              </p>
            </div>
          </div>

          <p style={{
            color: 'var(--color-text-dim)',
            fontSize: '0.9rem',
            lineHeight: 1.7,
            marginBottom: '1.5rem',
          }}>
            {project.description}
          </p>

          {/* Tech tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
            {project.tech.map(t => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '0.75rem', padding: '0.5rem 1rem' }}
            >
              <FiGithub size={13} /> GitHub
            </a>
          </div>
        </div>

        {/* Bottom accent line */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: `linear-gradient(90deg, transparent, ${project.color}40, transparent)`,
        }} />
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" style={{ padding: '6rem 0' }}>
      <div className="section-container">
        <div ref={ref}>
          <motion.p
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{ marginBottom: '0.75rem' }}
          >
            Projects
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{ marginBottom: '3rem' }}
          >
            What I've <span>Built</span>
          </motion.h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
