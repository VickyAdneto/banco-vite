import svgPaths from "./svg-191prntwjo";

function VersionChip() {
  return (
    <div
      className="absolute bg-[#ebf9f8] h-[135px] left-[877.199px] rounded-[23.8098px] top-[232px] w-[187.801px]"
      data-name="version-chip"
    >
      <div className="absolute css-xc3c0c flex flex-col font-['Lato:Bold',_sans-serif] justify-center leading-[0] left-6 not-italic text-[#12877f] text-[95.2392px] text-left text-nowrap top-[66.5px] tracking-[1.78574px] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[130.954px] whitespace-pre">
          2.0
        </p>
      </div>
    </div>
  );
}

function Group32541() {
  return (
    <div className="absolute contents left-[877.199px] top-[232px]">
      <VersionChip />
    </div>
  );
}

function Group32542() {
  return (
    <div className="absolute contents left-[350px] top-[232px]">
      <Group32541 />
      <div
        className="absolute h-[83px] left-[350px] top-[258px] w-[510.458px]"
        data-name="SUBZERO"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 511 83"
        >
          <g id="SUBZERO">
            <path d={svgPaths.p13abcc80} fill="var(--fill-0, #97144D)" />
            <path d={svgPaths.p1aac0900} fill="var(--fill-0, #97144D)" />
            <path d={svgPaths.p2c40a800} fill="var(--fill-0, #97144D)" />
            <path d={svgPaths.p13d03fc0} fill="var(--fill-0, #97144D)" />
            <path d={svgPaths.p3d078a80} fill="var(--fill-0, #97144D)" />
            <path d={svgPaths.p232e6f00} fill="var(--fill-0, #97144D)" />
            <path d={svgPaths.p23b43a80} fill="var(--fill-0, #97144D)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group32543() {
  return (
    <div className="absolute contents left-[134px] top-[200px]">
      <Group32542 />
      <div
        className="absolute bottom-[33.333%] left-[11.167%] right-[72.167%] top-[33.333%]"
        data-name="Union"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 200 200"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.p3e850680}
            fill="var(--fill-0, #97144D)"
            fillRule="evenodd"
            id="Union"
          />
        </svg>
      </div>
    </div>
  );
}

function Group32544() {
  return (
    <div className="absolute contents left-[134px] top-[200px]">
      <Group32543 />
    </div>
  );
}

export default function Cover() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="cover">
      <div
        className="absolute bottom-[-8.333%] left-[-14.75%] right-[56.417%] top-[-8.333%]"
        data-name="Union"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 700 700"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.p389c4b00}
            fill="var(--fill-0, #EBF9F8)"
            fillRule="evenodd"
            id="Union"
          />
        </svg>
      </div>
      <Group32544 />
    </div>
  );
}