'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import logo from '../../public/assets/logo.png';
import bgImg from '../../public/assets/bgIMG.png'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Button from '../Button/page';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='fixed top-0 z-50 w-full flex items-center justify-between p-2 md:p-4 bg-gradient-to-b from-[#000022] to-[#000044] shadow-[2px_6px_15px_rgba(308,3,208,0.5)]'>
      <div className='flex items-center justify-center'>
        <Link href='/'>
          <Image 
            src={logo}
            alt='loog'
            width={200}
            height={100}
            className='w-[90px] h-[30px] md:w-[180px] md:h-[50px] 2xl:w-[180px] 2xl:h-[40px] object-contain cursor-pointer'
          />
        </Link>
      </div>

      <ul className='hidden md:flex flex-1 items-center justify-center list-none'>
        {['whitepaper', 'team', 'roadmap', 'socials', 'blog', 'contact'].map((item, index) => (
          <li   
            key={index}
            className='mx-4 cursor-pointer flex flex-col group items-center justify-center'
          >
            <div className='w-[5px] h-[5px] bg-transparent rounded-full mb-1 group-hover:bg-lightPurple'></div>
            <Link 
              href={`#${item}`}
              className='text-gray-200 no-underline uppercase font-medium transition-all duration-300 ease-in-out hover:text-lightPurple'
            > 
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden md:block pr-6">
        <Link href='https://app.uniswap.org/swap/?chain=ethereum&outputcurrency=0x1bbb8b730a9e8c9b5688b8fae862ab9b57b140f2'>
          <Button className="capitalize p-8">BUY PARAGON</Button>
        </Link>
      </div>
      
    <div className='block md:hidden'>
      {/* Sidebar Toggle Button */}
      <div className="w-[35px] h-[35px] relative rounded-full flex items-center justify-center bg-gray-200 hover:bg-lightPurple hover:text-gray-200 cursor-pointer">
        <HiMenuAlt4 
          className="font-bold text-2xl text-[#000022] hover:text-gray-200 cursor-pointer" 
          onClick={() => setToggle(true)}
        />
      </div>

      {/* Overlay & Sidebar */}
      {toggle && (
        <>
          {/* Overlay Background */}
          <div 
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
            onClick={() => setToggle(false)}
          />

          {/* Sidebar Container */}
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 right-0 h-full w-[50%] sm:w-[40%] bg-white shadow-lg p-5 flex flex-col z-50"
            style={{ backgroundImage: "url('/assets/circle.svg')" }}
          >
            {/* Close Button */}
            <HiX 
              className="text-2xl cursor-pointer self-end"
              onClick={() => setToggle(false)}
            />

            {/* Sidebar Links */}
            <ul className="mt-10 space-y-4 text-lg font-medium">
              {['whitepaper', 'team', 'roadmap', 'socials', 'blog', 'contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item}`}
                    className="block text-darkNavy transition text-xl hover:text-lightPurple focus:text-lightPurple active:text-lightPurple"
                    onClick={() => setToggle(false)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)} {/* Capitalize */}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </>
      )}
    </div>

    </nav>
  )
}

export default Navbar;