import skillsImage from '../assets/skills2.png'
import responsiveImage from '../assets/responsive.png'
import elevateImage from '../assets/elevate.png'
import cleancodeImage from '../assets/cleancode.png'
import { motion } from 'framer-motion'

export default function Skills() {
  return (
    <div id='skill-page' className='bg-black px-[10%] py-[5%] overflow-hidden'>
        <motion.div 
            className="text-gray-500 md:text-8xl text-6xl w-full text-end md:mb-[20vh] mb-[10vh]"
            initial={{x:100,opacity:0}}
            whileInView={{x:0,scale:1,opacity:1}}
            viewport={{once:true,amount:0.2}}
            transition={{duration:0.5}}
            >
            <p className='mb-3'>Major</p>
            <p>Qualities</p>
        </motion.div>
        <div className="flex md:flex-row flex-col md:mb-[20vh] mb-[10vh]">
            <motion.div 
                className='flex flex-1 justify-center items-center md:order-1 order-2'
                initial={{scale:0,opacity:0}}
                whileInView={{scale:1,opacity:1}}
                viewport={{once:true,amount:0.2}}
                transition={{duration:0.5,delay:0.4}}
                >
                <img className='md:w-[70%] md:h-[80%]' src={skillsImage} alt="" />
            </motion.div>
            <motion.div 
                className='flex-1 py-5 md:order-2 order-1'
                initial={{scale:0,opacity:0}}
                whileInView={{scale:1,opacity:1}}
                viewport={{once:true,amount:0.2}}
                transition={{duration:0.5,delay:0.2}}
                >
                <h1 className='text-white text-4xl md:mb-[10vh] mb-[5vh]'>Bridging Design and Development Excellence.</h1>
                <p className='text-gray-500 text-xl'>With years of experience in web design and development, I blend meticulous 
                    design with precise coding. Avoid the hassle of misaligned visions—work with 
                    someone who brings both creative and technical skills to make your ideas come to life.
                </p>
            </motion.div>
        </div>
        <div className="flex md:flex-row flex-col md:mb-[20vh] mb-[10vh]">
            <motion.div 
                className='flex-1 py-5'
                initial={{scale:0,opacity:0}}
                whileInView={{scale:1,opacity:1}}
                viewport={{once:true,amount:0.2}}
                transition={{duration:0.5,delay:0.2}}
                >
                <h1 className='text-white text-4xl md:mb-[10vh] mb-[5vh]'>Responsive Websites.</h1>
                <p className='text-gray-500 text-xl'>
                    Transform your online presence with responsive websites that adapt seamlessly across all 
                    devices. Enjoy a user-friendly experience, whether on mobile, tablet, or desktop, with a 
                    design that looks great everywhere.
                </p>
            </motion.div>
            <motion.div 
                className='flex flex-1 justify-center items-center'
                initial={{scale:0,opacity:0}}
                whileInView={{scale:1,opacity:1}}
                viewport={{once:true,amount:0.2}}
                transition={{duration:0.5,delay:0.4}}
                >
                <img className='w-[90%]' src={responsiveImage} alt="" />
            </motion.div>
        </div>
        <div className="flex md:flex-row flex-col md:mb-[20vh] mb-[10vh]">
            <motion.div 
                className='flex flex-1 justify-center md:order-1 order-2'
                initial={{scale:0,opacity:0}}
                whileInView={{scale:1,opacity:1}}
                viewport={{once:true,amount:0.2}}
                transition={{duration:0.5,delay:0.4}}>
                <img className='w-[75%]' src={elevateImage} alt="" />
            </motion.div>
            <motion.div 
                className='flex-1 py-5 md:order-2 order-1'
                initial={{scale:0,opacity:0}}
                whileInView={{scale:1,opacity:1}}
                viewport={{once:true,amount:0.2}}
                transition={{duration:0.5,delay:0.2}}
                >
                <h1 className='text-white text-4xl md:mb-[10vh] mb-[5vh]'>Elevate with Branding.</h1>
                <p className='text-gray-500 text-xl'>
                    Elevate your brand with a distinctive identity that resonates. From logos to comprehensive brand 
                    strategies, create a memorable impression and stand out in the marketplace with cohesive and impactful 
                    branding.
                </p>
            </motion.div>
        </div>
        <div className="flex md:flex-row flex-col">
            <motion.div 
                className='flex-1 py-5'
                initial={{scale:0,opacity:0}}
                whileInView={{scale:1,opacity:1}}
                viewport={{once:true,amount:0.2}}
                transition={{duration:0.5,delay:0.2}}
                >
                <h1 className='text-white text-4xl md:mb-[10vh] mb-[5vh]'>Clean & efficient code.</h1>
                <p className='text-gray-500 text-lg'>
                    Achieve robust and maintainable software with clean, efficient code. Simplify debugging and 
                    enhance performance with well-organized, readable code that adheres to best practices, 
                    ensuring long-term reliability and ease of updates.
                </p>
            </motion.div>
            <motion.div 
                className='flex flex-1 justify-center'
                initial={{scale:0,opacity:0}}
                whileInView={{scale:1,opacity:1}}
                viewport={{once:true,amount:0.2}}
                transition={{duration:0.5,delay:0.4}}
                >
                <img className='w-[90%] md:mt-[-10vh]' src={cleancodeImage} alt="" />
            </motion.div>
        </div>
    </div>
  )
}
