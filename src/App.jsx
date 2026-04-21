import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMonitor, FiSmartphone } from 'react-icons/fi'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import StartupSpotlight from './components/StartupSpotlight'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [viewMode, setViewMode] = useState('desktop')
  // Check if we are inside an iframe
  const isIframe = window !== window.top

  useEffect(() => {
    document.title = 'Sarbasish Bera — Full Stack Developer & AI Engineer'
  }, [])

  const appContent = (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--color-bg)' }}>
      {/* Animated grid background */}
      <div className="grid-bg" />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Page content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <StartupSpotlight />
        <Contact />
      </motion.main>

      <Footer />
    </div>
  )

  if (viewMode === 'mobile' && !isIframe) {
    return (
      <div style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#050505',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'relative',
          width: '375px',
          height: '812px',
          maxHeight: '90vh',
          borderRadius: '40px',
          border: '12px solid #111',
          boxShadow: '0 0 0 1px #333, 0 10px 50px rgba(0, 245, 255, 0.1)',
          overflow: 'hidden',
          backgroundColor: 'var(--color-bg)',
          animation: 'popIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          {/* Top notch for realism */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '140px',
            height: '25px',
            backgroundColor: '#111',
            borderBottomLeftRadius: '16px',
            borderBottomRightRadius: '16px',
            zIndex: 9999,
          }} />

          <iframe 
            src={window.location.href}
            style={{ width: '100%', height: '100%', border: 'none' }}
            title="Mobile Preview"
          />
        </div>

        {/* Floating Toggle */}
        <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
        
        <style>{`
          @keyframes popIn {
            0% { opacity: 0; transform: scale(0.9) translateY(20px); }
            100% { opacity: 1; transform: scale(1) translateY(0); }
          }
        `}</style>
      </div>
    )
  }

  return (
    <>
      {appContent}
      {/* Hide the toggle button if inside an iframe, or if on an actual mobile device */}
      {!isIframe && window.innerWidth > 768 && (
        <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
      )}
    </>
  )
}

function ViewToggle({ viewMode, setViewMode }) {
  return (
    <div style={{
      position: 'fixed',
      bottom: '1.5rem',
      left: '1.5rem',
      display: 'flex',
      gap: '0.25rem',
      padding: '0.4rem',
      background: 'rgba(10, 10, 10, 0.6)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      border: '1px solid rgba(0, 245, 255, 0.15)',
      borderRadius: '2rem',
      zIndex: 99999,
      boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
    }}>
      <button
        onClick={() => setViewMode('desktop')}
        title="Desktop View"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.6rem',
          borderRadius: '1.5rem',
          background: viewMode === 'desktop' ? 'rgba(0, 245, 255, 0.1)' : 'transparent',
          color: viewMode === 'desktop' ? 'var(--color-cyan)' : 'var(--color-text-dim)',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
      >
        <FiMonitor size={18} />
      </button>
      <button
        onClick={() => setViewMode('mobile')}
        title="Mobile View"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.6rem',
          borderRadius: '1.5rem',
          background: viewMode === 'mobile' ? 'rgba(124, 58, 237, 0.15)' : 'transparent',
          color: viewMode === 'mobile' ? '#a78bfa' : 'var(--color-text-dim)',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
      >
        <FiSmartphone size={18} />
      </button>
    </div>
  )
}
