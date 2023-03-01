import '@/styles/globals.css'
import { Poppins } from '@next/font/google'
import ErrorBoundary from '@/components/ErrorBoundary'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'

const poppins = Poppins({
  weight : ['100','200','300','400', '500', '600', '700', '800', '900'],
  style : ['normal'],
  subsets : ['latin']
})

export default function App({ Component, pageProps }) {
  return (
    <>
    <style jsx global>
      {
        `html{
          font-family : ${poppins.style.fontFamily}
        }`
      }
      </style>
      <ErrorBoundary>
        <ThemeProvider attribute='class'>
          <AnimatePresence mode="wait" initial={false}>
            <Component {...pageProps} />
          </AnimatePresence>
        </ThemeProvider>
      </ErrorBoundary>
  </>
  )
}
