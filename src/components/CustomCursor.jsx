import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function CustomCursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  })

  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      })
    }

    const handleMouseOver = (event) => {
      const target = event.target

      if (
        target.closest(
          'a, button, input, textarea, select, [role="button"]'
        )
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <>
      {/* Outer cursor */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[200] hidden h-8 w-8 rounded-full border border-amber-400 md:block"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isHovering ? 1.6 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
          mass: 0.3,
        }}
      />

      {/* Inner cursor */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[201] hidden h-2 w-2 rounded-full bg-amber-400 md:block"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          duration: 0.15,
        }}
      />
    </>
  )
}

export default CustomCursor