#!/usr/bin/env node

/**
 * Export Boilerplate Script
 *
 * Creates a clean copy of the boilerplate for reuse.
 * Excludes build artifacts, dependencies, and brand-specific files.
 *
 * Usage:
 *   node scripts/export-boilerplate.js [output-path]
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const outputPath = process.argv[2] || '../website-boilerplate';

console.log('📦 Exporting boilerplate...\n');

// Files and folders to exclude
const excludePatterns = [
  'node_modules',
  '.next',
  '.git',
  '.env.local',
  '*.log',
  'dist',
  'build',
  '.DS_Store',
  'Thumbs.db',
];

// Files that should be reset to template values
const filesToTemplate = {
  'src/config/site.ts': {
    patterns: [
      { from: /name: '[^']*'/, to: "name: 'Your Brand'" },
      { from: /tagline: '[^']*'/, to: "tagline: 'Your Tagline'" },
      {
        from: /description:[\s]*'[^']*'/s,
        to: "description: 'Your brand description for SEO'",
      },
    ],
  },
  'package.json': {
    patterns: [
      { from: /"name": "[^"]*"/, to: '"name": "brand-website"' },
      { from: /"version": "[^"]*"/, to: '"version": "1.0.0"' },
    ],
  },
};

console.log(`Output directory: ${path.resolve(outputPath)}\n`);

// Create output directory
if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

// Copy files excluding patterns
console.log('📋 Copying files...');

try {
  // Use robocopy on Windows or rsync on Unix
  if (process.platform === 'win32') {
    const excludeArgs = excludePatterns.map((p) => `/XD ${p}`).join(' ');
    execSync(
      `robocopy . ${outputPath} /E /XF ${excludePatterns.filter((p) => p.includes('*') || p.includes('.')).join(' ')} ${excludeArgs} /NFL /NDL /NJH /NJS`,
      {
        stdio: 'ignore',
      }
    );
  } else {
    const excludeArgs = excludePatterns
      .map((p) => `--exclude='${p}'`)
      .join(' ');
    execSync(`rsync -av ${excludeArgs} . ${outputPath}/`, { stdio: 'inherit' });
  }
} catch (error) {
  // Robocopy returns non-zero even on success, so we catch and continue
}

console.log('✓ Files copied\n');

// Template certain files
console.log('🔧 Templating configuration files...');

for (const [file, config] of Object.entries(filesToTemplate)) {
  const filePath = path.join(outputPath, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    for (const { from, to } of config.patterns) {
      content = content.replace(from, to);
    }

    fs.writeFileSync(filePath, content);
    console.log(`✓ Templated ${file}`);
  }
}

console.log('\n✅ Boilerplate exported successfully!\n');
console.log('📍 Location:', path.resolve(outputPath));
console.log('\nTo use for a new brand:');
console.log('1. Copy the exported folder');
console.log('2. Run: npm install');
console.log('3. Run: node scripts/setup-brand.js');
console.log('4. Customize branding and content\n');
