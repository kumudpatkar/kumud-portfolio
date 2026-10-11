import { motion } from "framer-motion";

export default function About() {
  return (
    <section
  id="about"
  className="
    relative
    overflow-hidden
    py-36
    md:py-44
    bg-gradient-to-b
    from-white
    via-neutral-50
    to-white
  "
>

  {/* Premium Floating Background */}

<div className="absolute inset-0 overflow-hidden pointer-events-none">

  <motion.div
    animate={{
      x: [0, 40, 0],
      y: [0, -30, 0],
      rotate: [0, 15, 0],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute -top-20 -left-24 w-[420px] h-[420px] rounded-full bg-violet-300/30 blur-[130px]"
  />

  <motion.div
    animate={{
      x: [0, -40, 0],
      y: [0, 40, 0],
    }}
    transition={{
      duration: 14,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-sky-300/30 blur-[150px]"
  />

  <motion.div
    animate={{
      scale: [1, 1.15, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute left-1/2 top-40 w-64 h-64 rounded-full bg-purple-200/30 blur-[120px]"
  />

</div>
       <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 grid lg:grid-cols-[0.35fr_0.65fr] gap-24 items-start">

        {/* Left Title */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono uppercase tracking-[0.45em] text-[11px] text-neutral-500">
            ABOUT
          </p>
        </motion.div>

        {/* Right Content */}
        <div>

          {/* Heading */}
<motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="font-display text-5xl md:text-6xl leading-tight mb-10"
>
 Turning data
<span className="italic text-neutral-400"> into insights,</span>
<br />
driving better
<span className="font-semibold"> decisions.</span>
</motion.h2>

<motion.div
    initial={{opacity:0,y:20}}
    whileInView={{opacity:1,y:0}}
    transition={{delay:.8}}
    className="flex items-center gap-3 mb-10"
>

<div className="w-10 h-[2px] bg-black"/>

<p className="uppercase tracking-[0.35em] text-xs text-neutral-500 font-medium">

DATA ANALYTICS • SQL • REPORTING

</p>

</motion.div>
       

          {/* Premium Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .2 }}
            className="
relative
overflow-hidden
rounded-[32px]
border
border-white/60
bg-white/60
backdrop-blur-2xl
p-12
shadow-[0_30px_80px_rgba(0,0,0,0.08)]
hover:shadow-[0_40px_100px_rgba(0,0,0,0.12)]
transition-all
duration-700
"

            
           
          >

            {/* Paragraph 1 */}

  <motion.p
    initial={{opacity:0,y:40}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    transition={{duration:.8}}
    className="
        text-[20px]
        md:text-[22px]
        leading-[2]
        tracking-[0.015em]
        font-light
        text-neutral-700
    "
>
</motion.p>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.9, delay: 0.3 }}
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
  I am a 2026 BE CSE (AI & ML) graduate interested in
  Data Analytics and data-driven problem-solving. I work
  with SQL, Excel, Python, and data visualization to
  explore data, identify trends, and generate meaningful insights.

  <div className="h-8"></div>

  I am continuously strengthening my analytical skills
  through hands-on projects involving data analysis,
  forecasting, and reporting, with a focus on turning
  data into actionable business insights.
</motion.p>

  

            {/* Divider */}

            <motion.div
  initial={{ width: 0 }}
  whileInView={{ width: 120 }}
  transition={{ duration: 1 }}
  className="h-[2px] rounded-full bg-gradient-to-r from-black via-neutral-500 to-transparent my-10"
/>

          

           
            {/* Paragraph 2 */}

            {/* Paragraph 2 */}

            <motion.p
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="
    text-[18px]
    md:text-[19px]
    leading-[1.9]
    tracking-[0.01em]
    text-neutral-600
    max-w-2xl
    font-light
  "
>

</motion.p>

          </motion.div>
          <motion.div
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="mt-10 pl-6 border-l-4 border-black"
>

  <p className="italic text-xl md:text-2xl text-neutral-800 font-light leading-relaxed">
    "Good decisions start with reliable data and meaningful insights."
  </p>

</motion.div>

          {/* Skills */}

<motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: .8 }}
    className="mt-20"
>

    {/* Heading */}

    

    {/* Skills Grid */}

    <div className="grid md:grid-cols-2 gap-5">

        {[
    
        ].map((skill, index) => (

            <motion.div

                key={skill}

                initial={{ opacity:0, y:30 }}

                whileInView={{ opacity:1, y:0 }}

                transition={{
                    duration:.45,
                    delay:index*0.08
                }}

                whileHover={{
                    y:-8,
                    scale:1.04
                }}

                className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-neutral-200
                    bg-white
                    p-6
                    cursor-default
                    transition-all
                    duration-500
                    shadow-sm
                    hover:shadow-2xl
                "

            >

                {/* Animated Gradient */}

                <div className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                    bg-gradient-to-r
                    from-violet-50
                    via-white
                    to-sky-50
                "/>

                <div className="relative flex items-center justify-between">

                    <h3 className="font-semibold text-lg text-neutral-900">

                        {skill}

                    </h3>

                    <motion.span

                        whileHover={{
                            rotate:45
                        }}

                        className="text-2xl"

                    >

                        ✦

                    </motion.span>

                </div>

            </motion.div>

        ))}

    </div>

</motion.div>


        </div>

      </div>
    </section>
  );
}


















