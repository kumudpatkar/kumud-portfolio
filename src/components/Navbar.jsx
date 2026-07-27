import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-paper/90 backdrop-blur-sm shadow-[0_1px_0_rgba(33,30,27,0.08)]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <a href="#top" className="cursor-interactive font-display text-lg tracking-tight">
          
        </a>
        <ul className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
          {LINKS.map((l, i) => (
            <li key={l.href}>
              <a href={l.href} className="cursor-interactive relative group">
                
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-blush-deep transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="cursor-interactive hidden md:inline-block font-mono text-[11px] uppercase tracking-[0.18em] border border-ink px-4 py-2 hover:bg-ink hover:text-paper transition-colors duration-300"
        >
          Say Hello
        </a>
      </nav>
    </motion.header>
  )
}
