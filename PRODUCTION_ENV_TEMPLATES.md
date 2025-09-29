# 🔧 Production Environment Variables Templates

## Frontend Environment Variables (.env.production)

Create this file in your deployment platform (Vercel, Netlify, etc.):

```bash
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCv01ZQAkJF5SC_y7UQWI-73u9uxisk6j8
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=homy-auth1.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=homy-auth1
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=homy-auth1.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=595109350511
NEXT_PUBLIC_FIREBASE_APP_ID=1:595109350511:web:686dbc363e7da9493d119a
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-9RL8C7QWQJ

# API Configuration - Update this with your production backend URL
NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_HOTJAR_ID=your-hotjar-id
```

## Backend Environment Variables (.env.production)

Create this file in your deployment platform (Railway, Render, Heroku, etc.):

```bash
# Server Configuration
PORT=5000
NODE_ENV=production

# Client URL - Update this with your production frontend URL
CLIENT_URL=https://your-frontend-url.vercel.app

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-for-production-change-this

# Email Configuration
GMAIL_USER=nirmantech8@gmail.com
GMAIL_APP_PASSWORD=your_gmail_app_password

# Database Configuration (when using MongoDB)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/homy

# Security
CORS_ORIGIN=https://your-frontend-url.vercel.app
```

## Important Notes

1. **Update URLs**: Replace `your-backend-url.railway.app` and `your-frontend-url.vercel.app` with your actual deployment URLs
2. **JWT Secret**: Generate a strong, unique JWT secret for production
3. **Gmail Password**: Use your Gmail app password (not your regular password)
4. **MongoDB**: Only add MongoDB URI if you're using a database
5. **Security**: Never commit these files to version control

## How to Set Environment Variables

### Vercel (Frontend)
1. Go to your project dashboard
2. Go to Settings → Environment Variables
3. Add each variable with its value

### Railway (Backend)
1. Go to your project dashboard
2. Go to Variables tab
3. Add each variable with its value

### Netlify (Frontend Alternative)
1. Go to Site settings → Environment variables
2. Add each variable with its value

### Render (Backend Alternative)
1. Go to your service dashboard
2. Go to Environment tab
3. Add each variable with its value
