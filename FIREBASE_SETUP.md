# 🔥 Firebase Google Authentication Setup Guide

## 🚀 **Quick Setup (10 minutes)**

### 1. **Create Firebase Project**

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Create a project"**
3. Enter project name: `homy-auth` (or your preferred name)
4. Enable Google Analytics (optional)
5. Click **"Create project"**

### 2. **Enable Authentication**

1. In your Firebase project, go to **Authentication** in the left sidebar
2. Click **"Get started"**
3. Go to **"Sign-in method"** tab
4. Click on **"Google"** provider
5. Toggle **"Enable"**
6. Add your project support email
7. Click **"Save"**

### 3. **Get Firebase Configuration**

1. Go to **Project Settings** (gear icon)
2. Scroll down to **"Your apps"** section
3. Click **"Add app"** and select **Web** (</> icon)
4. Register your app with nickname: `homy-web`
5. Copy the Firebase configuration object

### 4. **Configure Environment Variables**

Create a `.env.local` file in the `client/` folder with:

```bash
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key-here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef123456

# API Configuration
API_URL=http://localhost:5001
```

### 5. **Configure Authorized Domains**

1. In Firebase Console, go to **Authentication** → **Settings**
2. Scroll to **"Authorized domains"**
3. Add your domains:
   - `localhost` (for development)
   - `your-domain.com` (for production)

## 🎯 **What You'll Get**

✅ **Google Sign-In Button** - One-click authentication
✅ **User Profile Management** - Name, email, photo
✅ **Secure Authentication** - Firebase handles security
✅ **Session Management** - Automatic login persistence
✅ **Error Handling** - Built-in error management

## 🔧 **Testing**

1. Start your development server: `npm run dev`
2. Go to `http://localhost:3000/auth`
3. Click **"Sign in with Google"**
4. Complete Google authentication
5. You'll be redirected to dashboard

## 📱 **Features Included**

- **Google OAuth Integration**
- **User Profile Display**
- **Logout Functionality**
- **Protected Routes**
- **Session Persistence**
- **Error Handling**

## 🚨 **Important Notes**

- **Never commit** `.env.local` to version control
- **Use HTTPS** in production
- **Configure authorized domains** properly
- **Test on different browsers**

## 🆘 **Troubleshooting**

**Common Issues:**

1. **"Firebase: Error (auth/unauthorized-domain)"**
   - Add your domain to authorized domains in Firebase Console

2. **"Firebase: Error (auth/api-key-not-valid)"**
   - Check your API key in `.env.local`

3. **"Firebase: Error (auth/operation-not-allowed)"**
   - Enable Google provider in Firebase Console

**Need Help?**
- [Firebase Documentation](https://firebase.google.com/docs/auth/web/google-signin)
- [Firebase Console](https://console.firebase.google.com/)

---

**Your Firebase Google Authentication is now ready!** 🎉
