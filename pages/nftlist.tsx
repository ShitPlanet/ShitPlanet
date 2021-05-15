import Background from '@/components/Background'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import NFTCard from '@/components/NFTCard'
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

const NFTList = () => {
  return (
    <div>
      <Header />
      <Main>
        <Background phase={3} />
        <Container>
          <label>NFT lists</label>
          <List>
            {Array(6)
              .fill('1')
              .map((i, index) => (
                <NFTCard key={index} {...{ imgNo: index + 1 }} />
              ))}
          </List>
        </Container>
      </Main>
      <Footer />
    </div>
  )
}

export default NFTList
