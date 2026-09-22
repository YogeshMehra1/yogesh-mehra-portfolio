import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const skills = [
  { name: 'Java', level: 90 },
  { name: 'Spring Boot', level: 85 },
  { name: 'Kafka', level: 75 },
  { name: 'Redis', level: 80 },
  { name: 'MySQL', level: 85 },
  { name: 'AWS', level: 70 },
  { name: 'React.js', level: 75 },
  { name: 'Angular', level: 75 },
]

const SkillBars = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('skill-bars')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div id="skill-bars" className="space-y-6">
      {skills.map((skill, i) => (
        <div key={i}>
          <div className="flex justify-between mb-2">
            <span className="font-medium">{skill.name}</span>
            <span className="text-primary">{skill.level}%</span>
          </div>
          <div className="h-2 bg-surface2 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: isVisible ? `${skill.level}%` : 0 }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default SkillBars
