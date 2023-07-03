import Intro from '@/components/AboutUs/Intro'
import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'
import PageWrapper from '@/components/PageWrapper/PageWrapper'
import Head from 'next/head'
import React from 'react'

function AboutUs() {
  return (
    <div>
      <Head>
        <title>About us</title>
        <meta name="description" content="Welcome to our About page! At Spacestyler, we are passionate about creating exceptional living spaces that truly reflect your individuality and style.Our talented team of interior designers is dedicated to delivering innovative and personalized design solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="Interior design, Interior designers, Residential design, Commercial design, Innovative design solutions, Space planning, Material selection, Project management, Modern design, End-to-end solutions" />
        <meta name="author" content="Spacestyler" />
        <meta property="og:title" content="Space Styler | Transforming Spaces In Style" />
        <meta property="og:description" content="Welcome to our About page! At Spacestyler, we are passionate about creating exceptional living spaces that truly reflect your individuality and style.Our talented team of interior designers is dedicated to delivering innovative and personalized design solutions." /> 
        <meta property="og:url" content="http://www.spacestyler.in" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Head>
      <main>
        <Header active="about-us" />
        <div>
          <PageWrapper>
          <Intro />
          </PageWrapper>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AboutUs