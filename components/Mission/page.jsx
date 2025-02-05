import React from 'react'
import Button from '../Button/page';
import { motion } from "framer-motion";
import bit from '../../public/assets/bit.jpg';
import Image from 'next/image';
import Link from 'next/link';
import AppWrap from '@/app/wrapper/AppWrap';
import MotionWrap from '@/app/wrapper/MotionWrap';

const Mission = () => {
  return (
    <div className='bg-darkNavy flex justify-center items-center pb-14 pt-14'>
        <div className='w-[80%] bg-gradient-to-r from-purple-800 to-indigo-80 pt-20 pb-20 rounded-xl flex'>
            <div>
                <h1 className='text-gray-200 text-5xl flex justify-center items-center font-extrabold'>Our Mission</h1>
                <div>
                    <h1 className=" text-gray-200 pl-10">         
                        <div className='pt-8'>
                            <span className="text-xl text-gray-200">Ensure Ultimate Financial Privacy on the Blockchain:</span>
                            <br />
                            <span className="text-xl text-gray-200">Discover How Privacy, Security and Crypto Intersect</span>
                        </div>
                    </h1>
                </div>
                <div className='flex justify-start items-center pl-10 pt-14 gap-6'>
                    <Link href='https://heyzine.com/flip-book/536bafafb9.html'>
                        <Button color='secondary'>WHITEPAPER</Button>
                    </Link>
                    <Link href='https://heyzine.com/flip-book/6bbc443044.html'>
                        <Button color='secondary'>LITEPAPER</Button>
                    </Link>
                </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
                <Image
                    src={bit} 
                    alt="header"
                    width={400}
                    height={400}
                    className="object-contain"
                />
            </div>
        </div>
    </div>
  )
}

export default Mission;
