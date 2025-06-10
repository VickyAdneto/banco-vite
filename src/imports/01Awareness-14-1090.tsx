import svgPaths from "./svg-puq04w7l7f";
import clsx from "clsx";
type Wrapper1Props = {
  additionalClassNames?: string[];
};

function Wrapper1({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div
      className={clsx(
        "flex items-center relative size-full",
        additionalClassNames,
      )}
    >
      {children}
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1
      additionalClassNames={["flex-row", "justify-center", "overflow-clip"]}
    >
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-center p-[16px] relative">
        {children}
      </div>
    </Wrapper1>
  );
}

function Container3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-64">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip p-0 relative w-64">
        {children}
      </div>
    </div>
  );
}

function Frame1171277912Helper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="css-ebafv2 relative shrink-0">
      <p className="adjustLetterSpacing block leading-[20px] text-nowrap whitespace-pre">
        {children}
      </p>
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

function Frame1171277912() {
  return (
    <div className="absolute bg-[#444444] left-0 top-[976px] w-[1440px]">
      <Wrapper1 additionalClassNames={["flex-row"]}>
        <div className="box-border content-stretch flex flex-row font-['Lato:Regular',_sans-serif] font-normal items-center justify-between leading-[0] not-italic px-[60px] py-3.5 relative text-[#e2e2e2] text-[14px] text-left text-nowrap tracking-[0.24px] w-[1440px]">
          <Frame1171277912Helper>{`Copyright © 2025 Axis Bank  |  Terms & Conditions  |  Privacy Policy  |  Contact Us.`}</Frame1171277912Helper>
          <Frame1171277912Helper>Powered by Adneto</Frame1171277912Helper>
        </div>
      </Wrapper1>
    </div>
  );
}

function Container() {
  return (
    <Container3>
      <Text
        text="Explore Your Rewards"
        additionalClassNames={["css-6rx6jg", "text-[#97144d]"]}
      />
    </Container3>
  );
}

function ButtonSecondaryDefaultL() {
  return (
    <div
      className="bg-[#f9f9f9] relative rounded-lg shrink-0"
      data-name="Button/Secondary/Default/L"
    >
      <Wrapper>
        <Container />
      </Wrapper>
      <div className="absolute border border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function Container1() {
  return (
    <Container3>
      <Text
        text="Open a Savings Account"
        additionalClassNames={["css-5ot3y1", "text-[#ffffff]"]}
      />
    </Container3>
  );
}

function Button() {
  return (
    <div
      className="bg-[#97144d] relative rounded-lg shrink-0"
      data-name="Button"
    >
      <Wrapper>
        <Container1 />
      </Wrapper>
    </div>
  );
}

function Frame1171277908() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-3 h-full items-center justify-center p-0 relative">
        <ButtonSecondaryDefaultL />
        <Button />
      </div>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div
      className="absolute bg-[#ffffff] h-32 shadow-[0px_0px_2px_0px_rgba(0,0,0,0.1)] top-[610px] w-[688px]"
      data-name="Button-Group"
      style={{ left: "calc(33.3333% + 95px)" }}
    >
      <Wrapper1 additionalClassNames={["flex-col", "justify-center"]}>
        <div className="box-border content-stretch flex flex-col gap-4 h-32 items-center justify-center p-[16px] relative w-[688px]">
          <Frame1171277908 />
        </div>
      </Wrapper1>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 top-px">
      <div className="absolute bg-[#ffffff] h-[88px] left-0 top-px w-[1440px]" />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-0 top-px">
      <Group3 />
    </div>
  );
}

function FixedBand() {
  return (
    <div
      className="absolute h-[72px] left-0 top-0 w-[327.273px]"
      data-name="fixed-band"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 328 72"
      >
        <g id="fixed-band">
          <path
            clipRule="evenodd"
            d={svgPaths.p3c4c8ff2}
            fill="var(--fill-0, #97144D)"
            fillRule="evenodd"
            id="band"
          />
          <g id="axis-bank-logo">
            <path
              clipRule="evenodd"
              d={svgPaths.pea23400}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Fill 4"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p39df600}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Fill 6"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p1364ee40}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Fill 8"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p1459dff0}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Fill 10"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AxisLogoFixed() {
  return (
    <div
      className="absolute h-[72px] left-0 top-0 w-[326.25px]"
      data-name="axis-logo-fixed"
    >
      <Group4 />
      <FixedBand />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0" data-name="container">
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-0 relative">
        <div className="css-iouovj flex flex-col font-['Lato:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] text-center text-nowrap tracking-[0.32px]">
          <p className="adjustLetterSpacing block leading-[18px] whitespace-pre">
            Login
          </p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="absolute bg-[#97144d] rounded top-[42px]"
      data-name="Button"
      style={{ left: "calc(91.6667% - 5.00003px)" }}
    >
      <Wrapper1
        additionalClassNames={["flex-row", "justify-center", "overflow-clip"]}
      >
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-2 relative">
          <Container2 />
        </div>
      </Wrapper1>
    </div>
  );
}

function Group() {
  return (
    <div
      className="absolute bottom-[93.262%] left-[50.833%] right-[47.778%] top-[4.785%]"
      data-name="Group"
    >
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
            fill="var(--fill-0, #282828)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div
      className="absolute contents top-[42px]"
      style={{ left: "calc(50% + 12px)" }}
    >
      <div
        className="absolute css-4cnz3l font-['Lato:Regular',_sans-serif] font-normal leading-[0] not-italic text-[#000000] text-[14px] text-left text-nowrap top-[49px] tracking-[0.24px]"
        style={{ left: "calc(50% + 62px)" }}
      >
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          Awareness
        </p>
      </div>
      <div
        className="absolute css-4cnz3l font-['Lato:Regular',_sans-serif] font-normal leading-[0] not-italic text-[#000000] text-[14px] text-left text-nowrap top-[49px] tracking-[0.24px]"
        style={{ left: "calc(58.3333% + 41px)" }}
      >
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          Discovery
        </p>
      </div>
      <div
        className="absolute css-4cnz3l font-['Lato:Regular',_sans-serif] font-normal leading-[0] not-italic text-[#000000] text-[14px] text-left text-nowrap top-[49px] tracking-[0.24px]"
        style={{ left: "calc(66.6667% + 14px)" }}
      >
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          Activation
        </p>
      </div>
      <div
        className="absolute css-4cnz3l font-['Lato:Regular',_sans-serif] font-normal leading-[0] not-italic text-[#000000] text-[14px] text-left text-nowrap top-[49px] tracking-[0.24px]"
        style={{ left: "calc(75% - 11px)" }}
      >
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          Redemption
        </p>
      </div>
      <div
        className="absolute css-4cnz3l font-['Lato:Regular',_sans-serif] font-normal leading-[0] not-italic text-[#000000] text-[14px] text-left text-nowrap top-[49px] tracking-[0.24px]"
        style={{ left: "calc(83.3333% - 24px)" }}
      >
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          Post Redemption
        </p>
      </div>
      <Button1 />
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <AxisLogoFixed />
      <div
        className="absolute h-[28.364px] top-0 w-[1113.75px]"
        data-name="band"
        style={{ left: "calc(16.6667% + 86.25px)" }}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1114 29"
        >
          <path
            d={svgPaths.p176da780}
            fill="var(--fill-0, #97144D)"
            id="band"
          />
        </svg>
      </div>
      <div
        className="absolute css-iouovj font-['Lato:Regular',_sans-serif] font-normal leading-[0] not-italic text-[#ffffff] text-[12px] text-left text-nowrap top-1 tracking-[0.32px]"
        style={{ left: "calc(83.3333% - 24px)" }}
      >
        <p className="adjustLetterSpacing block leading-[18px] whitespace-pre">
          Persona Type
        </p>
      </div>
      <div
        className="absolute css-iouovj font-['Lato:Regular',_sans-serif] font-normal leading-[0] not-italic text-[#ffffff] text-[12px] text-left text-nowrap top-1 tracking-[0.32px]"
        style={{ left: "calc(91.6667% - 67px)" }}
      >
        <p className="adjustLetterSpacing block leading-[18px] whitespace-pre">
          Rewards
        </p>
      </div>
      <div
        className="absolute css-iouovj font-['Lato:Regular',_sans-serif] font-normal leading-[0] not-italic text-[#ffffff] text-[12px] text-left text-nowrap top-1 tracking-[0.32px]"
        style={{ left: "calc(91.6667% + 4.99997px)" }}
      >
        <p className="adjustLetterSpacing block leading-[18px] whitespace-pre">
          Support
        </p>
      </div>
      <Group1 />
    </div>
  );
}

export default function Component01Awareness() {
  return (
    <div className="bg-[#f8f8f8] relative size-full" data-name="01_ Awareness">
      <Frame1171277912 />
      <ButtonGroup />
      <div
        className="absolute bg-[#d9d9d9] h-[428px] left-0 top-[90px] w-[1440px]"
        data-name="Banner"
      />
      <Group2 />
    </div>
  );
}