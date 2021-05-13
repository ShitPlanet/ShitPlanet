import Header from './Header'
import styled from 'styled-components'
import Image from 'next/image'
import Background from './Background'
import { useState } from 'react'

const Main = styled.div`
  position: relative;
  width: 100vw;
  height: 71.6vw;
  overflow: hidden;
`
const Container = styled.div`
  width: 44.7vw;
  margin: 20vw auto;
  text-align: center;
`
const SubTitle = styled.div`
  font-family: 'OpenSans italic';
  font-style: italic;
  font-weight: bold;
  font-size: 3.2vw;
  color: #fff;
  margin-bottom: 0.6vw;
  cursor: default;
`
const Title = styled.div`
  font-family: 'Bungee';
  font-size: 6.4vw;
  background-image: linear-gradient(140deg, #5a6cd8, #53bbf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: default;
`
const Description = styled.div`
  font-family: Helvetica;
  font-style: normal;
  font-weight: bold;
  font-size: 1.4vw;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 4.5vw;
  cursor: default;
`
const Button = styled.button`
  width: 15vw;
  height: 3.5vw;
  background: linear-gradient(90deg, #ed4b8b 0%, #eaa85e 98.88%);
  border: none;
  border-radius: 2.3vw;
  margin: 0 auto;
  font-family: 'Lexend';
  font-size: 1.7vw;
  line-height: 3.5vw;
  text-align: center;
  color: #fff;
  &:hover {
    text-decoration: none;
  }
`
const Icon = styled.div`
  position: relative;
  display: inline-block;
  width: 1.4vw;
  height: 1.4vw;
  margin-right: 0.7vw;
`

const Landing = () => {
  const [phase, setPhase] = useState(1)
  return (
    <div>
      <Header />
      <Main>
        <Background phase={phase} />
        <Container>
          <SubTitle>Blackhole for Shit Tokens</SubTitle>
          <Title>SHITPLANET</Title>
          <Description>- Revolutionary NFT Tool For Everyone -</Description>
          <Button onClick={() => setPhase(phase === 1 ? 2 : 1)}>
            <Icon>
              <Image src='/image/icon-planet.svg' layout='fill' />
            </Icon>
            <span>Get Started</span>
          </Button>
        </Container>
      </Main>
    </div>
  )
}

export default Landing
