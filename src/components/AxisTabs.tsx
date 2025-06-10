import React, { useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "./ui/utils";
// import imgLeadingIcon from "figma:asset/1675ff179e157c01bb819130c4ce8f5916fae047.png";

export type TabItem = {
  id: string;
  label: string;
  icon?: ReactNode;
  content: ReactNode;
  badge?: number | string;
};

type AxisTabsProps = {
  tabs: TabItem[];
  defaultTabId?: string;
  onTabChange?: (tabId: string) => void;
  className?: string;
  variant?: "default" | "outline" | "pills";
  fullWidth?: boolean;
  animated?: boolean;
};

export const AxisTabs = ({
  tabs,
  defaultTabId,
  onTabChange,
  className,
  variant = "default",
  fullWidth = false,
  animated = true,
}: AxisTabsProps) => {
  const [activeTabId, setActiveTabId] = useState<string>(defaultTabId || (tabs.length > 0 ? tabs[0].id : ""));
  const [tabWidths, setTabWidths] = useState<{ [key: string]: number }>({});
  const [tabPositions, setTabPositions] = useState<{ [key: string]: number }>({});
  const [contentHeight, setContentHeight] = useState<number | null>(null);

  useEffect(() => {
    if (defaultTabId && tabs.some(tab => tab.id === defaultTabId)) {
      setActiveTabId(defaultTabId);
    }
  }, [defaultTabId, tabs]);

  useEffect(() => {
    // Calculate tab widths and positions after render
    const widths: { [key: string]: number } = {};
    const positions: { [key: string]: number } = {};
    let position = 0;

    tabs.forEach(tab => {
      const tabElement = document.getElementById(`tab-${tab.id}`);
      if (tabElement) {
        const width = tabElement.offsetWidth;
        widths[tab.id] = width;
        positions[tab.id] = position;
        position += width;
      }
    });

    setTabWidths(widths);
    setTabPositions(positions);
  }, [tabs, activeTabId]);

  const handleTabClick = (tabId: string) => {
    setActiveTabId(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  const variantStyles = {
    default: {
      tabBar: "border-b border-border",
      tab: "px-4 py-2.5",
      activeTab: "text-[#97144D]",
      inactiveTab: "text-muted-foreground hover:text-foreground",
      indicator: "bg-[#97144D]"
    },
    outline: {
      tabBar: "mb-2",
      tab: "px-4 py-2.5 border-b-2 border-transparent",
      activeTab: "text-[#97144D] border-[#97144D]",
      inactiveTab: "text-muted-foreground hover:text-foreground hover:border-border",
      indicator: "hidden"
    },
    pills: {
      tabBar: "p-1 bg-muted rounded-lg mb-4",
      tab: "px-4 py-2 rounded-md",
      activeTab: "text-primary-foreground bg-[#97144D]",
      inactiveTab: "text-foreground hover:bg-muted-foreground/10",
      indicator: "hidden"
    }
  };

  const styles = variantStyles[variant];

  return (
    <div className={cn("w-full", className)}>
      <div className={cn("relative flex", styles.tabBar, fullWidth ? "justify-between" : "")}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            className={cn(
              "relative flex items-center gap-2 font-medium transition-all duration-200",
              styles.tab,
              activeTabId === tab.id ? styles.activeTab : styles.inactiveTab,
              fullWidth && "flex-1 justify-center"
            )}
            onClick={() => handleTabClick(tab.id)}
            role="tab"
            aria-selected={activeTabId === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
          >
            {tab.icon && <span className="flex items-center justify-center">{tab.icon}</span>}
            <span className="text-sm tracking-wide">{tab.label}</span>
            {tab.badge && (
              <span className="ml-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#97144D]/10 px-1.5 text-xs font-medium text-[#97144D]">
                {tab.badge}
              </span>
            )}
          </button>
        ))}

        {/* Active tab indicator */}
        {variant === "default" && tabWidths[activeTabId] && (
          <motion.div
            className={cn("absolute bottom-0 h-0.5 rounded-t", styles.indicator)}
            initial={false}
            animate={{
              width: tabWidths[activeTabId],
              x: tabPositions[activeTabId],
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
      </div>

      {/* Tab content */}
      <div className="relative mt-4 overflow-hidden">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`tabpanel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            className={cn(
              "transition-opacity",
              activeTabId === tab.id ? "block" : "hidden"
            )}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

// Legacy single tab component to use for backward compatibility
export const AxisTab = ({ 
  label, 
  icon, 
  isActive = false, 
  onClick 
}: { 
  label: string; 
  icon?: ReactNode; 
  isActive?: boolean; 
  onClick?: () => void;
}) => {
  return (
    <button
      className={cn(
        "relative flex items-center gap-2 px-4 py-2.5 font-medium transition-all duration-200",
        isActive ? "text-[#97144D]" : "text-muted-foreground hover:text-foreground"
      )}
      onClick={onClick}
    >
      {icon && <span className="flex items-center justify-center">{icon}</span>}
      <span className="text-sm tracking-wide">{label}</span>
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#97144D]" />
      )}
    </button>
  );
};

// Figma-based tab for perfect design consistency
export const FigmaTab = ({ 
  label, 
  isActive = false, 
  onClick,
  className,
}: { 
  label: string; 
  isActive?: boolean; 
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <div className={cn("relative size-full", className)} data-name="tabs_base" onClick={onClick}>
      <div className="box-border content-stretch flex flex-col items-center justify-start pb-px pt-0 px-0 relative size-full">
        {isActive && (
          <div className="absolute bottom-0 left-0" data-name="selection_indicator_container">
            <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative">
              <div className="bg-[#97144D] h-0.5 shrink-0 w-full" data-name="selection_indicator" />
            </div>
          </div>
        )}
        <div className="bg-[#ffffff] mb-[-1px] relative shrink-0 w-full" data-name="wrapper">
          <div className="flex flex-col items-center justify-center relative size-full">
            <div className="box-border content-stretch flex flex-col items-center justify-center p-[8px] relative w-full">
              <div className="relative shrink-0 w-full" data-name="tab_text">
                <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip p-0 relative w-full">
                  <div className="relative shrink-0 size-3" data-name="leading_icon">
                    {/* <img
                      alt=""
                      className="block max-w-none size-full"
                      height="12"
                      src={imgLeadingIcon}
                      width="12"
                    /> */}
                  </div>
                  <div className={cn(
                    "css-fuse2w flex flex-col font-['Lato:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-center text-nowrap tracking-[0.24px]",
                    isActive ? "text-[#97144D]" : "text-gray-600"
                  )}>
                    <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
                      {label}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isActive && (
          <div
            className="bg-[#97144D] h-0.5 mb-[-1px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-full"
            data-name="Slider"
          />
        )}
      </div>
    </div>
  );
};