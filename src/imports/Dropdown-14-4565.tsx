import svgPaths from "./svg-33ywilh8ai";
import clsx from "clsx";
type WrapperProps = {
  additionalClassNames?: string[];
};

function Wrapper({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="relative size-full">{children}</div>
    </div>
  );
}

function LabelTextContainer() {
  return (
    <Wrapper>
      <div className="box-border content-stretch flex flex-row items-start justify-start pl-0 pr-0.5 py-0.5 relative">
        <div className="css-qgucv1 flex flex-col font-['Lato:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#282828] text-[14px] text-left text-nowrap tracking-[0.24px]">
          <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">{`Label text `}</p>
        </div>
      </div>
    </Wrapper>
  );
}

function Label() {
  return (
    <div className="relative shrink-0 w-full" data-name="label">
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative w-full">
        <LabelTextContainer />
      </div>
    </div>
  );
}

function LabelWrapper() {
  return (
    <div className="relative shrink-0 w-full" data-name="label_wrapper">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <Label />
      </div>
    </div>
  );
}

function InputTextContainer() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="input_text_container"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start px-0 py-1 relative size-full">
          <div className="basis-0 css-duz7nw flex flex-col font-['Lato:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9d9d9d] text-[14px] text-left tracking-[0.24px]">
            <p className="adjustLetterSpacing block leading-[20px]">{`Placeholder text `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrailingIcon() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-6"
      data-name="trailing_icon"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Group">
          <g id="Vector"></g>
          <path
            d={svgPaths.p14f41100}
            fill="var(--fill-0, #404040)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function TrailingIconContainer() {
  return (
    <Wrapper additionalClassNames={["h-full"]}>
      <div className="box-border content-stretch flex flex-row gap-2.5 h-full items-start justify-start p-[2px] relative">
        <TrailingIcon />
      </div>
    </Wrapper>
  );
}

function Input() {
  return (
    <div
      className="bg-[#ffffff] relative rounded shrink-0 w-full"
      data-name="input"
    >
      <div className="absolute border border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-[8px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <InputTextContainer />
          </div>
          <div className="flex flex-row items-center self-stretch">
            <TrailingIconContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Dropdown() {
  return (
    <div className="relative size-full" data-name="Dropdown">
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative size-full">
        <LabelWrapper />
        <Input />
      </div>
    </div>
  );
}