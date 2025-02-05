import React from 'react';
import YouTube from 'react-youtube';

const Video = () => {
  return (
    <div className='bg-darkNavy py-4 md:py-6 flex justify-center items-center'>
      <iframe
        width="80%"
        height="550px"
        src="https://www.youtube.com/embed/exjX87QrrEU"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className='rounded-2xl'
      ></iframe>
    </div>
  )
}

export default Video;