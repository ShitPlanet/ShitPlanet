import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Div = styled.div`
  height: 6.25vw;
  background-color: #273c67;
`
const Container = styled.div`
  width: 85vw;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Brand = styled.a`
  height: 4.2vw;
`
const ImgWrap = styled.div`
  position: relative;
  display: inline-block;
  width: 3.3vw;
  height: 4.2vw;
  margin-right: 0.8vw;
`
const Name = styled.div`
  position: relative;
  display: inline-block;
  width: 4vw;
  height: 2.6vw;
  vertical-align: super;
`
const Nav = styled.div``
const Link = styled.a`
  margin-left: 2.8vw;
  font-family: Impact;
  font-size: 1.3vw;
  color: #698edb;
  &:first-child {
    margin-left: 0;
  }
  &:hover {
    text-decoration: none;
    color: #d6e3ff;
  }
`

const Button = styled.button`
  margin-left: 2.8vw;
  font-size: 1.3vw;
`

const Header = () => {
  const [account, setAccount] = React.useState(null)

  const connect = React.useCallback(() => {
    ;(async function() {
      try {
        const ethereum = (window as any)?.ethereum
        if (!ethereum) {
          console.log('please install metamask first~')
          return
        }
        // 请求权限
        const permissions = await ethereum.request({
          method: 'wallet_requestPermissions',
          params: [{ eth_accounts: {} }]
        })

        // 获取用户信息
        const accounts = await ethereum.request({
          method: 'eth_requestAccounts'
        })
        const account = accounts[0]
        if (account) {
          setAccount(account)
        }
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  React.useEffect(() => {
    const ethereum = (window as any)?.ethereum
    if (ethereum === undefined) return

    const handleChainChange = chainId => {
      // 若当前不是BSC，则请求切换到BSC
      if (chainId !== '0x38') {
        // 切换区块链网络
        ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: '0x38',
              chainName: 'Binance Smart Chain',
              nativeCurrency: {
                name: 'BNB',
                symbol: 'BNB',
                decimals: 18
              },
              rpcUrls: ['https://bsc-dataseed.binance.org/'],
              blockExplorerUrls: ['https://bscscan.com/']
            }
          ]
        })
      }
    }
    ;(async function() {
      const chainId = await ethereum.request({ method: 'eth_chainId' })
      handleChainChange(chainId)

      ethereum.on('chainChanged', _chainId => {
        handleChainChange(_chainId)
        window.location.reload()
      })
    })()
  }, [])

  return (
    <Div>
      <Container>
        <Brand href='/'>
          <ImgWrap>
            <Image src='/image/brand.svg' layout='fill' />
          </ImgWrap>
          <Name>
            <Image src='/image/logo.svg' layout='fill' />
          </Name>
        </Brand>
        <Nav>
          <Link href='/nftlist'>NFT lists</Link>
          <Link href='#'>Features</Link>
          <Link href='#'>Team</Link>
          {account ? (
            <Button>{`${account?.slice(0, 4)}...${account?.slice(-4)}`}</Button>
          ) : (
            <Button
              onClick={() => {
                connect()
              }}>
              Connect
            </Button>
          )}
        </Nav>
      </Container>
    </Div>
  )
}

export default Header
