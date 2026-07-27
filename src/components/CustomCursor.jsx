import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const glowRef = useRef(null)
  const [active, setActive] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const isCoarse = window.matchMedia('(hover: none)').matches
    if (isCoarse) return

    let gx = 0, gy = 0, dx = 0, dy = 0
    const onMove = (e) => {
      setHidden(false)
      dx = e.clientX
      dy = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dx}px, ${dy}px)`
      }
    }

    let raf
    const tick = () => {
      gx += (dx - gx) * 0.12
      gy += (dy - gy) * 0.12
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${gx}px, ${gy}px)`
      }
      raf = requestAnimationFrame(tick)
    }
    tick()

    const onOver = (e) => {
      const el = e.target.closest('a, button, .cursor-interactive')
      setActive(Boolean(el))
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] hidden md:block"
      style={{ opacity: hidden ? 0 : 1, transition: 'opacity 0.3s' }}
      aria-hidden="true"
    >
      <div
        ref={glowRef}
        className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: active ? 64 : 40,
          height: active ? 64 : 40,
          background: 'radial-gradient(circle, rgba(215,154,165,0.35) 0%, rgba(215,154,165,0) 70%)',
          transition: 'width 0.25s ease, height 0.25s ease',
        }}
      />
      <div
        ref={dotRef}
        className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blush-deep"
        style={{ width: 6, height: 6 }}
      />
    </div>
  )
}
