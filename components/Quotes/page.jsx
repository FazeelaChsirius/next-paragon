'use client'
import React from 'react';
import { motion } from "framer-motion";
import star from '../../public/assets/Star.svg';
import Image from 'next/image';

const quotes = [
    '"Here is to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They are not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can not do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do."',
    '"The only way to do great work is to love what you do."',
    '"Believe you can and you are halfway there."',
    '"Do what you can, with what you have, where you are."'
  ];

  const author = [
    'Steve Jobs',
    'Vitalik',
    'Article 8 Human Rights Act 1998',
    'Bezos,Jeff'
  ]
  

const Quotes = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-darkNavy p-10 gap-10">

            <div className="w-full md:w-1/2 flex justify-center">
                <Image
                src={star} // Replace with your image path
                alt="Inspirational"
                width={400}
                height={400}
                className="object-contain rounded-lg shadow-lg"
                />
            </div>

            <div className="w-full md:w-2/3 flex flex-col gap-6 pr-10">
                {quotes.map((quote, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.3 }}
                        className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white p-6 rounded-lg shadow-lg"
                    >
                        <p className="text-lg font-medium">{quote}</p>
                        <p className="text-right text-bold font-semibold mt-1">— {author[index]}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Quotes;