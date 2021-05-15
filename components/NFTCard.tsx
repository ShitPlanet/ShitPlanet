import styled from 'styled-components'
import Image from 'next/image'

const Div = styled.div`
  position: relative;
  display: inline-block;
  width: 26.5vw;
  height: 43.6vw;
  border-radius: 1.3vw;
  margin: 0 1.3vw 3vw 1.3vw;
  background: linear-gradient(225deg, #326aa6 0%, #2b366c 100%);
  cursor: default;
`
const Header = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  top: 0;
  left: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  padding: 2vw 2.2vw 2.2vw 2.2vw;
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
const Footer = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  padding: 2.2vw;
`
const Amount = styled.div`
  & span {
    display: block;
    text-align: left;
  }
  & span.label {
    font-family: 'Lexend bold';
    font-size: 1.2vw;
    color: #bcfff7;
    font-style: italic;
    margin-bottom: 0.4vw;
  }
  & span.stk {
    padding: 0 1vw;
    font-family: 'IBMPlexSans bold';
    font-size: 2.2vw;
    color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  & span.usd {
    padding: 0.2vw 1vw 0 1vw;
    font-family: 'IBMPlexSans';
    font-size: 1.2vw;
    color: #fff;
  }
`
const Time = styled.div`
  display: flex;
  text-align: left;
  align-items: flex-start;
  padding-top: 1vw;
  & span.label {
    font-family: 'Lexend bold';
    font-size: 1.2vw;
    font-style: italic;
    color: #bcfff7;
    padding-top: 0.2vw;
  }
  & span.time {
    font-family: 'IBMPlexSans bold';
    font-size: 1.6vw;
    color: #fff;
    padding-left: 1.4vw;
  }
`

interface IProps {
  type?: string
  name?: string
  imgNo?: number
  amount?: number
  timestampt?: number
  usd?: number
}
const NFTCard = (props: IProps) => {
  return (
    <Div>
      <Header>
        <Text>
          <span>{props.type || 'Alienware'}</span>
          <span>{props.name || 'AHL No.02'}</span>
        </Text>
        <Level level={1} />
      </Header>
      <ImageCard imgNo={props.imgNo} />
      <Footer>
        <Amount>
          <span className='label'>Burn Amount:</span>
          <span className='stk'>{props.amount || '201511111135.2468'} STK</span>
          <span className='usd'>≈ {props.usd || '53.0576'} USD</span>
        </Amount>
        <Time>
          <span className='label'>Burned Time:</span>
          <span className='time'>May 15, 2021</span>
        </Time>
      </Footer>
    </Div>
  )
}

export default NFTCard

const LevelDiv = styled.div`
  height: 2.6vw;
  text-align: center;
  padding: 0 1.3vw;
  border-radius: 1.3vw;
  font-family: 'OpenSans italic';
  font-weight: 900;
  font-size: 1.6vw;
  line-height: 2.6vw;
  color: #fff;
  margin-top: 0.5vw;
  &.level_1 {
    background: linear-gradient(90deg, #429321 0%, #a8d037 100%);
  }
  &.level_2 {
    background: linear-gradient(90deg, #3c92dd 0%, #34c4c2 100%);
  }
  &.level_3 {
    background: linear-gradient(90deg, #fe78ad 0%, #eaa85e 100%);
  }
`
interface LevelProps {
  level: number
}
const Level = (props: LevelProps) => {
  return (
    <LevelDiv className={`level_${props.level}`}>
      {props.level === 1 ? <span>UNIQUE</span> : null}
      {props.level === 2 ? <span>EPIC</span> : null}
      {props.level === 3 ? <span>LEGEND</span> : null}
    </LevelDiv>
  )
}

const ImageDiv = styled.div`
  position: absolute;
  &.no_1 {
    width: ${(266 * 100) / 1440}vw;
    height: ${(299 * 100) / 1440}vw;
    top: 8.1vw;
    right: 1.5vw;
    transform: rotate(8deg);
  }
  &.no_2 {
    width: ${(235 * 100) / 1440}vw;
    height: ${(277 * 100) / 1440}vw;
    top: 8.9vw;
    right: 3.6vw;
  }
  &.no_3 {
    width: ${(254 * 100) / 1440}vw;
    height: ${(330 * 100) / 1440}vw;
    top: ${(114 * 100) / 1440}vw;
    right: ${(48 * 100) / 1440}vw;
  }
  &.no_4 {
    width: ${(276 * 100) / 1440}vw;
    height: ${(348 * 100) / 1440}vw;
    top: ${(93 * 100) / 1440}vw;
    right: ${(13 * 100) / 1440}vw;
  }
  &.no_5 {
    width: ${(256 * 100 * 1) / 1440}vw;
    height: ${(290 * 100 * 1) / 1440}vw;
    top: ${(125 * 100) / 1440}vw;
    right: ${(38 * 100) / 1440}vw;
    transform: rotate(12.07deg);
  }
  &.no_6 {
    width: ${(250 * 100) / 1440}vw;
    height: ${(241 * 100) / 1440}vw;
    top: ${(161 * 100) / 1440}vw;
    right: ${(53 * 100) / 1440}vw;
  }
`
interface ImageProps {
  imgNo: number
}
const ImageCard = (props: ImageProps) => {
  return (
    <ImageDiv className={`no_${props.imgNo}`}>
      {props.imgNo === 1 ? <Image src='/image/ufo.svg' layout='fill' /> : null}
      {props.imgNo === 2 ? (
        <Image src='/image/skull.svg' layout='fill' />
      ) : null}
      {props.imgNo === 3 ? <Image src='/image/gun.svg' layout='fill' /> : null}
      {props.imgNo === 4 ? (
        <Image src='/image/bottle.svg' layout='fill' />
      ) : null}
      {props.imgNo === 5 ? (
        <Image src='/image/aircraft.svg' layout='fill' />
      ) : null}
      {props.imgNo === 6 ? <Image src='/image/shit.svg' layout='fill' /> : null}
    </ImageDiv>
  )
}
