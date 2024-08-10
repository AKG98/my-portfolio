import { motion } from 'framer-motion';
import gIcon from '../assets/Svgs/googleIcon.svg';
import linkIcon from '../assets/Svgs/linkedIcon.svg';
import gitIcon from '../assets/Svgs/githubIcon.svg';

const harmonicMotion = {
  hidden: { y: 0 },
  visible: {
    y: [0, -10, 0], // keyframes for harmonic motion
    transition: {
      duration: 2, // duration of one cycle
      repeat: Infinity, // repeat indefinitely
      repeatType: 'loop', // loop through the animation
      ease: 'easeInOut', // easing function for smooth animation
    },
  },
};

export default function SocialIcons() {
  return (
    <div className='bg-black py-10'>
      <motion.div 
        className='flex w-full md:justify-start justify-center items-center gap-5 '
        initial={{y:10,opacity:0}}
        whileInView={{y:0,opacity:1}}
        viewport={{once:true,amount:0.5}}
        transition={{duration:0.5,delay:0.2}}
        >
      <motion.a href="mailto:avinashakg1998@gmail.com" target="_blank" initial="hidden" animate="visible">
        <motion.img src={gIcon} alt="" variants={harmonicMotion} />
      </motion.a>
      <motion.a href="https://www.linkedin.com/in/avinash-kumar-gupta-ab8342203" target="_blank" initial="hidden" animate="visible">
        <motion.img src={linkIcon} alt="" variants={harmonicMotion} />
      </motion.a>
      <motion.a href="https://github.com/AKG98" target="_blank" initial="hidden" animate="visible">
        <motion.img src={gitIcon} alt="" variants={harmonicMotion} />
      </motion.a>
    </motion.div>
    </div>
  );
}
