import { useState, useEffect } from 'react'

export function useBodySize() {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0
  })

  useEffect(() => {
    function onResize() {
      setSize({
        width: document.body.clientWidth,
        height: document.body.clientHeight,
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      })
    }
    onResize()
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return size
}
