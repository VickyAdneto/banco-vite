import clsx from "clsx";
// import imgDiscount from "figma:asset/f8e9f9b53fbdcd7dec7864b8e3b3ed13855775b6.png";
// import imgDiscount1 from "figma:asset/6900004f2645a8e16453932b5eb0d164c5add5a1.png";
// import imgImage from "figma:asset/f6fad76de9461f90687da1e8488f3b97416f53c8.png";
// import imgGiftCard from "figma:asset/0d8c0cb09d163330a6253a148342783a33c2b17b.png";
// import imgGiftCard1 from "figma:asset/6b7f1cd579f4ec93153137f02c9f9e0132213744.png";
// import imgRectangle6 from "figma:asset/0850aef4439de5496d45132d690b057a643173e4.png";
// import imgRectangle7 from "figma:asset/c8365a9616fc11793e9771d988053597ea692897.png";
type BackgroundImage44Props = {
  additionalClassNames?: string[];
};

function BackgroundImage44({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage44Props>) {
  return (
    <div className={clsx("relative", additionalClassNames)}>{children}</div>
  );
}

function BackgroundImage14({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute rounded-[10px]">
      <BackgroundImage44 additionalClassNames={["size-full"]}>
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-[10px] relative">
          {children}
        </div>
      </BackgroundImage44>
    </div>
  );
}
type BackgroundImage14Props = {
  additionalClassNames?: string[];
};
type RewardsBackgroundImageProps = {
  additionalClassNames?: string[];
};

function RewardsBackgroundImage({
  additionalClassNames = [],
}: RewardsBackgroundImageProps) {
  return (
    <BackgroundImage14 additionalClassNames={additionalClassNames}>
      <HolidayBackgroundImage />
      <TextcontainerBackgroundImage1 />
    </BackgroundImage14>
  );
}
type TextcontainerBackgroundImage1Props = {
  additionalClassNames?: string[];
};

function TextcontainerBackgroundImage1({
  additionalClassNames = [],
}: TextcontainerBackgroundImage1Props) {
  return (
    <BackgroundImage44 additionalClassNames={["shrink-0", "w-full"]}>
      <BackgroundImage
        text="Brand Name here"
        text1="Offer here"
        additionalClassNames={["w-full"]}
      />
    </BackgroundImage44>
  );
}

function HolidayBackgroundImage() {
  return (
    <BackgroundImage44 additionalClassNames={["shrink-0", "size-[180px]"]}>
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat inset-0 rounded-[10px]"
        data-name="Image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
    </BackgroundImage44>
  );
}
type BackgroundImageProps = {
  text: string;
  text1: string;
  additionalClassNames?: string[];
};

function BackgroundImage({
  text,
  text1,
  additionalClassNames = [],
}: BackgroundImageProps) {
  return (
    <div
      className={clsx(
        "box-border content-stretch flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold gap-[5px] items-start justify-start leading-[0] not-italic p-0 relative text-[16px] text-left",
        additionalClassNames,
      )}
    >
      <div
        className="css-w9luqw min-w-full relative shrink-0 text-[#000000]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">{text}</p>
      </div>
      <div
        className="css-ff3scw min-w-full relative shrink-0 text-[#ea2466]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">{text1}</p>
      </div>
    </div>
  );
}
type TextcontainerBackgroundImageProps = {
  text: string;
  text1: string;
};

function TextcontainerBackgroundImage({
  text,
  text1,
}: TextcontainerBackgroundImageProps) {
  return (
    <div className="relative shrink-0">
      <BackgroundImage text={text} text1={text1} />
    </div>
  );
}

function Discount() {
  return (
    <BackgroundImage44
      additionalClassNames={["h-[116px]", "shrink-0", "w-[180px]"]}
    >
      <div className="absolute bottom-[-6.897%] left-[-2.222%] right-[-2.222%] top-0">
        {/* <img
          alt
          className="block max-w-none size-full"
          height="124"
          src={imgDiscount}
          width="188"
        /> */}
      </div>
    </BackgroundImage44>
  );
}

function Discount2() {
  return (
    <BackgroundImage44
      additionalClassNames={["h-[116px]", "shrink-0", "w-[180px]"]}
    >
      {/* <img
        alt
        className="block max-w-none size-full"
        height="116"
        src={imgDiscount1}
        width="180"
      /> */}
    </BackgroundImage44>
  );
}

function GiftCard() {
  return (
    <BackgroundImage44
      additionalClassNames={["h-[116px]", "shrink-0", "w-[180px]"]}
    >
      {/* <img
        alt
        className="block max-w-none size-full"
        height="116"
        src={imgGiftCard}
        width="180"
      /> */}
    </BackgroundImage44>
  );
}

function GiftCard1() {
  return (
    <BackgroundImage44
      additionalClassNames={["h-[116px]", "shrink-0", "w-[180px]"]}
    >
      {/* <img
        alt
        className="block max-w-none size-full"
        height="116"
        src={imgGiftCard1}
        width="180"
      /> */}
    </BackgroundImage44>
  );
}

function Rewards1() {
  return (
    <BackgroundImage44
      additionalClassNames={["h-[116px]", "shrink-0", "w-[180px]"]}
    >
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat inset-0 rounded-[10px]"
        // style={{ backgroundImage: `url('${imgRectangle6}')` }}
      />
    </BackgroundImage44>
  );
}

function Rewards2() {
  return (
    <BackgroundImage44
      additionalClassNames={["h-[116px]", "shrink-0", "w-[180px]"]}
    >
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat inset-0 rounded-[10px]"
        // style={{ backgroundImage: `url('${imgRectangle7}')` }}
      />
    </BackgroundImage44>
  );
}

export default function Frame1171277913() {
  return (
    <BackgroundImage44 additionalClassNames={["bg-[#ffffff]", "size-full"]}>
      <BackgroundImage14 additionalClassNames={["left-[136px]", "top-[79px]"]}>
        {children}
      </BackgroundImage14>
      <BackgroundImage14
        additionalClassNames={["bg-[#ededed]", "left-[365px]", "top-[79px]"]}
      >
        {children}
      </BackgroundImage14>
      <RewardsBackgroundImage
        additionalClassNames={["bg-[#ededed]", "left-[375px]", "top-[748px]"]}
      />
      <BackgroundImage14 additionalClassNames={["left-[136px]", "top-[295px]"]}>
        {children}
      </BackgroundImage14>
      <BackgroundImage14
        additionalClassNames={["bg-[#ededed]", "left-[365px]", "top-[302px]"]}
      >
        {children}
      </BackgroundImage14>
      <BackgroundImage14 additionalClassNames={["left-[136px]", "top-[511px]"]}>
        {children}
      </BackgroundImage14>
      <BackgroundImage14
        additionalClassNames={["bg-[#ededed]", "left-[365px]", "top-[511px]"]}
      >
        {children}
      </BackgroundImage14>
      <RewardsBackgroundImage
        additionalClassNames={["left-[136px]", "top-[754px]"]}
      />
    </BackgroundImage44>
  );
}