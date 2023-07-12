import React from 'react' ;
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className=' flex justify-center  mt-[-96px] mx-auto items-center flex-col h-screen w-[100%]'>
        <p className='text-[#00df9a] text-center'> "Dev Den" </p>
        <h1 className=' md:text-4xl sm:text-3xl text-2xl font-bold md:py-6 '>Welcome to Developer's Den </h1>
       <Typed className='font-bold 400'
        strings={[' CODE , COMMIT & PUSH .....']} typeSpeed={80} backSpeed={90} loop />

         <span className='flex flex-row gap-10 py-5' >
        <button className='bg-[#00df9a] w-[80px] rounded-md my-6 mx-auto py-2 px-3'>Login </button>
        <button className='bg-[#00df9a] w-[80px] rounded-md my-6 mx-auto py-2 px-3'>Sign up </button>
   
        </span>
      </div>

      
    </div>
  )
}

export default Hero ;