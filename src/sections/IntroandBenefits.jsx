import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import pointer from "../assets/Intro/pointer.svg";
import image from "../assets/Intro/Recommended.jpeg";
import check from "../assets/Intro/check.svg";

/*Introduction and Benefits Section:
- Recreate the text and illustrative elements explaining the benefits ("Tired of not finishing that
script?"). */
const benefits = [
  { text: "Hitting snooze" },
  { text: "Endless procrasstinating" },
  { text: "Never finding the time" },
  { text: "Missing goals" },
];

const btrway = [
  { text: "Experiencing your habits transform" },
  { text: "Accessing tools, people, and expertise" },
  { text: "Seeing your work move forward" },
];

const str = '"Get more done before 9am than you used to get done all day."';
const quotedtext = str.split("");

export default function IntroandBenefits() {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const [inView, setInView] = useState(false);
  const [inView1, setInView1] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.75, once: false }
    );
    const observer1 = new IntersectionObserver(
      ([entry]) => setInView1(entry.isIntersecting),
      { threshold: 0.75, once: false }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    if (ref1.current) {
      observer1.observe(ref1.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      if (ref1.current) {
        observer1.unobserve(ref1.current);
      }
    };
  }, []);

  return (
    <section id="intro" className="mt-[110vh] md:mt-[130vh]">
      {/* section 1 */}
      <div ref={ref} className="flex lg:flex-row md:flex-row lg:my-10 flex-col justify-evenly items-center" >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
        >
          <img className="md:h-96" src={image} alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          className="flex flex-col gap-6"
        >
          <div className="lg:text-7xl md:text-5xl text-4xl font-bold"> Tired of not <br /> finishing that script? </div>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={ inView ? { opacity: 1, transition: { staggerChildren: 0.3, duration: 1 }, } : { opacity: 0 } }
            className="flex flex-col gap-2"
          >
            {benefits.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={ inView ? { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.09 }, } : { opacity: 0 } }
                className="flex justify-start items-center ms-5"
              >
                <img className="h-4" src={pointer} alt="" />
                <div className="ms-2">{item.text}</div>
              </motion.li>
            ))}
          </motion.ul>
          <motion.button
            initial={{ opacity: 0, x: 40 }}
            animate={ inView ? { opacity: 1, x: 0, transition: { duration: 1, delay: 0.4 } } : { opacity: 0 } }
            className="font-bold text-white bg-slate-900 p-4 text-center w-48 rounded-full"
          >
            Start Your Free Trial
          </motion.button>
        </motion.div>
      </div>
      <div>
        <div className="absolute bg-white w-full h-32" style={{ clipPath: "ellipse(70% 100% at 70% 0%)", zIndex: 5 }} ></div>
        <div className="relative bg-yellow-400 w-full h-32 -z-10"></div>
      </div>
      <div ref={ref1} className="gap-10 md:ps-10 lg:px-32 py-28 flex lg:flex-row md:flex-row flex-col lg:justify-evenly items-center bg-yellow-400" >
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView1 ? { opacity: 1 } : { opacity: 0 }}
          className="flex flex-col gap-6"
        >
          <span className="text-4xl font-extrabold text-slate-900"> There's a better way. </span>
          <motion.ul
            initial={{ opacity: 0, x: -40 }}
            animate={ inView1? { opacity: 1, x: 0, transition: { staggerChildren: 0.3, duration: 1 }, } : { opacity: 0 } }
            className="flex flex-col justify-start gap-2"
          >
            {btrway.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -40 }}
                animate={ inView1? { opacity: 1, x: 0, transition: { duration: 0.6, delay: index * 0.09 }, } : { opacity: 0 } }
                className="flex items-center"
              >
                <img src={check} alt="check" className="h-5 me-5" />
                {item.text}
              </motion.li>
            ))}
          </motion.ul>
          <motion.button
            initial={{ opacity: 0, x: -40 }}
            animate={ inView1? { opacity: 1, x: 0, transition: { duration: 1, delay: 0.4 } } : { opacity: 0 } }
            className="font-bold text-white bg-slate-900 p-4 text-center w-48 rounded-full"
          >
            Start Your Free Trial
          </motion.button>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView1 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ opacity: { duration: 0.5 }, staggerChildren: 0.1 }}
          aria-live="polite"
          className="text-wrap w-96 text-center text-4xl italic"
        >
          {quotedtext.map((item, index) => (
            <motion.span
              key={`${item}-${index}`}
              initial={{ opacity: 0 }}
              animate={inView1 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="not-italic font-bold text-slate-900"
            >
              {item}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </section>
  );
}
