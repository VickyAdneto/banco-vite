import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

type RewardSegment = {
  title: string;
  color: string;
  value: string;
};

type RewardWheelProps = {
  segments: RewardSegment[];
  onSpinComplete: (reward: RewardSegment) => void;
  isSpinning: boolean;
  setIsSpinning: (spinning: boolean) => void;
};

export const RewardWheel = ({ 
  segments, 
  onSpinComplete, 
  isSpinning, 
  setIsSpinning 
}: RewardWheelProps) => {
  const [rotation, setRotation] = useState(0);

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    
    // Random rotation between 720 and 1440 degrees (2-4 full spins)
    const spinDegrees = 720 + Math.floor(Math.random() * 720);
    
    // Determine which reward will be selected
    const selectedRewardIndex = Math.floor(Math.random() * segments.length);
    const selectedReward = segments[selectedRewardIndex];
    
    // Calculate final rotation to land on the selected reward
    const segmentSize = 360 / segments.length;
    const segmentOffset = segmentSize * selectedRewardIndex;
    const finalRotation = spinDegrees + segmentOffset;
    
    setRotation(finalRotation);
    
    // Set the reward after spinning animation is complete
    setTimeout(() => {
      onSpinComplete(selectedReward);
      setIsSpinning(false);
    }, 4000); // Match this with the CSS animation duration
  };

  // Reset rotation when not spinning
  useEffect(() => {
    if (!isSpinning) {
      setTimeout(() => {
        setRotation(0);
      }, 300);
    }
  }, [isSpinning]);

  return (
    <div className="flex flex-col items-center">
      {/* Wheel Container */}
      <div className="relative w-64 h-64 mb-6">
        {/* Wheel Segments */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden border-4 border-[#97144D] shadow-lg transition-all duration-4000 ease-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {segments.map((segment, index) => {
            const segmentSize = 360 / segments.length;
            const rotation = index * segmentSize;
            
            return (
              <div
                key={index}
                className="absolute inset-0 origin-center"
                style={{ 
                  transform: `rotate(${rotation}deg)`,
                  clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((segmentSize * Math.PI) / 180)}% ${50 + 50 * Math.sin((segmentSize * Math.PI) / 180)}%)`,
                  backgroundColor: segment.color
                }}
              >
                <div 
                  className="absolute text-white font-bold text-xs left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2 rotate-90 whitespace-nowrap"
                  style={{ transform: `rotate(${90 + segmentSize/2}deg) translateY(-70px)` }}
                >
                  {segment.title}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Center Hub */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
            <div className="bg-[#97144D] rounded-full w-10 h-10 flex items-center justify-center">
              <Sparkles className="text-white h-6 w-6" />
            </div>
          </div>
        </div>
        
        {/* Pointer */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[20px] border-l-transparent border-r-transparent border-b-[#97144D]" />
        </div>
      </div>
      
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        onClick={spinWheel}
        disabled={isSpinning}
        className={`bg-[#97144D] text-white font-bold py-3 px-8 rounded-full shadow-lg ${isSpinning ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#7d1041]'} transition-all`}
      >
        {isSpinning ? 'Spinning...' : 'Spin The Wheel'}
      </motion.button>
    </div>
  );
};