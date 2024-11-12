import React from "react";
import downld from "../assets/guidedow/download.svg";
import img from "../assets/guidedow/book.png";
import { download } from "server/reply";
/* Downloadable Guide Section:
- Add the form for downloading the "8 Secrets to Doing Work That Matters" guide. */

export default function DownloadableGuide() {
  return (
    <div id="down"
      className="flex h-[90vh] bg-[#debbad] flex-col md:flex-row lg:flex-row justify-evenly items-center"
      style={{ clipPath: "ellipse(90% 70% at 70% 70%)" }}
    >
      {/* form */}
      <form className="flex flex-col gap-3">
        <h1 className="font-bold md:ps-0 lg:ps-0 ps-7" >FREE GUIDE</h1>
        <h1 className="text-2xl font-bold w-60">8 Secrets to Doing Work That Matters</h1>
        <ul>
          <li>
            &#10003;<span className="ms-2">Focus on what's important</span>
          </li>
          <li>
            &#10003;<span className="ms-2">Make massive progress</span>
          </li>
          <li>
            &#10003;<span className="ms-2">Actually get the work done</span>
          </li>
        </ul>
        <input
          type="text"
          placeholder="First Name"
          className="p-1 h-12 border w-64"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="p-1 h-12 border w-64"
        />
        <input
          type="text"
          placeholder="Email Address"
          className="p-1 h-12 border w-64"
        />
        <button
          type="submit"
          className="bg-slate-900 p-4 rounded-full flex w-60"
        >
          <img src={downld} alt="download" className="w-4 me-2" />
          <span className="font-bold text-white">DOWNLOAD THE GUIDE</span>
        </button>
      </form>
      {/* image */}
      <img src={img} alt="book" className="w-1/3 rounded-2xl" />
    </div>
  );
}
