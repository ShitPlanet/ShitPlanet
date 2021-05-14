import styled, { keyframes } from 'styled-components'

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
  background-image: linear-gradient(140deg, #5a6cd8, #53bbf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: default;
  transform: translateY(11.3vw);
  transition: transform 400ms 200ms ease-out;
`
const SubTitle = styled.div`
  font-family: 'OpenSans italic';
  font-style: italic;
  font-weight: bold;
  font-size: 3.2vw;
  color: #fff;
  margin-bottom: 2.7vw;
  cursor: default;
  opacity: 0;
  transition: opacity 300ms ease-out;
`
const Card = styled.div`
  position: relative;
  width: 100%;
  height: 20.5vw;
  background: linear-gradient(225deg, #326aa6 0%, #2b366c 100%);
  border-radius: 1.3vw;
  opacity: 0;
  transform: scale(0.2);
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
`
const Wrap = styled.div`
  position: absolute;
  width: 71vw;
  top: 6.25vw;
  left: 14.5vw;
  text-align: center;
  margin: 6.25vw auto;

  pointer-events: none;
  transform-origin: center;
  transition: opacity 400ms 200ms ease-out;
  &.active {
    opacity: 1;
  }
  &.active ${Card} {
    pointer-events: all;
    animation: ${zoomIn} 400ms 200ms ease-out forwards;
  }
  &.active ${Title} {
    transform: translateY(0);
  }
  &.active ${SubTitle} {
    transition-delay: 300ms;
    opacity: 1;
  }
`

interface IProps {
  phase: number
  cancel: () => void
}
const MinterWrap = (props: IProps) => {
  return (
    <Wrap className={props.phase === 2 ? 'active' : ''}>
      <Title>{props.phase === 1 ? 'SHITPLANET' : 'THE MINTER'}</Title>
      <SubTitle>Blackhole for Shit Tokens</SubTitle>
      <Card>
        <Button onClick={props.cancel}>Back</Button>
      </Card>
    </Wrap>
  )
}

export default MinterWrap
