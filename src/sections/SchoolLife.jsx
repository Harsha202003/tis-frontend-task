import { motion } from 'framer-motion'

function SchoolLife() {
  return (
    <section
      id="school-life"
      className="bg-slate-100 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
              School Life
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Growing together,
              <span className="block text-amber-500">
                every day.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              School life at TIS extends beyond lessons, creating
              opportunities for students to build friendships,
              discover interests and become confident members of
              their community.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-amber-400 hover:text-slate-950"
            >
              Discover School Life
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-[2rem] bg-white p-2 shadow-xl"
          >
            <img
              src="/images/students.jpg"
              alt="Students at Tulas International School"
              className="h-[450px] w-full rounded-[1.5rem] object-cover transition-transform duration-700 hover:scale-105 sm:h-[550px]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default SchoolLife