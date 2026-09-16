import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, Clock, Phone } from 'lucide-react'
import Button from '../components/Button'

const Contact = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-surface via-background to-surface">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Have a backend problem worth solving?</h2>
          <p className="text-2xl text-text-secondary">Let's build something scalable.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          <Button variant="primary" size="lg" href="mailto:contact@example.com">
            <Mail className="w-5 h-5 mr-2" />
            Email Me
          </Button>
          <Button variant="secondary" size="lg" href="https://github.com/YogeshMehra1/yogesh-mehra-portfolio" external>
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </Button>
          <Button variant="outline" size="lg" href="https://linkedin.com" external>
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto bg-background border border-surface2 rounded-2xl p-8"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-text-secondary text-sm">Location</p>
                <p className="font-medium">Uttarakhand, India</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-text-secondary text-sm">Availability</p>
                <p className="font-medium text-primary">Immediate Joiner</p>
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
          <Button variant="primary" size="lg" href="/yogesh-mehra-resume.pdf" download downloadName="Yogesh-Mehra-Resume.pdf">
            Download Resume
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
