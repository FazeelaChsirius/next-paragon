import React from 'react'
import Button from '../Button/page';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='flex justify-center items-center bg-darkNavy pb-10'>
      <div className='bg-gradient-to-r from-indigo-700 to-purple-900 text-gray-200 w-10/12 flex flex-col justify-center items-center pt-24 pb-24 rounded-2xl'>
        <h1 className='font-semibold text-5xl'>Invest in a future of privacy</h1>
        <p className='font-semibold text-xl pt-4'>Digital currencies are coming, protect your privacy</p>
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