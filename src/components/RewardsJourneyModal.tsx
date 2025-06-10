import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { RewardWheel } from './RewardWheel';
import { RewardResult } from './RewardResult';
import '../styles/rewards-animations.css';

// Define reward types
export type RewardType = {
  title: string;
  description: string;
  image: string;
  color: string;
  value: string;
  brand?: string;
  brandLogo?: string;
};

type RewardsJourneyModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onExplore: () => void;
  userName?: string;
};

// Sample reward data
const rewards: RewardType[] = [
  {
    title: "Dining Voucher",
    description: "Enjoy a discount on your favorite meals",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    color: "#FF5A5F",
    value: "10% off on Zomato",
    brand: "Zomato",
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"
  },
  {
    title: "Shopping Voucher",
    description: "Save on your next purchase",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    color: "#F9A825",
    value: "₹500 off on Amazon",
    brand: "Amazon",
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
  },
  {
    title: "Travel Discount",
    description: "Get away for less",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    color: "#4CAF50",
    value: "15% off on MakeMyTrip",
    brand: "MakeMyTrip",
    brandLogo: "https://static.businessworld.in/article/article_extra_large_image/1609147522_O4YGnA_Logo_3x.png"
  },
  {
    title: "Entertainment Pass",
    description: "Enjoy movies and shows",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    color: "#8E24AA",
    value: "1 month free on Hotstar",
    brand: "Hotstar",
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Disney%2B_Hotstar_logo.svg/1200px-Disney%2B_Hotstar_logo.svg.png"
  },
  {
    title: "Lounge Access",
    description: "Relax before your flight",
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    color: "#1E88E5",
    value: "Complimentary airport lounge access",
    brand: "Axis Bank Burgundy",
    brandLogo: "https://www.axisbank.com/assets/images/logo.png"
  },
  {
    title: "Bonus Points",
    description: "Extra rewards points for you",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    color: "#D32F2F",
    value: "500 bonus reward points",
    brand: "Axis Bank",
    brandLogo: "https://www.axisbank.com/assets/images/logo.png"
  },
];

// Simplified wheel segments data
const wheelSegments = rewards.map(reward => ({
  title: reward.title,
  color: reward.color,
  value: reward.value
}));

export const RewardsJourneyModal = ({ 
  isOpen, 
  onClose, 
  onExplore, 
  userName = 'Valued Customer' 
}: RewardsJourneyModalProps) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedReward, setSelectedReward] = useState<RewardType | null>(null);
  const [showReward, setShowReward] = useState(false);
  const confettiCanvasRef = useRef<HTMLCanvasElement>(null);

  const handleSpinComplete = (segment: { title: string, color: string, value: string }) => {
    // Find the full reward data that matches the segment
    const matchedReward = rewards.find(r => r.value === segment.value);
    
    if (matchedReward) {
      setSelectedReward(matchedReward);
      setShowReward(true);
      
      // Trigger confetti
      if (confettiCanvasRef.current) {
        const canvas = confettiCanvasRef.current;
        const myConfetti = confetti.create(canvas, {
          resize: true,
          useWorker: true
        });
        
        myConfetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  // Reset the modal state when closed
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setSelectedReward(null);
        setShowReward(false);
      }, 300);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <canvas
        ref={confettiCanvasRef}
        className="fixed inset-0 pointer-events-none z-50"
        style={{ width: '100%', height: '100%' }}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-md relative"
      >
        {/* Header with gradient background */}
        <div className="relative bg-gradient-to-r from-[#97144D] to-[#b01d5c] px-6 py-4 text-white">
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 text-white/80 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
          <h2 className="text-xl font-bold">Welcome to Your Rewards Journey!</h2>
          <p className="opacity-90 text-sm mt-1">
            {showReward 
              ? 'Congratulations on your exclusive reward!' 
              : 'Spin the wheel to win an exclusive reward to start your experience.'}
          </p>
        </div>
        
        {/* Modal Content */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            {!showReward ? (
              <motion.div
                key="wheel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <RewardWheel 
                  segments={wheelSegments}
                  onSpinComplete={handleSpinComplete}
                  isSpinning={isSpinning}
                  setIsSpinning={setIsSpinning}
                />
              </motion.div>
            ) : (
              <motion.div
                key="reward"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {selectedReward && (
                  <RewardResult 
                    reward={selectedReward} 
                    onExplore={onExplore}
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};