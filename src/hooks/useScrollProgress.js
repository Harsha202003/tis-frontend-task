import { useEffect, useState } from 'react'

function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight

      if (documentHeight <= 0) {
        setProgress(0)
        return
      }

      const currentProgress = (scrollTop / documentHeight) * 100

      setProgress(currentProgress)
    }

    window.addEventListener('scroll', updateProgress)

    updateProgress()

    return () => {
      window.removeEventListener('scroll', updateProgress)
    }
  }, [])

  return progress
}

export default useScrollProgress