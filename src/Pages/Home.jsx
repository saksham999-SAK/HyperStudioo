import React from 'react'
import { Video } from '../assets/components/Home/Video'
import HomeHeroText from '../assets/components/Home/HomeHeroText'
import HomeBottomText from '../assets/components/Home/HomeBottomText'

const Home = () => {
  return (
    <div>
   <div className='h-screen w-screen fixed'> <Video/></div> 
   <div className='h-screen w-screen relative flex justify-between flex-col'>
    <HomeHeroText/>
    <HomeBottomText/>
   </div>

    </div>

  )
}

export default Home
