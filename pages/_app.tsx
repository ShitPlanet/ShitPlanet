import { useEffect } from 'react'
import '@/global.css'
import 'antd/dist/antd.css'
import { observer } from 'mobx-react-lite'
import { Provider } from '@/store'
import Head from 'next/head'
import { META } from '@/constant'
import { useStore } from '@/store'
import { ethers } from 'ethers'
import address from '@/config/constants/address.json'
import shitAbi from '@/config/abi/shit.json'
import shitboxAbi from '@/config/abi/shitbox.json'

type Props = {
  Component: any
  pageProps: any
}

const App = observer(function App({ Component, pageProps }: Props) {
  const store = useStore()

  const { statusCode } = pageProps
  useEffect(() => {
    const onResize = () => {
      const screenWidth = window.innerWidth
      document.documentElement.style.fontSize =
        Math.max(screenWidth / 19.2, 40) + 'px'
    }
    window.addEventListener('resize', onResize)
    onResize()

    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    ;(async function() {
      try {
        const ethereum = (window as any)?.ethereum
        if (!ethereum) {
          return
        }
        store.provider = new ethers.providers.Web3Provider(ethereum)
        store.signer = store.provider.getSigner()
        store.shitContract = new ethers.Contract(
          address.shit,
          shitAbi,
          store.signer
        )
        store.shitboxContract = new ethers.Contract(
          address.shitbox,
          shitboxAbi,
          store.signer
        )
      } catch (error) {}
    })()
  }, [])

  if (statusCode) {
    return <Component {...pageProps} />
  }

  return <Component {...pageProps} />
})

const AppWithStore = ({ Component, pageProps }) => {
  return (
    <Provider>
      <Head>
        <title>{META.title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <App Component={Component} pageProps={pageProps} />
    </Provider>
  )
}

export default AppWithStore
