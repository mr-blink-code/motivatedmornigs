import React, { useState } from "react";
import logo from "/logo.png";
import profile_icon from "../assets/Header/profile.svg";
import menu_buttton from "../assets/Header/menubutton.svg"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* Header Section:
- Include the logo, navigation links, and a prominent call-to-action button ("Start Your Free Trial")
*/
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu on and off
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  return (
    <header className="fixed  z-10 top-0 w-full bg-yellow-400">
      <div className="flex justify-between sm:mx lg:mx-36 ">
        <img src={logo} className="h-20 w-auto sm:top-5" alt="Company Logo" />
        
        <motion.button
        initial={{opacity:0,y:-30}}
        animate={{ opacity: 1 ,y:0}}  
        transition={{ duration: 1, delay: 0.3 }}
          className="absolute md:hidden lg:hidden top-5 right-5"
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
        ><img src={menu_buttton} className="h-10 w-10" alt="" /></motion.button>

        {/* PC and Tablet */}
        
        <motion.nav
        initial = {{ opacity:0,y:-30}}
        animate={{opacity:1,y:0,transition:{duration:1}}}
        className="hidden md:flex gap-6 items-center md:me-10" >
          <Link to={"/"} className="font-bold hover:scale-110 transition-transform duration-300" aria-label="Who It's For" > Who It's For </Link>
          <Link to={"/about"} className="font-bold hover:scale-110 transition-transform duration-300" aria-label="About Us Page" > About </Link>
          <Link to={"/"} className="font-bold hover:scale-110 transition-transform duration-300" aria-label="FAQ Page" > FAQ </Link>
          <Link to={"/"} className="font-bold hover:scale-110 transition-transform duration-300" aria-label="Blog Link" > Blog </Link>
          <Link to={"/"} className="cursor-pointer"><img className="h-6 w-auto hover:animate-wiggle transition-all duration-300" src={profile_icon} alt="profile" aria-label="profile" /></Link>
          <Link to={"/"} className="bg-slate-900 text-slate-50 font-bold py-2 px-6 rounded-full hover:scale-110 transition-transform duration-300" aria-label="Start Your Free Trial" > Start Your Free Trial </Link>
        </motion.nav>

{/* Mobile */}
        <nav
          className={`relative flex flex-col gap-2 pb-4 items-end sm:hidden ${
            isMenuOpen ? "block mt-20 me-4" : "hidden"
          } `}
        >
          <Link to={"/"} className="font-bold" aria-label="Who It's For" > Who It's For </Link>
          <a href="#about" className="font-bold" aria-label="About Us Page" > About </a>
          <Link to={"/"} className="font-bold" aria-label="FAQ Page" > FAQ </Link>
          <Link to={"/"} className="font-bold" aria-label="Blog page" > Blog </Link>
          <img className="h-6 w-auto hover:animate-wiggle transition-all duration-300" src={profile_icon} alt="Notifications Bell Icon" aria-label="Notifications" />
          <div className="bg-slate-700 text-slate-50 font-bold py-2 px-6 rounded-full hover:scale-110 transition-transform duration-300" aria-label="Start Your Free Trial" > Start Your Free Trial </div>
        </nav>
        </div>
    </header>
  );
}
