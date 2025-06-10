import svgPaths from "./svg-buud6p1f2h";
import clsx from "clsx";
type Wrapper1Props = {
  additionalClassNames?: string[];
};

function Wrapper1({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("relative size-full", additionalClassNames)}>
      {children}
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string[];
};

function Wrapper({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      {children}
    </div>
  );
}

function RemixIconsLineSystemSearchLine() {
  return (
    <Wrapper additionalClassNames={["overflow-clip", "size-5"]}>
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Group">
          <g id="Vector"></g>
          <path
            d={svgPaths.p2c0f3700}
            fill="var(--fill-0, #B4B4B4)"
            id="Vector_2"
          />
        </g>
      </svg>
    </Wrapper>
  );
}

function RemixIconsLineMediaMicLine() {
  return (
    <Wrapper additionalClassNames={["overflow-clip", "size-6"]}>
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Group">
          <g id="Vector"></g>
          <path
            d={svgPaths.p15e4a200}
            fill="var(--fill-0, #404040)"
            id="Vector_2"
          />
        </g>
      </svg>
    </Wrapper>
  );
}

function Container() {
  return (
    <Wrapper additionalClassNames={["h-10", "w-full"]}>
      <Wrapper1 additionalClassNames={["flex", "flex-row", "items-center"]}>
        <div className="box-border content-stretch flex flex-row gap-3 h-10 items-center justify-start pl-3 pr-4 py-2 relative w-full">
          <RemixIconsLineSystemSearchLine />
          <div className="basis-0 css-bbx4o flex flex-col font-['Lato:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#6e6e6e] text-[14px] text-left tracking-[0.24px]">
            <p className="adjustLetterSpacing block leading-[20px]">
              Search here
            </p>
          </div>
          <RemixIconsLineMediaMicLine />
        </div>
      </Wrapper1>
    </Wrapper>
  );
}

export default function Search() {
  return (
    <Wrapper1 additionalClassNames={["bg-[#ffffff]", "rounded-[20px]"]}>
      <div className="absolute border border-[#e2e2e2] border-solid inset-[-1px] pointer-events-none rounded-[21px]" />
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full">
        <Container />
      </div>
    </Wrapper1>
  );
}