'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Sparkles, Mic, MicOff, Camera, Palette, Home, Zap } from 'lucide-react'

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your AI design assistant. How can I help you transform your space today?",
      isBot: true,
      timestamp: new Date(),
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const quickActions = [
    { icon: Home, text: 'Room Design', action: 'Help me design a room' },
    { icon: Palette, text: 'Color Scheme', action: 'Suggest color combinations' },
    { icon: Camera, text: 'Upload Photo', action: 'Analyze my space' },
  ]

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages([...messages, newMessage])
    setInputMessage('')

    // Simulate bot response with typing indicator
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }

    const getBotResponse = (userMessage: string) => {
      const message = userMessage.toLowerCase()

      if (message.includes('room') || message.includes('design')) {
        return "I'd love to help you design your room! What type of space are you working with? I can suggest furniture, colors, and layout ideas. For personalized help, you can also book a consultation with our designers!"
      } else if (message.includes('color') || message.includes('paint')) {
        return "Great choice! Colors can transform any space. What's the mood you're going for? I can suggest color palettes that work perfectly together. Need professional color consultation? Contact us at nirmantech8@gmail.com!"
      } else if (message.includes('budget') || message.includes('cost')) {
        return "I understand budget is important! I can recommend cost-effective solutions and show you products at different price points. What's your budget range? Our team can help you maximize your budget!"
      } else if (message.includes('small') || message.includes('space')) {
        return "Small spaces are my specialty! I can suggest space-saving furniture, clever storage solutions, and design tricks to make your space feel larger. Want a custom small space design? Let's chat!"
      } else if (message.includes('contact') || message.includes('email') || message.includes('help')) {
        return "I'm here to help! For detailed assistance, you can reach our team at nirmantech8@gmail.com or use the contact form on our website. We typically respond within 24 hours!"
      } else {
        return "That's a great question! I'm here to help with all your design needs. Would you like to see some design recommendations, get color suggestions, or book a consultation with one of our designers? For immediate help, email us at nirmantech8@gmail.com!"
      }
    }

  const handleQuickAction = (action: string) => {
    setInputMessage(action)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 group"
      >
        <MessageCircle className="h-6 w-6" />
        <div className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs px-2 py-1 rounded-full animate-bounce-slow">
          AI
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-[500px] bg-white rounded-lg shadow-2xl border z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Sparkles className="h-5 w-5" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="font-semibold">AI Design Assistant</span>
                <p className="text-xs text-primary-100">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Quick Actions */}
          <div className="p-3 bg-gray-50 border-b">
            <div className="flex space-x-2">
              {quickActions.map((action, index) => {
                const Icon = action.icon
                return (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action.action)}
                    className="flex items-center space-x-1 px-3 py-1 bg-white border border-gray-200 rounded-full text-xs hover:bg-primary-50 hover:border-primary-300 transition-colors"
                  >
                    <Icon className="h-3 w-3" />
                    <span>{action.text}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`max-w-xs ${message.isBot ? 'mr-8' : 'ml-8'}`}>
                  <div
                    className={`px-4 py-2 rounded-lg ${
                      message.isBot
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-primary-600 text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                  <div className={`text-xs text-gray-500 mt-1 ${message.isBot ? 'text-left' : 'text-right'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <button
                onClick={() => setIsListening(!isListening)}
                className={`p-2 rounded-lg transition-colors ${
                  isListening 
                    ? 'bg-red-100 text-red-600' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </button>
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about design ideas..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Powered by AI • <span className="text-green-600">●</span> Online
            </p>
          </div>
        </div>
      )}
    </>
  )
}
