import Image from 'next/image'
import React from 'react'
import dynamic from 'next/dynamic'
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Image1 from '@/public/Images/image-tanya.jpg'
import Image2 from '@/public/Images/image-john.jpg'
import quoteImage from '@/public/Images/pattern-quotes.svg'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

var $ = require('jquery');
if (typeof window !== 'undefined') {
   window.$ = window.jQuery = require('jquery');
}

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
  });

const slides = [
    {
        id : 0,
        name : 'Mr & Mrs Kalim Khan',
        review : `Home sweet home. This is the place to find happiness. If one doesn't find it here, one doesn't find it anywhere and to find this happiness Space Styler helped us to build our dream makeover house. The great involvement of the team was remarkable and appreciable. I'm glad I hired space styler for my home makeover.`,
        profession : 'UX Engineer',
        image : Image1
    },
    {
        id : 1,
        name : 'Tanya Sinclair ',
        review : '“Working with space styler was a great experience.” Space Styler “combined my ideas and vision with their expertise and experience to come up with a beautifully designed space. I am extremely happy with the service provided and with the way our space turned out. ”',
        profession : 'UX Engineer',
        image : Image2
    },
    {
        id : 2,
        name : 'Tanya Sinclair ',
        review : '“We chose to work with “Space Styler” as they really understood what we were after and we loved their enthusiasm towards our project. Their team and team work were really impressive and left behind a mark that is our “beautiful home”.”',
        profession : 'UX Engineer',
        image : Image1
    },
    {
        id : 3,
        name : 'Tanya Sinclair ',
        review : '“We trusted them with decision that we have not regretted at all and now have a home with the finish that we never thought was possible or that we would own. The best part was that in such an industry getting the job done within the allocated budget is hard to do on the contrary “Space Styler” made it possible.”',
        profession : 'UX Engineer',
        image : Image2
    },
    {
        id : 4,
        name : 'Tanya Sinclair ',
        review : '“I wanted to take a moment to thank you for the amazing work you did on my home. Your attention to detail and ability to bring my vision to life was great. Your expertise and professionalism made the entire project seamless and enjoyable. I am thrilled with the outcome and would highly recommend your services to anyone looking for a talented and passionate interior designer.”',
        profession : 'UX Engineer',
        image : Image1
    },
    {
        id : 5,
        name : 'Tanya Sinclair ',
        review : '“Home sweet home. This is the place to find happiness, if one doesn’t find it here, one doesn’t find it anywhere and to find this happiness “Space styler” helped us to build our dream makeover house. The great involvement of team was remarkable and appreciable. I am glad I made her in charge of my home makeover.”',
        profession : 'UX Engineer',
        image : Image2
    },
    {
        id : 6,
        name : 'Tanya Sinclair ',
        review : '““Having finally got of a flat of our own, we wanted to convert it into a home”. They understood our requirements and the budget and delivered a simple minimalistic house. The journey was smooth and they incorporated our ideas to their design. We are happy with the timely and flawless execution of the project. We often get compliments on the interiors and a lot of credit goes to “Space Styler” and team.”',
        profession : 'UX Engineer',
        image : Image1
    },
]

function Testimonials() {

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
        <section className="section-testimonials">
            <h1 className='text-secondary font-semibold text-3xl'>Testimonials</h1>
            <div className="slider">
                <div className="slider__slides">
                    <OwlCarousel
                        loop
                        nav
                        autoplay
                        dots={false}
                        responsive={Responsive}
                    >
                        {
                            slides.map((s, index)=> (
                                <div className={`item slider__slide slider__slide--${index + 1}`} key={s.id}>
                                    <figure className="testimonial slider__slide-content">
                                    <blockquote className="testimonial__text">
                                        <Image className="testimonial__quotation-marks" width="100" height="100" src={quoteImage} alt="quotation marks" />
                                        <p className="testimonial__quote text-secondary">
                                            {s.review}
                                        </p>
                                        <cite className="testimonial__cite">
                                            {s.name}
                                        </cite>
                                    </blockquote>
                                    <div className="testimonial__img">
                                        <Image className="testimonial__photo" width="80" height="80" src={s.image} alt={s.name} />
                                    </div>
                                    </figure>
                                </div>
                            ))
                        }
                    </OwlCarousel>
                </div>
                {/* <div className="slider__buttons">
                    <div className="slider__button slider__button--prev">
                        <MdKeyboardArrowLeft color="#000" fontSize={30}/>
                    </div>
                    <div className="slider__button slider__button--next">
                        <MdKeyboardArrowRight color="#000" fontSize={30}/>
                    </div>  
                </div> */}
            </div>
            
        </section>
    )
}

export default Testimonials