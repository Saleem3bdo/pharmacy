#!/bin/bash

echo ""
echo "🏥 PharmaCare - Starting Local Development Server"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please download and install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js is installed ($(node --version))"
echo ""

# Install dependencies
echo "Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "✅ Dependencies installed successfully!"
echo "🚀 Starting web development server..."
echo ""
echo "Your pharmacy app will open at: http://localhost:8081"
echo ""

# Start the development server
npm run web