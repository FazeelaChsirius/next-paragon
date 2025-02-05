'use client'
import React from 'react';
import bit from '../../public/assets/bit.jpg';
import block from '../../public/assets/block.jpg';
import star from '../../public/assets/Star.svg';
import Image from 'next/image';
import { motion } from "framer-motion";
import Button from '../Button/page';
import Link from 'next/link';


const blogs = [
    {
      id: 1,
      title: "Blockchain and Privacy: Why It is Super Important to Have Privacy When Sending and Receiving Funds",
      description: "In the rapidly evolving world of blockchain, one aspect that often takes center stage is privacy. While blockchain technology promises ...",
      image: block,
      link: "/blog/understanding-nextjs"
    },
    {
      id: 2,
      title: "Exploring the World of Cryptocurrency: A Beginner's Guide",
      description: "Cryptocurrency has rapidly emerged as a transformative force in the world of finance, offering new opportunities for investors and businesses alike.",
      image: bit,
      link: "/blog/getting-started-tailwind"
    },
    {
      id: 3,
      title: "Navigating the Crypto Market: Tips for New Investors",
      description: "From understanding the different types of wallets, such as hardware, software, and paper wallets, to learning best practices for securing private keys and managing backups",
      image: star,
      link: "/blog/optimizing-react"
    }
  ];

const Post = () => {
  return (
    <div className='bg-darkNavy pb-6 lg:pt-20 lg:pb-20 w-full pt-28 sm:pt-28'>
        <div className="container mx-auto px-4 py-6 bg-darkNavy">

            <h2 className="text-5xl font-bold text-center pb-20 text-gray-200">Latest Blog</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {blogs.map((blog, index) => (
                    
                <div key={index} className="shadow-lg rounded-lg overflow-hidden">
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween'}}
                        className='app__profile-item'
                        
                    >
                        <Image 
                            src={blog.image} 
                            alt={blog.title} 
                            width={400} 
                            height={250} 
                            className="w-full h-60 object-contain"
                        />

                        <div className="p-4 text-gray-200">
                            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                            <p className=" mb-4">{blog.description}</p>
                            <Link href='/file'>
                                <Button>READ ME</Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
                ))}
            </div>
         </div>
    </div>
  )
}

export default Post;