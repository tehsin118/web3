import { createContext, useContext, useState } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, zora } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={"wallet address"}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => {
  const auth = useContext(AuthContext);
  return auth;
};
