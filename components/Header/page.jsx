'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Button/page';
import Image from 'next/image';

import header from '../../public/assets/header.png';
import cyberscope from '../../public/assets/cyberscope.png';
import iconscope from '../../public/assets/iconscope.png';
import manchester from '../../public/assets/manchester.png'
import malta from '../../public/assets/malta.png';
import parisweek from '../../public/assets/parisweek.png';
import mode from '../../public/assets/mode.png'
import redflag from '../../public/assets/redflag.png'

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
};

const images = [
    cyberscope, iconscope, malta, parisweek, redflag, mode, manchester,
    cyberscope, iconscope, malta 
];

const Header = () => {
  return (
    <div className='flex justify-center items-center bg-darkNavy'>

        <div>
            <motion.div
                whileInView={{ x:[-100,0], opacity:[0,1] }}
                transition={{ duration:0.5 }}
                className='flex flex-col justify-start items-start h-full flex-[0.65] 2xl:w-full 2xl:mr-0'
            >
               
                <div className='flex items-center justify-between'>
                    {/* Left Side - Text */}
                        <h1 className="font-extrabold text-gray-200 pl-10">
                            <span className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-indigo-800 filter brightness-150">Privacy</span> 
                            <span className="text-6xl font-bold tracking-wide"> for </span> 
                            <span className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-indigo-800 filter brightness-150">Security,</span>
                            <span className="text-6xl font-bold"> not </span>  
                            <span className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-indigo-800 filter brightness-150 pl-48">Obscurity</span>
                            <br />
                            <div className='pt-8'>
                                <span className="text-4xl font-medium text-gray-200">Securing Tomorrow:</span>
                                <br />
                                <span className="text-4xl font-medium text-gray-200">Advancing Privacy Payments on the Blockchain</span>
                            </div>
                        </h1>

                    {/* Right Side - Image */}
                    <div className="md:w-1/2 flex justify-center">
                        <Image
                            src={header}
                            alt="header"
                            width={400}
                            height={400}
                            className="object-contain"
                        />
                    </div>
                </div>


                <div className="hidden md:block pl-10">
                    <Button className="capitalize p-8">BUY PARAGON</Button>
                </div>

            </motion.div>

            <div className='flex justify-center items-center pt-4'>
                <h2 className='text-white text-2xl pr-6'>Audited by</h2>
                    <Image 
                        src={cyberscope}
                        alt='cyberscope'
                        width={200}
                        height={200}
                    />
            </div>

            <div className="overflow-hidden whitespace-nowrap w-full pt-10">
                <motion.div
                    className="flex space-x-4"
                    animate={{ x: ["0%", "-50%"] }} // Moves images left
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                >
                    {images.map((img, index) => (
                        <Image key={index} 
                            src={img} 
                            alt="scrolling image" 
                            width={200} 
                            height={200} 
                            className="object-contain p-6"
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Header;
