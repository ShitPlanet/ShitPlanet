import React from 'react'
import { observer } from 'mobx-react-lite'
import { Hello } from '@/components'
import { useStore } from '@/store'

const Home = observer(function Home() {
  const store = useStore()

  return <Hello />
})
export default Home
