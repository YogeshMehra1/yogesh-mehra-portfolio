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
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg'
  
  const variants = {
    primary: 'bg-primary text-black hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(0,255,136,0.3)]',
    secondary: 'bg-secondary text-black hover:bg-secondary/90 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]',
    outline: 'border border-primary text-primary hover:bg-primary/10'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
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
