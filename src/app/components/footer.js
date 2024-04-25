import React from 'react';
import Image from 'next/image';
import logo from '/public/images/logo2.svg';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram, FaTwitter, FaPinterest  } from "react-icons/fa";




const Footer = () => {
    return (
        <footer className='w-full bg-DarkModerateCyanFooter flex flex-col items-center py-5'>
            <Image src={logo} alt='logo' className='mb-4' width={150} />
            <ul className='flex gap-x-6 mt-2 text-DarkDesaturatedCyan text-xl font-bold cursor-pointer'>
                <li className='transition-all duration-200 ease-in-out hover:text-VeryDarkDesaturatedBlue hover:border-b-softRed hover:border-b-4'>About</li>
                <li className='transition-all duration-200 ease-in-out hover:border-b-softRed hover:border-b-4 hover:text-VeryDarkDesaturatedBlue'>Services</li>
                <li className='transition-all duration-200 ease-in-out hover:border-b-softRed hover:border-b-4 hover:text-VeryDarkDesaturatedBlue'>Project</li>
            </ul>
            <ul className='flex gap-x-6 mt-10 mb-6 text-DarkDesaturatedCyan text-xl font-bold cursor-pointer'>
                <li className='transition-all duration-300 ease-in-out hover:scale-150'><FaSquareFacebook className='text-VeryDarkDesaturatedBlue' /></li>
                <li className='transition-all duration-300 ease-in-out hover:scale-150'><FaInstagram className='text-VeryDarkDesaturatedBlue'  /></li>
                <li className='transition-all duration-300 ease-in-out hover:scale-150'><FaTwitter className='text-VeryDarkDesaturatedBlue'  /></li>
                <li className='transition-all duration-300 ease-in-out hover:scale-150'><FaPinterest className='text-VeryDarkDesaturatedBlue'  /></li>
            </ul>
        </footer>
    );
};

export default Footer;