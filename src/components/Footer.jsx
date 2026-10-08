function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-400 text-sm font-bold text-amber-400">
                TIS
              </div>

              <div>
                <p className="text-sm font-semibold tracking-[0.15em]">
                  TULAS
                </p>

                <p className="text-[10px] tracking-[0.2em] text-amber-400">
                  INTERNATIONAL SCHOOL
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-md leading-7 text-slate-400">
              Tulas International School, Dehradun —
              a co-educational residential school focused on
              academic excellence and holistic development.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Explore
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#about"
                className="text-slate-400 transition-colors hover:text-white"
              >
                About TIS
              </a>

              <a
                href="#academics"
                className="text-slate-400 transition-colors hover:text-white"
              >
                Academics
              </a>

              <a
                href="#campus"
                className="text-slate-400 transition-colors hover:text-white"
              >
                Campus
              </a>

              <a
                href="#sports"
                className="text-slate-400 transition-colors hover:text-white"
              >
                Sports
              </a>

              <a
                href="#testimonials"
                className="text-slate-400 transition-colors hover:text-white"
              >
                Testimonials
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-sm leading-6 text-slate-400">
              <p>
                Dhoolkot, P.O – Selaqui,
                <br />
                Chakrata Road,
                <br />
                Dehradun – 248011,
                <br />
                Uttarakhand
              </p>

              <a
                href="tel:+919837983791"
                className="block transition-colors hover:text-white"
              >
                +91-9837983791
              </a>

              <a
                href="mailto:info@tis.edu.in"
                className="block transition-colors hover:text-white"
              >
                info@tis.edu.in
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Tulas International School. All rights reserved.
          </p>

          <a
            href="#home"
            className="transition-colors hover:text-amber-400"
          >
            Back to top ↑
          </a>

        </div>

      </div>
    </footer>
  )
}

export default Footer