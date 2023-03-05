'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '../../styles/Header.module.css'
import { useTheme } from 'next-themes'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'
import SideMenu from './SideMenu'

const list = [
    {
        href:'/',
        name : 'Home',
    },
    {
        href : '/about-us',
        name : 'About Us',
    },
    {
        href : '/showcase',
        name : 'Gallery'
    },
    {
        href:'/our-services',
        name : 'Services'
    },
    {
        href:'/modular-kitchen',
        name : 'Modular Kitchen'
    },
    {
        href:'/furniture',
        name : 'Furniture'
    },
    {
        href : '/contact-us',
        name : 'Contact Us'
    },
]

function Header({ active }) {
    const path = usePathname()
    const {theme, setTheme} = useTheme()
    const [isActive, setIsActive] = useState(false)

    const handleToggle = () => {
        setIsActive(!isActive)
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
                                    <li className='inline-block text-sm ml-6' key={l.name}>
                                        <motion.div
                                            whileHover={{
                                                scale : 1.1
                                            }}
                                        >
                                            <Link href={l.href} className={`text-secondary px-6 py-1 ${path === l.href ? styles.active : styles.nav}`}>
                                                {l.name}
                                            </Link>
                                        </motion.div>
                                    </li>
                                ))
                            }
                        </ul>
                        {
                            isActive
                            ?
                            <FaTimes className='sm:block xs:block lg:hidden xl:hidden md:hidden' onClick={handleToggle}/>
                            :
                            <FaBars className='sm:block xs:block lg:hidden xl:hidden md:hidden' onClick={handleToggle} />
                        }
                        {/* <button id="theme-toggle" type="button" onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')} className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 ml-10">
                            {
                                theme === 'light'
                                ?
                                <FaMoon color="#000" className='hover:cursor-pointer' />
                                :
                                <FaSun color='#fff' className='hover:cursor-pointer' />
                            }
                        </button> */}
                    </div>
                </div>
                {/* <SideMenu data={list} active={isActive} setIsActive={setIsActive} handleToggle={handleToggle} /> */}
                <motion.div className={`${isActive ? 'block' : 'hidden'} h-[100vh] bg-secondary fixed z-[9999]`} initial={{ y : -100}}
                    animate={{ y : 0}}
                    exit={{ y : -100}}
                >
                    <ul className='text-center m-0 p-0'>
                        {
                            list.map(l=> (
                                <Link href={l.href} key={l.name} className={`text-primary  ${path === l.href ? styles.active : styles.nav}`}>
                                    <li className='inline-block text-3xl font-semibold w-[100%] p-4 hover:bg-primary hover:text-secondary' >
                                        {l.name}
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                </motion.div>
            </div>
            <div className='h-[90px]' />
        </div>
    )
}

export default Header