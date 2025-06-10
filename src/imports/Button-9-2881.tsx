function Container() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="container"
    >
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip p-0 relative w-full">
        <div className="css-5ot3y1 flex flex-col font-['Lato:Bold',_sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap tracking-[0.24px]">
          <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
            Primary button
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Button() {
  return (
    <div
      className="bg-[#97144d] relative rounded-lg size-full"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-center justify-center overflow-clip p-[16px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}