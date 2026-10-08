import { motion } from 'framer-motion'
import useScrollProgress from '../hooks/useScrollProgress'

function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <motion.div
      className="fixed left-0 top-0 z-[100] h-1 origin-left bg-amber-400"
      style={{
        width: `${progress}%`,
      }}
    />
  )
}

export default ScrollProgress