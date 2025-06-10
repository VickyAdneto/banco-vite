import { useState, useEffect } from "react";
import { AxisBankHeader } from "./components/AxisBankHeader";
import { BannerCarousel } from "./components/BannerCarousel";
import { CallToAction } from "./components/CallToAction";
import { SegmentShowcase } from "./components/SegmentShowcase";
import { PersonaOffers } from "./components/PersonaOffers";
import { Footer } from "./components/Footer";
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";
import { RewardsDiscoveryPage } from "./pages/RewardsDiscoveryPage";
import { RewardActivationPage } from "./pages/RewardActivationPage";
import { RewardRedemptionPage } from "./pages/RewardRedemptionPage";
import { PostRedemptionPage } from "./pages/PostRedemptionPage";
import { RewardsGalleryPage } from "./pages/RewardsGalleryPage";
import { ComponentsPage } from "./pages/ComponentsPage";
import { MiniGames } from "./components/MiniGames";
import { AxisButton } from "./components/AxisButton";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { RewardsJourneyModal } from "./components/RewardsJourneyModal";
import { RewardsShowcase } from "./components/RewardsShowcase";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

// Import stylesheets
import "./styles/globals.css";
import "./styles/category-filter.css";
import "./styles/stacked-cards.css";
import "./styles/rewards-animations.css";

// Type definitions
type UserData = {
  isLoggedIn: boolean;
  customerId?: string;
  name?: string;
  segment?: string;
  persona?: string;
};

type PageType = 
  | "login" 
  | "rewards-gallery" 
  | "mini-games" 
  | "open-account" 
  | "about" 
  | "terms" 
  | "privacy" 
  | "contact" 
  | "components"
  | null;

const PageWrapper = ({ 
  children, 
  userData, 
  journeyStage, 
  onStageChange, 
  onLogin, 
  onLogout, 
  onNavigate 
}) => (
  <div className="flex flex-col min-h-screen">
    <AxisBankHeader 
      userData={userData}
      currentStage={journeyStage}
      onStageChange={onStageChange}
      onLogin={onLogin}
      onLogout={onLogout}
    />
    {children}
    <Footer onNavigate={onNavigate} />
  </div>
);

// Initial state
const initialUserData: UserData = { isLoggedIn: false };

export default function App() {
  const [userData, setUserData] = useState<UserData>(initialUserData);
  const [journeyStage, setJourneyStage] = useState<string>("awareness");
  const [currentPage, setCurrentPage] = useState<PageType>(null);
  const [showRewardsModal, setShowRewardsModal] = useState(false);
  
  // Show welcome modal on first visit
  useEffect(() => {
    // In a real app, you'd use localStorage or a cookie to check if this is the first visit
    const hasVisitedBefore = sessionStorage.getItem('hasVisitedBefore');
    
    if (!hasVisitedBefore && journeyStage === "awareness") {
      setTimeout(() => {
        setShowRewardsModal(true);
        sessionStorage.setItem('hasVisitedBefore', 'true');
      }, 1500);
    }
  }, [journeyStage]);
  
  // Navigation helper
  const navigate = (page: PageType) => {
    setCurrentPage(page);
    
    // If navigating away from a page, reset the journey stage if needed
    if (page === null && !userData.isLoggedIn) {
      setJourneyStage("awareness");
    }
  };
  
  // Handle login
  const handleLogin = (newUserData: UserData) => {
    setUserData(newUserData);
    navigate(null);
    
    if (newUserData.isLoggedIn) {
      setJourneyStage("rewards");
      // Show welcome rewards modal after login
      setTimeout(() => {
        setShowRewardsModal(true);
      }, 1000);
    }
  };
  
  // Handle logout
  const handleLogout = () => {
    setUserData(initialUserData);
    setJourneyStage("awareness");
    navigate(null);
  };
  
  // Navigate to explore rewards
  const navigateToExploreRewards = () => {
    if (userData.isLoggedIn) {
      setJourneyStage("rewards");
      navigate(null);
    } else {
      navigate("login");
    }
  };
  
  // Handle stage change
  const handleStageChange = (stage: string) => {
    // If trying to access a restricted stage when not logged in
    if (!userData.isLoggedIn && stage !== "awareness" && stage !== "home") {
      navigate("login");
      return;
    }
    
    setJourneyStage(stage);
    navigate(null);
  };
  
  // Handle footer navigation
  const handleFooterNavigation = (destination: string) => {
    switch (destination) {
      case "about":
        navigate("about");
        break;
      case "terms":
        navigate("terms");
        break;
      case "privacy":
        navigate("privacy");
        break;
      case "contact":
        navigate("contact");
        break;
      case "rewards":
        if (userData.isLoggedIn) {
          setJourneyStage("rewards");
          navigate(null);
        } else {
          navigate("rewards-gallery");
        }
        break;
      case "accounts":
        navigate("open-account");
        break;
      case "components":
        navigate("components");
        break;
      default:
        break;
    }
  };
  
  // Special page rendering based on currentPage
  if (currentPage === "login") {
    return <LoginPage onLogin={handleLogin} />;
  }
  
  if (currentPage === "rewards-gallery") {
    return (
      <PageWrapper 
        userData={userData}
        journeyStage={journeyStage}
        onStageChange={handleStageChange}
        onLogin={() => navigate("login")}
        onLogout={handleLogout}
        onNavigate={handleFooterNavigation}
      >
        <RewardsGalleryPage userData={userData} />
      </PageWrapper>
    );
  }
  
  if (currentPage === "mini-games") {
    return (
      <PageWrapper 
        userData={userData}
        journeyStage={journeyStage}
        onStageChange={handleStageChange}
        onLogin={() => navigate("login")}
        onLogout={handleLogout}
        onNavigate={handleFooterNavigation}
      >
        <MiniGames userData={userData} />
      </PageWrapper>
    );
  }
  
  if (currentPage === "components") {
    return (
      <PageWrapper 
        userData={userData}
        journeyStage={journeyStage}
        onStageChange={handleStageChange}
        onLogin={() => navigate("login")}
        onLogout={handleLogout}
        onNavigate={handleFooterNavigation}
      >
        <ComponentsPage />
      </PageWrapper>
    );
  }
  
  if (currentPage === "open-account") {
    return (
      <PageWrapper 
        userData={userData}
        journeyStage={journeyStage}
        onStageChange={handleStageChange}
        onLogin={() => navigate("login")}
        onLogout={handleLogout}
        onNavigate={handleFooterNavigation}
      >
        <div className="pt-[88px] flex flex-col items-center justify-center p-8">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6 text-center text-[#97144D]">Open a Savings Account</h2>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Mobile Number</label>
                <input type="tel" className="w-full p-2 border rounded-md" placeholder="Enter mobile number" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" className="w-full p-2 border rounded-md" placeholder="Enter email address" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">PAN Number</label>
                <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter PAN number" />
              </div>
            </div>
            <div className="flex gap-3">
              <AxisButton onClick={() => navigate(null)} variant="outline" fullWidth>
                Cancel
              </AxisButton>
              <AxisButton variant="primary" fullWidth>
                Proceed
              </AxisButton>
            </div>
          </div>
        </div>
      </PageWrapper>
    );
  }
  
  // Static content pages
  const staticPages = {
    "about": {
      title: "About Axis Bank",
      content: (
        <div className="prose max-w-none">
          <p className="mb-4">
            Axis Bank is the third-largest private sector bank in India offering comprehensive retail, corporate, and international banking services. 
            Since its inception in 1993, Axis Bank has consistently leveraged technology and innovation to provide superior banking experiences.
          </p>
          <h2 className="text-2xl font-bold mb-3 mt-6 text-[#97144D]">Our Vision</h2>
          <p className="mb-4">
            To be the preferred financial services provider excelling in customer delivery through insight, enhanced capabilities, and empowered employees.
          </p>
          <h2 className="text-2xl font-bold mb-3 mt-6 text-[#97144D]">The Axis Bank Rewards Program</h2>
          <p>
            Our rewards program is designed to recognize and appreciate our valuable customers. We offer a comprehensive suite of rewards 
            tailored to different customer segments, providing exclusive benefits, cashbacks, and special privileges based on your banking relationship with us.
          </p>
        </div>
      )
    },
    "terms": {
      title: "Terms & Conditions",
      content: (
        <div className="prose max-w-none">
          <p className="mb-4">
            Please read these terms and conditions carefully before using the Axis Bank Rewards Program.
          </p>
          <h2 className="text-xl font-bold mb-3 mt-6 text-[#97144D]">1. Program Eligibility</h2>
          <p className="mb-4">
            The Axis Bank Rewards Program is available to all eligible Axis Bank savings account holders and credit card customers.
          </p>
          <h2 className="text-xl font-bold mb-3 mt-6 text-[#97144D]">2. Reward Points</h2>
          <p className="mb-4">
            Reward points are earned based on eligible transactions and banking activities as defined by Axis Bank.
          </p>
          <h2 className="text-xl font-bold mb-3 mt-6 text-[#97144D]">3. Redemption</h2>
          <p>
            Reward points can be redeemed through the Axis Bank Rewards Portal for various offers, vouchers, and services.
          </p>
        </div>
      )
    },
    "privacy": {
      title: "Privacy Policy",
      content: (
        <div className="prose max-w-none">
          <p className="mb-4">
            This privacy policy explains how Axis Bank collects, uses, and protects your personal information.
          </p>
          <h2 className="text-xl font-bold mb-3 mt-6 text-[#97144D]">1. Information Collection</h2>
          <p className="mb-4">
            We collect personal information such as name, address, contact details, and transaction data necessary to provide our services.
          </p>
          <h2 className="text-xl font-bold mb-3 mt-6 text-[#97144D]">2. Information Usage</h2>
          <p className="mb-4">
            Your information is used to personalize your banking experience, process transactions, and provide targeted rewards.
          </p>
          <h2 className="text-xl font-bold mb-3 mt-6 text-[#97144D]">3. Data Security</h2>
          <p>
            We implement robust security measures to protect your information from unauthorized access and misuse.
          </p>
        </div>
      )
    }
  };
  
  // Render static pages
  if (["about", "terms", "privacy"].includes(currentPage)) {
    const page = staticPages[currentPage];
    return (
      <PageWrapper 
        userData={userData}
        journeyStage={journeyStage}
        onStageChange={handleStageChange}
        onLogin={() => navigate("login")}
        onLogout={handleLogout}
        onNavigate={handleFooterNavigation}
      >
        <div className="pt-[88px] px-4 py-8 max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-[#97144D]">{page.title}</h1>
          {page.content}
        </div>
      </PageWrapper>
    );
  }
  
  // Contact page with enhanced design and image
  if (currentPage === "contact") {
    return (
      <PageWrapper 
        userData={userData}
        journeyStage={journeyStage}
        onStageChange={handleStageChange}
        onLogin={() => navigate("login")}
        onLogout={handleLogout}
        onNavigate={handleFooterNavigation}
      >
        <div className="pt-[88px]">
          {/* Hero banner with image background */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
              alt="Axis Bank Customer Service"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#97144D]/90 to-[#97144D]/70"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Contact Us</h1>
                <p className="text-white/90 max-w-xl">
                  We're here to help with any questions about your Axis Bank accounts, 
                  rewards program, or banking services.
                </p>
              </div>
            </div>
          </div>
          
          {/* Content section */}
          <div className="container mx-auto px-4 py-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                {/* Contact form */}
                <div className="md:w-1/2 p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6 text-[#97144D]">Get in Touch</h2>
                  <form className="space-y-5">
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#97144D]/20" 
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                      <input 
                        type="email" 
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#97144D]/20" 
                        placeholder="Your email address"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">Subject</label>
                      <select className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#97144D]/20">
                        <option value="" disabled selected>Select a topic</option>
                        <option value="rewards">Rewards Program</option>
                        <option value="account">Account Services</option>
                        <option value="cards">Credit & Debit Cards</option>
                        <option value="loans">Loans & Mortgages</option>
                        <option value="feedback">General Feedback</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">Message</label>
                      <textarea 
                        rows={4} 
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#97144D]/20"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <div>
                      <AxisButton variant="primary" className="flex items-center">
                        Send Message <Send size={16} className="ml-2" />
                      </AxisButton>
                    </div>
                  </form>
                </div>
                
                {/* Contact information with image */}
                <div className="md:w-1/2 bg-[#f9f3f6]">
                  <div className="h-64 overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Axis Bank Customer Support Team"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold mb-6 text-[#97144D]">Contact Information</h2>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="bg-[#97144D] rounded-full p-2 text-white mr-4 mt-1">
                          <Phone size={18} />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Customer Service</p>
                          <p className="text-gray-600">1800-209-5577 (Toll Free)</p>
                          <p className="text-gray-600">+91-22-2710-6162</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-[#97144D] rounded-full p-2 text-white mr-4 mt-1">
                          <Mail size={18} />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Email</p>
                          <p className="text-gray-600">customer.service@axisbank.com</p>
                          <p className="text-gray-600">rewards.support@axisbank.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-[#97144D] rounded-full p-2 text-white mr-4 mt-1">
                          <MapPin size={18} />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Head Office</p>
                          <p className="text-gray-600">
                            Axis Bank Limited, Corporate Office,<br />
                            Axis House, Wadia International Centre,<br />
                            Pandurang Budhkar Marg, Worli,<br />
                            Mumbai - 400 025
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-[#97144D] rounded-full p-2 text-white mr-4 mt-1">
                          <Clock size={18} />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Hours of Operation</p>
                          <p className="text-gray-600">Monday to Friday: 9:30 AM - 5:30 PM</p>
                          <p className="text-gray-600">Saturday: 9:30 AM - 1:30 PM</p>
                          <p className="text-gray-600">Closed on Sundays and Bank Holidays</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Branch locator section */}
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold mb-4 text-[#97144D]">Find a Branch Near You</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                With over 4,000 branches across India, we're never far away. Use our branch locator to find the nearest Axis Bank branch or ATM.
              </p>
              <AxisButton variant="outline" className="mx-auto">
                Branch & ATM Locator
              </AxisButton>
            </div>
          </div>
        </div>
      </PageWrapper>
    );
  }
  
  // If user is logged in, show dashboard
  if (userData.isLoggedIn) {
    return (
      <PageWrapper 
        userData={userData}
        journeyStage={journeyStage}
        onStageChange={handleStageChange}
        onLogin={() => navigate("login")}
        onLogout={handleLogout}
        onNavigate={handleFooterNavigation}
      >
        <DashboardPage 
          userData={userData} 
          currentStage={journeyStage} 
          onStageChange={handleStageChange}
          onLogout={handleLogout}
        />
        
        {/* Rewards Journey Modal */}
        <RewardsJourneyModal 
          isOpen={showRewardsModal}
          onClose={() => setShowRewardsModal(false)}
          onExplore={() => {
            setShowRewardsModal(false);
            setJourneyStage("discovery");
          }}
          userName={userData.name}
        />
      </PageWrapper>
    );
  }
  
  // Main awareness/non-logged-in page
  return (
    <PageWrapper 
      userData={userData}
      journeyStage={journeyStage}
      onStageChange={handleStageChange}
      onLogin={() => navigate("login")}
      onLogout={handleLogout}
      onNavigate={handleFooterNavigation}
    >
      <main className="flex-grow">
        {journeyStage === "awareness" ? (
          <>
            <BannerCarousel 
              isLoggedIn={userData.isLoggedIn}
              userData={userData}
              onExploreRewards={navigateToExploreRewards}
              onOpenAccount={() => navigate("open-account")}
            />
            <CallToAction 
              isLoggedIn={userData.isLoggedIn}
              onOpenAccount={() => navigate("open-account")}
              onExploreRewards={navigateToExploreRewards}
            />
            <SegmentShowcase />
            <PersonaOffers selectedPersona="senior-citizens" />
            
            {/* Full-width stacked rewards showcase with integrated login CTA */}
            <RewardsShowcase 
              onPlayGames={() => {
                if (userData.isLoggedIn) {
                  navigate("mini-games");
                } else {
                  setShowRewardsModal(true);
                }
              }}
              onExploreRewards={() => navigate("rewards-gallery")}
              onLogin={() => navigate("login")}
            />
            
            {/* Rewards Journey Modal */}
            <RewardsJourneyModal 
              isOpen={showRewardsModal}
              onClose={() => setShowRewardsModal(false)}
              onExplore={() => {
                setShowRewardsModal(false);
                navigate("rewards-gallery");
              }}
            />
          </>
        ) : (
          <div className="py-12 text-center pt-[88px]">
            <h2 className="mb-4 font-bold">Login Required</h2>
            <p className="mb-8">
              Please log in to access the {journeyStage === "discovery" ? "Rewards Discovery" : 
                journeyStage === "activation" ? "Reward Activation" : 
                journeyStage === "redemption" ? "Redemption" : "Post Redemption"} section.
            </p>
            <AxisButton 
              variant="primary"
              onClick={() => navigate("login")}
              className="mx-auto"
            >
              Login to Continue
            </AxisButton>
          </div>
        )}
      </main>
    </PageWrapper>
  );
}