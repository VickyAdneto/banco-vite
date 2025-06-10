const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Create a file to stream archive data to
const output = fs.createWriteStream('axis-bank-rewards-platform.zip');
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level
});

// Listen for all archive data to be written
output.on('close', function() {
  console.log('✅ ZIP file created successfully!');
  console.log(`📦 Total size: ${(archive.pointer() / 1024 / 1024).toFixed(2)} MB`);
  console.log('🎯 File: axis-bank-rewards-platform.zip');
});

// Good practice to catch warnings (ie stat failures and other non-blocking errors)
archive.on('warning', function(err) {
  if (err.code === 'ENOENT') {
    console.warn('Warning:', err);
  } else {
    throw err;
  }
});

// Good practice to catch this error explicitly
archive.on('error', function(err) {
  throw err;
});

// Pipe archive data to the file
archive.pipe(output);

// Add files and directories (excluding unnecessary ones)
const filesToExclude = [
  'node_modules/**',
  '.git/**',
  'dist/**',
  '.vscode/**',
  '*.log',
  '.env*',
  '.DS_Store',
  'Thumbs.db'
];

// Add all files except excluded ones
archive.glob('**/*', {
  ignore: filesToExclude,
  dot: true
});

// Finalize the archive
archive.finalize();