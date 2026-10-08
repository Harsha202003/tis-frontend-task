import { motion } from 'framer-motion'

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] bg-slate-100 p-2">
              <img
  src="/images/tis-campus.jpg"  
  alt="Tulas International School campus"
  className="h-[420px] w-full rounded-[1.5rem] object-cover transition-transform duration-700 hover:scale-105 sm:h-[520px]"
/>
            </div>

            {/* Floating year card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 rounded-2xl bg-slate-950 px-6 py-5 text-white shadow-2xl sm:-right-8"
            >
              <p className="text-3xl font-bold text-amber-400">
                2012
              </p>

              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                Established
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
              About TIS
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              The
              <span className="text-amber-500">
                {' '}Modern Gurukul.
              </span>
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-600">
              Tulas International School is a co-educational
              residential school in Dehradun, focused on academic
              excellence and holistic development.
            </p>

            <p className="mt-5 leading-7 text-slate-500">
              TIS was established in 2012 with a vision of creating
              an environment where students can learn, grow,
              explore their individuality and develop a strong sense
              of purpose.
            </p>

            <div className="mt-9">
              <a
                href="#academics"
                className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-amber-400 hover:text-slate-950"
              >
                Discover TIS

                <span aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About