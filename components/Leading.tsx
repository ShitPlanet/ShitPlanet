import { useEffect, useState } from 'react'
import Image from '@/components/img'

import styled from 'styled-components'

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
`
const Img = styled.button`
  position: absolute;
  top: 50%;
  left: 10vw;
  transform: translateY(-50%);
  cursor: pointer;
  width: 70vw;
  height: 32vw;
  background-color: #222;
  border: none;
  box-shadow: 0 0 0.5vw rgba(0, 0, 0, #222);
`
const Button = styled.button`
  position: fixed;
  width: ${(90 * 100) / 1440}vw;
  height: ${(35 * 100) / 1440}vw;
  bottom: -3.6vw;
  right: 0;
  border: none;
  border-radius: ${(35 * 100) / 1440}vw;
  font-family: Impact;
  font-size: 1.5vw;
  color: #fff;
  background: linear-gradient(90deg, #34a0ff 0%, #18d8d5 100%);
`

interface IProps {
  skip: () => void
}
const Leading = (props: IProps) => {
  const [step, setStep] = useState(0)
  useEffect(() => {
    if (step === 7) props.skip()
    document.getElementsByTagName('html')[0].style.overflow = 'hidden'
    return () => {
      document.getElementsByTagName('html')[0].style.overflow = 'auto'
    }
  }, [step])
  return (
    <Div>
      <Img onClick={() => setStep(step + 1)}>
        {step === 0 ? (
          <Image src='/image/step1.svg' style={{ objectFit: 'cover' }} />
        ) : null}
        <Button onClick={props.skip}>SKIP</Button>
      </Img>
    </Div>
  )
}

export default Leading
