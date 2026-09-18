import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, User, Bot } from 'lucide-react'

const portfolioData = {
  name: 'Yogesh Mehra',
  role: 'Java Backend + Full Stack Developer',
  experience: '3.8 years',
  location: 'Uttarakhand, India',
  email: 'yogeshmehra.mehra1@gmail.com',
  phone: '+91 9675580388',
  github: 'https://github.com/YogeshMehra1',
  linkedin: 'https://linkedin.com',
  skills: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'PostgreSQL', 'AWS', 'React.js', 'TypeScript', 'Node.js'],
  projects: [
    'Revenue & Invoicing Platform (Infosys)',
    'State Examination Management System (HKCL)',
    'Citizen Services Portal (Government)'
  ],
  companies: ['Haryana Knowledge Corporation Ltd', 'Infosys Limited'],
  education: 'B.Tech in Computer Science',
  availability: 'Immediate Joiner'
}

const getResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase()

  // Greetings
  if (message.match(/^(hi|hello|hey|namaste|kaise ho)/)) {
    return `Hello! I'm Yogesh's portfolio assistant. Ask me anything about his skills, experience, or projects! 👋`
  }

  // Name
  if (message.match(/(name|kaun|who|kya naam)/)) {
    return `My name is ${portfolioData.name}. I'm a ${portfolioData.role}.`
  }

  // Experience
  if (message.match(/(experience|exp|kitne saal|kitna time|work)/)) {
    return `I have ${portfolioData.experience} of experience. Worked at ${portfolioData.companies.join(' and ')}.`
  }

  // Skills
  if (message.match(/(skill|tech|technology|technology|kya aata hai|technologies)/)) {
    return `My core skills: ${portfolioData.skills.slice(0, 5).join(', ')}. Also experienced with ${portfolioData.skills.slice(5).join(', ')}.`
  }

  // Projects
  if (message.match(/(project|work|kya kaam|kya banaya|portfolio)/)) {
    return `Key projects:\n• ${portfolioData.projects[0]}\n• ${portfolioData.projects[1]}\n• ${portfolioData.projects[2]}`
  }

  // Companies
  if (message.match(/(company|organization|kahan kaam kiya|where|job)/)) {
    return `Worked at:\n• ${portfolioData.companies[0]} (11 Jul 2022 – 31 Oct 2025)\n• ${portfolioData.companies[1]} (3 Nov 2025 – 13 Mar 2026)`
  }

  // Contact
  if (message.match(/(contact|email|phone|number|call|message|sambandh)/)) {
    return `Contact me:\n📧 ${portfolioData.email}\n📱 ${portfolioData.phone}\n💼 ${portfolioData.github}\n🔗 ${portfolioData.linkedin}`
  }

  // Location
  if (message.match(/(location|where|kahan|kahan rehte ho|place)/)) {
    return `I'm based in ${portfolioData.location}.`
  }

  // Availability
  if (message.match(/(available|join|job|work|hire|kab join kar sakte)/)) {
    return `I'm ${portfolioData.availability}! Ready to take on new challenges in backend and full stack engineering.`
  }

  // Education
  if (message.match(/(education|degree|study|padhai|college)/)) {
    return `I have a ${portfolioData.education}.`
  }

  // GitHub
  if (message.match(/(github|code|repository|repo)/)) {
    return `Check my GitHub: ${portfolioData.github}`
  }

  // Resume
  if (message.match(/(resume|cv|download)/)) {
    return `You can download my resume from the Contact section or click the Download Resume button!`
  }

  // Default response
  return `I can help you with information about my skills, experience, projects, or contact details. Try asking about "experience", "skills", "projects", or "contact".`
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
