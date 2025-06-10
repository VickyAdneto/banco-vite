#!/usr/bin/env node

/**
 * Axis Bank Rewards Platform - Download Package Creator
 * Creates a complete downloadable package of the project
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🏦 Axis Bank Rewards Platform - Package Creator');
console.log('================================================');

// Project information
const projectInfo = {
  name: 'Axis Bank Rewards Platform',
  version: '1.0.0',
  description: 'Complete digital rewards platform for Axis Bank',
  status: 'Production Ready',
  date: new Date().toISOString().split('T')[0],
  repository: 'https://github.com/wugweb-git/rewards_portal'
};

// Essential files to include in download package
const essentialFiles = [
  'App.tsx',
  'package.json',
  'tsconfig.json',
  'vite.config.ts',
  'README.md',
  'DEPLOYMENT-GUIDE.md',
  'BACKUP-DOCUMENTATION-2025.md',
  'styles/globals.css',
  'components/',
  'pages/',
  'imports/',
  '.github/'
];

// Create download info file
const downloadInfo = {
  ...projectInfo,
  testCredentials: {
    username: 'wugweb',
    password: 'wugweb',
    dateOfBirth: '10/05/2000',
    accountType: 'Savings Account'
  },
  quickStart: [
    'npm install',
    'npm run dev',
    'Open http://localhost:5173',
    'Login with test credentials above'
  ],
  buildInstructions: [
    'npm run build',
    'Deploy dist/ folder to your hosting provider'
  ],
  features: [
    'Complete rewards platform',
    'Interactive gaming system',
    'Mobile-responsive design',
    'Brand-compliant styling',
    'Authentication system',
    'Real-time statistics',
    'Accessibility compliant'
  ],
  technicalStack: {
    frontend: 'React 18 + TypeScript',
    styling: 'Tailwind CSS v4.0',
    buildTool: 'Vite',
    animations: 'Framer Motion',
    icons: 'Lucide React',
    charts: 'Recharts'
  },
  brandGuidelines: {
    colors: {
      primary: '#97144D (Burgundy)',
      secondary: '#12877F (Teal)',
      accent: '#EBF9F8 (Light Teal)'
    },
    typography: 'Arial font only (no italics)',
    headerPadding: '88px sticky padding',
    imagePolicy: 'Banking/finance themes only'
  },
  pages: [
    'Home page with dynamic content',
    'Login page with test credentials',
    'Rewards discovery and browsing',
    'Interactive games section',
    'Reward redemption flow',
    'Post-redemption confirmation',
    'Contact us page',
    'Rewards gallery'
  ],
  compliance: {
    accessibility: 'WCAG AA compliant',
    responsive: 'Mobile-first design',
    performance: 'Optimized for production',
    security: 'Input validation and XSS protection'
  }
};

// Write download package info
const downloadInfoPath = 'DOWNLOAD-PACKAGE-INFO.json';
fs.writeFileSync(downloadInfoPath, JSON.stringify(downloadInfo, null, 2));

console.log('✅ Download package information created');
console.log(`📁 Essential files: ${essentialFiles.length} items`);
console.log(`📊 Project size: ${getDirectorySize('.')} MB`);
console.log(`🎯 Status: ${projectInfo.status}`);

// Create a simple deployment verification script
const verificationScript = `#!/bin/bash
echo "🏦 Axis Bank Rewards Platform - Deployment Verification"
echo "=================================================="

# Check Node.js version
echo "📋 Checking Node.js version..."
node --version
if [ $? -ne 0 ]; then
    echo "❌ Node.js not found. Please install Node.js 18+"
    exit 1
fi

# Check npm version
echo "📋 Checking npm version..."
npm --version
if [ $? -ne 0 ]; then
    echo "❌ npm not found. Please install npm 8+"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Type check
echo "🔍 Running type check..."
npm run type-check
if [ $? -ne 0 ]; then
    echo "❌ TypeScript errors found"
    exit 1
fi

# Build project
echo "🏗️ Building project..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ All checks passed! Project is ready for deployment."
echo "🚀 Run 'npm run dev' to start development server"
echo "📱 Test credentials: wugweb / wugweb / 10/05/2000"
`;

fs.writeFileSync('verify-deployment.sh', verificationScript);
fs.chmodSync('verify-deployment.sh', '755');

console.log('✅ Deployment verification script created');

// Helper function to calculate directory size
function getDirectorySize(dirPath) {
  try {
    const result = execSync(`du -sh ${dirPath} | cut -f1`, { encoding: 'utf8' });
    return result.trim();
  } catch (error) {
    return 'Unknown';
  }
}

console.log('\n🎉 Package preparation complete!');
console.log('\n📋 Next Steps:');
console.log('1. Run: npm run build');
console.log('2. Test: npm run preview');
console.log('3. Deploy: npm run deploy (for GitHub Pages)');
console.log('4. Or upload dist/ folder to your hosting provider');
console.log('\n🔗 Repository: https://github.com/wugweb-git/rewards_portal');
console.log('📖 Documentation: README.md');
console.log('🚀 Deployment Guide: DEPLOYMENT-GUIDE.md');