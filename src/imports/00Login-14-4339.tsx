import svgPaths from "./svg-8xyb7w5bs5";
import clsx from "clsx";

function Wrapper10({ children }: React.PropsWithChildren<{}>) {
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

function Wrapper7({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative w-full">
        {children}
      </div>
    </div>
  );
}

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center relative size-full">
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-[8px] relative w-full">
        {children}
      </div>
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
type Wrapper3Props = {
  additionalClassNames?: string[];
};

function Wrapper3({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="relative size-full">{children}</div>
    </div>
  );
}

function Trailingiconcontainer({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper3 additionalClassNames={["h-full"]}>
      <div className="box-border content-stretch flex flex-row gap-2.5 h-full items-start justify-start p-[2px] relative">
        {children}
      </div>
    </Wrapper3>
  );
}

function Trailingicon({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper4 additionalClassNames={["overflow-clip"]}>
      <g id="Group">{children}</g>
    </Wrapper4>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string[];
};

function Wrapper2({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<Wrapper2Props>) {
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

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#ffffff] relative rounded shrink-0 w-full">
      <div className="absolute border border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded" />
      <Wrapper5>{children}</Wrapper5>
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
type Frame1171277912TextProps = {
  text: string;
};

function Frame1171277912Text({ text }: Frame1171277912TextProps) {
  return (
    <div className="css-ebafv2 relative shrink-0">
      <p className="adjustLetterSpacing block leading-[20px] text-nowrap whitespace-pre">
        {text}
      </p>
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
    <Wrapper3>
      <div className="box-border content-stretch flex flex-row items-start justify-start p-[2px] relative">
        <Tooltipicon />
      </div>
    </Wrapper3>
  );
}

function Tooltipicon() {
  return (
    <div className="overflow-clip relative shrink-0 size-5">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Group">
          <g id="Vector"></g>
          <path
            d={svgPaths.pfd02000}
            fill="var(--fill-0, #404040)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}
type LabeltextcontainerTextProps = {
  text: string;
};

function LabeltextcontainerText({ text }: LabeltextcontainerTextProps) {
  return (
    <Wrapper3>
      <div className="box-border content-stretch flex flex-row items-start justify-start pl-0 pr-0.5 py-0.5 relative">
        <div className="css-qgucv1 flex flex-col font-['Lato:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#282828] text-[14px] text-left text-nowrap tracking-[0.24px]">
          <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
            {text}
          </p>
        </div>
      </div>
    </Wrapper3>
  );
}

function FixedBand() {
  return (
    <div className="absolute inset-0" data-name="fixed-band">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 390 54"
      >
        <g id="fixed-band">
          <path
            clipRule="evenodd"
            d={svgPaths.p3d45cb00}
            fill="var(--fill-0, #97144D)"
            fillRule="evenodd"
            id="band"
          />
          <path
            d={svgPaths.p38ca9d00}
            fill="var(--fill-0, #97144D)"
            id="band_2"
          />
          <g id="axis-bank-logo">
            <path
              clipRule="evenodd"
              d={svgPaths.p252e1e80}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Fill 4"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p21124e00}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Fill 6"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p20b6a600}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Fill 8"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p2fa3a000}
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

function IconFeatherMenu() {
  return (
    <div
      className="absolute bottom-[22.222%] left-[5.897%] right-[86.667%] top-[24.074%]"
      data-name="icon/feather/menu"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 29 29"
      >
        <g id="icon/feather/menu">
          <path
            d="M3.625 21.75H25.375"
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M3.625 14.5H25.375"
            id="Vector_2"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M3.625 7.25H25.375"
            id="Vector_3"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function AxisLogoFixed() {
  return (
    <div
      className="absolute h-11 left-0 top-px w-[200px]"
      data-name="axis-logo-fixed"
    >
      <div
        className="absolute h-[54px] left-0 top-0 w-[390px]"
        data-name="nav bar"
      >
        <FixedBand />
        <IconFeatherMenu />
      </div>
    </div>
  );
}

function Label() {
  return (
    <Wrapper7>
      <LabeltextcontainerText text="Customer ID" />
      <Tooltipiconcontainer />
    </Wrapper7>
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
    <Wrapper10>
      <LabelWrapper />
      <Input />
    </Wrapper10>
  );
}

function Label1() {
  return (
    <Wrapper7>
      <LabeltextcontainerText text="Password" />
      <Tooltipiconcontainer />
    </Wrapper7>
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
    <Wrapper2 additionalClassNames={["rounded-lg"]}>
      <div className="css-oqoy0g flex flex-col font-['Lato:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ed1164] text-[12px] text-center text-nowrap tracking-[1px] uppercase">
        <p className="adjustLetterSpacing block leading-[12px] whitespace-pre">
          Show
        </p>
      </div>
    </Wrapper2>
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
    <Wrapper10>
      <LabelWrapper1 />
      <Input1 />
    </Wrapper10>
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
    <Wrapper2>
      <RemixIconsLineDeviceKeyboardBoxLine />
      <div className="css-oqoy0g flex flex-col font-['Lato:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ed1164] text-[12px] text-center text-nowrap tracking-[1px] uppercase">
        <p className="adjustLetterSpacing block leading-[12px] whitespace-pre">
          use virtual keyboard
        </p>
      </div>
    </Wrapper2>
  );
}

function HelperButton() {
  return (
    <Wrapper7>
      <TextButton />
    </Wrapper7>
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
    <Wrapper7>
      <LabeltextcontainerText text="Date of Birth" />
      <Tooltipiconcontainer />
    </Wrapper7>
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
      <Wrapper5>
        <div className="flex flex-row items-center self-stretch">
          <InputtextcontainerText text="dd/mm/yyyy" />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <TrailingIconContainer1 />
        </div>
      </Wrapper5>
    </div>
  );
}

function DateInput() {
  return (
    <Wrapper10>
      <LabelWrapper2 />
      <Input2 />
    </Wrapper10>
  );
}

function Label3() {
  return (
    <Wrapper7>
      <LabeltextcontainerText text="Occupation" />
    </Wrapper7>
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
    <Wrapper10>
      <LabelWrapper3 />
      <Input />
    </Wrapper10>
  );
}

function Label4() {
  return (
    <Wrapper7>
      <LabeltextcontainerText text="Gender" />
    </Wrapper7>
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
    <Wrapper10>
      <LabelWrapper4 />
      <Input4 />
    </Wrapper10>
  );
}

function CheckboxIcon() {
  return (
    <Wrapper4>
      <g id="checkbox_icon">
        <path
          clipRule="evenodd"
          d={svgPaths.p2ca28480}
          fill="var(--fill-0, #ED1164)"
          fillRule="evenodd"
          id="checked"
        />
      </g>
    </Wrapper4>
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
    <div className="absolute bg-[#ffffff] left-0 rounded-[10px] top-[55px] w-[392px]">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start p-[30px] relative w-[392px]">
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

function Frame1171277912() {
  return (
    <div className="absolute bg-[#444444] left-0 top-[796px] w-[390px]">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row font-['Lato:Regular',_sans-serif] font-normal items-center justify-between leading-[0] not-italic px-5 py-3.5 relative text-[#e2e2e2] text-[14px] text-left text-nowrap tracking-[0.24px] w-[390px]">
          <Frame1171277912Text text="Copyright © 2025 Axis Bank" />
          <Frame1171277912Text text="Powered by Adneto" />
        </div>
      </div>
    </div>
  );
}

export default function Component00Login() {
  return (
    <div className="bg-[#f8f8f8] relative size-full" data-name="00_Login">
      <AxisLogoFixed />
      <Frame1171277909 />
      <Frame1171277912 />
    </div>
  );
}