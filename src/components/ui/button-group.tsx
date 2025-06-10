import svgPaths from "../../imports/svg-x82avcbkm9";
import React from "react";
import clsx from "clsx";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", fullWidth = false, children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "relative rounded-lg shrink-0 transition-all duration-200 ease-in-out font-['Arial'] font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2",
          variant === "primary" 
            ? "bg-[#97144D] hover:bg-[#7d1041] active:bg-[#661234] focus:ring-[#97144D]/30 shadow-sm" 
            : "bg-[#f9f9f9] border border-[#e2e2e2] border-solid hover:bg-[#f0f0f0] active:bg-[#e8e8e8] focus:ring-[#97144D]/30",
          fullWidth ? "w-full" : "w-auto",
          className
        )}
        style={{ fontStyle: "normal" }}
        {...props}
      >
        <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-row gap-4 items-center justify-center p-[16px] relative w-full">
            <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip p-0 relative w-full">
                <div
                  className={clsx(
                    "flex flex-col font-['Arial'] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap tracking-[0.24px]",
                    variant === "primary" ? "text-[#ffffff]" : "text-[#97144D]"
                  )}
                  style={{ fontStyle: "normal" }}
                >
                  <p className="block leading-[24px] whitespace-pre" style={{ fontStyle: "normal" }}>
                    {children}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
    );
  }
);

Button.displayName = "Button";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: React.ReactNode;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <div className="relative shrink-0 w-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative w-full">
          <div className="relative shrink-0 size-6" data-name="checkbox_icon">
            <input
              ref={ref}
              type="checkbox"
              className="absolute opacity-0 size-full cursor-pointer z-10 focus:outline-none"
              {...props}
            />
            <svg
              className="block size-full pointer-events-none"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 24 24"
            >
              <g id="checkbox_icon">
                <path
                  clipRule="evenodd"
                  d={svgPaths.p12c0c180}
                  fill="var(--fill-0, #404040)"
                  fillRule="evenodd"
                  id="unchecked"
                />
              </g>
            </svg>
          </div>
          <div 
            className="basis-0 flex flex-col font-['Arial'] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#282828] text-[14px] text-left tracking-[0.24px]"
            style={{ fontStyle: "normal" }}
          >
            <p className="leading-[20px]" style={{ fontStyle: "normal" }}>
              {label}
            </p>
          </div>
        </div>
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export interface ButtonGroupProps {
  primaryButton?: {
    text: string;
    onClick?: () => void;
    disabled?: boolean;
  };
  secondaryButton?: {
    text: string;
    onClick?: () => void;
    disabled?: boolean;
  };
  checkbox?: {
    label: React.ReactNode;
    checked: boolean;
    onChange: (checked: boolean) => void;
    required?: boolean;
  };
  className?: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  primaryButton,
  secondaryButton,
  checkbox,
  className
}) => {
  return (
    <div className={clsx("bg-[#ffffff] relative shadow-[0px_0px_2px_0px_rgba(0,0,0,0.1)] w-full rounded-lg", className)}>
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-center justify-center p-[16px] relative size-full">
          {checkbox && (
            <Checkbox
              label={checkbox.label}
              checked={checkbox.checked}
              onChange={(e) => checkbox.onChange(e.target.checked)}
              required={checkbox.required}
            />
          )}
          
          <div className="relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col gap-3 items-center justify-center p-0 relative w-full">
              {primaryButton && (
                <Button
                  variant="primary"
                  fullWidth
                  onClick={primaryButton.onClick}
                  disabled={primaryButton.disabled}
                >
                  {primaryButton.text}
                </Button>
              )}
              
              {secondaryButton && (
                <Button
                  variant="secondary"
                  fullWidth
                  onClick={secondaryButton.onClick}
                  disabled={secondaryButton.disabled}
                >
                  {secondaryButton.text}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};