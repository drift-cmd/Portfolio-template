# Deployment Guide

## Overview

This guide covers the steps needed to run, customize, and publish the portfolio template.

## Local Development

### Requirements
- Node.js 18+
- npm or yarn

### Start the app

```bash
npm install
npm start
```

The development server should open at http://localhost:3000.

## Build for Production

```bash
npm run build
```

The production build will be generated in the build folder.

## Pre-Deployment Checklist

- [ ] Replace placeholder text and images
- [ ] Update contact details in the constants file
- [ ] Set your preferred social links
- [ ] Add an Unsplash API key if you want dynamic background images
- [ ] Review the favicon and metadata

## Environment Variables

Create a local environment file if you want to use the optional background image feature.

```bash
cp .env.example .env
```

Add your key:

```bash
REACT_APP_UNSPLASH_ACCESS_KEY=your_key_here
```

## Deployment Options

### Netlify
1. Push the project to GitHub
2. Import the repository in Netlify
3. Use the build command: npm run build
4. Set the publish directory to: build

### Vercel
1. Import the repository in Vercel
2. Use the default React settings
3. Deploy automatically on push

### GitHub Pages
1. Install gh-pages if needed
2. Update the homepage field in package.json
3. Run npm run deploy

### Manual Hosting
1. Build the project with npm run build
2. Upload the contents of the build folder to your hosting provider

## Contact Form Options

The current form is ready for local testing. For a live site, you can connect it to:

- Netlify Forms
- Formspree
- EmailJS
- A custom backend API

## Final Checks

Before publishing, verify that:
- Navigation works correctly
- Images and links load properly
- The layout looks good on mobile and desktop
- The contact form behaves as expected

## Next Step

Once the content is customized and the build is verified, the site is ready to be shared publicly.