import { useScroll, useTransform, motion, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import IntroSequence from './components/IntroSequence.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import CustomCursor from './components/CustomCursor.jsx'

export default function App() {
  const [showIntro, setShowIntro] = useState(true)
  const containerRef = useRef(null)

 const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ['start start', 'end start'],
  layoutEffect: false
})

  const blobY = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])

  const handleIntroDone = () => {
    setShowIntro(false)
  }

  return (
    <>
      {/* Intro Animation */}
      <AnimatePresence>
        {showIntro && <IntroSequence onDone={handleIntroDone} />}
      </AnimatePresence>

      {/* Actual Portfolio */}
      {!showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div ref={containerRef} className="relative min-h-screen selection:bg-blush">
            <CustomCursor />

            {/* fixed paper grain + hairline grid, sits behind all content */}
            <div className="page-texture">
              <div className="grid-layer" />
              <div className="grain-layer" />
            </div>

            {/* soft parallax blush glow behind the hero */}
            <motion.div
              style={{ y: blobY }}
              className="pointer-events-none fixed top-[-10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-blush/20 blur-3xl z-0"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <Navbar />
              <main>
                <Hero />
                <About />
                <Education />
                <Skills />
                <Projects />
                <Contact />
              </main>
              <Footer />
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}