import { motion } from 'framer-motion'

export default function ScrollIndicator() {
  return (
    <motion.a
      href="#about"
      className="cursor-interactive absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.8 }}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-soft [writing-mode:vertical-rl]">
        
      </span>
      <motion.span
        className="block w-px h-10 bg-gradient-to-b from-blush-deep to-transparent"
        animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.a>
  )
}
