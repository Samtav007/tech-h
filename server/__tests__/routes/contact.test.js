const request = require('supertest')
const express = require('express')
const contactRoutes = require('../../routes/contact')

// Create a test app
const app = express()
app.use(express.json())
app.use('/api/contact', contactRoutes)

describe('Contact API', () => {
  describe('POST /api/contact', () => {
    it('should send contact form successfully', async () => {
      const contactData = {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+1234567890',
        company: 'Test Company',
        message: 'This is a test message',
        service: 'interior-design'
      }

      const response = await request(app)
        .post('/api/contact')
        .send(contactData)
        .expect(200)

      expect(response.body).toHaveProperty('success', true)
      expect(response.body).toHaveProperty('message')
    })

    it('should return 400 for missing required fields', async () => {
      const incompleteData = {
        name: 'John Doe',
        email: 'john@example.com'
        // Missing required fields
      }

      const response = await request(app)
        .post('/api/contact')
        .send(incompleteData)
        .expect(400)

      expect(response.body).toHaveProperty('success', false)
      expect(response.body).toHaveProperty('error')
    })

    it('should return 400 for invalid email format', async () => {
      const invalidEmailData = {
        name: 'John Doe',
        email: 'invalid-email',
        phone: '+1234567890',
        message: 'This is a test message',
        service: 'interior-design'
      }

      const response = await request(app)
        .post('/api/contact')
        .send(invalidEmailData)
        .expect(400)

      expect(response.body).toHaveProperty('success', false)
      expect(response.body.error).toContain('email')
    })
  })
})
