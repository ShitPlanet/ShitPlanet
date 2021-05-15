import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export const blockchainList = {
  ETH: {
    kovan: {
      rpcUrls: ['https://kovan.infura.io'],
      chainId: '0x2a',
      nickname: 'Kovan Test Network',
      ticker: 'ETH'
    }
  },
  BSC: {
    mainnet: {
      chainId: '0x38',
      chainName: 'Binance Smart Chain',
      nativeCurrency: {
        name: 'BNB',
        symbol: 'BNB',
        decimals: 18
      },
      rpcUrls: ['https://bsc-dataseed.binance.org/'],
      blockExplorerUrls: ['https://bscscan.com/']
    },
    testnet: {
      chainId: '0x61',
      chainName: 'Binance Smart Chain Testnet',
      nativeCurrency: {
        name: 'BNB',
        symbol: 'BNB',
        decimals: 18
      },
      rpcUrls: [' https://data-seed-prebsc-1-s1.binance.org:8545'],
      blockExplorerUrls: ['https://testnet.bscscan.com/']
    }
  }
}

const blockchainMap = {
  '0x2a': blockchainList.ETH.kovan,
  '0x38': blockchainList.BSC.mainnet,
  '0x61': blockchainList.BSC.testnet
}

export const blockchain =
  blockchainMap[publicRuntimeConfig.env.NEXT_PUBLIC_CHAIN_ID]
