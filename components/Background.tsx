import styled from 'styled-components'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import Lottie from 'lottie-web'

const BG = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: -2vw;
  background: linear-gradient(180deg, #25223f 0%, #203459 50.53%, #202a4f 100%);
  z-index: -100;
`
const Div = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(/image/stars.svg);
  background-position: center;
  background-size: contain;
  background-repeat: repeat;
`
const Stars = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  & div {
    width: 100vw;
    height: 56.25vw;
  }
  & div:last-child {
    margin-top: -10vw;
  }
`
const Img1 = styled.div`
  position: absolute;
  width: 20.8vw;
  height: 23.6vw;
  left: -0.6vw;
  top: 2.6vw;
  transform: rotate(43deg);
  transition: left 600ms ease-out, top 600ms ease-out, transform 800ms ease-out;
`
const Img3 = styled.div`
  position: absolute;
  width: 5vw;
  height: 5vw;
  left: 97.5vw;
  top: 3.5vw;
  transition: left 600ms 100ms ease-out;
`
const Img4 = styled.div`
  position: absolute;
  width: 7vw;
  height: 3vw;
  left: 67vw;
  top: 12.4vw;
  mix-blend-mode: normal;
  opacity: 0.73;
  transition: left 700ms 100ms ease-out;
`
const Img5 = styled.div`
  position: absolute;
  width: 40vw;
  height: 14.7vw;
  left: -5vw;
  bottom: -6.4vw;
  transition: left 700ms 100ms ease-out, bottom 700ms 100ms ease-in;
`
const Wrap = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  background: linear-gradient(180deg, #25223f 0%, #203459 50.53%, #202a4f 100%);
  z-index: -10;
  pointer-events: none;
  &.phase_2 ${Img1} {
    left: 78.5vw;
    top: 3.5vw;
    width: 25.1vw;
    height: 28.5vw;
    transform: rotate(0);
  }
  &.phase_2 ${Img3} {
    left: -2.5vw;
  }
  &.phase_2 ${Img4} {
    left: 107vw;
  }
  &.phase_2 ${Img5} {
    left: 79vw;
    bottom: -0.6vw;
  }
  &.phase_4 ${Img1} {
    width: ${(226 * 100) / 1440}vw;
    height: ${(257 * 100) / 1440}vw;
    top: ${(195 * 100) / 1440}vw;
    left: ${(48 * 100) / 1440}vw;
    transform: rotate(-11.88deg);
  }
  &.phase_4 ${Img3} {
    width: ${(73 * 100) / 1440}vw;
    height: ${(73 * 100) / 1440}vw;
    top: ${(31 * 100) / 1440}vw;
    left: ${(1323 * 100) / 1440}vw;
  }
  &.phase_4 ${Img4} {
    width: ${(102 * 100) / 1440}vw;
    height: ${(44 * 100) / 1440}vw;
    top: ${(524 * 100) / 1440}vw;
    left: ${(280 * 100) / 1440}vw;
  }
  &.phase_4 ${Img5} {
    width: ${(572 * 100) / 1440}vw;
    height: ${(212 * 100) / 1440}vw;
    top: ${(515 * 100) / 1440}vw;
    left: ${(745 * 100) / 1440}vw;
  }
`

interface IProps {
  phase: number
}
const Background = (props: IProps) => {
  const dom1 = useRef<HTMLDivElement>()
  const dom2 = useRef<HTMLDivElement>()
  useEffect(() => {
    if (props.phase !== 3) {
      const k = Lottie.loadAnimation({
        container: dom1.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/starmovin.json'
      })
      const val = Lottie.loadAnimation({
        container: dom2.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/starmovin.json'
      })
      val.setSpeed(0.8)
    }
  }, [props.phase])

  return (
    <Wrap className={`phase_${props.phase}`}>
      <BG></BG>
      {props.phase === 3 ? (
        <Div></Div>
      ) : (
        <Stars>
          <div ref={dom1}></div>
          <div ref={dom2}></div>
        </Stars>
      )}
      {/* {props.phase === 3 ? <Div></Div> : <Stars ref={dom}></Stars>} */}
      {props.phase === 3 ? null : (
        <Img1>
          <Image src='/image/aircraft.svg' layout='fill' />
        </Img1>
      )}
      <Img3>
        <Image src='/image/sun.svg' layout='fill' />
      </Img3>
      {props.phase === 3 ? null : (
        <Img4>
          <Image src='/image/saturn.svg' layout='fill' />
        </Img4>
      )}
      <Img5>
        <Image src='/image/moon.svg' layout='fill' />
      </Img5>
    </Wrap>
  )
}

export default Background
