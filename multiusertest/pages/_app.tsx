import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className=' min-h-screen min-w-full bg-white'>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </div>
    
  )
}

export default MyApp
