import { Kaisei_Tokumin } from "next/font/google";

const Kaisei = Kaisei_Tokumin({
  subsets: ["latin"],
  weight: "500",
});

export const Typography = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 items-center place-items-center border border-dashed border-collapse">
        <p className="border border-dashed p-4 w-full text-center font-sans font-normal">
          Inter Regular
        </p>
        <p className="border border-dashed p-4 w-full text-center font-sans font-medium">
          Inter Medium
        </p>
        <p
          className={
            "border border-dashed p-4 w-full text-center " + Kaisei.className
          }
        >
          Kaisei Tokumin
        </p>
        <p
          className={
            "border border-dashed p-4 w-full text-center " + Kaisei.className
          }
        >
          Kaisei Tokumin Bold
        </p>
      </div>
    </div>
  );
};
