import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const isMobile = window.innerWidth <= 768
    if (isMobile) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let rafId

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (!visible) setVisible(true)

      if (dotRef.current) {
        dotRef.current.style.left = mouseX + 'px'
        dotRef.current.style.top = mouseY + 'px'
      }
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ringX + 'px'
        ringRef.current.style.top = ringY + 'px'
      }
      rafId = requestAnimationFrame(animate)
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    // Expand ring on clickable elements
    const onMouseOver = (e) => {
      const isClickable = e.target.closest('button, a, input, textarea, [data-cursor-hover]')
      if (ringRef.current) {
        if (isClickable) {
          ringRef.current.style.width = '56px'
          ringRef.current.style.height = '56px'
          ringRef.current.style.borderColor = 'rgba(0, 245, 255, 0.8)'
        } else {
          ringRef.current.style.width = '36px'
          ringRef.current.style.height = '36px'
          ringRef.current.style.borderColor = 'rgba(0, 245, 255, 0.4)'
        }
      }
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mouseover', onMouseOver)
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseover', onMouseOver)
      cancelAnimationFrame(rafId)
    }
  }, [])

  if (typeof window !== 'undefined' && window.innerWidth <= 768) return null

  return (
    <AnimatePresence>
      {visible && (
        <>
          <div
            ref={dotRef}
            className="custom-cursor cursor-dot"
            style={{ position: 'fixed', zIndex: 99999, pointerEvents: 'none' }}
          />
          <div
            ref={ringRef}
            className="custom-cursor cursor-ring"
            style={{ position: 'fixed', zIndex: 99998, pointerEvents: 'none' }}
          />
        </>
      )}
    </AnimatePresence>
  )
}
