//@ts-ignore
const ColorSquare = ({ className, children }) => {
  return (
    <div
      className={`aspect-square flex flex-col items-center justify-center w-full select-none font-medium text-sm ${className}`}
    >
      {children}
    </div>
  );
};

export const DesignAndColors = () => (
  <section>
    <p className={"mb-5"}>
      I personally handpicked the color palette. The design is a blend of
      inspirations from various people and websites, tailored to my personal
      taste and enriched by valuable feedback from friends.
    </p>
    <div className={"grid grid-cols-11 items-center"}>
      <ColorSquare className={"bg-neutral-50 text-neutral-950"}>50</ColorSquare>
      <ColorSquare className={"bg-neutral-100 text-neutral-950"}>
        100
      </ColorSquare>
      <ColorSquare className={"bg-neutral-200 text-neutral-950"}>
        200
      </ColorSquare>
      <ColorSquare className={"bg-neutral-300 text-neutral-950"}>
        300
      </ColorSquare>
      <ColorSquare className={"bg-neutral-400 text-neutral-950"}>
        400
      </ColorSquare>
      <ColorSquare className={"bg-neutral-500 text-neutral-50"}>
        500
      </ColorSquare>
      <ColorSquare className={"bg-neutral-600 text-neutral-50"}>
        600
      </ColorSquare>
      <ColorSquare className={"bg-neutral-700 text-neutral-50"}>
        700
      </ColorSquare>
      <ColorSquare className={"bg-neutral-800 text-neutral-50"}>
        800
      </ColorSquare>
      <ColorSquare className={"bg-neutral-900 text-neutral-50"}>
        900
      </ColorSquare>
      <ColorSquare className={"bg-neutral-950 text-neutral-50"}>
        950
      </ColorSquare>
    </div>
  </section>
);
