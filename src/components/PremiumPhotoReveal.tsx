import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const PremiumPhotoReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 100])
  const scale = useTransform(scrollY, [0, 500], [1, 0.9])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5])

  return (
    <motion.div
      ref={containerRef}
      style={{ y, scale, opacity }}
      className="relative flex items-center justify-center"
    >
      {/* Background glow layers */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="absolute w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[80px]"
        />
      </div>

      {/* Animated orbit rings */}
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 0.3, rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear', delay: 1 }}
        className="absolute w-[420px] h-[420px] rounded-full border border-primary/20"
      />
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 0.2, rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear', delay: 1.2 }}
        className="absolute w-[480px] h-[480px] rounded-full border border-dashed border-secondary/20"
      />

      {/* Light sweep effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.8, 0] }}
        transition={{ duration: 2, delay: 1.5, times: [0, 0.5, 1] }}
        className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
        style={{
          width: '120%',
          height: '120%',
          transform: 'rotate(-45deg)',
        }}
      />

      {/* Photo container with mask reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative"
      >
        {/* Outer gradient border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="relative p-[3px] rounded-full bg-gradient-to-br from-primary via-secondary to-accent"
        >
          {/* Inner dark border */}
          <div className="relative p-[2px] rounded-full bg-background">
            {/* Image with reveal mask */}
            <motion.div
              initial={{ clipPath: 'circle(0% at 50% 50%)' }}
              animate={{ clipPath: 'circle(100% at 50% 50%)' }}
              transition={{ duration: 1.5, delay: 0.8, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="relative rounded-full overflow-hidden bg-surface">
                <img
                  src="/yogesh-mehra-profile.png"
                  alt="Yogesh Mehra, Java Full Stack Developer"
                  className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] object-cover object-top"
                />

                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated light aura */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
          className="absolute inset-0 rounded-full bg-primary/20 blur-[40px] -z-10"
        />
      </motion.div>

      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 glass px-6 py-3 rounded-full"
      >
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-primary"
          />
          <span className="text-sm font-medium text-primary">Available for opportunities</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default PremiumPhotoReveal
