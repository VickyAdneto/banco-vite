import React from "react";
import OriginalFooter from "../imports/Frame1171277912";

type FooterProps = {
  onNavigate?: (destination: string) => void;
};

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  // As per the instructions, we must use the Figma imported footer as-is without modifications
  // The original footer does not have navigation functionality
  return <OriginalFooter />;
};