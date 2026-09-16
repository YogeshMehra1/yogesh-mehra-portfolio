import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('light', !isDark)
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-6 right-6 z-50 p-3 bg-surface border border-surface2 rounded-lg hover:border-primary transition-all shadow-lg shadow-black/10"
      aria-label="Toggle theme"
      title={isDark ? 'Switch to day mode' : 'Switch to night mode'}
    >
      {isDark ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5 text-primary" />}
    </button>
  )
}

export default ThemeToggle
