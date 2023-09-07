import "./App.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, zora } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Wallet from "./component/wallet";
import GetNft from "./component/getNft";

function App() {
  const { chains, publicClient } = configureChains(
    [mainnet, polygon, optimism, arbitrum, zora],
    [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    projectId: "YOUR_PROJECT_ID",
    chains,
  });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  });

  return (
    <div className="App">
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <Wallet />
          <GetNft />
        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
}

export default App;
