import React from 'react'
import Button from '../Button/page';
import Link from 'next/link';
import SocialMedia from '../SocialMedia/SocialMedia';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=' flex justify-center items-center bg-darkNavy'>
      <div className=' text-gray-200 flex flex-col justify-center items-center px-4 py-4 rounded-2xl text-center'>
        <h1 className='font-semibold text-4xl sm:text-5xl leading-tight'>Invest in a future of privacy</h1>
        <p className='font-medium text-lg sm:text-xl pt-3 max-w-2xl'>Digital currencies are coming, protect your privacy</p>
        <div className='pt-10'>
          <Link href='https://app.uniswap.org/swap/?chain=ethereum&outputcurrency=0x1bbb8b730a9e8c9b5688b8fae862ab9b57b140f2'>
            <Button>BUY PARAGON</Button>
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Footer;