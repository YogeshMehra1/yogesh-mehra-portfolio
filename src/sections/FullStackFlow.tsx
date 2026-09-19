import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowDown } from 'lucide-react'

const flowLayers = [
  { id: 'react', label: 'React.js', description: 'Modern component-based UI library for building interactive user interfaces with reusable components and virtual DOM for optimal performance.' },
  { id: 'typescript', label: 'TypeScript', description: 'Typed superset of JavaScript that adds static type checking, enabling safer code and better developer experience with IDE support.' },
  { id: 'rest', label: 'REST API', description: 'Representational State Transfer API architecture for communication between frontend and backend using HTTP methods and JSON data format.' },
  { id: 'spring', label: 'Spring Boot', description: 'Java framework for building production-ready applications with auto-configuration, embedded servers, and comprehensive ecosystem for enterprise development.' },
  { id: 'microservices', label: 'Microservices', description: 'Architectural style that structures applications as small, independent services communicating via APIs, enabling scalable and maintainable systems.' },
  { id: 'kafka', label: 'Kafka', description: 'Distributed event streaming platform for handling real-time data feeds and enabling asynchronous communication between microservices.' },
  { id: 'redis', label: 'Redis', description: 'In-memory data store used for caching, session management, and real-time analytics, providing sub-millisecond response times.' },
  { id: 'postgres', label: 'PostgreSQL', description: 'Advanced open-source relational database with ACID compliance, complex queries, and support for JSON data types for flexible schema design.' },
  { id: 'aws', label: 'AWS', description: 'Cloud computing platform providing scalable infrastructure services including EC2, S3, RDS, and managed services for deploying applications.' },
]

const FullStackFlow = () => {
  const [selectedLayer, setSelectedLayer] = useState<string | null>(null)

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-surface">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">From Browser to Database</h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-text-secondary max-w-2xl mx-auto"
          >
            Click on any layer to understand its role in the full stack architecture
          </motion.p>
        </motion.div>

        <div className="flex flex-col items-center gap-4 mb-16">
          {flowLayers.map((layer, i) => (
            <div key={layer.id} className="flex items-center gap-4 w-full max-w-md">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                onClick={() => setSelectedLayer(selectedLayer === layer.id ? null : layer.id)}
                className={`flex-1 p-4 rounded-xl border cursor-pointer transition-all card-hover ${
                  selectedLayer === layer.id
                    ? 'glass border-primary/50'
                    : 'glass hover:border-primary/30'
                }`}
              >
                <div className="font-semibold text-lg">{layer.label}</div>
              </motion.div>
              {i < flowLayers.length - 1 && (
                <ArrowDown className="w-6 h-6 text-primary hidden md:block" />
              )}
            </div>
          ))}
        </div>

        {selectedLayer && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto glass rounded-xl p-6"
          >
            <h3 className="text-xl font-bold text-primary mb-3">
              {flowLayers.find(l => l.id === selectedLayer)?.label}
            </h3>
            <p className="text-text-secondary">
              {flowLayers.find(l => l.id === selectedLayer)?.description}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default FullStackFlow
