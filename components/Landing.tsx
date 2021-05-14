import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'
import Image from 'next/image'
import Background from './Background'
import { useState } from 'react'
import MinterWrap from './MinterWrap'

const Main = styled.div`
  position: relative;
  width: 100vw;
  height: 71.6vw;
  overflow: hidden;
`

const SubTitle = styled.div`
  font-family: 'OpenSans italic';
  font-style: italic;
  font-weight: bold;
  font-size: 3.2vw;
  color: #fff;
  margin-bottom: 0.6vw;
  cursor: default;
  transition: opacity 300ms 300ms ease-out;
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
  opacity: 1;
  transition: opacity 300ms ease-out;
`
const Container = styled.div`
  width: 44.7vw;
  margin: 20vw auto;
  text-align: center;
  opacity: 1;
  transition: opacity 300ms ease-out;
  &.hidden,
  &.hidden ${SubTitle}, &.hidden ${Description} {
    opacity: 0;
  }
`
const Title = styled.div`
  font-family: 'Bungee';
  font-size: 6.4vw;
  background-image: linear-gradient(140deg, #5a6cd8, #53bbf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: default;
  opacity: 0;
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
const Img = styled.div`
  position: absolute;
  width: 29vw;
  height: 32.5vw;
  left: 72vw;
  top: 27vw;
  transform: rotate(10.72deg);
  transition: width 600ms ease-out, height 600ms ease-out, left 600ms ease-out,
    top 600ms ease-out, transform 800ms ease-out;
  &.left {
    width: 26.5vw;
    height: 29.9vw;
    top: 28.9vw;
    left: -8.5vw;
    transform: rotate(15.96deg);
  }
`

const Landing = () => {
  const [phase, setPhase] = useState(1)
  return (
    <div>
      <Header />
      <Main>
        <Background phase={phase} />
        <Container className={phase === 2 ? 'hidden' : ''}>
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
        <MinterWrap phase={phase} cancel={() => setPhase(1)} />
        <Img className={phase === 2 ? 'left' : ''}>
          <Image src='/image/ufo.svg' layout='fill' />
        </Img>
      </Main>
      <Footer />
    </div>
  )
}

export default Landing