#!/bin/bash

# 🚀 Quick Deployment Script for hömy
echo "🏠 hömy Quick Deployment"
echo "========================"

# Install Vercel CLI if not installed
if ! command -v vercel &> /dev/null; then
    echo "Installing Vercel CLI..."
    npm install -g vercel
fi

# Install Railway CLI if not installed
if ! command -v railway &> /dev/null; then
    echo "Installing Railway CLI..."
    npm install -g @railway/cli
fi

echo ""
echo "Choose what to deploy:"
echo "1) Frontend to Vercel"
echo "2) Backend to Railway"
echo "3) Both"
echo ""

read -p "Enter choice (1-3): " choice

case $choice in
    1)
        echo "Deploying frontend to Vercel..."
        cd client
        vercel --prod
        ;;
    2)
        echo "Deploying backend to Railway..."
        cd server
        railway up
        ;;
    3)
        echo "Deploying both..."
        echo "Frontend to Vercel..."
        cd client
        vercel --prod
        cd ..
        echo "Backend to Railway..."
        cd server
        railway up
        ;;
    *)
        echo "Invalid choice"
        ;;
esac

echo ""
echo "✅ Deployment complete!"
echo ""
echo "Next steps:"
echo "1. Update environment variables in your deployment platform"
echo "2. Update Firebase authorized domains"
echo "3. Test your deployed application"
echo ""
echo "For detailed instructions, see DEPLOYMENT_GUIDE.md"
