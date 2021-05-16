import Background from '@/components/Background'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import styled from 'styled-components'
import Image from 'next/image'

const Main = styled.div`
  position: relative;
  width: 100vw;
  height: 44.1vw;
  overflow: hidden;
`
const Card1 = styled.div`
  position: absolute;
  width: ${(426 * 100) / 1440}vw;
  height: ${(148 * 100) / 1440}vw;
  top: ${(50 * 100) / 1440}vw;
  left: ${(303 * 100) / 1440}vw;
  border-radius: 1.3vw;
  background: linear-gradient(225deg, #326aa6 0%, #2b366c 100%);
  padding: 2vw 2.5vw;
  cursor: default;
`
const Card2 = styled.div`
  position: absolute;
  width: ${(331 * 100) / 1440}vw;
  height: ${(148 * 100) / 1440}vw;
  top: ${(70 * 100) / 1440}vw;
  left: ${(788 * 100) / 1440}vw;
  border-radius: 1.3vw;
  background: linear-gradient(225deg, #32a698 0%, #2b416c 100%);
  padding: 2vw 2.5vw;
  cursor: default;
`
const Card3 = styled.div`
  position: absolute;
  width: ${(412 * 100) / 1440}vw;
  height: ${(148 * 100) / 1440}vw;
  top: ${(256 * 100) / 1440}vw;
  left: ${(514 * 100) / 1440}vw;
  border-radius: 1.3vw;
  background: linear-gradient(225deg, #cd985a 0%, #3e4c4f 100%);
  padding: 2vw 2.5vw;
  cursor: default;
`
const Label = styled.div`
  font-family: 'Bungee';
  font-size: 1.6vw;
  color: #fff;
  padding-bottom: 0.7vw;
`
const Span = styled.div`
  font-family: Open Sans;
  font-style: italic;
  font-weight: bold;
  font-size: 2.5vw;
  color: #fff;
`
const Button = styled.button`
  position: absolute;
  width: ${(314 * 100) / 1440}vw;
  height: ${(50 * 100) / 1440}vw;
  top: ${(444 * 100) / 1440}vw;
  left: ${(563 * 100) / 1440}vw;
  background: linear-gradient(90deg, #1f6ac2 0%, #24639e 98.88%);
  font-family: ' Lexend';
  font-size: 1.6vw;
  color: #fff;
  border: none;
  border-radius: ${(50 * 100) / 1440}vw;
  &:hover {
    box-shadow: 0 0 0.5vw #1f6ac2;
  }
`
const Img = styled.div`
  position: absolute;
  width: ${(258 * 100) / 1440}vw;
  height: ${(289 * 100) / 1440}vw;
  top: ${(188 * 100) / 1440}vw;
  left: ${(1152 * 100) / 1440}vw;
  transform: rotate(-13.94deg);
`

const Mining = () => {
  return (
    <div>
      <Header />
      <Main>
        <Background phase={4} />
        <Card1>
          <Label>Total Mining Power</Label>
          <Span>1'761</Span>
        </Card1>
        <Card2>
          <Label>my Hash Power</Label>
          <Span>100</Span>
        </Card2>
        <Card3>
          <Label>shit token i've earned</Label>
          <Span>10</Span>
        </Card3>
        <Button>Claim your shit coins</Button>
        <Img>
          <Image src='/image/ufo.svg' layout='fill' />
        </Img>
      </Main>
      <Footer />
    </div>
  )
}

export default Mining
