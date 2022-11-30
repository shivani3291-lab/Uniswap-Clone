import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x3543F133FB0371679408B8df29d612f3d87eD965"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/x4UST7ivddRYHfSOfeHLsfrsrKqyXr-K",
  },
};