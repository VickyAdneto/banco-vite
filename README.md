# Axis Bank Rewards Platform

A comprehensive digital rewards platform built for Axis Bank's Savings Account division, featuring interactive games, personalized rewards, and a complete banking experience.

## 🏆 Project Overview

This platform provides a complete rewards ecosystem for Axis Bank customers, featuring multiple user journeys, interactive elements, and strict adherence to brand guidelines.

### ✨ Key Features

- **🎮 Interactive Games**: Spin the Wheel, Financial Quiz, Match & Earn
- **🏅 Rewards System**: Tier-based progression with personalized offers
- **📱 Responsive Design**: Mobile-first approach with desktop optimization
- **🎨 Brand Compliance**: Strict adherence to Axis Bank visual identity
- **🔐 Secure Authentication**: Test credentials and account management
- **📊 Real-time Statistics**: Dynamic redemption tracking and analytics

## 🚀 Live Demo

- **GitHub Repository**: [https://github.com/wugweb-git/rewards_portal](https://github.com/wugweb-git/rewards_portal)
- **Demo Credentials**: 
  - Username: `wugweb`
  - Password: `wugweb`
  - Date of Birth: `10/05/2000`

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS v4.0
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Component Library**: Custom components + shadcn/ui
- **Build Tool**: Vite
- **Font**: Arial (brand requirement)

## 🎨 Brand Guidelines

### Color Palette
- **Primary Burgundy**: `#97144D`
- **Secondary Teal**: `#12877F`
- **Light Teal**: `#EBF9F8`
- **Supporting Colors**: Various complementary shades

### Typography
- **Font Family**: Arial only (no Lato or italics allowed)
- **Consistent Sizing**: Responsive typography system
- **Brand Voice**: Professional, trustworthy, accessible

### Design Principles
- **88px Header Padding**: Sticky navigation requirement
- **Consistent Iconography**: Standardized with brand colors
- **Accessibility**: WCAG AA compliance
- **Mobile-First**: Responsive across all devices

## 📁 Project Structure

```
├── components/
│   ├── games/              # Interactive game components
│   ├── ui/                 # shadcn/ui components
│   ├── figma/              # Figma integration components
│   ├── AxisBankHeader.tsx  # Main navigation
│   ├── AxisButton.tsx      # Brand-compliant buttons
│   ├── HomeBanner.tsx      # Hero section
│   ├── SegmentShowcase.tsx # Banking segments
│   └── ...
├── pages/
│   ├── LoginPage.tsx       # Authentication
│   ├── RewardsDiscoveryPage.tsx
│   ├── RewardActivationPage.tsx
│   ├── RewardRedemptionPage.tsx
│   ├── PostRedemptionPage.tsx
│   └── ...
├── styles/
│   ├── globals.css         # Tailwind v4 + brand tokens
│   ├── category-filter.css
│   ├── rewards-animations.css
│   └── stacked-cards.css
└── imports/                # Figma imported assets
```

## 🏗️ Key Components

### Core Pages
- **Home Page**: Hero banner, games section, rewards showcase
- **Discovery Page**: BurgundyHeroSection and personalized offers
- **Rewards Page**: Tier progression and available rewards
- **Redemption Page**: Real-time statistics and redemption flow
- **Post Redemption**: Confirmation and next steps
- **Games Section**: Interactive mini-games for earning points
- **Contact Us**: Enhanced customer service page

### Interactive Elements
- **Spin the Wheel**: Gamified reward earning
- **Financial Quiz**: Educational content with rewards
- **Match & Earn**: Memory-based reward game
- **Rewards Gallery**: Comprehensive reward browsing
- **Tier Progression**: Visual journey tracking

### Authentication System
- **Login Form**: With account type field
- **User Sessions**: Persistent login state
- **Test Credentials**: Pre-configured demo account
- **Account Management**: Profile and preferences

## 🎮 Gaming Features

### Available Games
1. **Spin the Wheel** - Up to 500 points
2. **Financial Quiz** - Up to 300 points  
3. **Match & Earn** - Up to 400 points

### Rewards System
- **Monthly Challenges**: Complete all games for bonus rewards
- **Achievement Badges**: Progress tracking and milestones
- **Point Accumulation**: Up to 1,200 additional points monthly
- **Segment Benefits**: Tier-specific reward multipliers

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Modern web browser

### Quick Start
```bash
# Clone the repository
git clone https://github.com/wugweb-git/rewards_portal.git

# Navigate to project directory
cd rewards_portal

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Environment Setup
```bash
# Create .env file (if needed)
VITE_API_BASE_URL=your_api_endpoint
VITE_APP_TITLE="Axis Bank Rewards Platform"
```

## 🧪 Testing Credentials

### Demo Account
- **Username**: `wugweb`
- **Password**: `wugweb` 
- **Date of Birth**: `10/05/2000`
- **Account Type**: Savings Account
- **Segment**: Burgundy (Premium)

### Test Scenarios
1. **Non-logged-in Experience**: Browse rewards, view games
2. **Login Flow**: Test authentication with provided credentials
3. **Rewards Journey**: Discovery → Activation → Redemption
4. **Game Interaction**: Play all three available games
5. **Mobile Experience**: Test responsive design

## 📊 Features by User State

### Non-Logged-in Users
- ✅ Browse rewards gallery
- ✅ View game descriptions
- ✅ Access contact information
- ✅ Learn about banking segments
- ❌ Play games (requires login)
- ❌ Redeem rewards (requires login)

### Logged-in Users
- ✅ Full rewards access
- ✅ Interactive games
- ✅ Personalized offers
- ✅ Redemption capabilities
- ✅ Progress tracking
- ✅ Tier-specific benefits

## 🔒 Security Features

- **Input Validation**: Form validation and sanitization
- **Session Management**: Secure user session handling
- **Authentication**: Credential verification
- **Data Protection**: User information security
- **XSS Prevention**: Content sanitization

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+
- **Large Desktop**: 1440px+

### Mobile Optimizations
- Touch-friendly interfaces
- Optimized image loading
- Collapsible navigation
- Swipe gestures support
- Performance optimization

## 🎯 Accessibility Features

- **WCAG AA Compliance**: Color contrast ratios
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels
- **Focus Management**: Clear focus indicators
- **Alt Text**: Comprehensive image descriptions

## 🚀 Deployment

### GitHub Pages (Current)
```bash
# Build and deploy
npm run build
# Deploy dist/ folder to GitHub Pages
```

### Manual Deployment
```bash
# Create production build
npm run build

# Serve the dist/ folder
npx serve dist/
```

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 🔄 Recent Updates

### Latest Changes (Current State)
- ✅ Fixed button readability issues in HomeBanner
- ✅ Resolved content overflow in SegmentShowcase  
- ✅ Enhanced HomeGamesSection with better error handling
- ✅ Improved contrast ratios across all components
- ✅ Updated banking images for better brand alignment
- ✅ Strengthened focus states for accessibility

### Bug Fixes
- Fixed syntax error in HomeGamesSection.tsx
- Improved button contrast on burgundy backgrounds
- Resolved mobile overflow issues
- Enhanced touch targets for mobile devices

## 📋 Development Guidelines

### Code Standards
- **TypeScript**: Strict type checking
- **React Best Practices**: Functional components, hooks
- **Tailwind CSS**: Utility-first styling
- **Component Structure**: Modular, reusable components
- **File Naming**: PascalCase for components, kebab-case for assets

### Brand Compliance
- ❌ **No Lato font** - Arial only
- ❌ **No italic text** - Normal font-style only  
- ✅ **Brand colors only** - Burgundy, Teal, Light Teal
- ✅ **Banking imagery** - Finance-related visuals only
- ✅ **Consistent spacing** - 88px header padding

### Testing Requirements
- All changes require testing
- Login form modifications limited to approved changes
- Design changes must maintain brand compliance
- Mobile responsiveness mandatory

## 📞 Support & Contact

### Development Team
- **Project Lead**: WugWeb Development Team
- **Repository**: [GitHub - wugweb-git/rewards_portal](https://github.com/wugweb-git/rewards_portal)

### Business Requirements
- **Banking Division**: Axis Bank Savings Account
- **Brand Guidelines**: Strict compliance required
- **Design Approval**: All visual changes require approval

## 📄 License

This project is proprietary software developed for Axis Bank. All rights reserved.

## 🔮 Future Enhancements

### Planned Features
- [ ] Advanced analytics dashboard
- [ ] Social sharing capabilities  
- [ ] Offline mode support
- [ ] Push notifications
- [ ] Multi-language support
- [ ] Advanced gamification features

### Technical Improvements
- [ ] Progressive Web App (PWA)
- [ ] Enhanced caching strategies
- [ ] API integration improvements
- [ ] Performance optimizations
- [ ] Advanced error handling

---

**Last Updated**: January 2025  
**Version**: 1.0.0  
**Build Status**: ✅ Production Ready