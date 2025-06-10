import React, { InputHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  required?: boolean;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, required, className, ...props }, ref) => {
    return (
      <div className="relative w-full" data-name="Text_Input">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative w-full">
          {/* Label */}
          {label && (
            <div className="relative shrink-0 w-full" data-name="label_wrapper">
              <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
                <div className="relative shrink-0 w-full" data-name="label">
                  <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative w-full">
                    <div className="relative shrink-0" data-name="label_text_container">
                      <div className="relative size-full">
                        <div className="box-border content-stretch flex flex-row items-start justify-start pl-0 pr-0.5 py-0.5 relative">
                          <div className="flex flex-col font-['Lato:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#282828] text-[14px] text-left text-nowrap tracking-[0.24px]">
                            <p className="block leading-[20px] whitespace-pre">
                              {label} {required && <span className="text-[#97144d]">*</span>}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Input */}
          <div
            className={clsx(
              "bg-[#ffffff] relative rounded shrink-0 w-full border border-[#e2e2e2] border-solid",
              error && "border-[#d4183d]",
              className
            )}
            data-name="input"
          >
            <div className="flex flex-row items-center relative size-full">
              <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-[8px] relative w-full">
                <div className="flex flex-row items-center self-stretch w-full">
                  <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0 w-full">
                    <input
                      ref={ref}
                      className="w-full bg-transparent border-none outline-none p-1 font-['Lato:Regular',_sans-serif] text-[14px] tracking-[0.24px] placeholder:text-[#9d9d9d]"
                      {...props}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Error message */}
          {error && (
            <div className="text-[#d4183d] text-[12px] mt-1 font-['Lato:Regular',_sans-serif]">
              {error}
            </div>
          )}
        </div>
      </div>
    );
  }
);

TextInput.displayName = "TextInput";