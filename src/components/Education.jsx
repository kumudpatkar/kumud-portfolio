import { motion } from 'framer-motion'

const ENTRIES = [
  {
    year: '2022 — 2026',
    title: 'B.E. Computer Science Engineering (AI & ML)',
    org: 'Finolex Academy of Management and Technology — Mumbai University',
    detail: 'CGPA: 8.55',
  },
  {
    year: '2022',
    title: 'HSC (PCMCS)',
    org: 'Dadasaheb Tirodkar Jr College — State Board of Maharashtra',
    detail: 'Grade: 61.50%',
  },
  {
    year: '2020',
    title: 'SSC',
    org: 'Shivaji English School — State Board of Maharashtra',
    detail: 'Grade: 90.50%',
  },
]

export default function Education() {
  return (
    <section id="education" className="relative py-28 md:py-36 bg-paper-dim/60">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[11px] uppercase tracking-[0.3em] text-blush-deep mb-4"
        >
           Education
        </motion.p>

        <motion.h2
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.9 }}
  className="
    font-display
    text-5xl
    md:text-7xl
    leading-[0.9]
    tracking-[-0.04em]
    mb-6
    text-neutral-900
  "
>
  Academic
  <span className="block italic font-light text-neutral-400">
    Journey
  </span>
</motion.h2>

<motion.p
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="text-neutral-500 text-lg max-w-xl mb-16"
>
  Building a strong foundation in software engineering,
  artificial intelligence, and modern application development.
</motion.p>

        <div className="grid gap-8">
          

          {ENTRIES.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              
            >
              <div className="absolute right-6 top-6">
  <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center font-semibold text-sm shadow-lg">
    🎓
  </div>
</div>

              <div className="inline-flex items-center rounded-full bg-black text-white px-5 py-2 mb-5 shadow-lg">
  <span className="font-mono text-[11px] tracking-[0.22em] uppercase">
    {e.year}
  </span>
</div>

<h3
  className="
    font-display
    text-2xl
    md:text-3xl
    font-semibold
    leading-tight
    text-neutral-900
    mb-3
    group-hover:translate-x-2
    transition-transform
    duration-500
  "
>
                {e.title}
              </h3>

              <p className="text-neutral-500 text-[17px] leading-8 mb-6">
  {e.org}
</p>

              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-50 px-5 py-2">
  <span className="text-green-600 text-lg">●</span>
  <span className="font-semibold text-neutral-900">
    {e.detail}
  </span>
</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}