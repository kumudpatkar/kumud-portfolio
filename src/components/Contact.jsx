import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const FULL_TEXT = 'Ready to collaborate on AI, ML, and Software Engineering opportunities.'

const LINKS = [
  { label: 'Email', value: 'kumudpatkar6@gmail.com', href: 'mailto:kumudpatkar6@gmail.com' },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/kumud-patkar',
    href: 'https://linkedin.com/in/kumud-patkar-928180283',
  },
  { label: 'GitHub', value: 'github.com/kumudpatkar', href: 'https://github.com/kumudpatkar' },
]

export default function Contact() {
  const [typed, setTyped] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!started) return
    let i = 0
    const id = setInterval(() => {
      i += 1
      setTyped(FULL_TEXT.slice(0, i))
      if (i >= FULL_TEXT.length) clearInterval(id)
    }, 28)
    return () => clearInterval(id)
  }, [started])

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[11px] uppercase tracking-[0.3em] text-blush-deep mb-4"
        >
        Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="font-display text-3xl md:text-4xl mb-12"
        >
          Let&apos;s build something intelligent
        </motion.h2>

        <div className="grid md:grid-cols-[0.55fr_0.45fr] gap-8 items-stretch">
          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="space-y-1"
          >
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="cursor-interactive group flex items-center justify-between border-b border-ink/10 py-5"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-blush-deep">
                  {l.label}
                </span>
                <span className="font-display text-lg md:text-xl text-ink group-hover:text-blush-deep transition-colors duration-300">
                  {l.value}
                </span>
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              className="cursor-interactive mt-8 inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 font-mono text-xs uppercase tracking-[0.16em] hover:bg-blush-deep transition-colors duration-300"
            >
              Download Resume ↓
            </a>
          </motion.div>

          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            onViewportEnter={() => setStarted(true)}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-ink text-paper-dim font-mono text-xs md:text-sm p-6 shadow-frame"
          >
            <div className="flex items-center gap-1.5 mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-blush" />
              <span className="w-2.5 h-2.5 rounded-full bg-paper-dim/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-paper-dim/40" />
              <span className="ml-3 text-paper-dim/50 text-[10px] uppercase tracking-[0.14em]">
                contact.sh
              </span>
            </div>
            <p className="text-paper-dim/50">$ whoami</p>
            <p className="mb-3">kumud_patkar &mdash; cs_engineer / ai_ml</p>
            <p className="text-paper-dim/50">$ status</p>
            <p>
              <span className="text-blush">&gt;</span> {typed}
              <span className="caret-blink">_</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
