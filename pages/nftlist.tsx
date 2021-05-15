import Background from '@/components/Background'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Loading from '@/components/Loading'
import NFTCard from '@/components/NFTCard'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Main = styled.div`
  position: relative;
  min-height: 141vw;
`
const Container = styled.div`
  box-sizing: border-box;
  width: 85vw;
  height: 100%;
  margin: 0 auto;
  padding: 9vw 0 13.9vw 0;
  text-align: center;
  & label {
    display: block;
    font-family: 'Bungee';
    font-size: 5vw;
    background-image: linear-gradient(140deg, #5a6cd8, #53bbf8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: default;
    margin-bottom: 2.8vw;
  }
`
const List = styled.div`
  width: calc(100% + 2.6vw);
  margin-left: -1.3vw;
`
const LoadingWrap = styled.div`
  width: 12vw;
  height: 12vw;
  margin: 0 auto;
`

const NFTList = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1200)
  }, [])

  return (
    <div>
      <Header />
      <Main>
        <Background phase={3} />
        {loading ? (
          <Container>
            <label>NFT list</label>
            <LoadingWrap>
              <Loading />
            </LoadingWrap>
          </Container>
        ) : (
          <Container>
            <label>NFT list</label>
            <List>
              {Array(6)
                .fill('1')
                .map((i, index) => (
                  <NFTCard key={index} {...{ imgNo: index + 1 }} />
                ))}
            </List>
          </Container>
        )}
      </Main>
      <Footer />
    </div>
  )
}

export default NFTList
