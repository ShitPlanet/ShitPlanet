import { useEffect } from 'react'
import '@/global.css'
import { observer } from 'mobx-react-lite'
import { Provider } from '@/store'
import Head from 'next/head'
import { META } from '@/constant'

type Props = {
  Component: any
  pageProps: any
}

const App = observer(function App({ Component, pageProps }: Props) {
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
