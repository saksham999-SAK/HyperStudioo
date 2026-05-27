import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomeBottomText = () => {

  return (
    <div className='font-[font2] flex flex-wrap items-center text-amber-50 justify-center gap-3 sm:gap-4 pb-14 px-4'>
      <div className='border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] h-16 sm:h-24 lg:h-36 flex items-center px-6 sm:px-10 lg:px-16 border-white rounded-full uppercase transition-all duration-300'>
        <Link className='text-[8vw] sm:text-[7vw] lg:text-[4.5vw]' to='/projects'>Projects</Link>
      </div>
      <div className='border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] h-16 sm:h-24 lg:h-36 flex items-center px-6 sm:px-10 lg:px-16 border-white rounded-full uppercase transition-all duration-300'>
        <Link className='text-[8vw] sm:text-[7vw] lg:text-[4.5vw]' to='/agence'>agence</Link>
      </div>
      <div className='border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] h-16 sm:h-24 lg:h-36 flex items-center px-6 sm:px-10 lg:px-16 border-white rounded-full uppercase transition-all duration-300'>
        <Link className='text-[8vw] sm:text-[7vw] lg:text-[4.5vw]' to='/clients'>Team</Link>
      </div>
    </div>
  )
}

export default HomeBottomText