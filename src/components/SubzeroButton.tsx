import React from "react";
import svgPaths from "../imports/svg-191prntwjo";
import { AxisButton } from "./AxisButton";

type SubzeroButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "link";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  showSubzero?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export const SubzeroButton = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  loading = false,
  showSubzero = false,
  className = "",
  type = "button",
  onClick,
}: SubzeroButtonProps) => {
  return (
    <div className="relative inline-block">
      <AxisButton
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        disabled={disabled}
        loading={loading}
        className={`font-['Lato'] ${className}`}
        type={type}
        onClick={onClick}
      >
        {children}
      </AxisButton>
      
      {showSubzero && (
        <div className="absolute -top-4 -right-4 scale-[0.1] origin-bottom-right pointer-events-none">
          <div className="absolute bg-[#ebf9f8] h-[135px] right-0 rounded-[23.8098px] top-[32px] w-[187.801px]">
            <div className="absolute flex flex-col font-['Lato'] font-bold justify-center leading-[0] left-6 text-[#12877f] text-[95.2392px] text-left text-nowrap top-[66.5px] tracking-[1.78574px] translate-y-[-50%]">
              <p className="adjustLetterSpacing block leading-[130.954px] whitespace-pre">
                2.0
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};