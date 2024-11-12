import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";
import { motion } from "framer-motion";

export default function Project() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5, once: false }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <div
      ref={ref}
      id="about"
      className="flex lg:gap-10 flex-col lg:flex-row justify-center items-center h-[65vh]"
    >
      <motion.div
        initial={{ scale: 0.2, opacity: 0, x: 0 }}
        animate={
          inView
            ? {
                scale: [0.2, 1],
                x: [250, 0],
                opacity: [0, 1],
              }
            : { opacity: 0 }
        }
        transition={{
          scale: { duration: 1, ease: "easeInOut" },
          x: { duration: 0.5, delay: 1.2 },
          opacity: { duration: 0.5, delay: 0.5 },
        }}
        className="lg:w-1/3 flex h-[65vh] bg-white flex-col items-center justify-center"
      >
        <img src={logo} alt="logo" className="h-32" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -250 }}
        animate={
          inView
            ? {
                x: [-250, 0],
                opacity: [0, 1],
              }
            : { opacity: 0 }
        }
        transition={{
          x: { duration: 2, delay: 0.2 },
          opacity: { duration: 0.5, delay: 1.2 },
        }}
        className=" -z-10 lg:w-1/3 flex flex-col items-center justify-start lg:items-start"
      >
        <h1 className="text-3xl lg:text-5xl font-extrabold text-slate-900">
          Actually <br /> complete that project.
        </h1>
        <p className="text-lg lg:leading-8 mt-2 lg:mt-7 lg:mx-0 mx-9">
          There are so many books to read, products to listen to, and courses to
          take... none of that matters if you dont't do the work. Motivated
          mornings is service focoused on making sure that your best work
          actually happens.
        </p>
        <Link className="underline mt-5 pb-5">Learn More &#8594;</Link>
      </motion.div>
    </div>
  );
}
