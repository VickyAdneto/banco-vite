# Deployment Guide - Axis Bank Rewards Platform

## 🚀 Quick Deployment Options

### Option 1: GitHub Pages (Recommended)
```bash
# 1. Fork/Clone the repository
git clone https://github.com/wugweb-git/rewards_portal.git
cd rewards_portal

# 2. Install dependencies
npm install

# 3. Build the project
npm run build

# 4. Deploy to GitHub Pages
npm run deploy
```

### Option 2: Manual Static Hosting
```bash
# 1. Build the project
npm run build

# 2. Upload the `dist/` folder to your hosting provider
# Examples: Netlify, Vercel, AWS S3, etc.
```

### Option 3: Docker Deployment
```dockerfile
# Dockerfile is included in the project
docker build -t axis-bank-rewards .
docker run -p 3000:3000 axis-bank-rewards
```

## 📋 Pre-Deployment Checklist

### Environment Setup
- [ ] Node.js 18+ installed
- [ ] npm 8+ installed
- [ ] Git configured
- [ ] Build tools available

### Code Verification
- [ ] All TypeScript errors resolved
- [ ] All imports working correctly
- [ ] No console errors in development
- [ ] Test credentials working (wugweb/wugweb)
- [ ] Mobile responsiveness verified

### Performance Checks
- [ ] Images optimized and loading correctly
- [ ] Bundle size acceptable (< 5MB)
- [ ] Loading times reasonable (< 3 seconds)
- [ ] No memory leaks
- [ ] Smooth animations

### Brand Compliance
- [ ] Arial font loading correctly
- [ ] Brand colors accurate (#97144D, #12877F, #EBF9F8)
- [ ] No italic text present
- [ ] 88px header padding maintained
- [ ] Banking imagery appropriate

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# Clean build artifacts
npm run clean

# Deploy to GitHub Pages
npm run deploy
```

## 🌐 Environment Configuration

### Base Configuration
```bash
# .env (optional)
VITE_APP_TITLE="Axis Bank Rewards Platform"
VITE_APP_VERSION="1.0.0"
```

### Production Settings
- **Base URL**: Configure in `vite.config.ts`
- **Asset Path**: Automatically handled by Vite
- **Environment**: Production optimizations enabled

## 📁 Build Output Structure

```
dist/
├── index.html          # Main application entry
├── assets/
│   ├── *.js           # JavaScript bundles
│   ├── *.css          # Compiled CSS
│   └── *.woff2        # Font files
└── images/            # Optimized images
```

## 🔧 Hosting Provider Specific Instructions

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Node version: 18+

### Vercel
1. Import GitHub repository
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

### AWS S3 + CloudFront
1. Upload `dist/` contents to S3 bucket
2. Configure bucket for static website hosting
3. Set up CloudFront distribution
4. Configure custom domain (optional)

### Traditional Web Hosting
1. Build project locally: `npm run build`
2. Upload `dist/` folder contents to web root
3. Ensure server supports SPA routing (optional)

## 🔒 Security Considerations

### Production Security
- [ ] Remove development tools
- [ ] Secure HTTP headers configured
- [ ] SSL/TLS certificate installed
- [ ] Content Security Policy (CSP) configured
- [ ] No sensitive data in build

### Banking Compliance
- [ ] Data protection measures
- [ ] User privacy maintained
- [ ] Secure form handling
- [ ] XSS prevention implemented

## 📊 Performance Optimization

### Build Optimizations
- Tree shaking enabled
- Code splitting implemented
- Asset optimization
- Compression enabled
- Cache headers configured

### Runtime Optimizations
- Lazy loading for images
- Component code splitting
- Efficient re-rendering
- Memory leak prevention
- Smooth animations

## 🧪 Testing in Production

### Pre-Launch Testing
```bash
# Test login flow
Username: wugweb
Password: wugweb
DOB: 10/05/2000

# Test user journeys
1. Non-logged-in browsing
2. Login and rewards discovery
3. Game interactions
4. Reward redemption flow
5. Mobile experience
```

### Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (iOS Safari, Android Chrome)

### Device Testing
- [ ] Desktop (1920x1080, 1366x768)
- [ ] Tablet (iPad, Android tablets)
- [ ] Mobile (iPhone, Android phones)
- [ ] Large screens (4K monitors)

## 🔄 Continuous Deployment

### GitHub Actions (Included)
```yaml
# .github/workflows/deploy.yml
# Automatic deployment on push to main branch
```

### Manual Deployment Workflow
1. Test changes locally
2. Commit to feature branch
3. Create pull request
4. Review and merge to main
5. Automatic deployment triggers

## 📞 Troubleshooting

### Common Issues
**Build Failures**
- Check Node.js version (18+ required)
- Clear node_modules and reinstall
- Verify all imports are correct

**Deployment Errors**
- Check build output for errors
- Verify hosting provider settings
- Check base URL configuration

**Runtime Issues**
- Check browser console for errors
- Verify all assets loading correctly
- Test with different browsers

### Support Resources
- **Repository**: https://github.com/wugweb-git/rewards_portal
- **Documentation**: README.md
- **Issues**: GitHub Issues page

## 📈 Monitoring & Analytics

### Performance Monitoring
- Google Lighthouse audits
- Core Web Vitals tracking
- User experience metrics
- Error tracking

### Business Analytics
- User journey tracking
- Reward redemption rates
- Game engagement metrics
- Login conversion rates

## 🎯 Post-Deployment Checklist

### Immediate Actions
- [ ] Verify all pages loading correctly
- [ ] Test login functionality
- [ ] Check mobile responsiveness
- [ ] Verify game interactions
- [ ] Test reward flows

### Long-term Monitoring
- [ ] Set up analytics tracking
- [ ] Monitor performance metrics
- [ ] Track user engagement
- [ ] Monitor error rates
- [ ] Plan feature updates

---

**Deployment Status**: ✅ Ready for Production  
**Last Updated**: January 2025  
**Supported Environments**: Production, Staging, Development