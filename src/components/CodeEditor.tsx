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

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-surface">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          Code Examples
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-text-secondary text-center mb-16 max-w-2xl mx-auto"
        >
          Real production code from my projects
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {codeSnippets.map((snippet, i) => (
            <button
              key={i}
              onClick={() => setActiveSnippet(i)}
              className={`px-4 py-2 rounded-lg border transition-all ${
                activeSnippet === i
                  ? 'bg-primary/20 border-primary text-primary'
                  : 'bg-background border-surface2 hover:border-primary/50'
              }`}
            >
              {snippet.language}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          key={activeSnippet}
          transition={{ duration: 0.4 }}
          className="bg-background border border-surface2 rounded-xl overflow-hidden"
        >
          <div className="bg-surface2 px-4 py-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-sm text-text-secondary font-mono">{codeSnippets[activeSnippet].title}</span>
          </div>
          <pre className="p-6 text-sm md:text-base overflow-x-auto">
            <code className="font-mono text-primary">
              {codeSnippets[activeSnippet].code}
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  )
}

export default CodeEditor
