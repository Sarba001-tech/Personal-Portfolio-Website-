import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(0,245,255,0.08)',
      padding: '2.5rem 1.5rem',
      position: 'relative',
      zIndex: 1,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1.5rem',
      }}>
        {/* Logo + copyright */}
        <div>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'var(--color-text-muted)',
          }}>
            <span style={{ color: 'var(--color-cyan)' }}>
              <span style={{ color: 'var(--color-violet)' }}>&lt;</span>
              SB
              <span style={{ color: 'var(--color-violet)' }}>/&gt;</span>
            </span>
            {' '}Built by{' '}
            <span style={{ color: 'var(--color-text-dim)' }}>Sarbasish Bera</span>
            {' '}© 2026
          </p>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--color-text-muted)',
            marginTop: '0.3rem',
          }}>
            React · Vite · Framer Motion · Tailwind CSS
          </p>
        </div>

        {/* Social icons */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <a href="https://github.com/Sarba001-tech" target="_blank" rel="noopener noreferrer"
            className="social-link" aria-label="GitHub" style={{ width: 36, height: 36, fontSize: '0.95rem' }}>
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/sarbasish-bera-922bb5371" target="_blank" rel="noopener noreferrer"
            className="social-link" aria-label="LinkedIn" style={{ width: 36, height: 36, fontSize: '0.95rem' }}>
            <FiLinkedin />
          </a>
          <a href="mailto:sarbasishbera12@gmail.com"
            className="social-link" aria-label="Email" style={{ width: 36, height: 36, fontSize: '0.95rem' }}>
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  )
}
