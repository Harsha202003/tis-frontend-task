import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'I would like to convey a big thanks to the Management and Teachers of Tulas International School for taking good care of my son.',
    name: 'Tashi Tsering',
    role: 'Parent',
  },
  {
    quote:
      'Tulas gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better.',
    name: 'Namita Agarwal',
    role: 'Parent',
  },
  {
    quote:
      'Our experience is very amazing with school. Staff is very cooperative and supportive.',
    name: 'Sandeep Kumar',
    role: 'Parent',
  },
]

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
            From the Parents
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Experiences that
            <span className="block text-amber-500">
              speak for themselves.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Hear from parents about their experiences with the
            Tulas International School community.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="group flex min-h-[310px] flex-col justify-between rounded-[2rem] border border-slate-200 bg-slate-50 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-amber-300 hover:shadow-xl sm:p-8"
            >
              <div>
                <div className="text-4xl leading-none text-amber-500">
                  “
                </div>

                <p className="mt-5 text-lg leading-8 text-slate-700">
                  {testimonial.quote}
                </p>
              </div>

              <div className="mt-8 border-t border-slate-200 pt-5">
                <p className="font-semibold text-slate-950">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {testimonial.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials