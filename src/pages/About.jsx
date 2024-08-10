import profileImage from '../assets/ProfilePic.png'
import freelancericon from '../assets/Svgs/freelancer.svg'
import tcsicon from '../assets/Svgs/tcs.svg'

import { motion } from 'framer-motion'
import resume from '../assets/Resume/Avinash Gupta_CV.pdf';
import { useRef } from 'react'


export default function About() {
  const downloadRef = useRef(null);
  function downloadCV(e){
    e.preventDefault();
    if(downloadRef.current){
      downloadRef.current.click();
    }
  }
  return (
    <>
    <div id="about-page" className="px-[10%] py-[5%]">
      <div className='flex md:flex-row flex-col items-center justify-center'>
        <motion.div 
            className='flex md:w-[40vw] md:h-[80vh] items-center justify-center mt-5 md:mt-0 overflow-hidden' 
            initial={{x:-100,opacity:0}}
            whileInView={{x:0,scale:1,opacity:1}}
            viewport={{once:true,amount:0.3}}
            transition={{duration:0.5,delay:0.5}}>

            <img src={profileImage} alt="" className='md:w-[80%] w-[90%]'/>
        </motion.div>
        <motion.div 
            className='flex flex-col gap-5 md:w-[40vw] h-[80vh] justify-center'
            initial={{x:100,opacity:0}}
            whileInView={{x:0,scale:1,opacity:1}}
            viewport={{once:true,amount:0.2}}
            transition={{duration:0.5,delay:0.6}}>
            <h1 className='text-5xl text-gray-50 md:text-start text-center'>Avinash Gupta</h1>
            <h3 className='text-2xl text-gray-50 md:text-start text-center'>Full Stack Developer</h3>
            <p className='text-xl text-gray-500 md:text-start text-center'>
                Innovative web developer skilled in front-end and back-end technologies, creating dynamic, user-centric websites and applications that deliver engaging and effective digital experiences.
            </p>
            <div className='flex gap-10 justify-center md:justify-start text-gray-500 mb-5'>
                <div className='flex flex-col items-center'>
                    <h2 className='text-xl font-semibold text-gray-50'>3+</h2>
                    <p>Years</p>
                    <p>Experience</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h2 className='text-xl font-semibold text-gray-50'>5+</h2>
                    <p>Total</p>
                    <p>Projects</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h2 className='text-xl font-semibold text-gray-50'>5+</h2>
                    <p>Happy</p>
                    <p>Clients</p>
                </div>
            </div>
            <button 
              className=" md:w-[50%] bg-dark text-white border-2 py-2 rounded-md 
                          hover:bg-gray-300
                          hover:border-gray-300
                          hover:text-black" 
              onClick={downloadCV}
              >Download CV
            </button>
            <a className='hidden text-white' href={resume} ref={downloadRef} download>cv</a>
        </motion.div>
      </div>
        <p className='text-gray-500 md:mb-[-5vh] md:mt-[10vh] text-center'>Worked With</p>
      <motion.div 
        className='flex md:h-[15vh] h-[10vh] w-[80vw] items-center justify-around md:mt-10' 
        initial={{y:10,opacity:0}}
        whileInView={{y:0,scale:1,opacity:1}}
        viewport={{once:true,amount:0.1}}
        transition={{duration:0.5,delay:0.2}}>
        <img className='md:w-[25%] w-[40%]' src={freelancericon} alt="" />
        <img className='md:w-[25%] w-[40%]' src={tcsicon} alt="" />
      </motion.div>
    </div>
    </>
  )
}
