import { motion } from 'framer-motion'

const reasons = [
  {
    title: 'Holistic Education',
    text: 'Academic learning is complemented by opportunities in athletics, arts, music and other activities.',
  },
  {
    title: 'Future-Ready Learning',
    text: 'Students are encouraged to develop critical thinking, creativity, leadership and practical skills.',
  },
  {
    title: 'A Residential Community',
    text: 'A co-educational residential environment creates opportunities to learn, collaborate and grow together.',
  },
]

function WhyTIS() {
  return (
    <section
      id="why-tis"
      className="bg-slate-100 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
              Why TIS
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
              More than
              <span className="block text-amber-500">
                a classroom.
              </span>
            </h2>

            <p className="mt-6 max-w-md leading-7 text-slate-600">
              TIS combines academics with experiences designed to
              support the intellectual, physical, emotional and
              social development of students.
            </p>

            <a
              href="#campus"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-amber-400 hover:text-slate-950"
            >
              Explore Campus
              <span>→</span>
            </a>
          </motion.div>

          {/* Right Cards */}
          <div className="space-y-5">
            {reasons.map((reason, index) => (
              <motion.article
                key={reason.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-9"
              >
                <div className="flex gap-6">

                  <span className="text-sm font-bold text-amber-500">
                    0{index + 1}
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold text-slate-950">
                      {reason.title}
                    </h3>

                    <p className="mt-4 max-w-xl leading-7 text-slate-600">
                      {reason.text}
                    </p>
                  </div>

                </div>

                <div className="mt-7 h-px w-10 bg-slate-200 transition-all duration-500 group-hover:w-full group-hover:bg-amber-400" />
              </motion.article>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyTIS         