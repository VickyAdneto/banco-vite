import clsx from "clsx";
// import imgAvatarImage from "figma:asset/92e65de61218caae833a172bf48a0fb5e37eaf6f.png";
type WrapperProps = {
  additionalClassNames?: string[];
};

function Wrapper({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative", additionalClassNames)}>{children}</div>
  );
}

function AvatarFrame() {
  return (
    <Wrapper additionalClassNames={["shrink-0", "size-6"]}>
      <div className="absolute left-0 size-6 top-0" data-name="avatar-image">
        {/* <img
          alt
          className="block max-w-none size-full"
          height="24"
          src={imgAvatarImage}
          width="24"
        /> */}
      </div>
    </Wrapper>
  );
}

function AvatarAtom() {
  return (
    <Wrapper additionalClassNames={["shrink-0"]}>
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative">
        <AvatarFrame />
      </div>
    </Wrapper>
  );
}

export default function Avatar() {
  return (
    <Wrapper additionalClassNames={["size-full"]}>
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative size-full">
        <AvatarAtom />
      </div>
    </Wrapper>
  );
}