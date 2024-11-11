import React,{useRef,useEffect,useState} from 'react'
import { motion } from 'framer-motion'
import pic1 from '../assets/Features/pic1.svg'
import pic2 from '../assets/Features/pic2.svg'
import pic3 from '../assets/Features/pic3.svg'
import pic4 from '../assets/Features/pic4.svg'
import pic5 from '../assets/Features/pic5.svg'




/* Feature Highlights Section:
- Implement detailed blocks explaining the platform's features (e.g., Morning Kick-Off Calls, Virtual
Coworking, Private Slack Group) */

const features=[
  {image:pic1,title:"Morning Kick-Of Calls",p:"Build healthy habits. Jumpstart each day with a 10min group video call with an inspiring thought about creating. Stay accountable and motivated. Offered Mon-Fri at 5am and 7am."},
  {image:pic2,title:"Virtual Coworking ",p:"Following Morning Kick-Off Calls, virtually cowork with fellow creators (MoMos). Feel the momentum of a 2-hour silent group coworking sesh. Celebrate benchmarks with your peers."},
  {image:pic3,title:"Private Slack Group ",p:"Stay connected with what your fellow MoMos are doing, creating, and accomplishing. A space for relationship building, inspiration, feedback, and celebrating momentum."},
  {image:pic4,title:"Productivity Coaching Sessions* ",p:"A weekly 30-minute private meeting to discuss goals, setbacks, breakthroughs, strategies, and create ways to be sure the momentum keeps going."},
  {image:pic5,title:"Tailored Action Plans*",p:"Our personal coaching is more than rah-rah. You will go away with specific action plans to keep you moving in the right direction. Forward."},
]
const positions = [ 'first', 'second', 'third', 'fourth','fifth' ]
const cardVariants = {
  first: { opacity: 1, zIndex: 1, transition: { duration: 0.5 } },
  second: { opacity: 0, zIndex: -1, transition: { duration: 0.5 } },
  third: { opacity: 0, zIndex: -1, transition: { duration: 0.5 } },
  fourth: { opacity: 0, zIndex: -1, transition: { duration: 0.5 } },
  fifth: { opacity: 0, zIndex: -1, transition: { duration: 0.5 } },
  
}

export default function FeatureHighlights() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false);
  const [positionIndexes,setPositionIndexes] = useState([0,1,2,3,4])

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

  const handleNext=()=>{
    setPositionIndexes((prevIndexes)=>{
      const updatedIndexes = prevIndexes.map((prevIndex)=>(prevIndex+1)%5)
      return updatedIndexes
    })
  }

  
  const handlePrev=()=>{
    setPositionIndexes((prevIndexes)=>{
      const updatedIndexes = prevIndexes.map((prevIndex)=>(prevIndex-1+5)%5)
      return updatedIndexes
    })
  }

  return (
    <div ref={ref} className='h-[110vh] flex flex-col justify-center items-center'>
      <motion.div 
      initial={{opacity:0}}
      animate={inView?{opacity:1,transition:{duration:0.5}}:{opacity:0}}
      className='lg:text-4xl md:text-2xl text-2xl font-bold lg:w-[60vw] w-[80vw] md:mt-10 text-center'>
        Motivated Mornings is a virtual coworking community proven to help you do the work.</motion.div>
      <div className='hidden md:hidden lg:block'>
      <motion.div 
      initial={{ opacity: 0}}
      animate={ inView? { opacity: 1, transition: { staggerChildren: 0.3, duration: 1 }}:{opacity:0}}
      className='flex flex-wrap gap-6 justify-center my-10 lg:visible '>
      {
        features.map((item,index)=>(
          <motion.div
          key={index}
          initial={{ opacity: 0,scale:0.8}}
          animate={ inView? { opacity: 1, scale:1, transition: { duration: 0.6, delay: index * 0.09 }, } : { opacity: 0 } }
          className='flex flex-col justify-center items-center w-96 gap-1'
          >
            <img src={item.image} className='h-36' alt="" />
            <h1 className='font-bold'>{item.title}</h1>
            <p className='text-center leading-7'>{item.p}</p>
          </motion.div>
        ))
      }
      </motion.div>
      </div>
      <div className=' lg:hidden'>
      <div className='flex justify-center my-10'>
      {
        features.map((item,index)=>(
          <motion.div
          key={index}
          initial="hidden"
          animate = {positions[positionIndexes[index]]}
          variants={cardVariants}
          transition={{duration:0.5}}
          className='absolute flex flex-col justify-center items-center w-96 gap-3 md:gap-1'
          >
            <img src={item.image} className='h-36 md:h-32' alt="" />
            <h1 className='font-bold'>{item.title}</h1>
            <p className='text-center leading-7 md:leading-5'>{item.p}</p>
          </motion.div>
        ))
      }
      </div>
      </div>
      <motion.div 
      initial={{opacity:0}}
      animate={inView?{opacity:1,transition:{duration:0.5,delay:0.8}}:{opacity:0}}
      >
      <div className='lg:mt-0 mt-96 md:mt-52' >*Available exclusively with the Pro Plan</div>
      <div className='flex justify-center gap-10 lg:hidden mt-3'>
      <button onClick={handlePrev} className="bg-yellow-400 text-slate-900 p-2 px-4 rounded-full text-2xl font-bold" > {'<'} </button>
      <button onClick={handleNext} className="bg-yellow-400 text-slate-900 p-2 px-4 rounded-full text-2xl font-bold" > {'>'} </button>
      </div>
      </motion.div>
      
    </div>
  )
}
