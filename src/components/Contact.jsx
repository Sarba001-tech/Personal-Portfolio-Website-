import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

// ===================================================
// EMAILJS CONFIGURATION — Replace with your own credentials
// 1. Go to https://www.emailjs.com/ and sign up
// 2. Create a Service (Email service) → copy Service ID
// 3. Create an Email Template → copy Template ID
// 4. Go to Account → API Keys → copy Public Key
// ===================================================
const EMAILJS_SERVICE_ID  = 'service_da2f0xx'
const EMAILJS_TEMPLATE_ID = 'template_wc5hp9a'
const EMAILJS_PUBLIC_KEY  = '4rsmXAeqarROUiwvK'

function Toast({ message, type, onDismiss }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={`toast ${type === 'error' ? 'error' : ''}`}
      onClick={onDismiss}
      style={{ cursor: 'pointer' }}
    >
      {message}
    </motion.div>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(null)

  const showToast = (message, type = 'success') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 4000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )
      showToast('✓ Message sent! I\'ll get back to you soon.', 'success')
      formRef.current.reset()
    } catch (err) {
      console.error('EmailJS Error:', err)
      const errorMsg = err?.text || err?.message || 'Unknown error occurred'
      showToast(`✗ Failed to send: ${errorMsg}`, 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" style={{ padding: '6rem 0' }}>
      <div className="section-container" ref={ref}>
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ marginBottom: '0.75rem' }}
        >
          Contact
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{ marginBottom: '3.5rem' }}
        >
          Let's <span>Connect</span>
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>
          {/* Left — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <p style={{
              color: 'var(--color-text-dim)',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
              fontSize: '1rem',
            }}>
              I'm currently open to internship opportunities, freelance projects,
              and startup collaborations. Whether you have a project in mind or just want to say hi —
              my inbox is always open.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { icon: <FiMail />, label: 'sarbasishbera12@gmail.com', href: 'mailto:sarbasishbera12@gmail.com' },
                { icon: <FiPhone />, label: '+91 7864926501', href: 'tel:+917864926501' },
                { icon: <FiMapPin />, label: 'Haldia, West Bengal, India', href: null },
              ].map(({ icon, label, href }) => (
                <div
                  key={label}
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                >
                  <div style={{
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(0,245,255,0.15)',
                    color: 'var(--color-cyan)',
                    fontSize: '0.9rem',
                    flexShrink: 0,
                  }}>
                    {icon}
                  </div>
                  {href ? (
                    <a href={href} style={{
                      color: 'var(--color-text-dim)',
                      textDecoration: 'none',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      transition: 'color 0.2s ease',
                    }}
                      onMouseEnter={e => e.target.style.color = 'var(--color-cyan)'}
                      onMouseLeave={e => e.target.style.color = 'var(--color-text-dim)'}
                    >{label}</a>
                  ) : (
                    <span style={{
                      color: 'var(--color-text-dim)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                    }}>{label}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <form ref={formRef} onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.15em',
                  color: 'var(--color-cyan)',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                }}>
                  Name
                </label>
                <input
                  className="form-field"
                  type="text"
                  name="from_name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.15em',
                  color: 'var(--color-cyan)',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                }}>
                  Email
                </label>
                <input
                  className="form-field"
                  type="email"
                  name="from_email"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.15em',
                  color: 'var(--color-cyan)',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                }}>
                  Message
                </label>
                <textarea
                  className="form-field"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  style={{ resize: 'vertical', minHeight: '120px' }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  fontSize: '0.85rem',
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? 'wait' : 'auto',
                }}
              >
                {loading ? (
                  <>Sending...</>
                ) : (
                  <><FiSend size={14} /> Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onDismiss={() => setToast(null)}
        />
      )}
    </section>
  )
}
