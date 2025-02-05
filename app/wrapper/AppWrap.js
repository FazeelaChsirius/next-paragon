import React from 'react';
import SocialMedia from '@/components/SocialMedia/SocialMedia';
import Navigation from '@/components/Navigation/Navigation';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`w-full min-h-screen flex flex-row ${classNames}`}>
        <SocialMedia />

        <div className='flex-1 w-full flex flex-col sm;px-4 sm:pb-8 justify-center items-center'>
            <Component />
        </div>

        <Navigation active={idName}/>
    </div>
  )
}

export default AppWrap;