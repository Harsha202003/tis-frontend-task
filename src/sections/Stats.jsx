import { motion } from 'framer-motion'

const stats = [
  {
    value: '22',
    suffix: ' ACRES',
    label: 'Pollution-free campus',
  },
  {
    value: '16+',
    suffix: '',
    label: 'Sports & activities',
  },
  {
    value: '24×7',
    suffix: '',
    label: 'Medical assistance',
  },
  {
    value: '20K+',
    suffix: '',
    label: 'Books in the library',
  },
]

function Stats() {
  return (
    <section className="bg-amber-400 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 divide-x divide-slate-950/10 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className={`px-5 text-center sm:px-8 ${
                index > 1 ? 'mt-10 md:mt-0' : ''
              }`}
            >
              <p className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                {stat.value}
                {stat.suffix && (
                  <span className="ml-1 text-base font-bold tracking-[0.15em] sm:text-lg">
                    {stat.suffix}
                  </span>
                )}
              </p>

              <p className="mx-auto mt-3 max-w-[150px] text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-slate-700 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats