import styled from 'styled-components'
import Image from 'next/image'

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
const NFTImage = (props: ImageProps) => {
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

export default NFTImage
