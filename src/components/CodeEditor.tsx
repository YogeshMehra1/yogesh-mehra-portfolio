import { motion } from 'framer-motion'
import { useState } from 'react'

const codeSnippets = [
  {
    language: 'Java',
    code: `@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {
    
    @Autowired
    private AppointmentService appointmentService;
    
    @PostMapping("/generate")
    public ResponseEntity<Appointment> createAppointment(
      @RequestBody AppointmentRequest request) {
        return ResponseEntity.ok(
            appointmentService.create(request)
        );
    }
}`,
    title: 'Spring Boot REST Controller'
  },
  {
    language: 'React',
    code: `import React, { useState, useEffect } from 'react';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  
  useEffect(() => {
    fetch('/api/appointments')
      .then(res => res.json())
      .then(data => setAppointments(data));
  }, []);

  return (
    <div className="dashboard">
      {appointments.map(appointment => (
        <AppointmentCard key={appointment.id} appointment={appointment} />
      ))}
    </div>
  );
};`,
    title: 'React Component with Hooks'
  },
  {
    language: 'Kafka',
    code: `@KafkaListener(
    topics = "appointment-events",
    groupId = "notification-group"
)
public void handleAppointmentEvent(
  AppointmentEvent event) {
    switch (event.getType()) {
        case "PAYMENT_RECEIVED":
            processPayment(event);
            break;
        case "APPOINTMENT_CREATED":
          publishNotification(event);
            break;
    }
}`,
    title: 'Kafka Event Listener'
  }
]

const CodeEditor = () => {
  const [activeSnippet, setActiveSnippet] = useState(0)
  const selectedSnippet = codeSnippets[activeSnippet]

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-surface">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Code Examples</h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-xl text-text-secondary max-w-2xl mx-auto"
          >
            Real production code from my projects
          </motion.p>
        </motion.div>

<div className="relative z-10 flex flex-wrap justify-center gap-4 mb-8">
          {codeSnippets.map((snippet, i) => {
            const isActive = activeSnippet === i

            return (
              <button
                key={i}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveSnippet(i)}
                className={`pointer-events-auto px-4 py-2 rounded-lg border transition-all duration-200 ${
                  isActive
                    ? 'glass border-primary text-primary'
                    : 'glass text-text-secondary hover:border-primary/50 hover:text-primary'
                }`}
              >
                {snippet.language}
              </button>
            )
          })}
        </div>

        <motion.div
          key={selectedSnippet.language}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 glass rounded-xl overflow-hidden card-hover"
        >
          <div className="bg-surface2 px-4 py-2 flex items-center gap-2 border-b border-surface3">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-sm text-text-secondary font-mono">{selectedSnippet.title}</span>
          </div>
          <pre className="p-6 text-sm md:text-base overflow-x-auto whitespace-pre-wrap break-words">
            <code className="font-mono text-primary break-words">
              {selectedSnippet.code}
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  )
}

export default CodeEditor
