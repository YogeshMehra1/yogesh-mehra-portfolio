import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, User, Bot } from 'lucide-react'

const portfolioData = {
  name: 'Yogesh Mehra',
  role: 'Java Backend + Full Stack Developer',
  experience: '3.8 years',
  location: 'India',
  email: 'yogeshmehra.mehra1@gmail.com',
  phone: '+91 9675580388',
  github: 'https://github.com/YogeshMehra1',
  linkedin: 'https://linkedin.com',
  skills: ['Java 17', 'Spring Boot', 'Spring Cloud', 'REST APIs', 'Kafka', 'Redis', 'MySQL', 'AWS', 'React.js', 'Angular'],
  projects: [
    'Healthcare Management Platform (Infosys)',
    'Online Recruitment System (HKCL)',
    'Online Transfer System (HKCL)',
    'Resume Analyzer AI (Personal Project)'
  ],
  companies: ['Haryana Knowledge Corporation Ltd', 'Infosys Limited'],
  education: 'B.Tech in Computer Science',
  availability: 'Immediate Joiner'
}

const getResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase()

  // Greetings
  if (message.match(/^(hi|hello|hey|namaste|kaise ho)/)) {
    return `Hello! 👋 I'm Yogesh's portfolio assistant. I can help you with:\n• His technical skills & expertise\n• Work experience & projects\n• Contact information\n• Career opportunities\n\nWhat would you like to know?`
  }

  // Name
  if (message.match(/(name|kaun|who|kya naam)/)) {
    return `I'm ${portfolioData.name}, a passionate ${portfolioData.role} with ${portfolioData.experience} of hands-on experience building scalable backend systems and modern web applications.`
  }

  // Experience
  if (message.match(/(experience|exp|kitne saal|kitna time|work)/)) {
    return `I have ${portfolioData.experience} of professional experience:\n\nHaryana Knowledge Corporation Limited\n• Junior Software Developer, Jul 2022 – Oct 2025\n• Online Recruitment and Online Transfer systems\n• Java/Spring Boot APIs, MySQL, Angular, React.js, AWS\n\nInfosys Limited\n• Associate Consultant, Nov 2025 – Mar 2026\n• Healthcare Management Platform\n• Java 17, Spring Cloud, Kafka, Redis, Docker, AWS, React.js`
  }

  // Skills
  if (message.match(/(skill|tech|technology|technology|kya aata hai|technologies)/)) {
    return `**Backend Skills:**\n• Java 17, Spring Boot, Spring Cloud, Microservices\n• Kafka, Redis, MySQL, JPA/Hibernate\n• AWS, Docker, REST APIs\n\n**Frontend Skills:**\n• React.js, Angular, HTML5, CSS3\n\n**Testing & Tools:**\n• JUnit, Mockito, Postman, Swagger/OpenAPI\n• Git, GitHub Actions, CI/CD\n\nI build validated, secure, and maintainable full-stack applications.`
  }

  // Projects
  if (message.match(/(project|work|kya kaam|kya banaya|portfolio)/)) {
    return `**Key Projects:**\n\n1️⃣ **Healthcare Management Platform** (Infosys)\n• Patient, provider, and appointment workflows\n• Spring Cloud service communication and Resilience4j\n• Kafka notifications and Redis caching\n\n2️⃣ **Online Recruitment System** (HKCL)\n• Candidate registration, applications, admit cards\n• Payment gateway, OTP, AWS SNS notifications\n• PDF/Excel generation and AWS S3/EC2\n\n3️⃣ **Online Transfer System** (HKCL)\n• Secure document-verification workflows\n• JWT authentication and role-based authorization\n• React.js, Swagger/OpenAPI, and Postman\n\n4️⃣ **Resume Analyzer AI** (Personal)\n• Apache Tika, Spring AI, and Google Gemini\n• ATS score and improvement suggestions`
  }

  // Companies
  if (message.match(/(company|organization|kahan kaam kiya|where|job)/)) {
    return `**Professional Journey:**\n\nHaryana Knowledge Corporation Limited\n• Role: Junior Software Developer\n• Period: Jul 2022 – Oct 2025\n• Focus: Online Recruitment and Online Transfer systems\n\nInfosys Limited\n• Role: Associate Consultant\n• Period: Nov 2025 – Mar 2026\n• Focus: Healthcare Management Platform\n\nCurrent Status\n• Immediate Joiner - Ready for new opportunities!`
  }

  // Contact
  if (message.match(/(contact|email|phone|number|call|message|sambandh)/)) {
    return `Let's connect! 🤝\n\n📧 **Email:** ${portfolioData.email}\n📱 **Phone:** ${portfolioData.phone}\n💼 **GitHub:** ${portfolioData.github}\n🔗 **LinkedIn:** ${portfolioData.linkedin}\n📍 **Location:** ${portfolioData.location}\n\nFeel free to reach out for opportunities or collaborations!`
  }

  // Location
  if (message.match(/(location|where|kahan|kahan rehte ho|place)/)) {
    return `I'm based in ${portfolioData.location}, India. I'm open to both remote and on-site opportunities across India.`
  }

  // Availability
  if (message.match(/(available|join|job|work|hire|kab join kar sakte)/)) {
    return `I'm an **Immediate Joiner**! 🚀\n\nCurrently available and actively looking for:\n• Backend Developer roles\n• Full Stack Developer positions\n• Java/Spring Boot opportunities\n• Microservices architecture projects\n\nReady to contribute from Day 1!`
  }

  // Education
  if (message.match(/(education|degree|study|padhai|college)/)) {
    return `I hold a ${portfolioData.education}. My technical expertise comes from hands-on experience building production systems, continuous learning, and working on real-world enterprise projects.`
  }

  // GitHub
  if (message.match(/(github|code|repository|repo)/)) {
    return `Check out my GitHub: ${portfolioData.github}\n\nI share my projects, contribute to open source, and continuously update my portfolio with new learnings and experiments.`
  }

  // Resume
  if (message.match(/(resume|cv|download)/)) {
    return `You can download my resume from the Contact section on this website. It includes detailed information about my experience, skills, projects, and achievements.`
  }

  // Salary/CTC
  if (message.match(/(salary|ctc|package|pay|income|kitna milega)/)) {
    return `I'm open to discussing salary expectations based on the role, responsibilities, and company standards. Let's connect to discuss opportunities!`
  }

  // Why hire
  if (message.match(/(why hire|why select|kyun hire|benefit)/)) {
    return `**Why hire me?**\n\n✅ **3.8 years** of hands-on experience\n✅ Java 17, Spring Boot, and microservices expertise\n✅ Healthcare, recruitment, and document-verification workflows\n✅ Full-stack capability with React.js and Angular\n✅ Immediate joiner\n✅ Strong testing, API documentation, and debugging practice`
  }

  // Career goals
  if (message.match(/(career|goal|future|plan|kya chahte ho)/)) {
    return `**Career Goals:**\n\n• Master distributed systems architecture\n• Deep dive into AI/LLM integration with backend\n• Build scalable microservices at scale\n• Lead technical teams and mentor developers\n• Contribute to open-source projects\n\nI'm passionate about building systems that solve real-world problems and continuously learning new technologies.`
  }

  // Strengths
  if (message.match(/(strength|strong point|quality|best)/)) {
    return `**My Strengths:**\n\nBackend architecture - Spring Boot microservices\nAPI development - validation, business logic, and exception handling\nSecurity - Spring Security, JWT, and role-based authorization\nFull stack - Java APIs with React.js and Angular\nQuality - JUnit, Mockito, Swagger, and Postman`
  }

  // Default response
  return `I can help you with detailed information about:\n\n📌 **Experience** - Work history & companies\n📌 **Skills** - Technical expertise\n📌 **Projects** - Key achievements\n📌 **Contact** - How to reach me\n📌 **Career** - Goals & opportunities\n\nTry asking about any of these topics!`
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', text: `Hi! I'm ${portfolioData.name}'s assistant. Ask me anything about my skills, experience, or projects! 🚀` }
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = input
    setMessages(prev => [...prev, { role: 'user', text: userMessage }])
    setInput('')

    setTimeout(() => {
      const botResponse = getResponse(userMessage)
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }])
    }, 500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend()
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-primary text-background rounded-full shadow-lg hover:shadow-primary/50 transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-background border border-surface2 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-4 border-b border-surface2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary rounded-full">
                  <Bot className="w-5 h-5 text-background" />
                </div>
                <div>
                  <h3 className="font-bold">Portfolio Assistant</h3>
                  <p className="text-xs text-text-secondary">Ask about Yogesh</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'bot' && (
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.role === 'user'
                        ? 'bg-primary text-background'
                        : 'bg-surface text-text'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{msg.text}</p>
                  </div>
                  {msg.role === 'user' && (
                    <div className="p-2 bg-secondary/10 rounded-full">
                      <User className="w-4 h-4 text-secondary" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-surface2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about skills, experience..."
                  className="flex-1 px-4 py-2 bg-surface border border-surface2 rounded-lg focus:outline-none focus:border-primary text-sm"
                />
                <button
                  onClick={handleSend}
                  className="p-2 bg-primary text-background rounded-lg hover:bg-primary/80 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatBot
