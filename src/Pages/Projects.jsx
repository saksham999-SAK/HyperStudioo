import { useGSAP } from '@gsap/react'
import ProjectCard from '../assets/components/Projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


const Projects = () => {

  const projects = [{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  },
  {
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  }
]


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height:'5px',
      stagger: {
        amount: 0.6
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

  return (
    <div className='lg:p-4 p-2 '>
      <div className=' pt-[45vh]'>
        <h2 className='font-[font2] lg:text-[9.5vw] text-7xl uppercase'>Projets</h2>
      </div>
      <div className='-lg:mt-20 lol'>
        {projects.map(function (elem, idx) {
          return <div key={idx} className='hero w-full lg:h-[550px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}

      </div>
      <div className='bg-black h-[50vh] w-full text-white  text-6xl flex flex-col justify-between gap-8 '>
      <div className='flex justify-between space-x-[55vw] '  >
        <div className='flex space-x-3.5 m-2 '>
          <h1 className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-24 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase'>FB</h1>
      <h1 className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-24 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase '>IG</h1>
      <h1 className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-24 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase '>IN</h1>
      <h1 className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-24 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase '>BE</h1>
      </div>
      <div className='m-2'>
        <h1 className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-24 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase'>CONTACT</h1>
      </div>
    
      </div>
      <div className='flex text-2xl justify-around m-0 '>
        <h1 className='hover:text-[#D3FD50] lg:h-24 flex items-center px-3 pt-1 lg:px-6 text-amber-50 border-white rounded-full uppercase'>MONTREAL</h1>
        <h1 className='hover:text-[#D3FD50] lg:h-24 flex items-center px-3 pt-1 lg:px-6 text-amber-50 border-white rounded-full uppercase'>Privacy Policy</h1>
        <h1 className='hover:text-[#D3FD50] lg:h-24 flex items-center px-3 pt-1 lg:px-6 text-amber-50 border-white rounded-full uppercase'>Privacy Notice</h1>
        <h1 className='hover:text-[#D3FD50] lg:h-24 flex items-center px-3 pt-1 lg:px-6 text-amber-50 border-white rounded-full uppercase'>Ethical report</h1>
        <h1 className='hover:text-[#D3FD50] lg:h-24 flex items-center px-3 pt-1 lg:px-6 text-amber-50 border-white rounded-full uppercase'>Ethical report</h1>
      </div>
      </div>
    </div>
  )
}

export default Projects