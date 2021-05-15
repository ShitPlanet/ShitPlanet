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
    const ethereum = (window as any)?.ethereum
    ;(async function() {
      try {
        const accounts = await ethereum.request({
          method: 'eth_requestAccounts'
        })
        const account = accounts[0]
        if (account) {
          setAccount(account)
        }
      } catch (error) {}
    })()
  }, [])

  React.useEffect(() => {
    connect()
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
            <Button
              onClick={() => {
                connect()
              }}>
              {`${account?.slice(0, 4)}...${account?.slice(-4)}`}
            </Button>
          ) : (
            <Button>Connect</Button>
          )}
        </Nav>
      </Container>
    </Div>
  )
}

export default Header
