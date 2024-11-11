import React from 'react'
import { Link } from 'react-router-dom'
import instagram from '../assets/footer/instagram.svg'
import facebook from '../assets/footer/facebook.svg'
import linkedin from '../assets/footer/linkedin.svg'



/* Footer Section:
- Include the contact section and social media links */

export default function Footer() {
  return (
    <footer>
    <div className='bg-slate-900 text-white flex flex-col gap-2 items-center justify-center pt-10'>
      <div className='font-bold text-2xl'>Questions? Let's Talk.</div>
      <div className='w-1/3 leading-7 text-sm text-center my-4'>We'll help you determine if Motivated Mornings is the right fit for you and answer any of your questions.</div>
      <button className='bg-yellow-400 font-bold p-5 rounded-full text-slate-900 w-32 text-center mb-3'>Let's Talk</button>
      <div className='flex flex-row gap-2 my-4'>
        <Link><img src={instagram} className='h-5 hover:animate-bounce' alt="instagram" /></Link>
        <Link><img src={facebook} className='h-5 hover:animate-bounce' alt="facebook" /></Link>
        <Link><img src={linkedin} className='h-5 hover:animate-bounce' alt="linkedin" /></Link>
      </div>
      <div className='text-sm'>Email: hello<span>&#64;</span>motivatedmornings.work</div>
      <div className='text-sm'><span>&#169;</span>2020 Mahesh TM, Inc.All rights reserved.</div>
      <div className='text-sm underline'>guidelines privacy terms members</div>
      </div>
      <div className='bg-slate-900 pb-4'>
      <div className='text-slate-900 cursor-pointer text-center p-2 rounded-full ms-auto me-4 bg-yellow-400 w-16'>Help</div>
      </div>
      </footer>
  )
}
