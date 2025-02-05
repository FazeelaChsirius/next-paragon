import React from 'react';
import Header from '../../components/Header/page.jsx';
import Mission from '@/components/Mission/page.jsx';
import Video from '@/components/Video/page.jsx';

const WhitePaper = () => {
  return (
    <div className='pt-32 pb-24 bg-darkNavy min-h-screen'>
      <Mission />
      <Video />
    </div>
  )
}

export default WhitePaper;