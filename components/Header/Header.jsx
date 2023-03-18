'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '../../styles/Header.module.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

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
        href : '/gallery',
        name : 'Gallery'
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

function Header() {
    const path = usePathname()
    const [isActive, setIsActive] = useState(false)
    const {theme, setTheme} = useTheme('dark')
    const handleToggle = () => {
        setIsActive(!isActive)
    }

    useEffect(()=>{
        setTheme('dark')
    },[])

    return (
        <div>
            <div className='container bg-primary text-white py-4 fixed z-[999] w-[100%]'>
                <div className='px-[20px] flex items-center justify-between'>
                    <Image
                        src="/Images/logonew.png"
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
                            <FaTimes className='sm:block xs:block lg:hidden xl:hidden md:hidden text-2xl cursor-pointer ' onClick={handleToggle}/>
                            :
                            <FaBars className='sm:block xs:block lg:hidden xl:hidden md:hidden text-2xl cursor-pointer' onClick={handleToggle} />
                        }
                    </div>
                </div>
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