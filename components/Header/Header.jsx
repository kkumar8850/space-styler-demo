import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Header.module.css'
import { useTheme } from 'next-themes'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'

const list = [
    {
        id : 'Home',
        link : '',
        subname :'home'
    },
    {
        id : 'About Us',
        link : 'about-us',
        subname : 'about-us',
    },
    {
        id : 'Contact Us',
        link : 'contact-us',
        subname : 'contact-us'
    },
    {
        id : 'Our Services',
        link : 'our-services',
        subname : 'our-services'
    }
]

function Header({ active }) {
    const {theme, setTheme} = useTheme()
    const [open, setOpen] = useState(false)

    const handleToggle = () => {
        setOpen(!open)
    }

    return (
        <div>
            <div className='bg-white dark:bg-primary text-white py-4 fixed z-[999] w-[100%]'>
                <div className='container flex items-center justify-between'>
                    <Image
                        src="/Images/logo.png"
                        height={100}
                        width={200}
                        alt='logo'
                    />
                    <div className='flex items-center'>
                        <ul className='hidden lg:block xl:block md:block'>
                            {
                                list.map(l=> (
                                    <li className='inline-block text-sm ml-6' key={l.id}>
                                        <Link href={`/${l.link}`} className={`text-secondary px-6 py-1  ${active === l.subname ? styles.active : styles.nav}`}>
                                        {l.id}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        {
                            open
                            ?
                            <FaTimes className='sm:block xs:block lg:hidden xl:hidden md:hidden' onClick={handleToggle}/>
                            :
                            <FaBars className='sm:block xs:block lg:hidden xl:hidden md:hidden' onClick={handleToggle} />
                        }
                        <button id="theme-toggle" type="button" onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')} className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 ml-10">
                            {
                                theme === 'light'
                                ?
                                <FaMoon color="#000" className='hover:cursor-pointer' />
                                :
                                <FaSun color='#fff' className='hover:cursor-pointer' />
                            }
                        </button>
                    </div>
                </div>
                {
                    open && (
                        <div className='h-[100vh] bg-secondary fixed z-[9999]'>
                            <ul className='text-center m-0 p-0'>
                                {
                                    list.map(l=> (
                                        <Link href={`/${l.link}`} key={l.id} className={`text-primary  ${active === l.subname ? styles.active : styles.nav}`}>
                                            <li className='inline-block text-3xl font-semibold w-[100%] p-4 hover:bg-primary hover:text-secondary' >
                                                {l.id}
                                            </li>
                                        </Link>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }
            </div>
            <div className='h-[90px]' />
        </div>
    )
}

export default Header