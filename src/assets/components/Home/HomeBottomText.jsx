import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomeBottomText = () => {

  return (
    <div className='font-[font2] flex items-center text-amber-50 justify-center gap-4 pb-14'>
      <div className='lg:border-2 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-36 h-24 flex items-center px-10 lg:px-16 border-white rounded-full uppercase transition-all duration-300'>
        <Link className='text-[7vw] lg:text-[4.5vw]' to='/projects'>Projects</Link>
      </div>
      <div className='lg:border-2 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-36 h-24 flex items-center px-10 lg:px-16 border-white rounded-full uppercase transition-all duration-300'>
        <Link className='text-[7vw] lg:text-[4.5vw]' to='/agence'>agence</Link>
      </div>
      <div className='lg:border-2 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-36 h-24 flex items-center px-10 lg:px-16 border-white rounded-full uppercase transition-all duration-300'>
        <Link className='text-[7vw] lg:text-[4.5vw]' to='/clients'>Team</Link>
      </div>
    </div>
  )
}

export default HomeBottomText