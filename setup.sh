#!/bin/bash

# React Portfolio Setup Script
echo "🚀 Setting up Md Arsalan Afsar's React Portfolio"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first:"
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies. Please check your internet connection."
    exit 1
fi

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cat > .env << EOL
# Environment Variables
VITE_APP_TITLE="Md Arsalan Afsar - Portfolio"
VITE_APP_DESCRIPTION="Modern React Portfolio Website"
VITE_APP_VERSION=1.0.0
EOL
    echo "✅ .env file created!"
fi

# Create assets directory if it doesn't exist
if [ ! -d public/assets ]; then
    echo "📁 Creating assets directory..."
    mkdir -p public/assets
    echo "✅ Assets directory created!"
fi

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "Next steps:"
echo "1. Run 'npm run dev' to start the development server"
echo "2. Open http://localhost:3000 in your browser"
echo "3. Run 'npm run build' to create a production build"
echo ""
echo "For more information, check README.md"
