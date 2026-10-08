import { motion } from 'framer-motion'

function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-32"
    >
      {/* Background effects */}
      <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04]"
        >
          <div className="grid items-center lg:grid-cols-[1.1fr_0.9fr]">

            {/* Content */}
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
                Admissions
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Begin the next
                <span className="block text-amber-400">
                  chapter.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                Discover the learning environment, campus and
                opportunities available at Tulas International School.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="https://admission.tis.edu.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-amber-400 px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-300 hover:shadow-xl hover:shadow-amber-400/20"
                >
                  Apply for Admission
                </a>

                <a
                  href="tel:+919837983791"
                  className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:text-amber-400"
                >
                  Call Admissions
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[350px] overflow-hidden lg:h-full lg:min-h-[500px]">
              <img
                src="/images/tis-campus.jpg"
                alt="Tulas International School campus"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent lg:bg-gradient-to-r" />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default CTA