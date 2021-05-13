import { useState, useEffect } from 'react'

export const useImage = (src: string | any[] | { default }) => {
  let defaultSrc
  src = (src && (src as any).default) || src
  if (Array.isArray(src)) {
    defaultSrc = src[0]?.default || src[0]
    src = src[1]?.default || src[1]
  }
  const [imgSrc, setImgSrc] = useState(defaultSrc || src)
  useEffect(() => {
    if (defaultSrc) {
      const imageLoader = new Image()
      imageLoader.onload = () => {
        setImgSrc(src)
      }
      imageLoader.src = src as string
    } else {
      setImgSrc(src)
    }
  }, [src])

  return imgSrc
}
