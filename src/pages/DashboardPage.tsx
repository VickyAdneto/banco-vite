import { useState } from "react";
import { Footer } from "../components/Footer";
import { RewardsDiscoveryPage } from "./RewardsDiscoveryPage";
import { RewardActivationPage } from "./RewardActivationPage";
import { RewardRedemptionPage } from "./RewardRedemptionPage";
import { PostRedemptionPage } from "./PostRedemptionPage";
import { Badge } from "../components/ui/badge";
import { BannerCarousel } from "../components/BannerCarousel";
import { CallToAction } from "../components/CallToAction";
import { SegmentShowcase } from "../components/SegmentShowcase";
import { PersonaOffers } from "../components/PersonaOffers";

// Types
type UserData = {
  isLoggedIn: boolean;
  customerId?: string;
  name?: string;
  segment?: string;
  persona?: string;
};

type DashboardPageProps = {
  userData: UserData;
  currentStage: string;
  onStageChange: (stage: string) => void;
  onLogout: () => void;
};

export const DashboardPage = ({ 
  userData, 
  currentStage, 
  onStageChange,
  onLogout
}: DashboardPageProps) => {
  return (
    <div className="bg-[#f8f8f8] min-h-screen flex flex-col">
      {/* Header is now passed from App.tsx */}
      
      <main className="flex-grow pt-[88px]">
        {/* Stage Content */}
        <div>
          {currentStage === "awareness" && (
            <div className="py-8">
              <BannerCarousel />
              <CallToAction />
              <SegmentShowcase />
              <PersonaOffers selectedPersona={userData.persona || "senior-citizens"} />
            </div>
          )}
          {currentStage === "discovery" && <RewardsDiscoveryPage userData={userData} />}
          {currentStage === "activation" && <RewardActivationPage userData={userData} />}
          {currentStage === "redemption" && <RewardRedemptionPage userData={userData} />}
          {currentStage === "post-redemption" && <PostRedemptionPage userData={userData} />}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};