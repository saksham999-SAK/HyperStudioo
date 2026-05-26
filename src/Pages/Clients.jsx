import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const containerRef = useRef(null);

  const teamMembers = [
    { name: 'Carl', img: 'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg', role: 'Creative Director' },
    { name: 'Hugo Joseph', img: 'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg', role: 'Lead Developer' },
    { name: 'Lawrence', img: 'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg', role: 'UX Architect' },
    { name: 'Chantal G', img: 'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg', role: 'Producer' },
    { name: 'Mylene S', img: 'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg', role: 'Art Director' },
    { name: 'Sophie A', img: 'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg', role: 'Motion Designer' },
    { name: 'Claire', img: 'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg', role: 'Strategist' },
    { name: 'Michele', img: 'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg', role: 'Copywriter' },
    { name: 'Mel', img: 'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg', role: 'Account Manager' },
    { name: 'Camille', img: 'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg', role: 'Designer' },
    { name: 'Maxime', img: 'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg', role: 'Developer' },
    { name: 'Meggie', img: 'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg', role: 'HR Lead' },
    { name: 'Joel', img: 'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg', role: 'Founder' },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

     
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.4,
        ease: 'power4.out'
      });

      gsap.to('.hero-title', {
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        scale: 1.15,
        y: -60,
        opacity: 0.2,
      });

      ScrollTrigger.create({
        trigger: '.pinned-section',
        start: 'top top',
        end: 'bottom bottom',
        pin: '.pinned-left',
        pinSpacing: false,
      });

      gsap.from('.pinned-card', {
        scrollTrigger: {
          trigger: '.pinned-right',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power4.out',
      });

      gsap.utils.toArray('.mosaic-item').forEach((item) => {
        gsap.fromTo(item,
          { opacity: 0.2, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              end: 'bottom 40%',
              scrub: 0.5,
              toggleActions: 'play reverse play reverse'
            }
          }
        );
      });

      gsap.to('.slide-left-row', {
        x: '-15%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.cross-slide-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        }
      });

      gsap.to('.slide-right-row', {
        x: '15%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.cross-slide-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        }
      });

   
      gsap.from('.circular-item', {
        scrollTrigger: {
          trigger: '.circular-wrap',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
        scale: 0.5,
        y: 100,
        rotation: -15,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: 'elastic.out(1, 0.75)',
      });

  
      gsap.from('.mask-text', {
        scrollTrigger: {
          trigger: '.mask-text',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
        y: 40,
        duration: 1.2,
        ease: 'power4.out',
      });

      gsap.from('.grid-card', {
        scrollTrigger: {
          trigger: '.grid-wrap',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        y: 80,
        opacity: 0,
        stagger: 0.05,
        duration: 1.2,
        ease: 'power3.out',
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className='bg-[#0f1a0f] text-white selection:bg-[#D3FD50] selection:text-black antialiased overflow-x-hidden'>


      <section className='hero-section min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10 border-b border-white/5'>
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#D3FD50] opacity-[0.03] blur-[120px] pointer-events-none" />
        <h1 className='hero-title text-[14vw] lg:text-[10vw] uppercase font-black leading-none tracking-tighter text-[#D3FD50] will-change-transform'>
          The_Team
        </h1>
        <p className='mt-6 text-lg lg:text-xl max-w-xl text-white/60 leading-relaxed balance'>
          An exceptional group of specialists crafting high-end digital interactive experiences. Scroll to explore the roster.
        </p>
      </section>


      <section className='pinned-section relative min-h-screen flex flex-col md:flex-row border-b border-white/5'>
        <div className='pinned-left w-full md:w-1/3 h-auto md:h-screen flex items-center p-10 lg:p-20 bg-[#0b120b] z-20 self-start'>
          <div>
            <span className='text-[#D3FD50] text-xs font-mono uppercase tracking-widest block mb-4'>[ Motion Engine 01 ]</span>
            <h2 className='text-4xl lg:text-5xl font-bold uppercase tracking-tight'>Leadership & Direction</h2>
            <p className='text-white/50 mt-4 text-sm max-w-sm'>
              The core architectural minds orchestrating design rules, visual design syntax, and strategic roadmaps.
            </p>
          </div>
        </div>
        <div className='pinned-right w-full md:w-2/3 p-10 lg:p-20 space-y-12 z-10'>
          {teamMembers.slice(0, 3).map((member, i) => (
            <div key={i} className='pinned-card flex flex-col sm:flex-row gap-8 bg-white/5 border border-white/10 p-6 rounded-2xl items-center group hover:border-[#D3FD50]/30 transition-colors duration-500 will-change-transform'>
              <div className='w-full sm:w-48 aspect-[3/4] rounded-xl overflow-hidden relative shrink-0'>
                <img src={member.img} alt={member.name} className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover:scale-100' />
              </div>
              <div>
                <span className='text-xs text-[#D3FD50] tracking-widest uppercase block mb-1 font-mono'>{member.role}</span>
                <h3 className='text-2xl font-semibold text-white group-hover:text-[#D3FD50] transition-colors duration-300'>{member.name}</h3>
                <p className='text-white/40 text-sm mt-3 leading-relaxed'>
                  Pioneering cutting edge visual models and standard production operations across global web installations.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className='py-32 px-6 lg:px-[10%] bg-[#0f1a0f] border-b border-white/5 relative z-10'>
        <div className='mb-20'>
          <span className='text-[#D3FD50] text-xs font-mono uppercase tracking-widest block mb-2'>[ Motion Engine 02 ]</span>
          <h2 className='text-4xl lg:text-6xl font-bold uppercase tracking-tight'>Mosaic Spotlight</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-12 gap-8 items-start'>
          <div className='mosaic-item md:col-span-7 bg-white/5 border border-white/10 rounded-3xl overflow-hidden group aspect-[16/10] relative will-change-transform'>
            <img src={teamMembers[3].img} alt={teamMembers[3].name} className='absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700' />
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10' />
            <div className='absolute bottom-0 left-0 p-8 z-20'>
              <p className='text-xs font-mono text-[#D3FD50] tracking-widest uppercase mb-1'>{teamMembers[3].role}</p>
              <h3 className='text-3xl font-bold uppercase'>{teamMembers[3].name}</h3>
            </div>
          </div>

          <div className='mosaic-item md:col-span-5 bg-white/5 border border-white/10 rounded-3xl overflow-hidden group aspect-[3/4] relative md:mt-24 will-change-transform'>
            <img src={teamMembers[4].img} alt={teamMembers[4].name} className='absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700' />
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10' />
            <div className='absolute bottom-0 left-0 p-8 z-20'>
              <p className='text-xs font-mono text-[#D3FD50] tracking-widest uppercase mb-1'>{teamMembers[4].role}</p>
              <h3 className='text-2xl font-bold uppercase'>{teamMembers[4].name}</h3>
            </div>
          </div>
        </div>
      </section>

  
      <section className='cross-slide-section py-40 bg-[#0b120b] border-b border-white/5 overflow-hidden relative z-10'>
        <div className='px-6 lg:px-[10%] mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6'>
          <div>
            <span className='text-[#D3FD50] text-xs font-mono uppercase tracking-widest block mb-2'>[ Motion Engine 03 ]</span>
            <h2 className='text-4xl lg:text-6xl font-bold uppercase tracking-tight'>Cross-Slide Matrix</h2>
          </div>
        </div>

        <div className='slide-left-row flex gap-6 w-[150vw] mb-6 will-change-transform'>
          {teamMembers.slice(0, 5).map((member, i) => (
            <div key={i} className='w-[25vw] min-w-[280px] h-[20vh] shrink-0 bg-white/5 rounded-2xl overflow-hidden border border-white/10 relative group flex items-center p-6'>
              <img src={member.img} alt={member.name} className='absolute right-0 top-0 h-full w-1/2 object-cover opacity-30 grayscale group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-500' />
              <div className='relative z-10 max-w-[50%]'>
                <p className='text-[10px] font-mono text-[#D3FD50] tracking-widest uppercase mb-1 truncate'>{member.role}</p>
                <h4 className='text-xl font-bold tracking-tight uppercase truncate'>{member.name}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className='slide-right-row flex gap-6 w-[150vw] transform translate-x-[-20vw] will-change-transform'>
          {teamMembers.slice(5, 10).map((member, i) => (
            <div key={i} className='w-[25vw] min-w-[280px] h-[20vh] shrink-0 bg-white/5 rounded-2xl overflow-hidden border border-white/10 relative group flex items-center p-6'>
              <img src={member.img} alt={member.name} className='absolute right-0 top-0 h-full w-1/2 object-cover opacity-30 grayscale group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-500' />
              <div className='relative z-10 max-w-[50%]'>
                <p className='text-[10px] font-mono text-[#D3FD50] tracking-widest uppercase mb-1 truncate'>{member.role}</p>
                <h4 className='text-xl font-bold tracking-tight uppercase truncate'>{member.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className='py-32 px-6 lg:px-[10%] bg-[#0f1a0f] relative z-10'>
        <div className='text-center mb-24 max-w-xl mx-auto'>
          <span className='text-[#D3FD50] text-xs font-mono uppercase tracking-widest block mb-2'>[ Motion Engine 04 ]</span>
          <h2 className='text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-4'>The Engine Room</h2>
        </div>

        <div className='circular-wrap flex flex-wrap justify-center gap-12 lg:gap-16 max-w-5xl mx-auto'>
          {teamMembers.slice(5, 11).map((member, i) => (
            <div key={i} className='circular-item w-40 sm:w-48 flex flex-col items-center text-center will-change-transform group cursor-pointer'>
              <div className='w-full aspect-square rounded-full border border-white/10 bg-white/5 overflow-hidden relative mb-4 p-2 transition-all duration-500 group-hover:border-[#D3FD50]'>
                <div className='w-full h-full rounded-full overflow-hidden relative'>
                  <img src={member.img} alt={member.name} className='w-full h-full object-cover grayscale scale-110 group-hover:scale-100 group-hover:grayscale-0 transition-all duration-700 ease-out' />
                </div>
              </div>
              <p className='text-[10px] font-mono text-[#D3FD50] uppercase tracking-widest mb-0.5'>{member.role}</p>
              <h4 className='text-lg font-semibold tracking-tight text-white/80 group-hover:text-white transition-colors duration-300'>{member.name}</h4>
            </div>
          ))}
        </div>
      </section>


      <section className='py-32 px-6 lg:px-[10%] relative z-10 bg-[#0e170e] border-t border-white/5'>
        <div className='mb-16 overflow-hidden'>
          <h2 className='mask-text text-4xl lg:text-6xl font-bold uppercase tracking-tight will-change-transform'>
            The Full Roster_
          </h2>
          <p className='text-white/50 mt-2 font-mono text-sm'>[ Motion Engine 05 / Matrix ]</p>
        </div>

        <div className='grid-wrap grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
          {teamMembers.map((member, i) => (
            <div key={i} className='grid-card aspect-[3/4] flex items-end justify-start rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-500 cursor-pointer group relative will-change-transform'>
              <img
                src={member.img}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out z-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:from-[#0f1a0f]/95 transition-all duration-500 z-10" />
              <div className="p-6 relative z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span className='text-xs text-[#D3FD50] font-mono uppercase tracking-widest block mb-1 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                  {member.role}
                </span>
                <span className='text-white/80 group-hover:text-white text-md font-medium uppercase tracking-wider transition-colors duration-300 block'>
                  {member.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;