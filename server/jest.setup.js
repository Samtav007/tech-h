// Jest setup for backend testing

// Mock environment variables
process.env.NODE_ENV = 'test'
process.env.PORT = '5001'
process.env.JWT_SECRET = 'test-jwt-secret'
process.env.GMAIL_USER = 'test@example.com'
process.env.GMAIL_APP_PASSWORD = 'test-password'

// Mock console methods to reduce noise in tests
global.console = {
  ...console,
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
}

// Global test timeout
jest.setTimeout(10000)
