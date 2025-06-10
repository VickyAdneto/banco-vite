function Frame1171277912Helper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="css-ebafv2 relative shrink-0">
      <p className="adjustLetterSpacing block leading-[20px] text-nowrap whitespace-pre">
        {children}
      </p>
    </div>
  );
}

export default function Frame1171277912() {
  return (
    <div className="bg-[#444444] relative size-full">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row font-['Lato:Regular',_sans-serif] items-center justify-between leading-[0] not-italic px-[60px] py-3.5 relative size-full text-[#e2e2e2] text-[14px] text-left text-nowrap tracking-[0.24px]">
          <Frame1171277912Helper>{`Copyright © 2025 Axis Bank  |  Terms & Conditions  |  Privacy Policy  |  Contact Us.`}</Frame1171277912Helper>
          <Frame1171277912Helper>Powered by Bankco</Frame1171277912Helper>
        </div>
      </div>
    </div>
  );
}