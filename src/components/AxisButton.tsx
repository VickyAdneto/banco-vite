import React from "react";
import { Loader2 } from "lucide-react";

type AxisButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "link";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export const AxisButton = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  loading = false,
  className = "",
  type = "button",
  onClick,
}: AxisButtonProps) => {
  // Base styles - using Arial font and proper transitions
  const baseStyles = "relative inline-flex items-center justify-center rounded-lg font-['Arial'] font-semibold text-center transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

  // Size styles - following global CSS button sizing
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm min-h-[32px]",
    md: "px-4 py-2 text-sm min-h-[40px]",
    lg: "px-6 py-3 text-base min-h-[48px]",
  };

  // Variant styles - using CSS custom properties for consistency
  const variantStyles = {
    primary: "bg-[#97144D] text-white hover:bg-[#7d1041] active:bg-[#661234] focus:ring-[#97144D]/30 shadow-sm hover:shadow-md",
    secondary: "bg-[#12877F] text-white hover:bg-[#0e6e67] active:bg-[#0a5550] focus:ring-[#12877F]/30 shadow-sm hover:shadow-md",
    outline: "bg-transparent border border-[#97144D] text-[#97144D] hover:bg-[#97144D] hover:text-white active:bg-[#7d1041] focus:ring-[#97144D]/30",
    link: "bg-transparent text-[#97144D] hover:text-[#7d1041] hover:underline focus:ring-[#97144D]/30 focus:ring-offset-0 p-0 min-h-auto shadow-none",
  };

  // Width styles
  const widthStyles = fullWidth ? "w-full" : "";

  // Combined styles
  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyles} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonStyles}
      aria-busy={loading}
      aria-disabled={disabled || loading}
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          <span>Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};