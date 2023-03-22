"use client";
import { useMount } from "@/lib/hooks";
import { connectWallet } from "@/lib/web3";
import { useState } from "react";

export default function Nav() {
  const items = ["Swap", "Features", "Docs"];
  const [address, setAddress] = useState<string>("");

  useMount(() => {
    if (localStorage.getItem("walletConnected") === "true") {
      walletConnectBtn();
    }
  });

  const walletConnectBtn = () => {
    connectWallet().then((a: string[]) => {
      let userAddress =
        a[0].substring(0, 4) +
        "..." +
        a[0].substring(a[0].length - 5, a[0].length - 1);
      setAddress(() => userAddress);
      return;
    });
  };

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
      <div className="btn--secondary" onClick={walletConnectBtn}>
        {address.length <= 0 ? "Connect Wallet" : address}
      </div>
    </div>
  );
}
