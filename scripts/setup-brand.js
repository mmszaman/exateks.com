#!/usr/bin/env node

/**
 * Brand Setup Script
 *
 * Automates the setup process for a new brand using this boilerplate.
 *
 * Usage:
 *   node scripts/setup-brand.js
 *
 * This script will:
 * 1. Prompt for brand information
 * 2. Update configuration files
 * 3. Generate .env.local
 * 4. Update package.json
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function setupBrand() {
  console.log('🚀 Welcome to the Brand Setup Wizard!\n');
  console.log(
    'This will help you configure this boilerplate for your new brand.\n'
  );

  // Collect brand information
  const brandInfo = {
    name: await question('Brand Name: '),
    tagline: await question('Tagline: '),
    description: await question('Description (SEO): '),
    domain: await question('Domain (e.g., example.com): '),
    email: await question('Contact Email: '),

    // Optional
    twitter: await question('Twitter URL (optional): '),
    linkedin: await question('LinkedIn URL (optional): '),
    github: await question('GitHub URL (optional): '),
  };

  console.log('\n📝 Updating configuration files...\n');

  // Update site.ts
  updateSiteConfig(brandInfo);

  // Generate .env.local
  generateEnvFile(brandInfo);

  // Update package.json
  updatePackageJson(brandInfo);

  console.log('✅ Setup complete!\n');
  console.log('Next steps:');
  console.log('1. Replace logo files in /public directory');
  console.log('2. Update brand colors in tailwind.config.ts');
  console.log('3. Customize content in src/app pages');
  console.log('4. Run: npm run dev\n');
  console.log(
    '📖 See BOILERPLATE_SETUP.md for detailed customization guide.\n'
  );

  rl.close();
}

function updateSiteConfig(brandInfo) {
  const configPath = path.join(__dirname, '../src/config/site.ts');
  let content = fs.readFileSync(configPath, 'utf8');

  // Replace basic info
  content = content.replace(/name: '[^']*'/, `name: '${brandInfo.name}'`);
  content = content.replace(
    /tagline: '[^']*'/,
    `tagline: '${brandInfo.tagline}'`
  );
  content = content.replace(
    /description:\s*'[^']*'/,
    `description: '${brandInfo.description}'`
  );
  content = content.replace(
    /https:\/\/exateks\.com/,
    `https://${brandInfo.domain}`
  );
  content = content.replace(/contact@exateks\.com/, brandInfo.email);

  // Replace social links if provided
  if (brandInfo.twitter) {
    content = content.replace(
      /twitter: '[^']*'/,
      `twitter: '${brandInfo.twitter}'`
    );
  }
  if (brandInfo.linkedin) {
    content = content.replace(
      /linkedin: '[^']*'/,
      `linkedin: '${brandInfo.linkedin}'`
    );
  }
  if (brandInfo.github) {
    content = content.replace(
      /github: '[^']*'/,
      `github: '${brandInfo.github}'`
    );
  }

  fs.writeFileSync(configPath, content);
  console.log('✓ Updated src/config/site.ts');
}

function generateEnvFile(brandInfo) {
  const envContent = `# Site Configuration
NEXT_PUBLIC_SITE_URL=https://${brandInfo.domain}
NEXT_PUBLIC_SITE_NAME=${brandInfo.name}
NEXT_PUBLIC_SITE_DESCRIPTION=${brandInfo.description}

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8000

# Contact
NEXT_PUBLIC_CONTACT_EMAIL=${brandInfo.email}

# Analytics (Add your IDs)
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_GTM_ID=

# Development
NODE_ENV=development
`;

  fs.writeFileSync('.env.local', envContent);
  console.log('✓ Generated .env.local');
}

function updatePackageJson(brandInfo) {
  const pkgPath = path.join(__dirname, '../package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

  // Update package name (lowercase, no spaces)
  pkg.name = brandInfo.name.toLowerCase().replace(/\s+/g, '-');

  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
  console.log('✓ Updated package.json');
}

// Run the setup
setupBrand().catch(console.error);
