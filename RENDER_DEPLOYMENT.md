# 🚀 Render Deployment Guide for hömy

## Quick Fix for Current Error

### Step 1: Delete Current Deployment
1. Go to your Render dashboard
2. Find your current deployment
3. Click on it and delete it

### Step 2: Create New Web Service
1. Click "New +" → "Web Service"
2. Connect your GitHub repository: `https://github.com/Samtav007/tech-h.git`
3. Use these settings:

**Basic Settings:**
- **Name**: `homy-frontend`
- **Environment**: `Node`
- **Region**: Choose closest to you
- **Branch**: `main`
- **Root Directory**: Leave empty
- **Runtime**: `Node`

**Build & Deploy:**
- **Build Command**: `npm run build`
- **Start Command**: `npm start`

### Step 3: Environment Variables
Add these environment variables in Render dashboard:

```
NODE_ENV=production
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCv01ZQAkJF5SC_y7UQWI-73u9uxisk6j8
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=homy-auth1.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=homy-auth1
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=homy-auth1.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=595109350511
NEXT_PUBLIC_FIREBASE_APP_ID=1:595109350511:web:686dbc363e7da9493d119a
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-9RL8C7QWQJ
```

### Step 4: Deploy
1. Click "Create Web Service"
2. Wait for deployment to complete
3. Your app will be available at: `https://homy-frontend.onrender.com`

## Alternative: Manual Configuration

If the above doesn't work, try these manual settings:

**Build Command:**
```bash
cd client && npm install && npm run build
```

**Start Command:**
```bash
cd client && npm start
```

## Troubleshooting

### Common Issues:

1. **Build Fails**: Make sure all dependencies are in package.json
2. **Start Command Fails**: Check if the start command is correct
3. **Environment Variables**: Ensure all Firebase variables are set
4. **Port Issues**: Render automatically assigns ports

### If Still Having Issues:

1. **Check Logs**: Look at the build logs in Render dashboard
2. **Test Locally**: Run `npm run build` and `npm start` locally first
3. **Contact Support**: Use Render's support if needed

## Next Steps After Successful Deployment:

1. **Update Firebase**: Add your Render domain to Firebase authorized domains
2. **Test Authentication**: Verify Google sign-in works
3. **Test All Pages**: Make sure all routes work correctly
4. **Set Up Backend**: Deploy backend separately if needed

## Backend Deployment (Optional)

If you want to deploy the backend too:

1. Create another Web Service
2. Use these settings:
   - **Build Command**: `cd server && npm install`
   - **Start Command**: `cd server && npm start`
   - **Environment Variables**: Add backend-specific variables

Your hömy app should now be live on Render! 🎉
