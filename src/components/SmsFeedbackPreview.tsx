import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, ExternalLink } from "lucide-react";

type SmsFeedbackPreviewProps = {
  redemptionData: {
    title: string;
    brand: string;
  };
  className?: string;
};

export const SmsFeedbackPreview = ({
  redemptionData,
  className,
}: SmsFeedbackPreviewProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`max-w-xs ${className}`}
    >
      <div className="bg-gray-100 rounded-lg p-3 relative">
        <div className="absolute top-0 left-5 w-4 h-4 bg-gray-100 transform rotate-45 -translate-y-1/2"></div>
        <div className="flex items-start space-x-2">
          <div className="bg-[#97144D] rounded-full p-1 flex items-center justify-center text-white">
            <MessageSquare size={16} />
          </div>
          <div className="flex-1">
            <p className="text-xs font-medium text-gray-800 mb-1">
              Axis Bank Rewards
            </p>
            <p className="text-xs text-gray-600">
              How was your {redemptionData.brand} {redemptionData.title.toLowerCase()} experience? 
              Rate here: <span className="text-blue-500 underline">axbk.in/feedback</span> 
              <ExternalLink size={10} className="inline ml-1" />
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Today, 10:30 AM
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};