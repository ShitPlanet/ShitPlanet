import React from 'react'
import { observer } from 'mobx-react-lite'
import { Hello } from '@/components'
import { useStore } from '@/store'
import Landing from '@/components/Landing'

const Home = observer(function Home() {
  const store = useStore()

  return <Landing />
})
export default Home
