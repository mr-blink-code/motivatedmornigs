import { motion } from "framer-motion";
import React,{useState,useEffect,useRef} from "react";

/* Pricing Plans Section:
- Include the MoMo and MoMo Pro plans with appropriate details. */

export default function PricingPlans() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5, once: false }
    )
    if (ref.current) { observer.observe(ref.current); }
    return () => {
      if (ref.current) { observer.unobserve(ref.current); }
    }
  }, [])
  return (
    <section>
      <div
        className="bg-yellow-400 h-[90vh] w-full "
        style={{ clipPath: "ellipse(80% 70% at 70% 20%)" }}
      >
        <div
        ref={ref}
          className="pt-20 flex flex-col justify-center items-center gap-10"
          aria-label="pricing"
        >
          {/* heading */}

          <motion.div 
          initial={{opacity:0}}
          animate={inView?{opacity:1,transition:{duration:0.8,delay:0.6}}:{opacity:0}}
          className="text-slate-900 text-center lg:w-full w-96 font-extrabold text-2xl lg:text-4xl ">
            Start with a free trial. Change your plan anytime.
          </motion.div>
          {/* plans card */}
          <div className="w-96 md:w-[80vw] lg:w-[90vw] flex md:flex-row lg-flex-row flex-col justify-center items-center gap-10">
          <motion.div 
          initial={{opacity:0,x:-50}}
          animate={inView?{opacity:1,x:0,transition:{duration:1,delay:0.6}}:{opacity:0}} 
            className="w-4/5 lg:w-1/3 md:w-1/2 lg:p-8 p-3 bg-white text-slate-900 rounded-3xl flex flex-col justify-center items-center gap-1">
              <h1 className="font-extrabold text-3xl lg:text-5xl">MoMo</h1>
              <p className="font-extralight text-3xl lg:text-5xl">$49/mo.</p>
              <p className="lg:leading-7 lg:mt-2 text-center">
                Get the motivation and acccountability <br />
                you need to get realwordk done.
              </p>
            </motion.div>
            <motion.div 
          initial={{opacity:0,x:50}}
          animate={inView?{opacity:1,x:0,transition:{duration:1,delay:0.6}}:{opacity:0}}
            className="w-4/5 lg:w-1/3 md:w-1/2 p-3 lg:p-8 bg-white text-slate-900 rounded-3xl flex flex-col justify-center items-center gap-1">
              <h1 className="font-extrabold text-3xl lg:text-5xl">MoMo Pro</h1>
              <p className="font-extralight text-3xl lg:text-5xl">$399/mo.</p>
              <p className="lg:leading-7 lg:mt-2 text-center">
                Take it to the next level with your own
                <br />
                persobnal productivity coach.
              </p>
            </motion.div>
          </div>
          <motion.button 
          initial={{opacity:0}}
          animate={inView?{opacity:1,transition:{duration:0.8,delay:1}}:{opacity:0}}
          className="bg-slate-900 text-white rounded-full py-5 text-center font-extrabold w-44">
            View Plan Details
          </motion.button>
        </div>
      </div>
    </section>
  );
}
