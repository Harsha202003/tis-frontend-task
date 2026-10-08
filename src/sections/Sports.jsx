import { motion } from 'framer-motion'

function Sports() {
  return (
    <section
      id="sports"
      className="overflow-hidden bg-slate-950 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="group overflow-hidden rounded-[2rem]"
          >
            <img
              src="/images/sports.jpg"
              alt="Students participating in sports at Tulas International School"
              className="h-[450px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[550px]"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
              Sports & Activities
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Learn.
              <span className="block text-amber-400">
                Play.
              </span>
              Lead.
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-400">
              Sports and activities form an important part of
              developing confidence, teamwork, discipline and
              leadership beyond academics.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {[
                'Football',
                'Basketball',
                'Cricket',
                'Badminton',
                'Swimming',
                'Athletics',
              ].map((sport) => (
                <span
                  key={sport}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition-colors hover:border-amber-400 hover:text-amber-400"
                >
                  {sport}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Sports