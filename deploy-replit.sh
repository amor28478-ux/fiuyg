#!/bin/bash

# Replit deployment preparation script
echo "Preparing React app for Replit deployment..."

# Check if build exists
if [ -d "build" ]; then
    echo "✅ Build directory found"
else
    echo "⚠️  Build directory not found. Run 'npm run build' first"
    exit 1
fi

# Check if .replit exists
if [ -f ".replit" ]; then
    echo "✅ .replit configuration found"
else
    echo "⚠️  .replit configuration not found"
    exit 1
fi

# Check if package.json exists
if [ -f "package.json" ]; then
    echo "✅ package.json found"
else
    echo "❌ package.json not found"
    exit 1
fi

echo ""
echo "🎉 Ready for Replit deployment!"
echo ""
echo "Next steps:"
echo "1. Go to https://replit.com"
echo "2. Create a new Node.js project"
echo "3. Upload all files from this directory"
echo "4. Click the 'Run' button"
echo "5. Your app will be available at the provided URL"
echo ""
echo "📱 Your React app will be live with all pages working!"
