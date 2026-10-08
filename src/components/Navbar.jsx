 import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Academics', href: '#academics' },
  { name: 'Campus', href: '#campus' },
  { name: 'Sports', href: '#sports' },
  { name: 'School Life', href: '#school-life' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 shadow-lg backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3"
          onClick={handleLinkClick}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-400 text-sm font-bold text-amber-400 transition-transform duration-300 group-hover:rotate-12">
            TIS
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-[0.15em] text-white">
              TULAS
            </p>

            <p className="text-[10px] tracking-[0.2em] text-amber-400">
              INTERNATIONAL SCHOOL
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-white/80 transition-colors duration-300 hover:text-amber-400"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-amber-400 transition-all duration-300 hover:w-full" />
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/20"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((previous) => !previous)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
        >
          <span className="text-xl">
            {isMenuOpen ? '×' : '☰'}
          </span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col px-6 py-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                  }}
                  className="border-b border-white/10 py-4 text-base font-medium text-white/90"
                >
                  {link.name}
                </motion.a>
              ))}

              <a
                href="#contact"
                onClick={handleLinkClick}
                className="mt-5 rounded-full bg-amber-400 px-5 py-3 text-center font-semibold text-slate-950"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar