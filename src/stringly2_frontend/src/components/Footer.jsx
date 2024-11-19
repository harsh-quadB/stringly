import React from 'react'
import { FaThreads } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full lg:flex items-start justify-between bg-black text-white py-6'>
      <div>
        <div className='w-full mx-auto flex lg:flex-col lg:gap-4 items-center justify-between lg:items-start px-10'>
          <img src="./landing/stringly-logo.png" alt="" className='w-25 h-7' />

          <div className='flex gap-4 text-xl'>
            <FaXTwitter />
            <FaThreads />
            <FaInstagram />
            <FaMedium />
          </div>
        </div>
      </div>
      <div className='pb-8'>
        {/* Hidden on larger screens and visible on mobile and tablet */}
        <ul className='lg:hidden leading-8 w-[100%] px-10'>
          <li className='text-lg font-semibold pb-4'>About Us</li>
          <li>Contact Us</li>
          <input type="text" placeholder='Your Email' className='rounded-2xl text-black bg-white px-2 my-4 p-1 w-full' />
        </ul>

        <div className='flex items-start justify-between flex-wrap gap-8 lg:gap-12 px-16 py-4'>
          {/* Pages Links */}
          <ul className='leading-8 font-extralight'>
            <li className='text-sm !font-semibold pb-4'>Pages</li>
            <li >Whitepaper</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Demo</li>
          </ul>

          {/* Company Links */}
          <ul className='leading-8 font-extralight'>
            <p className='text-sm !font-semibold pb-4'>Company</p>
            <li>Pricing</li>
            <li>Security</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Careers</li>
          </ul>

          {/* About Us Section (Visible on lg and larger screens) */}
          <ul className='leading-8 w-[100%] hidden lg:block lg:w-auto'>
            <li className='text-sm font-semibold pb-4'>About Us</li>
            <li className='font-extralight'>Contact Us</li>
            <input type="text" placeholder='Your Email' className='rounded-2xl text-black bg-white px-2 my-4 p-1 w-[300px]' />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;
