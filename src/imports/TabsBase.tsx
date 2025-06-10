// import imgLeadingIcon from "figma:asset/1675ff179e157c01bb819130c4ce8f5916fae047.png";

function SelectionIndicatorContainer() {
  return (
    <div
      className="absolute bottom-0 left-0"
      data-name="selection_indicator_container"
    >
      <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative">
        <div
          className="bg-[#f1f1f1] h-px shrink-0 w-[120px]"
          data-name="selection_indicator"
        />
      </div>
    </div>
  );
}

function LeadingIcon() {
  return (
    <div className="relative shrink-0 size-3" data-name="leading_icon">
      {/* <img
        alt
        className="block max-w-none size-full"
        height="12"
        src={imgLeadingIcon}
        width="12"
      /> */}
    </div>
  );
}

function TabText() {
  return (
    <div className="relative shrink-0 w-full" data-name="tab_text">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip p-0 relative w-full">
        <LeadingIcon />
        <div className="css-fuse2w flex flex-col font-['Lato:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ed1164] text-[14px] text-center text-nowrap tracking-[0.24px]">
          <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
            Tab 1
          </p>
        </div>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div
      className="bg-[#ffffff] mb-[-1px] relative shrink-0 w-full"
      data-name="wrapper"
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center p-[8px] relative w-full">
          <TabText />
        </div>
      </div>
    </div>
  );
}

export default function TabsBase() {
  return (
    <div className="relative size-full" data-name="tabs_base">
      <div className="box-border content-stretch flex flex-col items-center justify-start pb-px pt-0 px-0 relative size-full">
        <SelectionIndicatorContainer />
        <Wrapper />
        <div
          className="bg-[#ed1164] h-0.5 mb-[-1px] rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-full"
          data-name="Slider"
        />
      </div>
    </div>
  );
}