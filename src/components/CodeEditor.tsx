import { motion } from 'framer-motion'
import { useState } from 'react'

const codeSnippets = [
  {
    language: 'Java',
    code: `@RestController
@RequestMapping("/api/invoices")
public class InvoiceController {
    
    @Autowired
    private InvoiceService invoiceService;
    
    @PostMapping("/generate")
    public ResponseEntity<Invoice> generateInvoice(
        @RequestBody InvoiceRequest request) {
        return ResponseEntity.ok(
            invoiceService.generateInvoice(request)
        );
    }
}`,
    title: 'Spring Boot REST Controller'
  },
  {
    language: 'React',
    code: `import React, { useState, useEffect } from 'react';

const InvoiceDashboard = () => {
  const [invoices, setInvoices] = useState([]);
  
  useEffect(() => {
    fetch('/api/invoices')
      .then(res => res.json())
      .then(data => setInvoices(data));
  }, []);

  return (
    <div className="dashboard">
      {invoices.map(inv => (
        <InvoiceCard key={inv.id} invoice={inv} />
      ))}
    </div>
  );
};`,
    title: 'React Component with Hooks'
  },
  {
    language: 'Kafka',
    code: `@KafkaListener(
    topics = "invoice-events",
    groupId = "invoice-group"
)
public void handleInvoiceEvent(
        InvoiceEvent event) {
    switch (event.getType()) {
        case "PAYMENT_RECEIVED":
            processPayment(event);
            break;
        case "INVOICE_GENERATED":
            notifyCustomer(event);
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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          Code Examples
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-xl text-text-secondary text-center mb-16 max-w-2xl mx-auto"
        >
          Real production code from my projects
        </motion.p>

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
                    ? 'bg-primary/10 border-primary text-primary shadow-[0_0_20px_rgba(0,255,136,0.15)]'
                    : 'bg-background border-surface2 text-text-secondary hover:border-primary/50 hover:text-primary'
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
          className="relative z-10 bg-background border border-surface2 rounded-xl overflow-hidden"
        >
          <div className="bg-surface2 px-4 py-2 flex items-center gap-2">
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
