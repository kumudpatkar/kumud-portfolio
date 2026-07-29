import { motion } from "framer-motion";

const PROJECTS = [
  {
  no: "01",
  title: "AI Smart Job Portal",
  subtitle: "Full-Stack AI Recruitment Platform",

  stack: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Gemini AI",
    "Cloudinary",
    "Render",
    "Vercel"
  ],

  description:
    "An AI-powered full-stack recruitment platform that connects candidates, recruiters, and administrators through an intelligent hiring ecosystem. The platform includes AI resume analysis, ATS scoring, skill-gap analysis, AI job recommendations, interview preparation, cover letter generation, and secure role-based authentication.",

  achievements: [
    "Built a complete full-stack recruitment platform using React.js, Node.js, Express.js, and MongoDB",
    "Developed REST APIs for authentication, jobs, applications, profiles, and dashboards",
    "Implemented AI-powered ATS resume scoring, skill-gap analysis, and job matching",
    "Integrated Gemini AI for career assistance, interview questions, and cover letter generation",
    "Implemented Cloudinary for secure profile image and file management",
    "Deployed frontend on Vercel and backend API on Render with MongoDB Atlas integration"
  ],

  github:
    "https://github.com/kumudpatkar/smart-job-portal-ai",

  demo:
    "https://smart-job-portal-ai-rvib.vercel.app",
},
  {
    no: "02",
    title: "MarketPulse Forecasting",
    subtitle: "AI Sales Forecasting & Business Intelligence",

    stack: [
      "Python",
      "Streamlit",
      "Scikit-Learn",
      "XGBoost",
      "SARIMAX",
      "Pandas",
      "Plotly"
    ],

    description:
      "AI-powered sales forecasting and demand intelligence platform that predicts future sales using Machine Learning and Time-Series Forecasting models. Includes interactive analytics dashboard, model comparison, explainable AI insights, and automated reporting.",

    achievements: [
      "Built ML-based sales forecasting pipeline",
      "Implemented SARIMAX and XGBoost forecasting models",
      "Created interactive Plotly analytics dashboard",
      "Generated explainable AI business insights",
    ],

    github:
      "https://github.com/kumudpatkar/MarketPulse-Forecasting",

    demo:
      "https://marketpulse-forecasting-8sqvgqjmxwiv7ed4jmz7qc.streamlit.app/",
  },


  {
    no: "03",
    title: "RetainIQ Analytics",
    subtitle: "Telecom Customer Churn Prediction",

    stack: [
      "Python",
      "Scikit-learn",
      "Random Forest",
      "Streamlit"
    ],

    description:
      "An enterprise AI-powered telecom customer churn prediction platform featuring machine learning, business intelligence, and an interactive analytics dashboard.",

    achievements: [
      "Performed EDA and feature engineering",
      "Compared Logistic Regression vs Random Forest",
      "Evaluated accuracy, precision, recall and F1-score",
      "Developed enterprise Streamlit analytics dashboard",
    ],

    github:
      "https://github.com/kumudpatkar/RetainIQ-Analytics",

    demo:
      "https://retainiq-analytics-5cdcjowzaz8ult66gyiz6x.streamlit.app",
  },
];


export default function Projects() {

  return (

    <section
      id="projects"
      className="relative py-28 md:py-36 bg-paper-dim/60"
    >

      <div className="max-w-6xl mx-auto px-6 md:px-10">


        <motion.p

          initial={{
            opacity:0,
            x:-16
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:0.6
          }}

          className="
          font-mono
          text-[11px]
          uppercase
          tracking-[0.3em]
          text-blush-deep
          mb-4
          "

        >

          Featured Projects

        </motion.p>



        <motion.h2

          initial={{
            opacity:0,
            y:16
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:0.7
          }}

          className="
          font-display
          text-3xl
          md:text-4xl
          mb-16
          "

        >

          Engineering solutions powered by AI, full-stack development, and data.

        </motion.h2>




        <div className="space-y-6">


        {PROJECTS.map((p,i)=>(


        <motion.article

          key={p.title}


          initial={{
            opacity:0,
            y:24
          }}


          whileInView={{
            opacity:1,
            y:0
          }}


          viewport={{
            once:true,
            amount:0.3
          }}


          transition={{
            duration:0.6,
            delay:i*0.08
          }}


          className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-neutral-200
          bg-white
          p-8
          md:p-10
          shadow-lg
          hover:shadow-2xl
          hover:-translate-y-2
          transition-all
          duration-500
          "

        >


<div
className="
absolute
-top-24
-right-24
w-72
h-72
rounded-full
bg-neutral-100
blur-3xl
opacity-0
group-hover:opacity-100
transition-all
duration-700
"
/>



<div className="
grid
md:grid-cols-[auto_1fr]
gap-6
md:gap-10
items-start
">


<span
className="
text-6xl
md:text-7xl
font-black
text-neutral-200
group-hover:text-black
transition-all
duration-500
leading-none
select-none
"
>

{p.no}

</span>




<div>


<div className="
flex
flex-wrap
items-baseline
justify-between
gap-2
mb-2
">


<h3
className="
font-display
text-3xl
md:text-4xl
font-semibold
tracking-tight
text-neutral-900
group-hover:translate-x-2
transition-transform
duration-500
"
>

{p.title}

</h3>


<p
className="
font-mono
text-[10px]
uppercase
tracking-[0.14em]
text-blush-deep
"
>

{p.subtitle}

</p>


</div>



<p
className="
text-[17px]
leading-8
text-neutral-600
max-w-3xl
mt-5
"
>

{p.description}

</p>





<div className="
flex
flex-wrap
gap-3
mt-6
mb-8
">


{(p.stack || []).map(skill=>(


<span

key={skill}

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
transition-all
duration-300
"

>

{skill}

</span>


))}


</div>





<div className="
flex
gap-4
mt-2
mb-8
">


{p.github && (

<a

href={p.github}

target="_blank"

rel="noopener noreferrer"

className="
px-5
py-2.5
rounded-full
bg-black
text-white
font-medium
hover:bg-neutral-800
transition-all
"

>

GitHub

</a>

)}



{p.demo && (

<a

href={p.demo}

target="_blank"

rel="noopener noreferrer"

className="
px-5
py-2.5
rounded-full
border
border-black
text-black
font-medium
hover:bg-black
hover:text-white
transition-all
"

>

Live Demo

</a>

)}


</div>





<div

className="
grid
grid-rows-[0fr]
group-hover:grid-rows-[1fr]
transition-[grid-template-rows]
duration-500
"

>


<div className="overflow-hidden">


<ul
className="
pt-4
mt-4
border-t
border-neutral-200
space-y-2
"
>


{(p.achievements || []).map(item=>(


<li

key={item}

className="
flex
gap-2
text-sm
text-neutral-600
"

>

<span className="text-blush-deep">
—
</span>

{item}


</li>


))}


</ul>


</div>


</div>




</div>


</div>



<div
className="
absolute
bottom-0
left-0
h-px
w-0
bg-blush-deep
group-hover:w-full
transition-all
duration-500
"
/>



</motion.article>


))}



</div>


</div>


</section>


  );
}