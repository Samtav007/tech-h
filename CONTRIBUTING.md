# Contributing to hömy

Thank you for your interest in contributing to hömy! This document provides guidelines and information for contributors.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Contributing Guidelines](#contributing-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting](#issue-reporting)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Documentation](#documentation)

## Code of Conduct

This project adheres to a code of conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [conduct@homy.com](mailto:conduct@homy.com).

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- MongoDB (local or Atlas)
- Firebase account (for authentication)

### Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/your-username/tech-h.git
   cd tech-h
   ```

2. **Install Dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install client dependencies
   cd client
   npm install
   
   # Install server dependencies
   cd ../server
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Copy environment templates
   cp server/env.example server/.env
   cp client/.env.example client/.env.local
   
   # Configure your environment variables
   # See PRODUCTION_ENV_TEMPLATES.md for details
   ```

4. **Start Development Servers**
   ```bash
   # Start both frontend and backend
   npm run dev
   
   # Or start individually
   cd client && npm run dev    # Frontend on :3000
   cd server && npm run dev    # Backend on :5001
   ```

## Project Structure

```
hömy/
├── client/                 # Next.js frontend
│   ├── app/               # App router pages
│   ├── components/        # React components
│   ├── contexts/          # React contexts
│   ├── lib/              # Utility functions
│   └── public/           # Static assets
├── server/               # Express.js backend
│   ├── routes/           # API routes
│   ├── models/           # MongoDB models
│   ├── middleware/       # Custom middleware
│   └── utils/            # Utility functions
├── .github/              # GitHub workflows
└── docs/                 # Documentation
```

## Contributing Guidelines

### Types of Contributions

We welcome several types of contributions:

- **Bug Reports**: Report bugs and issues
- **Feature Requests**: Suggest new features
- **Code Contributions**: Fix bugs, implement features
- **Documentation**: Improve documentation
- **Testing**: Add or improve tests
- **Design**: UI/UX improvements

### Before You Start

1. **Check Existing Issues**: Look for existing issues or discussions
2. **Create an Issue**: For significant changes, create an issue first
3. **Discuss**: Engage in discussions before starting work
4. **Assign**: Get assigned to the issue if working on it

## Pull Request Process

### 1. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-description
```

### 2. Make Changes

- Write clean, readable code
- Follow the coding standards
- Add tests for new functionality
- Update documentation as needed

### 3. Test Your Changes

```bash
# Run frontend tests
cd client
npm test

# Run backend tests
cd ../server
npm test

# Run linting
npm run lint
```

### 4. Commit Changes

```bash
git add .
git commit -m "feat: add new feature description"
```

**Commit Message Format:**
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

### 5. Push and Create PR

```bash
git push origin feature/your-feature-name
```

Create a pull request with:
- Clear title and description
- Reference related issues
- Screenshots for UI changes
- Test results

### 6. Review Process

- Automated tests must pass
- Code review by maintainers
- Address feedback and suggestions
- Merge after approval

## Issue Reporting

### Bug Reports

When reporting bugs, include:

```markdown
**Bug Description**
A clear description of the bug.

**Steps to Reproduce**
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected Behavior**
What you expected to happen.

**Actual Behavior**
What actually happened.

**Screenshots**
If applicable, add screenshots.

**Environment**
- OS: [e.g. macOS, Windows, Linux]
- Browser: [e.g. Chrome, Safari, Firefox]
- Version: [e.g. 1.0.0]

**Additional Context**
Any other context about the problem.
```

### Feature Requests

For feature requests, include:

```markdown
**Feature Description**
A clear description of the feature.

**Problem Statement**
What problem does this solve?

**Proposed Solution**
How should this work?

**Alternatives Considered**
Other solutions you've considered.

**Additional Context**
Any other context or screenshots.
```

## Coding Standards

### Frontend (React/Next.js)

- Use TypeScript for type safety
- Follow React best practices
- Use functional components with hooks
- Implement proper error boundaries
- Use Tailwind CSS for styling
- Follow Next.js conventions

```typescript
// Good example
interface UserProps {
  name: string;
  email: string;
  isPremium: boolean;
}

const UserCard: React.FC<UserProps> = ({ name, email, isPremium }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">{email}</p>
      {isPremium && (
        <span className="inline-block px-2 py-1 text-xs bg-gold text-white rounded">
          Premium
        </span>
      )}
    </div>
  );
};
```

### Backend (Node.js/Express)

- Use async/await for asynchronous operations
- Implement proper error handling
- Use middleware for common functionality
- Follow RESTful API conventions
- Validate input data
- Use proper HTTP status codes

```javascript
// Good example
const createUser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    
    // Validate input
    const validation = validateUserInput({ name, email, phone });
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        error: 'Invalid input',
        details: validation.errors
      });
    }
    
    // Create user
    const user = await User.create({ name, email, phone });
    
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: user
    });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};
```

### Database (MongoDB)

- Use Mongoose for schema validation
- Implement proper indexing
- Use transactions for complex operations
- Follow naming conventions

```javascript
// Good example
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

// Add indexes
userSchema.index({ email: 1 });
userSchema.index({ createdAt: -1 });
```

## Testing

### Frontend Testing

- Use Jest and React Testing Library
- Test component behavior, not implementation
- Mock external dependencies
- Aim for 80%+ code coverage

```typescript
// Example test
import { render, screen } from '@testing-library/react';
import UserCard from './UserCard';

describe('UserCard', () => {
  it('renders user information correctly', () => {
    const user = {
      name: 'John Doe',
      email: 'john@example.com',
      isPremium: true
    };
    
    render(<UserCard {...user} />);
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('Premium')).toBeInTheDocument();
  });
});
```

### Backend Testing

- Use Jest and Supertest
- Test API endpoints
- Mock database operations
- Test error scenarios

```javascript
// Example test
const request = require('supertest');
const app = require('../index');

describe('POST /api/users', () => {
  it('should create a new user', async () => {
    const userData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890'
    };
    
    const response = await request(app)
      .post('/api/users')
      .send(userData)
      .expect(201);
    
    expect(response.body.success).toBe(true);
    expect(response.body.data.name).toBe(userData.name);
  });
});
```

## Documentation

### Code Documentation

- Use JSDoc for functions and classes
- Document complex algorithms
- Include examples in documentation
- Keep README files updated

```javascript
/**
 * Creates a new user in the database
 * @param {Object} userData - User information
 * @param {string} userData.name - User's full name
 * @param {string} userData.email - User's email address
 * @param {string} userData.phone - User's phone number
 * @returns {Promise<Object>} Created user object
 * @throws {Error} If user creation fails
 */
const createUser = async (userData) => {
  // Implementation
};
```

### API Documentation

- Use Swagger/OpenAPI for API documentation
- Document all endpoints
- Include request/response examples
- Keep documentation up to date

## Getting Help

- **Discord**: Join our community Discord
- **Email**: [dev@homy.com](mailto:dev@homy.com)
- **Issues**: Create GitHub issues for questions
- **Discussions**: Use GitHub Discussions for general questions

## Recognition

Contributors will be recognized in:
- CONTRIBUTORS.md file
- Release notes
- Project documentation
- Community highlights

## License

By contributing to hömy, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to hömy! 🏠✨
