#!/bin/bash

# Script to help add team photos to the hömy website
# Run this script from the project root directory

echo "🎯 hömy Team Photos Setup"
echo "========================="
echo ""

# Check if we're in the right directory
if [ ! -d "client/public/images/team" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    echo "   Current directory: $(pwd)"
    echo "   Expected: /Users/samarthsehgal/Desktop/techie"
    exit 1
fi

echo "✅ Found team photos directory: client/public/images/team"
echo ""

# List current files
echo "📁 Current files in team directory:"
ls -la client/public/images/team/
echo ""

echo "📋 Instructions to add team photos:"
echo ""
echo "1. 📸 Take or gather professional headshots of your team members"
echo "2. 📏 Resize photos to 300x300px or 400x400px (square format)"
echo "3. 💾 Save photos with these exact names:"
echo ""
echo "   • chirag-raguvanshi.jpg (Founder - Operations & Market Outreach)"
echo "   • samarth-sehgal.jpg (Founder - AI Technology & Development)"
echo "   • yashika-nailwal.jpg (CMO - Digital Growth & Brand Development)"
echo "   • jatin-takkar.jpg (CFO - Financial Management & Capital Efficiency)"
echo ""
echo "4. 📁 Copy the photos to: client/public/images/team/"
echo "5. 🌐 Refresh your website to see the photos"
echo ""

# Check if photos exist
echo "🔍 Checking for existing photos..."
echo ""

photos=("chirag-raguvanshi.jpg" "samarth-sehgal.jpg" "yashika-nailwal.jpg" "jatin-takkar.jpg")
all_exist=true

for photo in "${photos[@]}"; do
    if [ -f "client/public/images/team/$photo" ]; then
        echo "✅ $photo - Found"
    else
        echo "❌ $photo - Missing"
        all_exist=false
    fi
done

echo ""

if [ "$all_exist" = true ]; then
    echo "🎉 All team photos are ready!"
    echo "🌐 Your website should now display the actual team photos."
else
    echo "⏳ Some photos are still missing."
    echo "📝 Please add the missing photos and run this script again."
fi

echo ""
echo "💡 Tip: You can also drag and drop photos directly into the"
echo "   client/public/images/team/ folder in your file explorer."
echo ""
echo "🔗 View your team page at: http://localhost:3000/about"

