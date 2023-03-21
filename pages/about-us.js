import Intro from '@/components/AboutUs/Intro'
// import Numbers from '@/components/AboutUs/Numbers'
// import OurServices from '@/components/AboutUs/OurServices'
// import Specialization from '@/components/AboutUs/specialization'
// import Team from '@/components/AboutUs/team'
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
      </Head>
      <main>
        <Header active="about-us" />
        <div>
          <PageWrapper>
            <Intro />
            {/* <Team /> */}
          </PageWrapper>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AboutUs