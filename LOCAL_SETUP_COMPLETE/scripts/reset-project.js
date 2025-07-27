#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔄 Resetting project...');

// Clear cache directories if they exist
const dirsToClean = [
  'node_modules/.cache',
  '.expo',
  'dist',
  'web-build'
];

dirsToClean.forEach(dir => {
  const fullPath = path.join(process.cwd(), dir);
  if (fs.existsSync(fullPath)) {
    fs.rmSync(fullPath, { recursive: true, force: true });
    console.log(`✅ Cleaned ${dir}`);
  }
});

console.log('✅ Project reset complete!');
console.log('💡 Run "npm install" to reinstall dependencies');
console.log('🚀 Then run "npm run web" to start the app');