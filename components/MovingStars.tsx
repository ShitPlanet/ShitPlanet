import styled, { keyframes } from 'styled-components'
import Image from '@/components/img'

const Container = styled.div``
const Wrap1 = styled.div``
const Wrap2 = styled.div``

const MovingStars = () => {
  return (
    <Container>
      <Wrap1>
        <Image src='/image/stars.svg' style={{ objectFit: 'cover' }} />
      </Wrap1>
      <Wrap2>
        <Image src='/image/stars.svg' style={{ objectFit: 'cover' }} />
      </Wrap2>
    </Container>
  )
}

export default MovingStars
