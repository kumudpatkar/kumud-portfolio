import { motion } from 'framer-motion'
import ScrollIndicator from './ScrollIndicator.jsx'

const STATS = [
  { value: 'SQL', label: 'Data Querying' },
  { value: '2026', label: 'Graduate' },
  { value: '3+', label: 'Projects' },
]

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-center w-full">
        {/* Left: masthead + copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          

          <h1 className="font-display leading-[0.95] mb-6">
            <span className="block text-[15vw] md:text-[6.2vw] font-semibold text-ink">Kumud</span>
            <span className="outline-text block text-[15vw] md:text-[6.2vw] font-semibold italic">Patkar</span>
          </h1>

          <p className="font-mono text-xs md:text-sm uppercase tracking-[0.14em] text-ink-soft mb-6 border-l-2 border-blush pl-4">
    BE CSE (AI &amp; ML) • 2026 Graduate
<br />
Data Analytics • SQL • Excel • Python
</p>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.9, delay: 0.2 }}
  className="
    max-w-2xl
    font-display
    text-[18px]
    md:text-[19px]
    leading-[2.15]
    tracking-[0.02em]
    font-light
    text-neutral-600
    antialiased
  "
>
  I am a 2026 BE CSE (AI &amp; ML) graduate interested in
  Data Analytics and data-driven problem-solving. I use SQL,
  Excel, and Python to explore data, identify trends, and
  generate meaningful insights.

  <br />
  <br />

  Through hands-on projects, I am building my skills in
  data analysis, data cleaning, visualization, and reporting
  to support better business decisions.
</motion.p>




          <div className="flex flex-wrap items-center gap-4 mb-14">
            <a
              href="#projects"
              className="cursor-interactive inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 font-mono text-xs uppercase tracking-[0.16em] hover:bg-blush-deep transition-colors duration-300"
            >
              View Data Projects
            </a>
            <a
              href="https://github.com/kumudpatkar"
              target="_blank"
              rel="noreferrer"
              className="cursor-interactive inline-flex items-center gap-2 border border-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.16em] hover:bg-ink hover:text-paper transition-colors duration-300"
            >
              GitHub ↗
            </a>
            <a
  href="/Kumud_Patkar_DA.pdf"
  download="Kumud_Patkar_DA.pdf"
  className="cursor-interactive inline-flex items-center gap-2 px-2 py-3 font-mono text-xs uppercase tracking-[0.16em] text-ink-soft hover:text-blush-deep transition-colors duration-300 underline underline-offset-4"
>
  Resume ↓
</a>
          </div>

          <div className="flex items-center gap-10">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl text-ink">{s.value}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: framed photo card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative mx-auto md:mx-0 w-full max-w-sm"
        >

          <div className="absolute inset-0 -z-10 flex items-center justify-center">
  <div className="h-80 w-80 rounded-full bg-neutral-300/30 blur-3xl"></div>
</div>

          <div className="relative bg-white p-3 shadow-frame rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-ink/10 bg-[#f7f4ef]">

    <img
  src="/profile.jpg"
  alt="Kumud Patkar"
  className="absolute inset-0 w-full h-full object-cover"
  onError={() => console.log("IMAGE NOT FOUND")}
/>

</div>
           
          </div>

          {/* Est. 2004 stamp */}
          <motion.div
  initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
  animate={{ opacity: 1, scale: 1, rotate: -8 }}
  transition={{ duration: 0.6, delay: 0.8 }}
  className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-black flex items-center justify-center shadow-xl"
>
  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white leading-tight text-center">
    OPEN
    <br />
    TO WORK
  </span>
</motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="absolute -bottom-6 -right-4 bg-ink text-paper px-4 py-3 shadow-card"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] leading-5">
  <span className="block font-semibold">
  Aspiring Data Analyst
</span>

</p>
          </motion.div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  )
}
