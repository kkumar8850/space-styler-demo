import React from 'react'
import Image from 'next/image'
import IntroTop from '../../public/Images/intro.jpg'

function Intro() {
  return (
    <div className='container text-center'>
        <p className='text-center text-secondary text-3xl font-semibold mb-4'>Who we are ?</p>
        <div className='lg:h-[400px] xs:h-[200px] sm:h-[200px] overflow-hidden'>
            <Image
                src={IntroTop}
                alt="intro-image"
            />
        </div>
        <p className='text-center font-semibold text-2xl mt-[30px]'>What is SpaceStyler?</p>
        <p className='my-[20px]'>Founded in 2012, LuxDeco is the leading global interior marketplace that is changing the way people design and shop for their homes.</p>
        <p className='my-[20px]'>SpaceStyler offers global clientele unparalleled access to thousands of products from 200+ of the world’s finest interior brands, including AERIN, Kelly Wearstler, L’Objet, Michael Aram, Missoni Home, and Ralph Lauren; a unique, vast range in one curated location.</p>
        <p className='my-[20px]'>Alongside a team of experts offering support and design advice from the first click through to white-glove delivery and installation, LuxDeco also provides an interior design studio service with expertise ranging from full-service residential and hospitality projects to product sourcing and bespoke furniture design, using best-in-class digital technology and industry tools.</p>
        <p className='my-[20px]'>Inspirational lifestyle content, including podcasts, playlists, styling advice and trend features are published daily by SpaceStyler team experts, alongside curated edits from the biggest names in design. To date, SpaceStyler has delivered over 100,000 products to clients in 80 countries, redefining the luxury interior design experience and helping people around the world to live beautifully.</p>
    </div>
  )
}

export default Intro