import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

const tokenAddressList = {
  ETH: {
    kovan: {
      shitbox: '0x0E31f19aF16103162401345Af527017F2ef62F59'
    }
  },
  BSC: {
    mainnet: {
      shitbox: '0xe16DE80288618D6c159aDa57E32247114B185aD0'
    }
  }
}

const tokenAddressMap = {
  '0x2a': tokenAddressList.ETH.kovan,
  '0x38': tokenAddressList.BSC.mainnet
}

export const tokenAddress =
  tokenAddressMap[publicRuntimeConfig.env.NEXT_PUBLIC_CHAIN_ID]
