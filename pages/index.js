import Head from 'next/head'
import Header from '@/components/Header/Header'
import OurServices from '@/components/Homepage/OurServices'
import WhyChooseUs from '@/components/Homepage/WhyChooseUs'
import Footer from '@/components/Footer'
import PageWrapper from '@/components/PageWrapper/PageWrapper'
import IntroVideo from '@/components/Homepage/IntroVideo'
import AboutUs from '@/components/Homepage/Aboutus'
import Testimonials from '@/components/Homepage/Testimonials/Testimonials'
import Specialization from '@/components/Homepage/Specialization/Specialization'
import Script from 'next/script'

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Space Styler | Transforming Spaces In Style</title>
        <meta name="description" content="Transform your space with exquisite interior designs that reflect your unique style. Our team of experienced designers creates stunning environments that blend functionality and aesthetics seamlessly. Discover our portfolio and schedule a consultation today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="interior design, best interior design in ncr, home decor, space transformation, design consultation, aesthetic design, functional design" />
        <meta name="author" content="Spacestyler" />
        <meta property="og:title" content="Space Styler | Transforming Spaces In Style" />
        <meta property="og:description" content="Transform your space with exquisite interior designs that reflect your unique style. Our team of experienced designers creates stunning environments that blend functionality and aesthetics seamlessly. Discover our portfolio and schedule a consultation today." /> 
        <meta property="og:url" content="http://www.spacestyler.in" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Head>
      <main style={{position : 'relative'}}>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XN7ZT9FHH8" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-XN7ZT9FHH8');
          `}
        </Script>
        <Header active="home"/>
        <IntroVideo />
        <PageWrapper>
        <AboutUs />
        <OurServices />
        </PageWrapper>
        <WhyChooseUs />
        <Specialization />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
