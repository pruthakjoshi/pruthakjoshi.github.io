# How to Preview Your Website Changes

## Option 1: GitHub Pages (Recommended - Easiest)

Since your repository is `pruthakjoshi.github.io`, GitHub will automatically build and publish your site.

### Steps:
1. **Commit and push your changes** to GitHub:
   - If using GitHub Desktop: Click "Commit to main" then "Push origin"
   - If using VS Code: Use the Source Control panel (Ctrl+Shift+G) to commit and push
   - If using GitHub web: Upload the changed files through the web interface

2. **Wait 1-2 minutes** for GitHub Pages to rebuild your site

3. **Visit your site**: Go to `https://pruthakjoshi.github.io`
   - Your homepage will be at: `https://pruthakjoshi.github.io/`
   - Projects page: `https://pruthakjoshi.github.io/projects`

**Note**: GitHub Pages builds automatically on every push to the main branch. Changes typically appear within 1-2 minutes.

---

## Option 2: Run Jekyll Locally (For Faster Development)

If you want to preview changes instantly without pushing to GitHub, you can run Jekyll locally.

### Prerequisites:
1. **Install Ruby** (for Windows):
   - Download RubyInstaller from: https://rubyinstaller.org/
   - Install Ruby+Devkit (recommended version)
   - During installation, check "Add Ruby executables to your PATH"

2. **Install Jekyll and dependencies**:
   ```bash
   gem install bundler
   bundle install
   ```

3. **Run the local server**:
   ```bash
   bundle exec jekyll serve
   ```

4. **View your site**: Open `http://127.0.0.1:4000` in your browser

The site will auto-reload when you make changes to files!

---

## Quick Checklist for Your Changes

The improvements made include:
- ✅ Homepage styling moved to `assets/css/home.css`
- ✅ Projects page styling moved to `assets/css/projects.css`
- ✅ Projects JavaScript moved to `assets/js/projects.js`
- ✅ Cleaner `_config.yml` file

All files are ready to be committed and pushed to GitHub!
