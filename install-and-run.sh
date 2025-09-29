#!/bin/bash

echo "🚀 Setting up HOMY - AI-Powered Interior Design Platform"
echo "=================================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    echo "   Please upgrade Node.js: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Create .env.local file if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating environment file..."
    cat > .env.local << EOF
# HOMY Environment Variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_HOTJAR_ID=your-hotjar-id

# API Keys (add your actual keys here)
OPENAI_API_KEY=your-openai-api-key
STRIPE_PUBLIC_KEY=your-stripe-public-key
STRIPE_SECRET_KEY=your-stripe-secret-key

# Database (if using)
DATABASE_URL=your-database-url
EOF
    echo "✅ Environment file created (.env.local)"
fi

echo ""
echo "🎉 Setup complete! Starting development server..."
echo "=================================================="
echo ""
echo "🌐 Your website will be available at: http://localhost:3000"
echo "📱 Mobile preview: http://localhost:3000 (responsive design)"
echo ""
echo "💡 Tips:"
echo "   - Press Ctrl+C to stop the server"
echo "   - Edit files in the 'components' folder to customize"
echo "   - Check the README.md for detailed documentation"
echo ""

# Start development server
npm run dev
