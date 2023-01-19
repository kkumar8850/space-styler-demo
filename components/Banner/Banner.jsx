import React, {  useState } from 'react'
import Image from 'next/image';
import Carousel from 'nuka-carousel';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'


function Banner({ h }) {
  const [slideIndex, setSlideIndex] = useState(0)

  // useEffect(()=>{
  //   const interval = setInterval(() => {
  //     // setSlideIndex((prevState)=> {
  //     //   return prevState > 5 ? 0 : prevState + 1
  //     // })
  //   }, 3000);
  //   return () => clearInterval(interval);
  // },[])

  return (
    <div className={`h-[${h || 600}px]`}>
      <Carousel 
        renderCenterLeftControls={()=> (
          <button className="ml-10 border-primary ">
              <FaAngleLeft />
          </button>
        )}
        renderCenterRightControls={()=> (
          <button className="mr-10 border-primary ">
              <FaAngleRight />
          </button>
        )}
        >
        <div style={{
          height : `${h || 600}px`,
          position : 'relative'
        }}>
          <div style={{
            position : 'absolute',
            height : '100%',
            width : '100%',
            background : 'rgba(0,0,0,0.4)',
            zIndex : 9
          }} />
          <p className='text-5xl'>Space Styler</p>
          <Image src='/Images/1.jpg' fill alt="image1" />
        </div>
        <div style={{
          height : `${h || 600}px`,
          position : 'relative'
        }}>
          <div style={{
            position : 'absolute',
            height : '100%',
            width : '100%',
            background : 'rgba(0,0,0,0.4)',
            zIndex : 9
          }} />
          <Image src='/Images/2.jpg' fill alt="image2" />
        </div>
        <div style={{
          height : `${h || 600}px`
        }}>
          <Image src='/Images/3.jpg' height={500} width={1500} alt="image3" />
        </div>
        <div style={{
          height : `${h || 600}px`
        }}>
          <Image src='/Images/4.jpg' height={500} width={1500} alt="image4" />
        </div>
        <div style={{
          height : `${h || 600}px`
        }}>
          <Image src='/Images/5.jpg' height={500} width={1500} alt="image5" />
        </div>
        <div style={{
          height : `${h || 600}px`
        }}>
          <Image src='/Images/6.jpg' height={500} width={1500} alt="image6" />
        </div>
      </Carousel>
    </div>
  )
}

export default Banner