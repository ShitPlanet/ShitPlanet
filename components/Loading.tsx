import Lottie from 'lottie-web'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const Loading = () => {
  const Div = styled.div`
    width: 100%;
    height: 100%;
  `
  const dom = useRef<HTMLDivElement>()

  useEffect(() => {
    Lottie.loadAnimation({
      container: dom.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/loading_hole.json'
    })
  }, [])
  return <Div ref={dom}></Div>
}

export default Loading
