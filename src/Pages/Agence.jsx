import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const imageArray = [
  'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
];

const teamMembers = [
  {
    src: 'https://k72.ca/images/teamMembers/blank.jpg?w=640&h=960&s=252a0cd13e881c6a268fe3c75f8abbca',
    alt: 'Team Member Blank'
  },
  {
    src: 'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
    alt: 'Team Member Carl'
  },
  {
    src: 'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
    alt: 'Team Member Olivier'
  },
  {
    src: 'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
    alt: 'Team Member Michele'
  }
];


const TeamMemberSection = () => {
  return (
    <div className="py-20 lg:py-40 bg-zinc-50 border-t border-zinc-200">
      <div className="px-10 lg:px-[15%]">
        <h2 className="text-4xl lg:text-5xl font-[font2] uppercase tracking-tighter mb-16">The Talent_</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full aspect-[3/4] overflow-hidden rounded-3xl shadow-lg bg-zinc-200 relative group"
            >
              <img
                className="object-cover w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                src={member.src}
                alt={member.alt}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FooterSection = () => {
  return (
    <div className="bg-black text-white w-full flex flex-col justify-between py-12 px-6 lg:px-12 min-h-[40vh] md:min-h-[50vh]">
      {/* Top Row: Social + Contact */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-8">
        <div className="flex flex-wrap gap-4">
          {["FB", "IG", "IN", "BE"].map((social, idx) => (
            <button key={idx} className="border border-white rounded-[3rem] px-8 py-3 text-xl md:text-3xl font-medium hover:bg-white hover:text-black transition-colors duration-300">
              {social}
            </button>
          ))}
        </div>
        <button className="border border-white rounded-[3rem] px-10 py-3 text-xl md:text-3xl font-[font2] tracking-wide uppercase hover:bg-white hover:text-black transition-colors duration-300">
          Contact
        </button>
      </div>

      {/* Bottom Row: Links */}
      <div className="flex flex-wrap justify-between items-center w-full text-xs md:text-sm mt-32 lg:mt-52 uppercase tracking-widest font-bold opacity-90 gap-4">
        <span className="hover:opacity-70 cursor-pointer transition-opacity">Montreal</span>
        <span className="hover:opacity-70 cursor-pointer transition-opacity">Privacy Policy</span>
        <span className="hover:opacity-70 cursor-pointer transition-opacity">Privacy Notice</span>
        <span className="hover:opacity-70 cursor-pointer transition-opacity">Ethical Report</span>
        <span className="hover:opacity-70 cursor-pointer transition-opacity">Ethical Report</span>
      </div>
    </div>
  );
};

const Agence = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
   
    imageArray.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 15%',
        end: 'top -40%', 
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 0.15, 
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          if (imageRef.current) {
            imageRef.current.src = imageArray[imageIndex];
          }
        }
      }
    });
  });

  return (
    <div className="parent">
      <div id="page1" className="py-1 lg:mt-[25vh] mt-[15vh]">
        <div
          ref={imageDivRef}
          className="absolute shadow-2xl overflow-hidden lg:h-[40vw] h-[55vw] lg:rounded-[2rem] rounded-2xl lg:w-[26vw] w-[45vw] lg:top-10 -top-50 lg:mt-[20vh] mt-[15vh] lg:left-[12vw] left-[10vw] z-10"
        >
          <img
            ref={imageRef}
            className="h-full object-cover w-full"
            src={imageArray[0]}
            alt="Scrolling Team Members"
          />
        </div>
        <div className="relative font-[font2]">
          <div className="lg:mt-[25vh] mt-[15vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
              SEVEN7Y
              <br />
              TWO
            </h1>
          </div>
          <div className="lg:pl-[45%] pl-8 lg:mt-20 mt-4 p-3">
            <p className="lg:text-6xl text-xl leading-tight ml-4 sm:ml-12 lg:ml-20">
              We’re success, but not influence that goes the distance. We bring
              that perspective to every brand story we help tell.
            </p>
          </div>
          <div className="px-10 lg:px-[15%] py-20 lg:py-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 text-lg lg:text-[1.35rem] leading-snug">
            <div>
              <p>
                <strong>Our Work_</strong> Born in curiosity, raised by dedication
                and fed with a steady diet of creativity.
              </p>
            </div>
            <div>
              <p>
                <strong>Our Creative_</strong> Simmering in an environment where
                talent can come to a full boil. Encouraged to become the best
                versions of ourselves.
              </p>
            </div>
            <div>
              <p>
                <strong>Our Culture_</strong> We’re open to each other. Period. The
                team works together to create a space that makes us proud.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <TeamMemberSection />

      <FooterSection />
    </div>
  );
};

export default Agence;