import { BigNumber } from '@ethersproject/bignumber'
import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Level from './Level'
import NFTImage from './NFTImage'

const zoomIn = keyframes`
  0% {
    transform: scale(0.08);
  }
  100% {
    transform: scale(1);
  }
`
const BG1 = styled.div`
  position: absolute;
  width: ${(457 * 100) / 1440}vw;
  height: ${(550 * 100) / 1440}vw;
  top: -1.4vw;
  left: -2.7vw;
`
const Card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: ${(19 * 100) / 1440}vw;
  background-image: linear-gradient(0, #326aa6, #2b366c);
  border: 0.3vw solid #ff9a28;
  z-index: 10;
`
const Div = styled.a`
  position: absolute;
  display: block;
  top: -1.4vw;
  left: calc(50% - ${(383 * 50) / 1440}vw);
  width: ${(383 * 100) / 1440}vw;
  height: ${(511 * 100) / 1440}vw;
  transform-origin: bottom;
  transform: scale(0.08);
  animation: ${zoomIn} 600ms 0ms ease-out forwards;
  cursor: pointer;
  &.level_1 ${BG1} svg {
    color: #8b8b8b;
  }
  &.level_1 ${Card} {
    border-color: #8b8b8b;
  }
  &.level_2 ${BG1} svg {
    color: #b4ec51;
  }
  &.level_2 ${Card} {
    border-color: #b4ec51;
  }
  &.level_3 ${BG1} svg {
    color: #18d8d5;
  }
  &.level_3 ${Card} {
    border-color: #18d8d5;
  }
  &.level_4 ${BG1} svg {
    color: #fe78ad;
  }
  &.level_4 ${Card} {
    border-color: #fe78ad;
  }
  &.level_5 ${BG1} svg {
    color: #ff9a28;
  }
  &.level_5 ${Card} {
    border-color: #ff9a28;
  }
`

const Header = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  width: 100%;
  top: 0;
  left: 0;
  justify-content: space-between;
  align-items: flex-start;
  padding: ${(27 * 100) / 1440}vw ${(28 * 100) / 1440}vw ${(38 * 100) / 1440}vw
    ${(28 * 100) / 1440}vw;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`
const Text = styled.div`
  font-family: Impact;
  font-size: 2.5vw;
  line-height: 3vw;
  color: #fff;
  text-align: left;
  & span {
    display: block;
  }
`
const roll = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`
const Power = styled.div`
  position: absolute;
  width: ${(60 * 100) / 1440}vw;
  height: ${(60 * 100) / 1440}vw;
  color: #1384bc;
  top: ${(166 * 100) / 1440}vw;
  left: ${(32 * 100) / 1440}vw;
  text-align: center;
  &.minting {
    color: #66ccff;
  }
  & svg {
    display: block;
    width: 60%;
    height: 60%;
    margin: 0 auto;
  }
  &.minting svg {
    transform: rotate(0);
    animation: ${roll} 2000ms linear infinite;
  }
  & span {
    display: block;
    width: 100%;
    left: 0;
    text-align: center;
    font-family: 'IBMPlexSans';
    font-size: 1vw;
    color: #fff;
  }
`

const Container = styled.div``
const BG2 = styled.div``
const Img = styled.div``

interface IProps {
  one: null | { level: number }
  type?: string
  name?: string
  imgNo?: number
  amount?: number
  timestamp?: number
  usd?: BigNumber
  power?: number
  minting?: boolean
  level?: BigNumber
}
const NewNFT = (props: IProps) => {
  const [category, setCategory] = useState(-1)
  useEffect(() => {
    if (props.usd) {
      let category: number
      if (
        props.usd.gt(BigNumber.from('0')) &&
        props.usd.lte(BigNumber.from('10'))
      ) {
        category = 0
      } else if (
        props.usd.gt(BigNumber.from('10')) &&
        props.usd.lte(BigNumber.from('100'))
      ) {
        category = 1
      } else if (
        props.usd.gt(BigNumber.from('100')) &&
        props.usd.lte(BigNumber.from('1000'))
      ) {
        category = 2
      } else if (
        props.usd.gt(BigNumber.from('1000')) &&
        props.usd.lte(BigNumber.from('10000'))
      ) {
        category = 3
      } else if (
        props.usd.gt(BigNumber.from('10000')) &&
        props.usd.lte(BigNumber.from('100000'))
      ) {
        category = 4
      } else if (
        props.usd.gt(BigNumber.from('0')) &&
        props.usd.lte(BigNumber.from('10'))
      ) {
        category = 5
      }
      setCategory(category)
    }
  }, [])
  const arr = [
    { name1: 'AHL No.02', name2: '', image: 'ufo' },
    { name1: 'Alien Skull', name2: '', image: 'skull' },
    { name1: 'Pistol', name2: 'Antenna', image: 'gun' },
    { name1: 'Counterfeit', name2: 'Skull', image: 'bottle' },
    { name1: 'AHL No.05', name2: '', image: 'aircraft' },
    { name1: 'Alien shit', name2: '', image: 'shit' }
  ]
  return (
    <Div href='/nftlist' className={`level_${props.one.level}`}>
      <BG1>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 458.246 551.302'>
          <path
            id='路径_141'
            data-name='路径 141'
            d='M3784.333-1092.887c-60.978,91.538,42.842,98.964,9.568,177.935s-12.281,134.237,179.934,168.51,265.617-114.1,244.625-252.194-44.555-194.215-53.266-249.48-157.086-44.7-191.359-19.993-133.237-63.834-179.934,0S3845.311-1184.425,3784.333-1092.887Z'
            transform='translate(-3764.251 1292.221)'
            fill='currentColor'
            stroke='#707070'
            strokeWidth='1'
          />
        </svg>
      </BG1>
      <Card>
        <Header>
          <Text>
            <span>{arr[category]?.name1 || ''}</span>
            <span>{arr[category]?.name2 || ''}</span>
          </Text>
          <Level level={props.one.level} />
        </Header>
        <Power className={props.minting ? 'minting' : ''}>
          <svg
            viewBox='0 0 60 59'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M50.705 16.4684C47.4512 3.97228 32.3536 -2.40551 19.7939 0.837436C30.3254 2.0103 36.8764 5.73428 40.0813 11.8905C37.1165 8.63267 33.2835 6.28205 29.0293 5.11272C16.5456 1.66979 3.45445 11.5175 0 23.9596C6.8872 14.647 14.051 10.9879 21.7625 12.1877C20.6057 12.3436 19.462 12.5839 18.3406 12.9066C14.0857 14.2056 10.2936 16.6928 7.41323 20.0735C-0.997831 29.8888 2.4295 45.8765 12.2939 54.2596C7.84707 46.1522 6.7679 39.369 8.74729 33.6831C8.35708 36.6415 8.54119 39.6471 9.28959 42.5363C12.5434 55.0325 27.6464 61.4049 40.2006 58.1673C29.6909 56.9944 23.1453 53.2705 19.9349 47.1305C22.901 50.3754 26.7265 52.7192 30.9707 53.892C43.4436 57.335 56.5456 47.4872 60 35.0451C53.1128 44.3578 45.9436 48.0169 38.2321 46.8116C39.391 46.658 40.5367 46.4177 41.6594 46.0927C45.9205 44.7916 49.7183 42.3007 52.603 38.915C61.0033 29.0943 57.5813 13.1066 47.7223 4.72897C52.1746 12.8634 53.2484 19.6249 51.269 25.3109C51.6622 22.3507 51.4781 19.3428 50.7267 16.4522L50.705 16.4684Z'
              fill='currentColor'
            />
          </svg>
          <span>{props.power || '0'}</span>
        </Power>
        <NFTImage imgNo={category} />
        <Container>
          <BG2></BG2>
          <Img></Img>
        </Container>
      </Card>
    </Div>
  )
}

export default NewNFT
