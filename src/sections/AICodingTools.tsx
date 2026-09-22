import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../store/store'
import { setActiveTool, toggleDemoMode } from '../store/toolsSlice'
import { Zap, Bot, MessageSquare, Brain, Laptop, Palette, Play, Code, Lightbulb, Sparkles, Cpu, Layers } from 'lucide-react'

const iconMap: Record<string, any> = {
  'cursor': Zap,
  'github-copilot': Bot,
  'chatgpt': MessageSquare,
  'claude': Brain,
  'vscode': Laptop,
  'figma': Palette,
}

const codeExamples = {
  'cursor': `// Cursor IDE - AI-powered completion
const validateAppointment = (appointment: Appointment) => {
  // Cursor suggests: Validate required healthcare workflow fields
  if (!appointment.patientId || !appointment.providerId) {
    throw new InvalidRequestException('Patient and provider are required');
  }
  return appointment;
}`,
  'github-copilot': `// GitHub Copilot - Real-time suggestions
@PostMapping("/api/appointments")
public ResponseEntity<Appointment> createAppointment(
  @RequestBody AppointmentRequest request) {
  // Copilot suggests: Validation logic
  if (request.getPatientId() == null) {
        throw new InvalidRequestException();
    }
    return ResponseEntity.ok(
        appointmentService.create(request)
    );
}`,
  'chatgpt': `// ChatGPT - Code explanation
// User: "Explain this Spring Boot annotation"
// ChatGPT: "@Service marks this class as a service
// component in Spring's business layer..."

@Service
public class AppointmentService {
  public Appointment create(AppointmentRequest request) {
        // Business logic here
    }
}`,
  'claude': `// Claude - Complex reasoning
// Claude: "This microservice pattern can be optimized
// by adding a Redis caching layer..."

@Cacheable(value = "appointments", key = "#id")
public Appointment getAppointmentById(Long id) {
  return appointmentRepository.findById(id)
        .orElseThrow();
}`
}

const AICodingTools = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { tools, activeTool, isDemoMode } = useSelector((state: RootState) => state.tools)
  const [selectedCode, setSelectedCode] = useState<string | null>(null)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1])

  const activeToolData = tools.find(t => t.id === activeTool)

  const categoryIcons: Record<string, any> = {
    'ai': <Brain className="w-8 h-8" />,
    'ide': <Cpu className="w-8 h-8" />,
    'productivity': <Layers className="w-8 h-8" />
  }

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 lg:px-24 bg-surface relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div style={{ y: y1 }} className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <motion.div style={{ y: y2 }} className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6"
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Next-Gen Development</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
            AI-Powered Development
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-text-secondary max-w-2xl mx-auto"
          >
            Modern AI tools that accelerate development and enhance code quality
          </motion.p>
        </motion.div>

        {/* Tool Categories with enhanced animations */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 md:mb-16">
          {['ai', 'ide', 'productivity'].map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: catIndex * 0.15 }}
              onMouseEnter={() => setHoveredCategory(category)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="relative"
            >
              <motion.div
                animate={{
                  scale: hoveredCategory === category ? 1.02 : 1,
                  boxShadow: hoveredCategory === category
                    ? "0 25px 50px -12px rgba(99, 102, 241, 0.25)"
                    : "0 10px 30px -10px rgba(0, 0, 0, 0.3)"
                }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-8 card-hover relative overflow-hidden"
              >
                {/* Animated gradient overlay */}
                <motion.div
                  animate={{
                    opacity: hoveredCategory === category ? 0.1 : 0,
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"
                />

                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: catIndex * 0.15 + 0.2 }}
                    className="inline-flex p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl mb-6"
                  >
                    <div className="text-primary">
                      {categoryIcons[category]}
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold text-primary mb-6 capitalize">
                    {category === 'ai' ? 'AI Assistants' : category === 'ide' ? 'Development Tools' : 'Productivity'}
                  </h3>

                  <div className="space-y-4">
                    {tools.filter(t => t.category === category).map((tool, i) => (
                      <motion.button
                        key={tool.id}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: catIndex * 0.15 + i * 0.08 }}
                        onClick={() => dispatch(setActiveTool(tool.id))}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all relative overflow-hidden ${
                          activeTool === tool.id
                            ? 'bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/50 text-primary'
                            : 'bg-surface2 hover:border-primary/30'
                        } border border-transparent`}
                      >
                        {/* Glow effect for active tool */}
                        {activeTool === tool.id && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"
                            animate={{
                              opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}

                        <motion.span
                          animate={activeTool === tool.id ? { rotate: [0, 10, -10, 0] } : {}}
                          transition={{ duration: 0.5 }}
                          className="text-3xl relative z-10"
                        >
                          {tool.icon}
                        </motion.span>

                        <div className="flex-1 text-left relative z-10">
                          <div className="font-semibold">{tool.name}</div>
                          <div className="text-xs text-text-muted mt-1">{tool.proficiency}% proficient</div>
                        </div>

                        <motion.div
                          animate={activeTool === tool.id ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                          transition={{ duration: 1, repeat: activeTool === tool.id ? Infinity : 0 }}
                          className="w-2 h-2 rounded-full bg-primary relative z-10"
                        />
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Active Tool Details with premium animations */}
        {activeToolData && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="glass rounded-3xl p-8 mb-16 relative overflow-hidden"
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              }}
              transition={{ duration: 10, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            />

            <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="flex items-center gap-6 mb-8"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="p-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl"
                  >
                    <span className="text-5xl">{activeToolData.icon}</span>
                  </motion.div>
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-3xl font-bold gradient-text"
                    >
                      {activeToolData.name}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-text-secondary text-lg"
                    >
                      {activeToolData.description}
                    </motion.p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mb-8"
                >
                  <h4 className="text-sm font-mono text-primary mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    KEY FEATURES
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {activeToolData.examples.map((example, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-4 py-2 bg-surface2 rounded-full text-sm border border-surface3 hover:border-primary/50 transition-all cursor-default"
                      >
                        {example}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <h4 className="text-sm font-mono text-primary mb-4 flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    PROFICIENCY LEVEL
                  </h4>
                  <div className="relative h-4 bg-surface2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${activeToolData.proficiency}%` }}
                      transition={{ duration: 1.5, delay: 0.9, type: "spring" }}
                      className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full relative"
                    >
                      <motion.div
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      />
                    </motion.div>
                  </div>
                  <div className="flex justify-between mt-3 text-sm text-text-muted">
                    <span>Beginner</span>
                    <motion.span
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-primary font-bold"
                    >
                      {activeToolData.proficiency}%
                    </motion.span>
                    <span>Expert</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h4 className="text-sm font-mono text-primary mb-4 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    CODE EXAMPLE
                  </h4>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-background rounded-2xl p-6 font-mono text-sm overflow-x-auto border border-surface3 relative"
                  >
                    {/* Animated corner accents */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary" />

                    <pre className="text-primary leading-relaxed">
                      {codeExamples[activeToolData.id as keyof typeof codeExamples] || '// Code example coming soon...'}
                    </pre>
                  </motion.div>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  onClick={() => setSelectedCode(activeToolData.id)}
                  className="mt-6 w-full flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-primary-dark text-white py-4 rounded-2xl font-medium hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-all relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <Play className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">
                    {selectedCode === activeToolData.id ? 'Hide Demo' : 'See in Action'}
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Interactive Demo Section with enhanced animations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ scale: scale }}
          className="glass rounded-3xl p-10 relative overflow-hidden"
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{ duration: 15, repeat: Infinity }}
            style={{ backgroundSize: '300% 300%' }}
          />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full mb-6"
              >
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Interactive Workflow</span>
              </motion.div>

              <h3 className="text-3xl font-bold mb-4 gradient-text">Interactive AI Development Workflow</h3>
              <p className="text-text-secondary max-w-2xl mx-auto text-lg">
                See how AI tools integrate into modern development workflows
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Lightbulb, label: '1. Plan', desc: 'Use AI for architecture planning' },
                { icon: Code, label: '2. Code', desc: 'AI-assisted code generation' },
                { icon: Bot, label: '3. Review', desc: 'AI code review and optimization' },
                { icon: Play, label: '4. Deploy', desc: 'Automated testing and deployment' }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, rotateX: 10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="text-center relative"
                >
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                    className="p-6 bg-gradient-to-br from-surface2 to-surface3 rounded-2xl card-hover relative overflow-hidden"
                  >
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 hover:opacity-100 transition-opacity"
                    />

                    <div className="relative z-10">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                        className="inline-flex p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl mb-4"
                      >
                        <step.icon className="w-8 h-8 text-primary" />
                      </motion.div>
                      <h4 className="font-bold mb-2 text-lg">{step.label}</h4>
                      <p className="text-sm text-text-secondary">{step.desc}</p>
                    </div>
                  </motion.div>

                  {/* Connection line */}
                  {i < 3 && (
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                      className="hidden md:block absolute top-1/2 right-0 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary origin-left"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AICodingTools
