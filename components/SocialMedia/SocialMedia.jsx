import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const SocialMedia = () => {
  return (
    <div className='top-4 flex justify-center items-center gap-4 z-50 bg-darkNavy pt-8 pb-16'>

      <div className='w-10 h-10 rounded-full bg-gray-200 border flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer group shadow-lg hover:bg-gradient-to-r from-purple-800 to-indigo-800'>
        <BsTwitter className="text-blue-800 group-hover:text-white" />
      </div>

      <div className='w-10 h-10 rounded-full bg-gray-200 border flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer group shadow-lg hover:bg-gradient-to-r from-purple-800 to-indigo-800'>
        <Link href='https://www.linkedin.com/company/paragon-crypto/posts/?feedView=all'>
          <FaLinkedinIn className="text-blue-800 group-hover:text-white" />
        </Link>
      </div>

      <div className='w-10 h-10 rounded-full bg-gray-200 border flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer group shadow-lg hover:bg-gradient-to-r from-purple-800 to-indigo-800'>
        <Link href='https://www.facebook.com/people/Paragoncrypto/61557515953408/?_rdr'>
          <FaFacebookF className="text-blue-800 group-hover:text-white" />
        </Link>
      </div>

      <div className='w-10 h-10 rounded-full bg-gray-200 border flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer group shadow-lg hover:bg-gradient-to-r from-purple-800 to-indigo-800'>
        <Link href='https://www.instagram.com/officialparagoncrypto_xrg/'>
          <BsInstagram className="text-blue-800 group-hover:text-white" />
        </Link>
      </div>

    </div>
  
  )
}

export default SocialMedia;


