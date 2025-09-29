#!/bin/bash

# 🚀 hömy Deployment Script
# This script helps deploy both frontend and backend

echo "🏠 hömy Deployment Script"
echo "========================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if required tools are installed
check_dependencies() {
    print_status "Checking dependencies..."
    
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed. Please install npm first."
        exit 1
    fi
    
    print_success "Dependencies check passed!"
}

# Install dependencies
install_dependencies() {
    print_status "Installing dependencies..."
    
    # Install root dependencies
    npm install
    
    # Install client dependencies
    cd client
    npm install
    cd ..
    
    # Install server dependencies
    cd server
    npm install
    cd ..
    
    print_success "Dependencies installed successfully!"
}

# Build the project
build_project() {
    print_status "Building the project..."
    
    # Build client
    cd client
    npm run build
    cd ..
    
    print_success "Project built successfully!"
}

# Deploy frontend to Vercel
deploy_frontend() {
    print_status "Deploying frontend to Vercel..."
    
    # Check if Vercel CLI is installed
    if ! command -v vercel &> /dev/null; then
        print_warning "Vercel CLI not found. Installing..."
        npm install -g vercel
    fi
    
    cd client
    
    # Deploy to Vercel
    vercel --prod
    
    cd ..
    
    print_success "Frontend deployed to Vercel!"
}

# Deploy backend to Railway
deploy_backend() {
    print_status "Deploying backend to Railway..."
    
    # Check if Railway CLI is installed
    if ! command -v railway &> /dev/null; then
        print_warning "Railway CLI not found. Installing..."
        npm install -g @railway/cli
    fi
    
    cd server
    
    # Deploy to Railway
    railway up
    
    cd ..
    
    print_success "Backend deployed to Railway!"
}

# Main deployment function
main() {
    echo "Choose deployment option:"
    echo "1) Deploy Frontend Only (Vercel)"
    echo "2) Deploy Backend Only (Railway)"
    echo "3) Deploy Both Frontend and Backend"
    echo "4) Install Dependencies Only"
    echo "5) Build Project Only"
    echo "6) Exit"
    
    read -p "Enter your choice (1-6): " choice
    
    case $choice in
        1)
            check_dependencies
            install_dependencies
            build_project
            deploy_frontend
            ;;
        2)
            check_dependencies
            install_dependencies
            deploy_backend
            ;;
        3)
            check_dependencies
            install_dependencies
            build_project
            deploy_frontend
            deploy_backend
            ;;
        4)
            check_dependencies
            install_dependencies
            ;;
        5)
            check_dependencies
            install_dependencies
            build_project
            ;;
        6)
            print_status "Exiting..."
            exit 0
            ;;
        *)
            print_error "Invalid choice. Please run the script again."
            exit 1
            ;;
    esac
}

# Run main function
main
