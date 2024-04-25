"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import logo from '/public/images/logo.svg';
import menu from '/public/images/icon-hamburger.svg';
import { easeInOut, motion, spring } from 'framer-motion';

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);

    const handleMenu = () => {
        setOpenMenu(!openMenu)
    }


    return (
        <nav className='flex justify-between items-center relative w-full max-w-[1440px]'>
            <div>
                <Image src={logo} width={150} alt='logo-img' quality={100} />
            </div>

            <button onClick={handleMenu} className='lg:hidden'>
                <Image src={menu} width={40} alt='menu' quality={100}  />
            </button>
           
            {/* mobile menu */}
            {openMenu && (
                <motion.div id='drop-nav' className='absolute flex  flex-col items-center lg:hidden right-0 top-20 w-[100%] bg-White' 
                initial={{ opacity: 0, }}
                animate={openMenu ? { opacity: 1,} : { opacity: 0 }}
                transition={{ duration: 1, ease: easeInOut }}
                >
                    <motion.ul className='flex flex-col items-center gap-y-8 my-8'
                    initial={{ x: -300 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.6, ease: easeInOut}}
                    >
                        <li className='text-DarkDesaturatedCyan text-lg font-medium cursor-pointer transition-all duration-300 ease-in-out hover:bg-myYellow hover:font-bold hover:py-3 hover:px-6 hover:rounded-full'>About</li>
                        <li className='text-DarkDesaturatedCyan text-lg font-medium cursor-pointer transition-all duration-300 ease-in-out hover:bg-myYellow hover:font-bold hover:py-3 hover:px-6 hover:rounded-full'>Services</li>
                        <li className='text-DarkDesaturatedCyan text-lg font-medium cursor-pointer transition-all duration-300 ease-in-out hover:bg-myYellow hover:font-bold hover:py-3 hover:px-6 hover:rounded-full'>Projects</li>
                        <li className='text-DarkDesaturatedCyan text-lg font-medium cursor-pointer transition-all duration-300 ease-in-out hover:bg-myYellow hover:font-bold hover:py-3 hover:px-6 hover:rounded-full'>Contact</li>
                    </motion.ul>
                </motion.div>
                
            )}
            

            {/* desktop menu */}
            <ul className='hidden lg:flex justify-between items-center gap-x-6 '>
                <li className='text-white text-xl hover:text-DarkDesaturatedCyan hover:border-b-myYellow hover:border-b-4 hover:font-medium cursor-pointer transition-all duration-200 ease-in-out'>About</li>
                <li className='text-white text-xl hover:text-DarkDesaturatedCyan hover:border-b-myYellow hover:border-b-4 hover:font-medium cursor-pointer transition-all duration-200 ease-in-out'>Services</li>
                <li className='text-white text-xl hover:text-DarkDesaturatedCyan hover:border-b-myYellow hover:border-b-4 hover:font-medium cursor-pointer transition-all duration-200 ease-in-out'>Projects</li>
                <li className='text-black text-xl rounded-full hover:bg-[rgba(255,255,255,0.4)] hover:text-white bg-white py-2 px-6  hover:font-medium cursor-pointer transition-all duration-200 ease-in-out'>Contact</li>
            </ul>
        </nav>
    );
}
