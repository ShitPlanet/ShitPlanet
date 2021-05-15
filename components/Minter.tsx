import styled from 'styled-components'
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
      <Selector>
        {Array(10)
          .fill('1')
          .map((i, index) => (
            <option key={index}>{`BTC_${index}`}</option>
          ))}
      </Selector>
    </Div>
  )
}

export default Minter
