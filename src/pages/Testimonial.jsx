import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { motion } from "framer-motion";
import client1 from '../assets/testimonial/client1.png';
import client2 from '../assets/testimonial/client2.png';
import client3 from '../assets/testimonial/client3.png';

export default function Testimonial() {

  const testimData = [
    {
      image: client1,
      name: "Sheikh Bakhtawar",
      message: "Working with Avinash was a game-changer for my business. Their blend of creativity and technical expertise brought our vision to life in ways we hadn’t imagined. Highly recommend!"
    },
    {
      image: client2,
      name: "Aakib Memon",
      message: "I was impressed by Avinash's dedication and skill in delivering a top-notch product. The attention to detail and user-centric design truly set their work apart. Will definitely collaborate again."
    },
    {
      image: client3,
      name: "Adarsh Singh Patel",
      message: "Exceptional work! tackled complex challenges with ease and delivered outstanding results. Their professionalism and innovative approach made a significant impact on our project’s success."
    }
  ];

  return (
    <div id="testimonial-page" className="px-[10%] py-[5%]">
      <motion.div 
        className="text-gray-500 md:text-8xl text-6xl mb-[10vh] text-end"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1>What my clients are saying.</h1>
      </motion.div>
      <div className="flex items-center justify-center">
        <motion.div 
          className="md:w-[40vw] w-full carousel-wrapper"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Carousel
            autoPlay
            interval={4000} // Autoplay every 2 seconds
            infiniteLoop
            showArrows
            showStatus={false}
            showThumbs={false}
            swipeable // Enable swipe/drag functionality
            emulateTouch
            stopOnHover
            showIndicators
          >
            {testimData.map((data, index) => (
              <div className="w-full flex flex-col items-center justify-start text-white p-10" key={index}>
                <div className="bg-black w-[100px] h-[100px] rounded-full flex items-center justify-center mb-5">
                  <img src={data.image} alt={`client ${index}`} />
                </div>
                <div className="text-xl font-bold mb-5">{data.name}</div>
                <div className="text-center mb-10 md:px-5 text-gray-500">
                  <p>{data.message}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </motion.div>
      </div>
    </div>
  );
}
