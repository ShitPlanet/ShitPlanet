import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'
import Image from '@/components/img'

import Background from './Background'
import { useEffect, useState } from 'react'
import MinterWrap from './MinterWrap'
import VideoPlayer from './VideoPlayer'
import Leading from './Leading'
import classNames from 'classnames'

const Div = styled.div`
  &.blur {
    filter: blur(8px);
  }
  &.blur_2 {
    filter: blur(2px);
  }
`
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
  line-height: 1;
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
  padding: 20vw 0;
  margin: 0 auto;
  text-align: center;
  opacity: 1;
  transition: opacity 300ms ease-out;
  &.hidden,
  &.hidden ${SubTitle}, &.hidden ${Description} {
    opacity: 0;
    pointer-events: none;
  }
`
const Title = styled.div`
  font-family: 'Bungee';
  font-size: 6.4vw;
  line-height: 1;
  background-image: linear-gradient(140deg, #5a6cd8, #53bbf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: default;
  opacity: 0;
`
const Button = styled.button`
  width: 20vw;
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
    box-shadow: 0 0 0.5vw #ed4b8b;
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
  const [playVideo, setPlayVideo] = useState(false)
  const [leadingInfo, setLeadingInfo] = useState('0')

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem('shitplanet'))
    setLeadingInfo(info ? info : '0')
  }, [])
  useEffect(() => {
    if (leadingInfo === '1') {
      localStorage.setItem('shitplanet', '1')
    }
  }, [leadingInfo])

  return (
    <div>
      <Div
        className={classNames({
          blur: playVideo
          // blur_2: leadingInfo === '0'
        })}>
        <Header />
        <Main>
          <Background phase={phase} />
          <Container className={phase === 2 ? 'hidden' : ''}>
            <SubTitle>Blackhole for Shit Tokens</SubTitle>
            <Title>SHITPLANET</Title>
            <Description>- Revolutionary NFT Tool For Everyone -</Description>
            <Button
              id='leading_target_1'
              onClick={() => setPhase(phase === 1 ? 2 : 1)}>
              <Icon>
                <Image
                  src='/image/icon-planet.svg'
                  style={{ objectFit: 'cover' }}
                />
              </Icon>
              <span>Get Started(BSC)</span>
            </Button>
          </Container>
          <MinterWrap phase={phase} cancel={() => setPhase(1)} />
          <Img className={phase === 2 ? 'left' : ''}>
            <Image src='/image/ufo.svg' style={{ objectFit: 'cover' }} />
          </Img>
        </Main>
        <Footer />
      </Div>
      {playVideo ? <VideoPlayer /> : null}
      {/* {leadingInfo === '0' ? (
        <Leading skip={() => setLeadingInfo('1')} />
      ) : null} */}
    </div>
  )
}

export default Landing
