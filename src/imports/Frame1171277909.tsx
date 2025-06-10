import svgPaths from "./svg-80whip5b89";
import clsx from "clsx";
type Wrapper8Props = {
  additionalClassNames?: string[];
};

function Wrapper8({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<Wrapper8Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      {children}
    </div>
  );
}

function Wrapper7({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper8>
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative w-full">
        {children}
      </div>
    </Wrapper8>
  );
}

function Labelwrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper8>
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </Wrapper8>
  );
}

function Wrapper6({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper8>
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative w-full">
        {children}
      </div>
    </Wrapper8>
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
    <div className={clsx("relative", additionalClassNames)}>
      <div className="relative size-full">{children}</div>
    </div>
  );
}

function Trailingiconcontainer({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper3 additionalClassNames={["h-full", "shrink-0"]}>
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
    <Wrapper8 additionalClassNames={["bg-[#ffffff]", "rounded"]}>
      <div className="absolute border border-[#e2e2e2] border-solid inset-0 pointer-events-none rounded" />
      <Wrapper5>{children}</Wrapper5>
    </Wrapper8>
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
    <Wrapper3 additionalClassNames={["shrink-0"]}>
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
    <Wrapper3 additionalClassNames={["shrink-0"]}>
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

function Label() {
  return (
    <Wrapper6>
      <LabeltextcontainerText text="Customer ID" />
      <Tooltipiconcontainer />
    </Wrapper6>
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
    <Wrapper7>
      <LabelWrapper />
      <Input />
    </Wrapper7>
  );
}

function Label1() {
  return (
    <Wrapper6>
      <LabeltextcontainerText text="Password" />
      <Tooltipiconcontainer />
    </Wrapper6>
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
    <Wrapper7>
      <LabelWrapper1 />
      <Input1 />
    </Wrapper7>
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
    <Wrapper6>
      <TextButton />
    </Wrapper6>
  );
}

function PasswordInput() {
  return (
    <Wrapper8>
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center p-0 relative w-full">
        <PasswordField />
        <HelperButton />
      </div>
    </Wrapper8>
  );
}

function Label2() {
  return (
    <Wrapper6>
      <LabeltextcontainerText text="Date of Birth" />
      <Tooltipiconcontainer />
    </Wrapper6>
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
    <Wrapper8 additionalClassNames={["bg-[#ffffff]", "rounded"]}>
      <div className="absolute border border-[#b4b4b4] border-solid inset-0 pointer-events-none rounded" />
      <Wrapper5>
        <div className="flex flex-row items-center self-stretch">
          <InputtextcontainerText text="dd/mm/yyyy" />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <TrailingIconContainer1 />
        </div>
      </Wrapper5>
    </Wrapper8>
  );
}

function DateInput() {
  return (
    <Wrapper7>
      <LabelWrapper2 />
      <Input2 />
    </Wrapper7>
  );
}

function Label3() {
  return (
    <Wrapper6>
      <LabeltextcontainerText text="Occupation" />
    </Wrapper6>
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
    <Wrapper7>
      <LabelWrapper3 />
      <Input />
    </Wrapper7>
  );
}

function Label4() {
  return (
    <Wrapper6>
      <LabeltextcontainerText text="Gender" />
    </Wrapper6>
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
    <Wrapper7>
      <LabelWrapper4 />
      <Input4 />
    </Wrapper7>
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
    <Wrapper8>
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative w-full">
        <CheckboxIcon />
        <div className="basis-0 css-qgucv1 flex flex-col font-['Lato:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#282828] text-[14px] text-left tracking-[0.24px]">
          <p className="leading-[20px]">
            <span>{`I agree to all applicable `}</span>
            <span className="adjustLetterSpacing font-['Lato:Regular',_sans-serif] font-normal not-italic text-[#ed1164]">{`Terms & Conditions`}</span>
          </p>
        </div>
      </div>
    </Wrapper8>
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
    <Wrapper8>
      <div className="box-border content-stretch flex flex-row gap-3 items-center justify-center p-0 relative w-full">
        <Button />
      </div>
    </Wrapper8>
  );
}

function Frame1() {
  return (
    <Wrapper8>
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full">
        <TextInput />
        <PasswordInput />
        <DateInput />
        <TextInput1 />
        <Dropdown />
        <CheckboxButton />
        <Frame1171277908 />
      </div>
    </Wrapper8>
  );
}

export default function Frame1171277909() {
  return (
    <Wrapper3
      additionalClassNames={["bg-[#ffffff]", "rounded-[10px]", "size-full"]}
    >
      <div className="box-border content-stretch flex flex-col gap-[30px] items-start justify-start p-[30px] relative size-full">
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
    </Wrapper3>
  );
}