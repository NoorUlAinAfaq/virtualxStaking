"use client";
import React, { ReactNode } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import {
  ConnectButton,
  getDefaultConfig,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { useAccount, WagmiProvider } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
  bsc,
} from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const projectId = "da2ffc3f8eb0b295ff1ec21d73e08f8a";

const VirtualXInfo = {
  appName: "Virtual X",
};

const config = getDefaultConfig({
  appName: "Virtual X Info",
  projectId: projectId,
  chains: [bsc],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
  const account = useAccount();
  return { children };
};

export default Providers;
