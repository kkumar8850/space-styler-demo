import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Image1 from '../../public/Images/1.jpg'
import Image2 from '../../public/Images/slider_2.jpg'
import Image3 from '../../public/Images/bedroom_slider_2.jpg'
import Image4 from '../../public/Images/slider_4.jpg'
import Image5 from '../../public/Images/slider-1.jpg'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

var $ = require('jquery');
if (typeof window !== 'undefined') {
   window.$ = window.jQuery = require('jquery');
}

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});

const arr = [
  {
    id : 0,
    image : Image1
  },
  {
    id : 1,
    image : Image2
  },
  {
    id : 2,
    image : Image3
  },
  { 
    id : 3,
    image : Image4
  },
  {
    id : 4,
    image : Image5
  },
]

function IntroVideo() {

  const Responsive = {
    0 : {
        items : 1
    },
    768 : {
        items : 1
    },
    1024 : {
        items : 1
    }
}

  return (
    <div className='h-[300px] lg:h-[600px] sm:h-[300px] xs:h-[300px]' >
      <OwlCarousel
          loop
          nav={false}
          autoplay
          dots={true}
          responsive={Responsive}
      >
        {
          arr.map(a=> (
            <div className='item h-[300px] lg:h-[600px] sm:h-[300px] xs:h-[300px]' key={a.id}>
              <Image
                src={a.image}
                fill
                alt="kitchen"
              />
            </div>
          ))
        }
      </OwlCarousel>
    </div>
  )
}

export default IntroVideo