import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export const blockchainList = {
  ETH: {
    kovan: {
      chainId: '0x2a',
      chainName: 'Kovan Test Network',
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18
      },
      rpcUrls: ['https://kovan.infura.io'],
      blockExplorerUrls: ['https://kovan.etherscan.io/']
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
  '0x2a': blockchainList.ETH.kovan
}

console.log(
  'publicRuntimeConfig.env.NEXT_PUBLIC_CHAIN_ID: ',
  publicRuntimeConfig.env.NEXT_PUBLIC_CHAIN_ID
)

export const blockchain =
  blockchainMap[publicRuntimeConfig.env.NEXT_PUBLIC_CHAIN_ID]
