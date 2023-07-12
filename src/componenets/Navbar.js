import React from 'react'

const Navbar = () => {
  return (
  
    <div className=' flex justify-between item-center h-24 max-w-[1024px] mx-auto px-3 text-white' >
        <h1 className='w-full mt-3 text-3xl font-bold text-[#00df9a]'>React</h1>

        <ul className='flex mt-2 '>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li> 
            
        </ul>
         <AiOutlineClose/>
        <div className='fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[00300] '>
        <ul className=' pt-7 '>
            <li className='p-4 border-gray-400'>Home</li>
            <li className='p-4  border-gray-400 '>Company</li>
            <li className='p-4  border-gray-400 '>Resources</li>
            <li className='p-4  border-gray-400 '>About</li>
            <li className='p-4  border-gray-400 '>Contact</li> 

            </ul>
        </div>
    </div>
  )
}

export default Navbar