import svgPaths from "./svg-cm3o6duhtn";
import clsx from "clsx";
// import imgAvatarImage from "figma:asset/a3a844c570f04f94b9941f99577a74e9ce76ff2a.png";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-center p-[16px] relative">
        {children}
      </div>
    </div>
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
type WrapperProps = {
  additionalClassNames?: string[];
};

function Wrapper({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center relative size-full">
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
type MenuitemTextProps = {
  text: string;
};

function MenuitemText({ text }: MenuitemTextProps) {
  return (
    <Wrapper additionalClassNames={["bg-[#ffffff]"]}>
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-4 py-3 relative">
        <div className="css-qgucv1 font-['Lato:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#282828] text-[14px] text-left text-nowrap tracking-[0.24px]">
          <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
            {text}
          </p>
        </div>
      </div>
    </Wrapper>
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
              d={svgPaths.p1d170b00}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Fill 8"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p1ac64400}
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
      className="h-[72px] relative shrink-0 w-[326.25px]"
      data-name="axis-logo-fixed"
    >
      <FixedBand />
    </div>
  );
}

function Header() {
  return (
    <div
      className="absolute bg-[#ffffff] left-0 top-0 w-[1440px]"
      data-name="header"
    >
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative w-[1440px]">
        <AxisLogoFixed />
        <div
          className="basis-0 grow h-[29px] min-h-px min-w-px relative shrink-0"
          data-name="band"
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
      </div>
    </div>
  );
}

function RemixIconsLineSystemSearchLine() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-5"
      data-name="remix-icons/line/system/search-line"
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
            fill="var(--fill-0, #B4B4B4)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <Wrapper additionalClassNames={["h-10", "w-full"]}>
      <div className="box-border content-stretch flex flex-row gap-3 h-10 items-center justify-start pl-3 pr-4 py-2 relative w-full">
        <RemixIconsLineSystemSearchLine />
      </div>
    </Wrapper>
  );
}

function Search() {
  return (
    <div
      className="bg-[#ffffff] h-10 relative rounded-[20px] shrink-0 w-11"
      data-name="Search"
    >
      <div className="box-border content-stretch flex flex-col h-10 items-start justify-start p-0 relative w-11">
        <Container />
      </div>
    </div>
  );
}

function AvatarAtom() {
  return (
    <div className="relative shrink-0 size-6" data-name="Avatar-Atom">
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative size-6">
        <div
          className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
          data-name="avatar-image"
        >
          {/* <img
            alt
            className="block max-w-none size-full"
            height="24"
            src={imgAvatarImage}
            width="24"
          /> */}
        </div>
      </div>
    </div>
  );
}

function Frame1171277911() {
  return (
    <div className="absolute top-7" style={{ left: "calc(58.3333% + 35px)" }}>
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative">
        <Search />
        <MenuitemText text="Home" />
        <MenuitemText text="Accounts" />
        <MenuitemText text="Rewards" />
        <MenuitemText text="Support" />
        <MenuitemText text="Login" />
        <AvatarAtom />
      </div>
    </div>
  );
}

function Frame1171277912() {
  return (
    <div className="absolute bg-[#444444] left-0 top-[976px] w-[1440px]">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row font-['Lato:Regular',_sans-serif] font-normal items-center justify-between leading-[0] not-italic px-[60px] py-3.5 relative text-[#e2e2e2] text-[14px] text-left text-nowrap tracking-[0.24px] w-[1440px]">
          <Frame1171277912Helper>{`Copyright © 2025 Axis Bank  |  Terms & Conditions  |  Privacy Policy  |  Contact Us.`}</Frame1171277912Helper>
          <Frame1171277912Helper>Powered by Bankco</Frame1171277912Helper>
        </div>
      </div>
    </div>
  );
}

function Container1() {
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
      <Wrapper1>
        <Container1 />
      </Wrapper1>
      <div className="absolute border border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function Container2() {
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
      <Wrapper1>
        <Container2 />
      </Wrapper1>
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
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 h-32 items-center justify-center p-[16px] relative w-[688px]">
          <Frame1171277908 />
        </div>
      </div>
    </div>
  );
}

export default function Component01Awareness() {
  return (
    <div className="bg-[#f8f8f8] relative size-full" data-name="01_ Awareness">
      <Header />
      <Frame1171277911 />
      <Frame1171277912 />
      <ButtonGroup />
    </div>
  );
}