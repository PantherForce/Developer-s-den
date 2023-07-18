import React from 'react'
import images from '../assets/images.jpg'

const Pages = () => {
  return (
    <div className='bg-white w-full py-16'>

      <img className='ml-10 '
        src={images}
        alt='code'
        height={400}
        width={200}
      />
      <div>
      <h2 className='flex justify-center align-items'> For Developer </h2>
      <p> </p>
      </div> 

    </div>
  )
}

export default Pages