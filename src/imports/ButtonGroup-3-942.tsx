import svgPaths from "./svg-x82avcbkm9";
import clsx from "clsx";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return <div className="relative shrink-0 w-full">{children}</div>;
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-center p-[16px] relative w-full">
        {children}
      </div>
    </div>
  );
}

function Container2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip p-0 relative w-full">
        {children}
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string[];
};

function Text({ text, additionalClassNames = [] }: TextProps) {
  return (
    <div
      className={clsx(
        "flex flex-col font-['Lato:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap tracking-[0.24px]",
        additionalClassNames,
      )}
    >
      <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
        {text}
      </p>
    </div>
  );
}

function CheckboxIcon() {
  return (
    <div className="relative shrink-0 size-6" data-name="checkbox_icon">
      <svg
        className="block size-full"
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
  );
}

function Frame1171277911() {
  return (
    <Wrapper1>
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative w-full">
        <CheckboxIcon />
        <div className="basis-0 css-qgucv1 flex flex-col font-['Lato:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#282828] text-[14px] text-left tracking-[0.24px]">
          <p className="leading-[20px]">
            <span>{`I agree to all applicable `}</span>
            <span className="adjustLetterSpacing font-['Lato:Regular',_sans-serif] font-normal not-italic text-[#ed1164]">{`Terms & Conditions`}</span>
          </p>
        </div>
      </div>
    </Wrapper1>
  );
}

function Container() {
  return (
    <Container2>
      <Text
        text="Primary button"
        additionalClassNames={["css-5ot3y1", "text-[#ffffff]"]}
      />
    </Container2>
  );
}

function Button() {
  return (
    <div
      className="bg-[#97144d] relative rounded-lg shrink-0 w-full"
      data-name="Button"
    >
      <Wrapper>
        <Container />
      </Wrapper>
    </div>
  );
}

function Container1() {
  return (
    <Container2>
      <Text
        text="Secondary button"
        additionalClassNames={["css-6rx6jg", "text-[#97144d]"]}
      />
    </Container2>
  );
}

function ButtonSecondaryDefaultL() {
  return (
    <div
      className="basis-0 bg-[#f9f9f9] grow min-h-px min-w-px relative rounded-lg shrink-0"
      data-name="Button/Secondary/Default/L"
    >
      <Wrapper>
        <Container1 />
      </Wrapper>
      <div className="absolute border border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function SecondaryCta() {
  return (
    <Wrapper1>
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative w-full">
        <ButtonSecondaryDefaultL />
      </div>
    </Wrapper1>
  );
}

function Frame1171277909() {
  return (
    <Wrapper1>
      <div className="box-border content-stretch flex flex-col gap-3 items-center justify-center p-0 relative w-full">
        <Button />
        <SecondaryCta />
      </div>
    </Wrapper1>
  );
}

export default function ButtonGroup() {
  return (
    <div
      className="bg-[#ffffff] relative shadow-[0px_0px_2px_0px_rgba(0,0,0,0.1)] size-full"
      data-name="Button-Group"
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-center justify-center p-[16px] relative size-full">
          <Frame1171277911 />
          <Frame1171277909 />
        </div>
      </div>
    </div>
  );
}