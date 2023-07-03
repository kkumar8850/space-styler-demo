import '@/styles/globals.css'
import { Poppins } from '@next/font/google'
import ErrorBoundary from '@/components/ErrorBoundary'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'
import whatsppImage from '@/public/Images/whatsapp_icon.png'
import Image from 'next/image'

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
        <ThemeProvider attribute='class' enableSystem={false} >
          <AnimatePresence mode="wait" initial={false}>
            <Component {...pageProps} />
            <div style={{position : 'fixed', top: '85vh', zIndex : 888, left : '50px'}}>
            <a href="https://api.whatsapp.com/send/?phone=7778885464&text=Hi%2C+I+need+an+interior+designer.&type=phone_number&app_absent=0" target="_blank">
              <Image
                alt="whatsapp"
                src={whatsppImage}
                height={50}
                width={50}          
                />
            </a>
          </div>
          </AnimatePresence>
        </ThemeProvider>
      </ErrorBoundary>
  </>
  )
}
