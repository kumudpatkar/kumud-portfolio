import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FIRST = 'KUMUD'

const letterVariants = {
  hidden: { y: '110%', opacity: 0 },
  show: (i) => ({
    y: '0%',
    opacity: 1,
    transition: {
      delay: 0.4 + i * 0.08,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export default function IntroSequence({ onDone }) {
  const [exit, setExit] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const timer = setTimeout(() => {
      setExit(true)
    }, 2500) // Show KUMUD for 2.5 seconds

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [])

  const handleExitComplete = () => {
    document.body.style.overflow = ''
    onDone()
  }

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {!exit && (
        <motion.div
          key="intro"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-[#0B0B0C]"
        >
          {/* Subtle grid background */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(to right, #F7F5F2 1px, transparent 1px), linear-gradient(to bottom, #F7F5F2 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          {/* Main KUMUD animation */}
          <div className="relative flex flex-col items-center">
            <div className="overflow-hidden flex">
              {FIRST.split('').map((ch, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="show"
                  className="font-display font-black text-[18vw] md:text-[9vw] tracking-tight text-white inline-block"
                >
                  {ch}
                </motion.span>
              ))}
            </div>

            {/* Elegant blush line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.7, ease: 'easeInOut' }}
              className="h-px w-40 md:w-64 bg-[#D79AA5] mt-6 origin-center"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="mt-6 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#F7F5F2]/70"
            >
              Computer Science Engineer · AI & ML
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}