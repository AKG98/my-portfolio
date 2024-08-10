import { motion } from "framer-motion"
import herobg from '../assets/Backgrounds/Herobg.png'

export default function Hero() {
  return (
    <motion.div 
        id='hero-page' 
        className="w-full h-[100vh] bg-black flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${herobg})` }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}>

        <motion.div 
            className="pretitle md:mb-[-7vh] mb-[-2.5vh]"
            initial={{y:10,scale:0.7,opacity:0}}
            whileInView={{y:0,scale:1,opacity:1}}
            viewport={{once:true}}
            transition={{duration:0.25,delay:0.5}}
            >
            <div className="w-10"><hr /></div>
                <p className="text-3xl">YOUR DIGITAL</p>
            <div className=" flex justify-end w-full"><hr className="w-10" /></div>
        </motion.div>
        <motion.div 
            className="title text-[8rem] md:text-[10rem] md:mb-[-7vh] mb-[-2.5vh] tracking-wider"
            initial={{y:10,scale:0.7,opacity:0}}
            whileInView={{y:0,scale:1,opacity:1}}
            viewport={{once:true}}
            transition={{duration:0.5,delay:0.65}}>
            <p>GENIE</p>
        </motion.div>
        <motion.div 
            className="subtitle"
            initial={{y:10,scale:0.7,opacity:0}}
            whileInView={{y:0,scale:1,opacity:1}}
            viewport={{once:true}}
            transition={{duration:0.5,delay:0.9}}>
            <p>WISHING FOR WEB WONDERES ? GRANTED</p>
        </motion.div>
        
    </motion.div>
  );
}


