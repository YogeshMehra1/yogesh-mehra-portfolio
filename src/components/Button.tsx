import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  href?: string
  external?: boolean
  download?: boolean
  downloadName?: string
}

const Button = ({ children, onClick, variant = 'primary', size = 'md', className = '', href, external = false, download = false, downloadName }: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-500 rounded-xl relative overflow-hidden'
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary via-primary-light to-primary text-white hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] hover:scale-105',
    secondary: 'glass-strong text-primary hover:border-primary/50 hover:text-primary hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:scale-105',
    outline: 'border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] hover:scale-105'
  }
  
  const sizes = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg'
  }

  const buttonContent = (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        download={download ? (downloadName ?? true) : undefined}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    )
  }

  return buttonContent
}

export default Button
