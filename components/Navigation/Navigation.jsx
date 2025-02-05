import Link from 'next/link';
import React from 'react'

const Navigation = ({ active }) => {
  return (
    <div className='fixed top-1/2 right-8 transform -translate-y-1/2 flex flex-col items-center gap-3 z-50'>
        {['whitepaper', 'team', 'roadmap', 'socials', 'blog', 'contact'].map((item, index) => (
            <Link 
            key={item + index}
            href={`#${item}`}
            className='w-2 h-2 rounded-full bg-gray-200 transition-colors ease-in-out hover:bg-blue-600 md:w-2 md:h-2'
            style={active === item ? { backgroundColor: 'red' } : {}}
            />
        ))}
    </div>
    //     <div className='w-2.5 h-2.5 rounded-full bg-lightPurple m-2 transition-colors ease-in-out hover:bg-green md:w-5 md:h-5'>
    //     <div className='w-2.5 h-2.5 rounded-full bg-lightPurple m-2 transition-colors ease-in-out hover:bg-green md:w-5 md:h-5'>
    //     <div className='w-2.5 h-2.5 rounded-full bg-lightPurple m-2 transition-colors ease-in-out hover:bg-green md:w-5 md:h-5'>
    //     </div>
    //     </div>
    //     {['whitepaper', 'team', 'roadmap', 'socials', 'blog', 'contact'].map((item, index) => (
            
    //         <Link 
    //             key={item + index}
    //             href={`#${item}`}
    //             className='w-2.5 h-2.5 rounded-full bg-lightPurple m-2 transition-colors ease-in-out hover:bg-green md:w-5 md:h-5'
    //             onClick={() => setToggle(false)}
    //             style={active === item ? {backgroundColor: 'red'} : {}}
                
    //         >
    //         </Link>
    //     ))}
    //     </div>
    // </div> 
  )
}

export default Navigation;