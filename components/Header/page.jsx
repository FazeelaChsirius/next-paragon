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
import Link from 'next/link';

const images = [
    cyberscope, iconscope, malta, parisweek, redflag, mode, manchester,
    cyberscope, iconscope, malta 
];

const Header = () => {

    return (

        <div className='flex justify-center items-center bg-darkNavy overflow-hidden'>
            <div className="w-full max-w-7xl">
                <motion.div
                    whileInView={{ x:[-100,0], opacity:[0,1] }}
                    transition={{ duration:0.5 }}
                    className='w-full flex flex-col justify-start items-start h-full flex-[0.65] 2xl:w-full 2xl:mr-0'
                >
                
                    <div className='flex w-full items-start md:items-center md:text-left justify-between pt-20'>
                            <h1 className="font-extrabold text-gray-200 pl-10 ">
                                <span className="text-center sm:text-left text-4xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-indigo-800 filter brightness-150">Privacy</span> 
                                <span className="sm:text-6xl text-4xl font-bold tracking-wide"> for </span> 
                                <span className="sm:text-7xl text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-indigo-800 filter brightness-150">Security,</span>
                                <span className="sm:text-6xl text-4xl font-bold"> not </span>  
                                <span className="sm:text-7xl text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-indigo-800 filter brightness-150 md:pl-48">Obscurity</span>
                                {/* <br /> */}
                                <div className='pt-4 m:pt-8'>
                                    <span className="text-lg sm:text-3xl font-medium text-gray-200">Securing Tomorrow:</span>
                                    <br />
                                    <span className="text-lg sm:text-3xl font-medium text-gray-200">Advancing Privacy Payments on the Blockchain</span>
                                </div>
                            </h1>

                        <div className="w-full md:w-1/2 flex justify-center order-last md:order-none mt-6 md:mt-0">
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }} 
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Image
                                src={header}
                                alt="header"
                                width={400}
                                height={400}
                                className="object-contain w-full md:w-auto"
                                />
                            </motion.div>
                        </div>           
                    </div>

                    <div className="hidden md:block  text-center md:text-left mt-6 md:pl-8">
                        <Link href='https://app.uniswap.org/swap/?chain=ethereum&outputcurrency=0x1bbb8b730a9e8c9b5688b8fae862ab9b57b140f2'>
                            <Button>BUY PARAGON</Button>
                        </Link>
                    </div>

                </motion.div>


                <div className='flex sm:flex-row justify-center items-center pt-8'>
                    <h2 className='text-white text-medium sm:text-2xl pr-4'>Audited by</h2>
                        <Image 
                            src={cyberscope}
                            alt='cyberscope'
                            width={150}
                            height={150}
                            className='w-28 sm:w-48'
                        />
                </div>

                <div className="overflow-hidden whitespace-nowrap w-full">
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
