import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'

import Hero from './sections/Hero'
import About from './sections/About'
import Academics from './sections/Academics'
import WhyTIS from './sections/WhyTIS'
import Facilities from './sections/Facilities'
import Sports from './sections/Sports'
import SchoolLife from './sections/SchoolLife'
import Stats from './sections/Stats'
import Testimonials from './sections/Testimonials'
import CTA from './sections/CTA'

function App() {
  return (
    <>
      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Custom cursor - desktop only */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main website */}
      <main>
        {/* Hero */}
        <Hero />

        {/* About TIS */}
        <About />

        {/* Academics */}
        <Academics />

        {/* Why TIS */}
        <WhyTIS />

        {/* Campus & Facilities */}
        <Facilities />

        {/* Sports & Activities */}
        <Sports />

        {/* School Life */}
        <SchoolLife />

        {/* Key Statistics */}
        <Stats />

        {/* Parent Testimonials */}
        <Testimonials />

        {/* Admissions CTA */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App