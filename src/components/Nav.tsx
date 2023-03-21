import Link from "next/link";

export default function Nav() {
  const items = ["Swap", "Features", "Docs"];

  return (
    <div className="w-full h-24 flex justify-start items-center px-24 gap-4">
      {items.map((item) => {
        return (
          <div className="btn" key={item}>
            {item}
          </div>
        );
      })}
      <div className="ml-auto btn">Tutorial</div>
      <div className="btn--secondary">Connect Wallet</div>
    </div>
  );
}
