# Boilerplate Export & Reuse Guide

This guide explains how to export this project structure and reuse it for other brand websites.

## 🚀 Quick Start Methods

### Method 1: GitHub Template (Recommended)

**Best for:** Team collaboration, version control, easy updates

1. **Create GitHub Template Repository:**

   ```bash
   # Push to GitHub
   git init
   git add .
   git commit -m "Initial boilerplate"
   git remote add origin https://github.com/yourusername/website-boilerplate.git
   git push -u origin main
   ```

2. **On GitHub:**
   - Go to repository Settings
   - Check ✓ "Template repository"

3. **For Each New Brand:**
   ```bash
   # Click "Use this template" on GitHub
   # Or use GitHub CLI:
   gh repo create new-brand --template yourusername/website-boilerplate
   cd new-brand
   npm install
   node scripts/setup-brand.js
   ```

**Advantages:**

- Easy to update boilerplate across projects
- Version control for the boilerplate itself
- Team can access from anywhere
- GitHub's "Use this template" button is super easy

---

### Method 2: Local Export Script

**Best for:** Offline use, quick local copies

1. **Export the boilerplate:**

   ```bash
   node scripts/export-boilerplate.js ../website-boilerplate
   ```

2. **For Each New Brand:**
   ```bash
   # Copy the exported folder
   cp -r ../website-boilerplate ./new-brand
   cd new-brand
   npm install
   node scripts/setup-brand.js
   ```

**Advantages:**

- No GitHub needed
- Works offline
- Simple file copy

---

### Method 3: ZIP Archive

**Best for:** Sharing with others, backup

1. **Create ZIP (manually or with script):**

   ```bash
   # Windows PowerShell
   # Exclude unnecessary files
   $exclude = @('node_modules', '.next', '.git', '.env.local')
   Get-ChildItem -Exclude $exclude | Compress-Archive -DestinationPath website-boilerplate.zip
   ```

2. **For Each New Brand:**
   - Extract ZIP to new folder
   - Run `npm install`
   - Run `node scripts/setup-brand.js`

---

### Method 4: Degit (Fastest Cloning)

**Best for:** Quick cloning without git history

1. **Install degit:**

   ```bash
   npm install -g degit
   ```

2. **For Each New Brand:**

   ```bash
   # From GitHub
   degit yourusername/website-boilerplate new-brand

   # Or from local folder
   degit ./path/to/boilerplate new-brand

   cd new-brand
   npm install
   node scripts/setup-brand.js
   ```

---

## 📋 Preparation Checklist

Before exporting/sharing the boilerplate:

- [ ] Clean build artifacts: `rm -rf .next node_modules`
- [ ] Remove `.env.local` (keep `.env.example`)
- [ ] Ensure `.gitignore` is comprehensive
- [ ] Verify documentation is up to date
- [ ] Test the setup script: `node scripts/setup-brand.js`
- [ ] Update README.md to be generic (not brand-specific)
- [ ] Consider removing brand-specific images from `/public`

---

## 🎯 Recommended Folder Structure for Managing Multiple Brands

```
projects/
├── website-boilerplate/          # Master template
├── exateks.com/                  # Brand 1
├── another-brand.com/            # Brand 2
└── third-brand.com/              # Brand 3
```

---

## 🔄 Updating the Boilerplate

When you make improvements to one brand that should be in the boilerplate:

1. **Copy improvements back to master template**
2. **Update version number** in template's package.json
3. **Document changes** in CHANGELOG.md
4. **Commit and push** (if using GitHub)
5. **Update other brands** as needed

---

## 🛠 Automation Scripts

### Quick Setup for New Brand

Create `create-brand.sh` script:

```bash
#!/bin/bash
# Usage: ./create-brand.sh brand-name

BRAND_NAME=$1
TEMPLATE_PATH="../website-boilerplate"

echo "Creating new brand: $BRAND_NAME"

# Copy template
cp -r $TEMPLATE_PATH ./$BRAND_NAME
cd $BRAND_NAME

# Install dependencies
npm install

# Run setup wizard
node scripts/setup-brand.js

echo "✅ Brand setup complete!"
echo "Next: cd $BRAND_NAME && npm run dev"
```

---

## 💡 Tips for Success

1. **Keep the boilerplate generic** - Don't include brand-specific content
2. **Document everything** - Make setup foolproof
3. **Use environment variables** - For all configuration
4. **Centralize theme config** - Easy to customize colors/fonts
5. **Version the boilerplate** - Track improvements
6. **Test the setup process** - Regularly create test projects

---

## 🆘 Troubleshooting

**Q: Files are missing after export?**
A: Check exclude patterns in export script or .gitignore

**Q: Setup script doesn't work?**
A: Ensure Node.js is installed and you're in the project root

**Q: How to share with team members?**
A: Use GitHub template method - easiest for teams

**Q: Can I use this commercially?**
A: Yes, it's your boilerplate! Use freely for all your brands.

---

## 📞 Need Help?

- Check `BOILERPLATE_SETUP.md` for detailed setup instructions
- Review `CHECKLIST.md` for setup checklist
- See example in `src/config/theme.config.ts` for theme presets
