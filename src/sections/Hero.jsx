import { motion } from 'framer-motion'

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-28 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <div className="max-w-2xl">

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400"
            >
              Tulas International School
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              Inspiring
              <span className="block text-amber-400">
                curious
              </span>
              minds.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg"
            >
              Discover a learning environment where students are
              encouraged to explore, grow, lead and prepare for a
              changing world.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <a
                href="#about"
                className="rounded-full bg-amber-400 px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-300 hover:shadow-xl hover:shadow-amber-400/20"
              >
                Explore TIS
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:text-amber-400"
              >
                Admissions
              </a>
            </motion.div>

          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: 'easeOut',
            }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl">

              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src="/images/tis-campus.jpg"
                  alt="Tulas International School campus"
                  className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[500px]"
                />
              </div>

              {/* Image overlay */}
              <div className="absolute inset-2 rounded-[1.5rem] bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="absolute -bottom-6 -left-4 rounded-2xl border border-white/10 bg-slate-900/90 px-5 py-4 shadow-xl backdrop-blur-md sm:-left-8"
            >
              <p className="text-xs uppercase tracking-wider text-slate-400">
                Discover
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                Learning beyond the classroom
              </p>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs uppercase tracking-[0.25em] text-slate-400 transition-colors hover:text-amber-400 sm:flex"
      >
        <span>Scroll to explore</span>

        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          ↓
        </motion.span>
      </motion.a>
    </section>
  )
}

export default Hero