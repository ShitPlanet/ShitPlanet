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
const Stars = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
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
  &.phase_2 ${Img1} {
    left: 78.5vw;
    top: 3.5vw;
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
`

interface IProps {
  phase: number
}
const Background = (props: IProps) => {
  const dom = useRef<HTMLDivElement>()

  useEffect(() => {
    Lottie.loadAnimation({
      container: dom.current, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/starmovin.json'
    })
  }, [])

  return (
    <Wrap className={`phase_${props.phase}`}>
      <BG></BG>
      <Stars ref={dom}></Stars>
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
