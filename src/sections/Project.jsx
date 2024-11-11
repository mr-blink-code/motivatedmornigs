import React from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";

export default function Project() {
  return (
    <div className="flex  lg:gap-10 flex-col lg:flex-row justify-center items-center h-[55vh]">
      <div className="lg:w-1/3 flex flex-col items-center">
        <img src={logo} alt="logo" className="h-32" />
      </div>
      <div className="lg:w-1/3 flex flex-col items-center justify-start lg:items-start">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-slate-900">
          Actually <br /> complete that project.
        </h1>
        <p className="text-lg lg:leading-8 mt-2 lg:mt-7 lg:mx-0 mx-9">
          There are so many books to read, products to listen to, and courses to
          take... none of that matters if you dont't do the work. Motivated
          mornings is service focoused on making sure that your best work
          actually happens.
        </p>
        <Link className="underline mt-5 ">Learn More &#8594;</Link>
      </div>
    </div>
  );
}
