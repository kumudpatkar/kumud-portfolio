import { motion } from 'framer-motion'

const GROUPS = [
  {
    label: 'SQL & Databases',
    items: ['SQL', 'MySQL', 'Joins', 'Subqueries', 'GROUP BY', 'Aggregations'],
  },
  {
    label: 'Excel & Reporting',
    items: ['Microsoft Excel', 'VLOOKUP', 'INDEX-MATCH', 'PivotTables', 'Data Reporting'],
  },
  {
    label: 'Python & Data Analysis',
    items: ['Python', 'Pandas', 'NumPy', 'Data Cleaning', 'Exploratory Data Analysis'],
  },
  {
    label: 'Visualization & Tools',
    items: ['Power BI', 'Data Visualization', 'KPI Reporting', 'MySQL Workbench', 'Git', 'GitHub'],
  },
]
export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[11px] uppercase tracking-[0.3em] text-blush-deep mb-4"
        >
          Skills
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
  Technical
  <span className="block italic font-light text-neutral-400">
    Expertise
  </span>
</motion.h2>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: .2 }}
  className="text-lg text-neutral-500 max-w-2xl mb-16 leading-8"
>
 Skills I use to explore data, identify trends, maintain data quality,
and generate meaningful insights. I am strengthening my expertise
in SQL, Excel, Python, and data visualization to support
data-driven business decisions.
</motion.p>
        

        <div className="grid md:grid-cols-2 gap-8">
          {GROUPS.map((g, gi) => (
            <motion.div
  key={g.label}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, delay: gi * 0.15 }}
  whileHover={{
    y: -8,
    transition: { duration: 0.3 }
  }}
  className="
    group
    relative
    rounded-3xl
    border
    border-neutral-200
    bg-white/80
    backdrop-blur-xl
    p-8
    shadow-lg
    hover:shadow-2xl
    transition-all
    duration-500
    overflow-hidden
  "
>

  {/* Background Glow */}

  <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-neutral-100 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700" />

  {/* Category */}

  <h3
    className="
      text-2xl
      font-display
      font-semibold
      text-neutral-900
      mb-8
      relative
      z-10
    "
  >
    {g.label}
  </h3>

  {/* Skills */}

  <div className="flex flex-wrap gap-3 relative z-10">

    {g.items.map((item) => (

      <span
        key={item}
        className="
          px-4
          py-2
          rounded-full
          bg-neutral-100
          border
          border-neutral-200
          text-sm
          font-medium
          text-neutral-700
          hover:bg-black
          hover:text-white
          hover:border-black
          transition-all
          duration-300
          cursor-default
        "
      >
        {item}
      </span>

    ))}

  </div>

</motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
