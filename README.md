# hömy - AI-Powered Interior Design Platform

A modern, full-stack web application for AI-powered interior design, combining the simplicity of Airbnb, elegance of Apple, and inspiration of Houzz with cutting-edge AI technology.

## 🏗️ **Project Structure**

```
homy-fullstack/
├── client/                 # Frontend (Next.js 14 + TypeScript)
│   ├── app/               # Next.js App Router
│   ├── components/        # React Components
│   ├── contexts/          # React Contexts
│   ├── lib/              # Utility Libraries
│   └── package.json      # Frontend Dependencies
├── server/               # Backend (Express.js + Node.js)
│   ├── routes/           # API Routes
│   ├── models/           # Database Models
│   ├── middleware/       # Express Middleware
│   ├── utils/            # Server Utilities
│   └── package.json      # Backend Dependencies
└── package.json          # Root Package Configuration
```

## 🚀 **Quick Start**

### Prerequisites
- Node.js 18+ 
- npm 8+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/techie-home/homy.git
   cd homy
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables**
   
   **Server (.env in server/ folder):**
   ```bash
   cd server
   cp env.example .env
   # Edit .env with your configuration
   ```
   
   **Client (.env.local in client/ folder):**
   ```bash
   cd client
   # Create .env.local with:
   API_URL=http://localhost:5000
   ```

4. **Start development servers**
   ```bash
   npm run dev
   ```

   This will start:
   - **Frontend**: http://localhost:3000
   - **Backend**: http://localhost:5000

## 📁 **Detailed Structure**

### Frontend (Client)
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context
- **Icons**: Lucide React

**Key Features:**
- ✅ Responsive design (mobile-first)
- ✅ Modern UI/UX with hömy branding
- ✅ Authentication system
- ✅ AI Chatbot integration
- ✅ Product catalog with filters
- ✅ User dashboard
- ✅ Contact forms with email integration

### Backend (Server)
- **Framework**: Express.js
- **Language**: JavaScript (Node.js)
- **Authentication**: JWT
- **Email**: Nodemailer
- **Validation**: Express-validator
- **Security**: Helmet, CORS, Rate limiting

**API Endpoints:**
- `POST /api/contact` - Contact form submission
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/designs` - Get user designs
- `POST /api/designs` - Create new design
- `GET /api/products` - Get products with filters
- `GET /api/products/:id` - Get specific product

## 🛠️ **Development Commands**

### Root Level Commands
```bash
npm run dev              # Start both client and server
npm run build            # Build both client and server
npm run start            # Start production servers
npm run install:all      # Install all dependencies
npm run clean            # Clean all node_modules
npm run lint             # Lint both client and server
```

### Client Commands
```bash
cd client
npm run dev              # Start Next.js dev server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Lint TypeScript/React code
```

### Server Commands
```bash
cd server
npm run dev              # Start Express dev server (with nodemon)
npm run start            # Start production server
npm run test             # Run tests
```

## 🔧 **Configuration**

### Environment Variables

**Server (.env):**
```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000
JWT_SECRET=your-super-secret-jwt-key
GMAIL_USER=nirmantech8@gmail.com
GMAIL_APP_PASSWORD=your_gmail_app_password
```

**Client (.env.local):**
```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key-here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef123456

# API Configuration
API_URL=http://localhost:5000
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_HOTJAR_ID=your_hotjar_id
```

## 🔥 **Firebase Google Authentication Setup**

To enable Google sign-in:

1. **Create Firebase Project**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Google Authentication in Authentication → Sign-in method

2. **Get Firebase Config**:
   - Go to Project Settings → General
   - Add a web app and copy the config
   - Add the config to `client/.env.local`

3. **Configure Authorized Domains**:
   - Add `localhost` to authorized domains in Firebase Console
   - Add your production domain when deploying

See `FIREBASE_SETUP.md` for detailed instructions.

## 📧 **Email Setup**

To enable contact form emails:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account Settings
   - Security → App passwords
   - Generate password for "Mail"
3. **Add to server/.env**:
   ```env
   GMAIL_USER=nirmantech8@gmail.com
   GMAIL_APP_PASSWORD=your_16_character_app_password
   ```

## 🎨 **Features**

### Frontend Features
- **Modern Design**: Clean, professional UI with hömy branding
- **Responsive**: Mobile-first design that works on all devices
- **Authentication**: Complete login/signup system
- **AI Chatbot**: Interactive design assistant
- **Product Catalog**: Advanced filtering and search
- **User Dashboard**: Personal design management
- **Contact Forms**: Email integration with Gmail

### Backend Features
- **RESTful API**: Well-structured API endpoints
- **Authentication**: JWT-based user authentication
- **Email Service**: Automated email sending
- **Data Validation**: Input validation and sanitization
- **Security**: CORS, rate limiting, helmet protection
- **Error Handling**: Comprehensive error management

## 🚀 **Deployment**

### Frontend (Vercel/Netlify)
```bash
cd client
npm run build
# Deploy the 'out' or '.next' folder
```

### Backend (Railway/Heroku/DigitalOcean)
```bash
cd server
npm run build
# Deploy with environment variables configured
```

## 📱 **Pages & Routes**

### Frontend Routes
- `/` - Home page with hero and features
- `/about` - Company information and team
- `/how-it-works` - Process explanation
- `/services` - Service plans and features
- `/products` - Product catalog
- `/blog` - Design inspiration and tips
- `/testimonials` - Customer success stories
- `/careers` - Job opportunities
- `/contact` - Contact form and information
- `/auth` - Login and signup
- `/dashboard` - User dashboard
- `/profile` - User profile settings

### API Routes
- `POST /api/contact` - Contact form
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Current user
- `GET /api/users/profile` - User profile
- `PUT /api/users/profile` - Update profile
- `GET /api/designs` - User designs
- `POST /api/designs` - Create design
- `GET /api/products` - Products with filters
- `GET /api/products/:id` - Specific product

## 🆘 **Support**

For questions or support:
- **Email**: nirmantech8@gmail.com
- **Website**: https://homy.com
- **YouTube**: https://www.youtube.com/@TechieHome-x6g
- **Instagram**: https://www.instagram.com/techiehome007
- **LinkedIn**: https://www.linkedin.com/company/techie-home
- **WhatsApp Community**: https://chat.whatsapp.com/KWTwHE1NGGZA5yD57YOYsk

## 📄 **License**

MIT License - see LICENSE file for details.

---

**Built with ❤️ by Techie Home Team**