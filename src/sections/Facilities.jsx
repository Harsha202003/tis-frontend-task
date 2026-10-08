import { motion } from 'framer-motion'

function Facilities() {
  return (
    <section
      id="campus"
      className="bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
            Campus & Facilities
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            A campus designed
            <span className="block text-amber-500">
              for discovery.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Explore spaces that support learning, creativity,
            collaboration and student life beyond the classroom.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="mt-16 grid gap-5 lg:grid-cols-12">

          {/* Main facilities image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden rounded-[2rem] lg:col-span-7"
          >
            <img
              src="/images/facilities.jpg"
              alt="Tulas International School facilities"
              className="h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-7">
              <p className="text-sm uppercase tracking-[0.2em] text-amber-400">
                Campus
              </p>

              <h3 className="mt-2 text-3xl font-bold text-white">
                Spaces that inspire
              </h3>
            </div>
          </motion.div>

          {/* Right side */}
          <div className="grid gap-5 lg:col-span-5">

            {/* Campus image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="group relative overflow-hidden rounded-[2rem]"
            >
              <img
                src="/images/tis-campus.jpg"
                alt="Tulas International School campus"
                className="h-[235px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-slate-950/30" />

              <div className="absolute bottom-5 left-5">
                <p className="text-xl font-semibold text-white">
                  Campus Life
                </p>
              </div>
            </motion.div>

            {/* Text card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex min-h-[240px] items-end rounded-[2rem] bg-slate-950 p-7"
            >
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-amber-400">
                  TIS
                </p>

                <h3 className="mt-3 text-3xl font-bold text-white">
                  Learning beyond
                  <span className="block text-amber-400">
                    the classroom.
                  </span>
                </h3>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Facilities