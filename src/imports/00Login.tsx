import svgPaths from "./svg-rxkqd3f7xz";
import clsx from "clsx";

function Frame1171277912Helper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="css-ebafv2 relative shrink-0">
      <p className="adjustLetterSpacing block leading-[20px] text-nowrap whitespace-pre">
        {children}
      </p>
    </div>
  );
}

function Wrapper11({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative w-full">
        {children}
      </div>
    </div>
  );
}

function Labelwrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </div>
  );
}

function Wrapper8({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative w-full">
        {children}
      </div>
    </div>
  );
}

function Wrapper6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center relative size-full">
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-[8px] relative w-full">
        {children}
      </div>
    </div>
  );
}
type Wrapper5Props = {
  additionalClassNames?: string[];
};

function Wrapper5({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<Wrapper5Props>) {
  return (
    <div className={clsx("relative shrink-0 size-6", additionalClassNames)}>
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        {children}
      </svg>
    </div>
  );
}
type Wrapper4Props = {
  additionalClassNames?: string[];
};

function Wrapper4({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<Wrapper4Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="relative size-full">{children}</div>
    </div>
  );
}

function Trailingiconcontainer({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper4 additionalClassNames={["h-full"]}>
      <div className="box-border content-stretch flex flex-row gap-2.5 h-full items-start justify-start p-[2px] relative">
        {children}
      </div>
    </Wrapper4>
  );
}

function Trailingicon({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper5 additionalClassNames={["overflow-clip"]}>
      <g id="Group">{children}</g>
    </Wrapper5>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string[];
};

function Wrapper3({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-1 py-2 relative">
          {children}
        </div>
      </div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="overflow-clip relative shrink-0 size-5">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Group">{children}</g>
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#ffffff] relative rounded shrink-0 w-full">
      <div className="absolute border border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded" />
      <Wrapper6>{children}</Wrapper6>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start px-0 py-1 relative size-full">
          <div className="basis-0 css-duz7nw flex flex-col font-['Lato:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#9d9d9d] text-[14px] text-left tracking-[0.24px]">
            <p className="adjustLetterSpacing block leading-[20px]">
              {children}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
type MenuitemTextProps = {
  text: string;
};

function MenuitemText({ text }: MenuitemTextProps) {
  return (
    <div className="relative shrink-0">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-4 py-3 relative">
          <div className="css-qgucv1 font-['Lato:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#282828] text-[14px] text-left text-nowrap tracking-[0.24px]">
            <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
type InputtextcontainerTextProps = {
  text: string;
};

function InputtextcontainerText({ text }: InputtextcontainerTextProps) {
  return <Wrapper>{text}</Wrapper>;
}

function Input() {
  return (
    <Wrapper1>
      <div className="flex flex-row items-center self-stretch">
        <Inputtextcontainer />
      </div>
    </Wrapper1>
  );
}

function Inputtextcontainer() {
  return <Wrapper>{`Placeholder text `}</Wrapper>;
}

function Tooltipiconcontainer() {
  return (
    <Wrapper4>
      <div className="box-border content-stretch flex flex-row items-start justify-start p-[2px] relative">
        <Tooltipicon />
      </div>
    </Wrapper4>
  );
}

function Tooltipicon() {
  return (
    <Wrapper2>
      <g id="Vector"></g>
      <path d={svgPaths.pfd02000} fill="var(--fill-0, #404040)" id="Vector_2" />
    </Wrapper2>
  );
}
type LabeltextcontainerTextProps = {
  text: string;
};

function LabeltextcontainerText({ text }: LabeltextcontainerTextProps) {
  return (
    <Wrapper4>
      <div className="box-border content-stretch flex flex-row items-start justify-start pl-0 pr-0.5 py-0.5 relative">
        <div className="css-qgucv1 flex flex-col font-['Lato:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#282828] text-[14px] text-left text-nowrap tracking-[0.24px]">
          <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
            {text}
          </p>
        </div>
      </div>
    </Wrapper4>
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
              d={svgPaths.p3a43d00}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Fill 4"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p2f10de80}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Fill 6"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p1a5f4d00}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Fill 8"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p356dc2c0}
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

function Label() {
  return (
    <Wrapper8>
      <LabeltextcontainerText text="Customer ID" />
      <Tooltipiconcontainer />
    </Wrapper8>
  );
}

function LabelWrapper() {
  return (
    <Labelwrapper>
      <Label />
    </Labelwrapper>
  );
}

function TextInput() {
  return (
    <Wrapper11>
      <LabelWrapper />
      <Input />
    </Wrapper11>
  );
}

function Label1() {
  return (
    <Wrapper8>
      <LabeltextcontainerText text="Password" />
      <Tooltipiconcontainer />
    </Wrapper8>
  );
}

function LabelWrapper1() {
  return (
    <Labelwrapper>
      <Label1 />
    </Labelwrapper>
  );
}

function TrailingIcon() {
  return (
    <Wrapper3 additionalClassNames={["rounded-lg"]}>
      <div className="css-oqoy0g flex flex-col font-['Lato:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ed1164] text-[12px] text-center text-nowrap tracking-[1px] uppercase">
        <p className="adjustLetterSpacing block leading-[12px] whitespace-pre">
          Show
        </p>
      </div>
    </Wrapper3>
  );
}

function TrailingIconContainer() {
  return (
    <div
      className="h-full relative shrink-0"
      data-name="trailing_icon_container"
    >
      <div className="box-border content-stretch flex flex-row gap-2.5 h-full items-center justify-start p-0 relative">
        <TrailingIcon />
      </div>
    </div>
  );
}

function Input1() {
  return (
    <Wrapper1>
      <div className="flex flex-row items-center self-stretch">
        <InputtextcontainerText text="•••••••••" />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TrailingIconContainer />
      </div>
    </Wrapper1>
  );
}

function PasswordField() {
  return (
    <Wrapper11>
      <LabelWrapper1 />
      <Input1 />
    </Wrapper11>
  );
}

function RemixIconsLineDeviceKeyboardBoxLine() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-3"
      data-name="remix-icons/line/device/keyboard-box-line"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="Group">
          <g id="Vector"></g>
          <path
            d={svgPaths.pfb74d00}
            fill="var(--fill-0, #ED1164)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function TextButton() {
  return (
    <Wrapper3>
      <RemixIconsLineDeviceKeyboardBoxLine />
      <div className="css-oqoy0g flex flex-col font-['Lato:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ed1164] text-[12px] text-center text-nowrap tracking-[1px] uppercase">
        <p className="adjustLetterSpacing block leading-[12px] whitespace-pre">
          use virtual keyboard
        </p>
      </div>
    </Wrapper3>
  );
}

function HelperButton() {
  return (
    <Wrapper8>
      <TextButton />
    </Wrapper8>
  );
}

function PasswordInput() {
  return (
    <div className="relative shrink-0 w-full" data-name="Password_input">
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center p-0 relative w-full">
        <PasswordField />
        <HelperButton />
      </div>
    </div>
  );
}

function Label2() {
  return (
    <Wrapper8>
      <LabeltextcontainerText text="Date of Birth" />
      <Tooltipiconcontainer />
    </Wrapper8>
  );
}

function LabelWrapper2() {
  return (
    <Labelwrapper>
      <Label2 />
    </Labelwrapper>
  );
}

function TrailingIcon1() {
  return (
    <Trailingicon>
      <g id="Vector"></g>
      <path
        d={svgPaths.p20638280}
        fill="var(--fill-0, #404040)"
        id="Vector_2"
      />
    </Trailingicon>
  );
}

function TrailingIconContainer1() {
  return (
    <Trailingiconcontainer>
      <TrailingIcon1 />
    </Trailingiconcontainer>
  );
}

function Input2() {
  return (
    <div
      className="bg-[#ffffff] relative rounded shrink-0 w-full"
      data-name="input"
    >
      <div className="absolute border border-[#b4b4b4] border-solid inset-0 pointer-events-none rounded" />
      <Wrapper6>
        <div className="flex flex-row items-center self-stretch">
          <InputtextcontainerText text="dd/mm/yyyy" />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <TrailingIconContainer1 />
        </div>
      </Wrapper6>
    </div>
  );
}

function DateInput() {
  return (
    <Wrapper11>
      <LabelWrapper2 />
      <Input2 />
    </Wrapper11>
  );
}

function Label3() {
  return (
    <Wrapper8>
      <LabeltextcontainerText text="Occupation" />
    </Wrapper8>
  );
}

function LabelWrapper3() {
  return (
    <Labelwrapper>
      <Label3 />
    </Labelwrapper>
  );
}

function TextInput1() {
  return (
    <Wrapper11>
      <LabelWrapper3 />
      <Input />
    </Wrapper11>
  );
}

function Label4() {
  return (
    <Wrapper8>
      <LabeltextcontainerText text="Gender" />
    </Wrapper8>
  );
}

function LabelWrapper4() {
  return (
    <Labelwrapper>
      <Label4 />
    </Labelwrapper>
  );
}

function TrailingIcon2() {
  return (
    <Trailingicon>
      <g id="Vector"></g>
      <path
        d={svgPaths.p14f41100}
        fill="var(--fill-0, #404040)"
        id="Vector_2"
      />
    </Trailingicon>
  );
}

function TrailingIconContainer2() {
  return (
    <Trailingiconcontainer>
      <TrailingIcon2 />
    </Trailingiconcontainer>
  );
}

function Input4() {
  return (
    <Wrapper1>
      <div className="flex flex-row items-center self-stretch">
        <Inputtextcontainer />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TrailingIconContainer2 />
      </div>
    </Wrapper1>
  );
}

function Dropdown() {
  return (
    <Wrapper11>
      <LabelWrapper4 />
      <Input4 />
    </Wrapper11>
  );
}

function CheckboxIcon() {
  return (
    <Wrapper5>
      <g id="checkbox_icon">
        <path
          clipRule="evenodd"
          d={svgPaths.p2ca28480}
          fill="var(--fill-0, #ED1164)"
          fillRule="evenodd"
          id="checked"
        />
      </g>
    </Wrapper5>
  );
}

function CheckboxButton() {
  return (
    <div className="relative shrink-0 w-full" data-name="checkbox_button">
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative w-full">
        <CheckboxIcon />
        <div className="basis-0 css-qgucv1 flex flex-col font-['Lato:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#282828] text-[14px] text-left tracking-[0.24px]">
          <p className="leading-[20px]">
            <span>{`I agree to all applicable `}</span>
            <span className="adjustLetterSpacing font-['Lato:Regular',_sans-serif] font-normal not-italic text-[#ed1164]">{`Terms & Conditions`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="container"
    >
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip p-0 relative w-full">
        <div className="css-5ot3y1 flex flex-col font-['Lato:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap tracking-[0.24px]">
          <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
            Login
          </p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="basis-0 bg-[#97144d] grow min-h-px min-w-px relative rounded-lg shrink-0"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-center justify-center p-[16px] relative w-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Frame1171277908() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center p-0 relative w-full">
        <Button />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full">
        <TextInput />
        <PasswordInput />
        <DateInput />
        <TextInput1 />
        <Dropdown />
        <CheckboxButton />
        <Frame1171277908 />
      </div>
    </div>
  );
}

function Frame1171277909() {
  return (
    <div className="absolute bg-[#ffffff] left-[100px] rounded-[10px] top-[114px] w-[454px]">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start p-[30px] relative w-[454px]">
          <div
            className="css-dyfvo flex flex-col font-['Lato:Bold',_sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#000000] text-[24px] text-left tracking-[0.16px]"
            style={{ width: "min-content" }}
          >
            <p className="adjustLetterSpacing block leading-[32px]">
              Login to Rewards Portal
            </p>
          </div>
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function RemixIconsLineSystemSearchLine() {
  return (
    <Wrapper2>
      <g id="Vector"></g>
      <path
        d={svgPaths.p2c0f3700}
        fill="var(--fill-0, #B4B4B4)"
        id="Vector_2"
      />
    </Wrapper2>
  );
}

function Container1() {
  return (
    <div className="h-10 relative shrink-0 w-full" data-name="container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 h-10 items-center justify-start pl-3 pr-4 py-2 relative w-full">
          <RemixIconsLineSystemSearchLine />
        </div>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div
      className="h-10 relative rounded-[20px] shrink-0 w-11"
      data-name="Search"
    >
      <div className="box-border content-stretch flex flex-col h-10 items-start justify-start p-0 relative w-11">
        <Container1 />
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
          <Frame1171277912Helper>Powered by Adneto</Frame1171277912Helper>
        </div>
      </div>
    </div>
  );
}

export default function Component00Login() {
  return (
    <div className="bg-[#f8f8f8] relative size-full" data-name="00_Login">
      <Header />
      <Frame1171277909 />
      <Frame1171277911 />
      <Frame1171277912 />
    </div>
  );
}