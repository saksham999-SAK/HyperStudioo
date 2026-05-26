import React, { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Agence from './Pages/Agence'
import Projects from './Pages/Projects'
import Clients from './Pages/Clients'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'




const App = () => {



  
  return (
    <div className='overflow-x-hidden'>
      
 
        <Routes>

          <Route  path='/' element={<Home/>} />
           <Route  path='/agence' element={<Agence/>} />
           <Route  path='/Projects' element={<Projects/>} />
           <Route  path='/clients' element={<Clients/>} />
        </Routes>


    </div>
  )
}

export default App