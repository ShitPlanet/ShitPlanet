import styled, { keyframes } from 'styled-components'
import Image from 'next/image'

const Div = styled.div``
const InputGroup = styled.div``
const Selector = styled.select``

const Minter = () => {
  return (
    <Div>
      <InputGroup>
        <input type='text' placeholder='Destroyed Quantity' />
        <button>MAX</button>
      </InputGroup>
      <Selector></Selector>
    </Div>
  )
}

export default Minter
