import React from "react";
import "./hero.css";
import work from "../assets/Hero/work.png"
import play_button from "../assets/Hero/playbutton.svg"
import { motion } from "framer-motion";

/* Hero Section:
- Implement the main heading: "Actually do the work." with a subheading and call-to-action button.
- Include the illustrated graphic and text bubble as shown
 */
export default function Hero() {
  return (
   <section aria-label="hero section">
     <div className="absolute top-0 left-0 w-full bg-yellow-400 section1 h-full"></div>
     <div className="absolute bottom-0 bg-white h-full w-full section2"></div>
     <div className="absolute bottom-0 bg-yellow-400 h-full w-full section3"></div>
     <div className="absolute z-0 w-full h-[80vh] lg:top-20 top-36 ">
     <div className="lg:mx-36 sm:mx-20 flex flex-col md:flex-row items-center justify-center">
      {/* text */}
     <motion.div
     initial={{opacity:0,x:-50}}
     animate={{ opacity: 1 ,x:0}}  
     transition={{ duration: 1,delay:1 }}
     className="lg:w-1/2 md:w-1/2 h-full sm:w-full flex flex-col lg:gap-4 md:gap-4 gap-8">
      <div className="lg:text-7xl md:text-5xl text-5xl font-bold "
      aria-label="hero page text">Actulally<br></br><span className="lg:tracking-wide md:tracking-wide ">do the work.</span></div>
      <div className=" w-72" aria-label='hero section sub heading'>Lorem, ipsum dolor sit amet consecte adipisicing elijjdwt. Pariatur, aspernatur!</div>
      <div className="bg-slate-900 w-52 rounded-full py-2 flex items-center justify-center"
      aria-label="see how it works button">
        <img className="h-10 w-10" src={play_button} alt="Play button" />
        <button className="text-white font-bold me-3">See How It Works</button>
        </div>
     </motion.div>
     {/* image */}
     <motion.div
     initial={{opacity:0}}
     animate={{ opacity: 1 }}  
     transition={{ duration: 1,delay:1.2}}
     className="lg:w-1/2 md:w-1/2 w-full animate-bounce_1 flex items-center lg:mt-0 md:mt-0 mt-6 justify-center">
     <img className="lg:h-[80vh] sm:h-76 w-full" src={work} alt="lady at work" />
     </motion.div>
     </div>
     </div>
   </section>
    
  );
}
