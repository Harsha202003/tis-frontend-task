import { motion } from 'framer-motion'

const academicFeatures = [
  {
    number: '01',
    title: 'CBSE Curriculum',
    description:
      'A structured CBSE curriculum designed to develop academic understanding, reasoning and analytical thinking.',
  },
  {
    number: '02',
    title: 'Experiential Learning',
    description:
      'Students learn through projects, educational experiences, activities and practical applications beyond textbooks.',
  },
  {
    number: '03',
    title: 'Technology Enabled',
    description:
      'Digital classrooms, technology-integrated learning and immersive tools support an engaging learning experience.',
  },
  {
    number: '04',
    title: 'Future Ready',
    description:
      'Academic and value-added activities help students develop creativity, critical thinking, leadership and communication.',
  },
]

function Academics() {
  return (
    <section
      id="academics"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Academics
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Learning that goes
            <span className="block text-amber-400">
              beyond textbooks.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            TIS follows a CBSE course structure while encouraging
            analytical thinking, creativity, collaboration and
            experiential learning.
          </p>
        </motion.div>

        {/* Academic cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">

          {academicFeatures.map((feature, index) => (
            <motion.article
              key={feature.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/40 hover:bg-white/[0.07] sm:p-9"
            >
              {/* Number */}
              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold tracking-[0.2em] text-amber-400">
                  {feature.number}
                </span>

                <span className="text-2xl text-white/30 transition-transform duration-500 group-hover:translate-x-1 group-hover:text-amber-400">
                  ↗
                </span>
              </div>

              <h3 className="mt-12 text-2xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 max-w-lg leading-7 text-slate-400">
                {feature.description}
              </p>

              {/* Hover line */}
              <div className="mt-8 h-px w-12 bg-amber-400 transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Academics