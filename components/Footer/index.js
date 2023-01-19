import React from 'react'
import Image from 'next/image'
import Logo from '../../public/Images/logo.png'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <>
    <div className='container border-solid border-1 border-t-[#fff] '>
        <div className='h-[1px] bg-white'/>
        <div className='grid lg:grid-cols-2 gap-8 xs:grid-col-1 items-center my-6'>
            <div>
                <Image
                    alt="spacestyler"
                    src={Logo}
                    width={200}
                />
            </div>
            <div>
                <div>
                    <div className="flex justify-evenly items-center">
                    <p>Follow us on :</p>
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                        <FaYoutube />
                        <FaLinkedin />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer