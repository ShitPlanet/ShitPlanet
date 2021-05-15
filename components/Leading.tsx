import { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const Div = styled.div``

interface IProps {
  skip: () => void
}
const Leading = (props: IProps) => {
  const [step, setStep] = useState(0)
  return (
    <Div>
      {step === 0 ? <Image src='/image/step1.svg' layout='fill' /> : null}
    </Div>
  )
}

export default Leading
