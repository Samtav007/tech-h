# 🚀 hömy Deployment Guide
## Deploy Frontend & Backend to Production

### 📋 **Deployment Overview**

This guide covers deploying your hömy project to production with:
- **Frontend**: Vercel (recommended) or Netlify
- **Backend**: Railway, Render, or Heroku
- **Database**: MongoDB Atlas (when needed)
- **Domain**: Custom domain setup

---

## 🎯 **Quick Deployment Options**

### **Option 1: Vercel + Railway (Recommended)**
- **Frontend**: Vercel (free tier)
- **Backend**: Railway (free tier)
- **Database**: MongoDB Atlas (free tier)

### **Option 2: Netlify + Render**
- **Frontend**: Netlify (free tier)
- **Backend**: Render (free tier)
- **Database**: MongoDB Atlas (free tier)

### **Option 3: Vercel + Heroku**
- **Frontend**: Vercel (free tier)
- **Backend**: Heroku (paid, but reliable)
- **Database**: MongoDB Atlas (free tier)

---

## 🌐 **Frontend Deployment (Vercel)**

### **Step 1: Prepare Frontend for Production**

1. **Update Environment Variables for Production**
   ```bash
   # Create production environment file
   cd client
   cp .env.local .env.production.local
   ```

2. **Update Production Environment Variables**
   ```bash
   # In .env.production.local
   NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCv01ZQAkJF5SC_y7UQWI-73u9uxisk6j8
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=homy-auth1.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=homy-auth1
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=homy-auth1.firebasestorage.app
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=595109350511
   NEXT_PUBLIC_FIREBASE_APP_ID=1:595109350511:web:686dbc363e7da9493d119a
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-9RL8C7QWQJ
   
   # Update API URL to your production backend
   NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app
   ```

### **Step 2: Deploy to Vercel**

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from Client Directory**
   ```bash
   cd client
   vercel
   ```

4. **Follow the Prompts**
   - Set up and deploy? **Yes**
   - Which scope? **Your account**
   - Link to existing project? **No**
   - Project name: **homy-frontend**
   - Directory: **./client**
   - Override settings? **No**

5. **Set Environment Variables in Vercel Dashboard**
   - Go to your project in Vercel dashboard
   - Go to Settings → Environment Variables
   - Add all the environment variables from `.env.production.local`

### **Step 3: Configure Custom Domain (Optional)**
1. Go to Vercel dashboard → Your project → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

---

## ⚙️ **Backend Deployment (Railway)**

### **Step 1: Prepare Backend for Production**

1. **Create Production Environment File**
   ```bash
   cd server
   cp env.example .env.production
   ```

2. **Update Production Environment Variables**
   ```bash
   # In .env.production
   PORT=5000
   NODE_ENV=production
   CLIENT_URL=https://your-frontend-url.vercel.app
   JWT_SECRET=your-super-secret-jwt-key-for-production
   GMAIL_USER=nirmantech8@gmail.com
   GMAIL_APP_PASSWORD=your_gmail_app_password
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/homy
   ```

### **Step 2: Deploy to Railway**

1. **Install Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login to Railway**
   ```bash
   railway login
   ```

3. **Initialize Railway Project**
   ```bash
   cd server
   railway init
   ```

4. **Deploy to Railway**
   ```bash
   railway up
   ```

5. **Set Environment Variables**
   ```bash
   railway variables set NODE_ENV=production
   railway variables set CLIENT_URL=https://your-frontend-url.vercel.app
   railway variables set JWT_SECRET=your-super-secret-jwt-key
   railway variables set GMAIL_USER=nirmantech8@gmail.com
   railway variables set GMAIL_APP_PASSWORD=your_gmail_app_password
   ```

6. **Get Your Backend URL**
   ```bash
   railway domain
   ```

---

## 🗄️ **Database Setup (MongoDB Atlas)**

### **Step 1: Create MongoDB Atlas Account**
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account
3. Create a new cluster (free tier)

### **Step 2: Configure Database**
1. **Create Database User**
   - Go to Database Access
   - Add new user with read/write permissions

2. **Whitelist IP Addresses**
   - Go to Network Access
   - Add IP address (0.0.0.0/0 for all IPs)

3. **Get Connection String**
   - Go to Clusters → Connect
   - Choose "Connect your application"
   - Copy the connection string

### **Step 3: Update Backend Environment**
```bash
# Add to your backend environment variables
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/homy
```

---

## 🔧 **Alternative Deployment Options**

### **Frontend: Netlify**

1. **Build the Project**
   ```bash
   cd client
   npm run build
   npm run export  # If using static export
   ```

2. **Deploy to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Drag and drop the `out` folder (or `dist` folder)
   - Or connect your GitHub repository

3. **Set Environment Variables**
   - Go to Site settings → Environment variables
   - Add all your environment variables

### **Backend: Render**

1. **Connect GitHub Repository**
   - Go to [Render](https://render.com)
   - Connect your GitHub account
   - Select your repository

2. **Configure Service**
   - **Name**: homy-backend
   - **Environment**: Node
   - **Build Command**: `cd server && npm install`
   - **Start Command**: `cd server && npm start`

3. **Set Environment Variables**
   - Add all environment variables in the dashboard

### **Backend: Heroku**

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   ```

2. **Create Heroku App**
   ```bash
   cd server
   heroku create homy-backend
   ```

3. **Set Environment Variables**
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set CLIENT_URL=https://your-frontend-url.vercel.app
   heroku config:set JWT_SECRET=your-super-secret-jwt-key
   ```

4. **Deploy**
   ```bash
   git add .
   git commit -m "Deploy to Heroku"
   git push heroku main
   ```

---

## 🔐 **Firebase Configuration for Production**

### **Update Authorized Domains**
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project: `homy-auth1`
3. Go to Authentication → Settings
4. Add your production domains:
   - `your-domain.vercel.app`
   - `your-custom-domain.com`

### **Update Firebase Configuration**
Your Firebase configuration is already set up correctly for production.

---

## 📱 **Testing Your Deployment**

### **Frontend Testing**
1. Visit your deployed frontend URL
2. Test all pages and functionality
3. Test Google authentication
4. Test responsive design

### **Backend Testing**
1. Test API endpoints:
   ```bash
   curl https://your-backend-url.railway.app/health
   curl https://your-backend-url.railway.app/api/contact
   ```

### **Integration Testing**
1. Test contact form submission
2. Test user authentication flow
3. Test API connectivity

---

## 🚀 **Automated Deployment with GitHub**

### **Frontend: Vercel GitHub Integration**
1. Connect your GitHub repository to Vercel
2. Enable automatic deployments
3. Set up preview deployments for pull requests

### **Backend: Railway GitHub Integration**
1. Connect your GitHub repository to Railway
2. Enable automatic deployments
3. Set up environment-specific deployments

---

## 📊 **Monitoring and Analytics**

### **Frontend Monitoring**
- **Vercel Analytics**: Built-in performance monitoring
- **Google Analytics**: Add your GA tracking ID
- **Error Tracking**: Consider Sentry for error monitoring

### **Backend Monitoring**
- **Railway Metrics**: Built-in monitoring dashboard
- **Logs**: Access logs through Railway dashboard
- **Uptime Monitoring**: Consider UptimeRobot

---

## 🔧 **Production Optimizations**

### **Frontend Optimizations**
```bash
# In client/next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // For static export
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

### **Backend Optimizations**
```javascript
// In server/index.js
const compression = require('compression');
app.use(compression());

// Add caching headers
app.use((req, res, next) => {
  res.set('Cache-Control', 'public, max-age=31536000');
  next();
});
```

---

## 🆘 **Troubleshooting**

### **Common Issues**

1. **CORS Errors**
   - Update `CLIENT_URL` in backend environment variables
   - Ensure frontend URL is correctly set

2. **Firebase Authentication Errors**
   - Check authorized domains in Firebase Console
   - Verify environment variables are set correctly

3. **Build Failures**
   - Check for TypeScript errors
   - Ensure all dependencies are installed
   - Check environment variable names

4. **API Connection Issues**
   - Verify backend URL is correct
   - Check if backend is running
   - Verify CORS configuration

### **Debug Commands**
```bash
# Check frontend build
cd client && npm run build

# Check backend locally
cd server && npm start

# Check environment variables
echo $NODE_ENV
```

---

## 📋 **Deployment Checklist**

### **Pre-Deployment**
- [ ] Update environment variables for production
- [ ] Test locally with production environment
- [ ] Update Firebase authorized domains
- [ ] Prepare database (if using MongoDB)
- [ ] Update API URLs in frontend

### **Frontend Deployment**
- [ ] Deploy to Vercel/Netlify
- [ ] Set environment variables
- [ ] Test all pages
- [ ] Test authentication
- [ ] Test responsive design

### **Backend Deployment**
- [ ] Deploy to Railway/Render/Heroku
- [ ] Set environment variables
- [ ] Test API endpoints
- [ ] Test database connection
- [ ] Test email functionality

### **Post-Deployment**
- [ ] Test full application flow
- [ ] Set up monitoring
- [ ] Configure custom domain
- [ ] Set up SSL certificates
- [ ] Test performance

---

## 🎉 **Your hömy App is Now Live!**

Once deployed, your hömy application will be accessible at:
- **Frontend**: `https://your-app.vercel.app`
- **Backend**: `https://your-app.railway.app`
- **Custom Domain**: `https://your-domain.com`

### **Next Steps**
1. **Set up monitoring** and analytics
2. **Configure custom domain** (optional)
3. **Set up automated backups** for database
4. **Implement CI/CD pipeline** for future updates
5. **Set up staging environment** for testing

---

**Happy Deploying! 🚀**

*For support, contact: nirmantech8@gmail.com*
