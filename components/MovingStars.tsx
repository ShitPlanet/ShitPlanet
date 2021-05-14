import styled, { keyframes } from 'styled-components'
import Image from 'next/image'

const Container = styled.div``
const Wrap1 = styled.div``
const Wrap2 = styled.div``

const MovingStars = () => {
  return (
    <Container>
      <Wrap1>
        <Image src='/image/stars.svg' layout='fill' />
      </Wrap1>
      <Wrap2>
        <Image src='/image/stars.svg' layout='fill' />
      </Wrap2>
    </Container>
  )
}

export default MovingStars
