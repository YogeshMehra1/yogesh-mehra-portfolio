import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, Clock, Phone, ArrowRight } from 'lucide-react'
import Button from '../components/Button'

const Contact = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-12 lg:px-24 bg-gradient-to-br from-surface via-background to-surface relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">Let's connect</h2>
          <p className="text-2xl md:text-3xl text-text-secondary max-w-3xl mx-auto leading-relaxed">Have a backend problem worth solving?</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          <Button variant="primary" size="lg" href="mailto:yogeshmehra.mehra1@gmail.com" className="group">
            <Mail className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
            Email Me
          </Button>
          <Button variant="secondary" size="lg" href="https://github.com/YogeshMehra1/" external className="group">
            <Github className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
            GitHub
          </Button>
          <Button variant="outline" size="lg" href="https://www.linkedin.com/in/yogesh-mehra-dev/" external className="group">
            <Linkedin className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
            LinkedIn
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto glass rounded-2xl p-8"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-text-secondary text-sm">Location</p>
                <p className="font-medium">Haldwani, Uttarakhand, India</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-text-secondary text-sm">Focus</p>
                <p className="font-medium text-primary">Java Full Stack Development</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent/10 rounded-lg text-accent">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-text-secondary text-sm">Phone</p>
                <p className="font-medium">+91 9675580388</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button variant="primary" size="lg" href="/resume.pdf" download downloadName="Yogesh_Mehra_Resume.pdf" className="magnetic-button">
            Download Resume
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
