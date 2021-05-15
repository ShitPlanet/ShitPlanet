import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Loading from './Loading'
import Minter from './Minter'
import NewNFT from './NewNFT'

const zoomIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const Title = styled.div`
  font-family: 'Bungee';
  font-size: 6.4vw;
  line-height: 6vw;
  background-image: linear-gradient(140deg, #5a6cd8, #53bbf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: default;
  transform: scale(1) translateY(18.8vw);
  transition: opacity 600ms ease-out, transform 400ms 200ms ease-out;
  opacity: 1;
  pointer-events: none;
`
const SubTitle = styled.div`
  font-family: 'OpenSans italic';
  font-style: italic;
  font-weight: bold;
  font-size: 3.2vw;
  color: #fff;
  line-height: 1;
  margin-bottom: 2.6vw;
  cursor: default;
  opacity: 0;
  transition: opacity 300ms ease-out;
  pointer-events: none;
`
const Card = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 27.6vw;
  background: linear-gradient(225deg, #326aa6 0%, #2b366c 100%);
  border-radius: 1.3vw;
  opacity: 0;
  padding: 3.5vw 5vw;
  transform: scale(0.2);
  transition: width 600ms ease-out;
  margin: 0 auto;
  &.loading {
    width: 41.6vw;
  }
`
const Button = styled.button`
  position: absolute;
  left: 5.1vw;
  bottom: 2.8vw;
  font-family: 'IBMPlexSans bold';
  font-size: 2.2vw;
  color: #8eb8e4;
  border: none;
  background-color: transparent;
  padding: 0;
  text-align: left;
`
const Wrap = styled.div`
  position: absolute;
  width: 71vw;
  top: 6.25vw;
  left: 14.5vw;
  text-align: center;
  padding: 0 0;
  margin: 0 auto;
  pointer-events: none;
  transform-origin: center;
  transition: opacity 400ms 200ms ease-out;
  &.active {
    opacity: 1;
    pointer-events: all;
  }
  &.active ${Card} {
    pointer-events: all;
    animation: ${zoomIn} 400ms 200ms ease-out forwards;
  }
  &.active ${Title} {
    transform: scale(1) translateY(0);
  }
  &.active ${Title}.hidden {
    transition: opacity 600ms ease-out, transform 1000ms ease-out;
    transition-delay: 0s;
    opacity: 0;
    transform: scale(0) translateY(0);
  }
  &.active ${SubTitle} {
    transition-delay: 300ms;
    opacity: 1;
  }
  &.active ${SubTitle}.hidden {
    transition: opacity 600ms ease-out, transform 600ms ease-out;
    transition-delay: 0s;
    opacity: 0;
    transform: scale(0);
  }
`
const LoadingWrap = styled.div`
  position: absolute;
  width: 12vw;
  height: 12vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

interface IProps {
  phase: number
  cancel: () => void
}
const MinterWrap = (props: IProps) => {
  const [loading, setLoading] = useState(false)
  const [newlyMinted, setNewlyMinted] = useState<null | { level: number }>(null)
  return (
    <Wrap className={props.phase === 2 ? 'active' : ''}>
      <Title className={newlyMinted ? 'hidden' : ''}>
        {props.phase === 1 ? 'SHITPLANET' : 'THE MINTER'}
      </Title>
      <SubTitle className={newlyMinted ? 'hidden' : ''}>
        Blackhole for Shit Tokens
      </SubTitle>
      {newlyMinted ? null : (
        <Card className={loading ? 'loading' : ''}>
          {loading ? null : (
            <Minter
              setLoading={val => setLoading(val)}
              setNewlyMinted={val => setNewlyMinted(val)}
            />
          )}
          {loading ? null : <Button onClick={props.cancel}>Back</Button>}
          {loading ? (
            <LoadingWrap>
              <Loading />
            </LoadingWrap>
          ) : null}
        </Card>
      )}
      {newlyMinted ? <NewNFT one={newlyMinted} /> : null}
    </Wrap>
  )
}

export default MinterWrap
