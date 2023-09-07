import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Wallet = () => {
  return (
    <div>
      <h1>Wallet Address</h1>
      <ConnectButton showBalance={true} />
    </div>
  );
};

export default Wallet;
