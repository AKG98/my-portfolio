import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { motion } from "framer-motion";
import project1 from '../assets/caraousel/project1.png';
import project2 from '../assets/caraousel/project2.png';
import project3 from '../assets/caraousel/project3.png';
import project4 from '../assets/caraousel/project4.png';

export default function Projects() {

  return (
    <div id="project-page" className="px-[10%] py-[5%]">
      <motion.div
        className="text-gray-500 md:text-8xl text-6xl mb-[15vh]"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1>Small Selection of</h1>
        <h1>my work.</h1>
      </motion.div>
      <div className="flex flex-col items-center justify-center">
        <motion.div
          className="md:w-[50vw]"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Carousel
            autoPlay
            interval={2000} // Autoplay every 2 seconds
            infiniteLoop
            showArrows
            showStatus={false}
            showThumbs={false}
            swipeable // Enable swipe/drag functionality
            emulateTouch
            stopOnHover
          >
            <div 
              className="rounded-lg overflow-hidden" 
              onClick={() => window.open("https://my-portfolio-fbsq.onrender.com", "_blank")}
              style={{ cursor: "pointer" }}
              >
              <img src={project1} alt="Project 1"/>


            </div>
            <div 
              className="rounded-lg overflow-hidden" 
              onClick={() => window.open("https://invocify-client.onrender.com", "_blank")}
              style={{ cursor: "pointer" }}>
              <img src={project2} />

            </div>
            <div 
              className="rounded-lg overflow-hidden" 
              onClick={() => window.open("https://akg98.github.io/web-smith/", "_blank")}
              style={{ cursor: "pointer" }}>
              <img src={project3} />

            </div>
            <div 
              className="rounded-lg overflow-hidden" 
              style={{ cursor: "pointer" }}
              >
              <img src={project4} />

            </div>
          </Carousel>
          <div className="flex justify-center mt-10 h-[10vh]">
            <button
              className="w-3/4 md:w-[20%] text-white 
                bg-slate-900 h-10 rounded
                hover:bg-gray-300
                hover:border-gray-300
                hover:text-black
                transition-all"
            >See more</button>
          </div>

        </motion.div>
      </div>


    </div>
  );
}
