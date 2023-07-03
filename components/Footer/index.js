import React from 'react'
import Image from 'next/image'
import Logo from '../../public/Images/logo.png'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'

function Footer() {
  return (
    <>
    <div className='container border-solid border-1 border-t-[#fff] '>
        <div className='h-[1px] bg-white'/>
        <div className='grid lg:grid-cols-2 gap-8 xs:grid-col-1 items-center my-6'>
            <div>
                <Link
                    href="/"
                >
                    <Image
                        alt="spacestyler"
                        src={Logo}
                        width={200}
                    />
                </Link>
            </div>
            <div>
                <div>
                    <div className="flex justify-evenly items-center">
                    <p>Follow us on :</p>
                        <Link href="https://www.facebook.com/spacestylerPGK?mibextid=ZbWKwL" target='_blank'>
                            <FaFacebookF />
                        </Link>
                        <Link href="https://www.instagram.com/spacestyler_interiordesign/" target="_blank">
                            <FaInstagram />
                        </Link>
                        {/* <FaTwitter /> */}
                        <Link href="https://youtube.com/@spacestyler-wl1ob" target="_blank">
                            <FaYoutube />
                        </Link>
                        {/* <FaLinkedin /> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer