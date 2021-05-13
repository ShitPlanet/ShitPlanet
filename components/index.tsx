import React from 'react'
import { META } from '@/constant'

import styled from 'styled-components'

const Style = styled.h1`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5em;
  color: rgb(75, 133, 227);
`

export const Hello = () => <Style>{META.title}👽</Style>
