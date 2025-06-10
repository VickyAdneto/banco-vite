import clsx from "clsx";
type HelperProps = {
  additionalClassNames?: string[];
};

function Helper({ additionalClassNames = [] }: HelperProps) {
  return (
    <div
      className={clsx(
        "bg-[#e9e9e9] h-full relative rounded-lg",
        additionalClassNames,
      )}
    >
      <div className="absolute border border-[rgba(119,119,119,0.47)] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-full items-center justify-center p-[10px] relative">
          <div className="flex h-[11.314px] items-center justify-center relative shrink-0 w-[11.314px]">
            <div className="flex-none rotate-[135deg]">
              <div className="relative size-[8px]" data-name="Border">
                <div className="absolute border-[#000000] border-[0px_2px_2px_0px] border-solid inset-0 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1171276849() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative">
        <div className="css-w9luqw font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">Fri, 27 Dec</p>
        </div>
      </div>
    </div>
  );
}

function Frame1171276850() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative w-full">
        <Frame1171276849 />
      </div>
    </div>
  );
}

function Frame1171276852() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative w-full">
        <div className="css-w9luqw font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#000000] text-[20px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">₹ 6,914</p>
        </div>
      </div>
    </div>
  );
}

function Frame1171276858() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative w-full">
        <Frame1171276850 />
        <Frame1171276852 />
      </div>
    </div>
  );
}

export default function SelectDate() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-xl size-full"
      data-name="Select Date"
    >
      <div className="absolute border border-[#777777] border-solid inset-0 pointer-events-none rounded-xl" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[18px] items-start justify-start p-[20px] relative size-full">
          <Helper additionalClassNames={["shrink-0"]} />
          <Frame1171276858 />
          <div className="flex h-full items-center justify-center relative shrink-0">
            <div className="flex-none h-full rotate-[180deg] scale-y-[-100%]">
              <Helper />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}