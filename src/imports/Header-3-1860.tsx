import svgPaths from "./svg-ydm24e8hpq";

function FixedBand() {
  return (
    <div
      className="absolute h-16 left-0 top-0 w-[290.909px]"
      data-name="fixed-band"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 291 64"
      >
        <g id="fixed-band">
          <path
            clipRule="evenodd"
            d={svgPaths.p305177d0}
            fill="var(--fill-0, #97144D)"
            fillRule="evenodd"
            id="band"
          />
          <g id="axis-bank-logo">
            <path
              clipRule="evenodd"
              d={svgPaths.p3d4a2b80}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Fill 4"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p3e4ab300}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Fill 6"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p17e64480}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
              id="Fill 8"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p3695f900}
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
      className="h-16 relative shrink-0 w-[290px]"
      data-name="axis-logo-fixed"
    >
      <FixedBand />
    </div>
  );
}

export default function Header() {
  return (
    <div className="relative size-full" data-name="header">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative size-full">
        <AxisLogoFixed />
        <div
          className="basis-0 grow h-[25.213px] min-h-px min-w-px relative shrink-0"
          data-name="band"
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 990 26"
          >
            <path
              d={svgPaths.p6ccb880}
              fill="var(--fill-0, #97144D)"
              id="band"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}