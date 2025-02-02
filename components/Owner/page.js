'use client'
import Image from 'next/image';
import robert from '../../public/assets/RobFoster.jpg';
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

const Owner = () => {

  return (

    <div className="bg-darkNavy flex flex-col justify-center items-center pb-28">
      <h1 className="text-gray-200 text-5xl font-extrabold">Our Team</h1>

      <div className="pt-8">
        <span className="text-xl text-gray-200">
          A team highly committed to Privacy Enabling Technologies, Cyber Security, and Cryptocurrency.
        </span>
      </div>

      <div className="relative w-[50%] pt-10 pb-10 pl-6 mt-10 rounded-lg bg-gradient-to-r from-purple-800 to-indigo-90 text-gray-200 
      before:absolute before:bottom-0 before:left-0 before:w-full before:h-[10px] before:rounded-b-lg before:bg-gradient-to-r before:from-purple-500 before:to-indigo-500 before:blur-md">
        <div className='flex justify-between'>
          <div className='pt-10'>
          <h1 className="text-5xl font-bold">Robert Foster</h1>
          <h2 className="text-lg">CEO & Founder</h2>

          {/* LinkedIn Icon with Link */}
            <Link href="https://www.linkedin.com/in/robert-foster-ceo/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-500 hover:text-blue-700">
              <FaLinkedin size={30} />
            </Link>
          </div>
          
          <div className="w-1/3">
          <Image 
            src={robert}
            alt="Robert Foster" 
            className="w-full h-auto rounded-full shadow-lg" 
          />
          </div>
        </div>

        <div>
            <p className='pt-10 text-gray-200'>Robert, Founder and CEO of Paragon, is a seasoned entrepreneur with a diverse background. Initially trained as a solicitor at a top UK law firm, he transitioned into entrepreneurship, founding and leading several successful ventures. Now fully committed to the cryptocurrency space, Robert focuses on driving growth for Paragon. Described as relentlessly dedicated, he immerses himself in podcasts and audiobooks on growth hacking strategies. Outside of work, Robert enjoys exploring stoic philosophy, rugby union, and discovering excellent countryside pub food.</p>
          </div>
      </div>

    </div>
  );
};

export default Owner;


