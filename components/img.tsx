import { META } from '@/constant'
import React from 'react'

const Image = ({ src, ...props }) => (
  <img src={`${META.basePath}${src}`} {...props} />
)

export default Image
