import Box from "@/components/Box";
import json from "../data/box.json";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-start py-12">
      <h1 className="max-w-[110rem] font-interbold text-white text-8xl px-32 text-center mt-12">
        The new, best way to start
        <span className="text-[#33BBFF]"> earning</span>{" "}
        <span className="text-[#6666FF]">income passively</span> with{" "}
        <span className="text-[#BB33FF]">crypto</span>, now.
      </h1>
      <div className="w-full mt-14 flex justify-center items-center gap-4">
        <div className="btn--secondary text-lg">Begin →</div>
        <div className="btn--tertiary">Learn how</div>
      </div>
      <div className="w-screen mt-36 flex flex-col justify-start items-center">
        <p className="font-interbold text-bb-light text-2xl p-4">
          Lorem ipsum dolor sit.
        </p>
        <h2 className="font-interbold text-white text-4xl">
          Lorem ipsum dolor sit.
        </h2>
        <div className="grid grid-cols-3 w-[95%] gap-8 pt-4 px-8">
          {Object.values(json).map((box, idx) => {
            return <Box data={box} key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
}
