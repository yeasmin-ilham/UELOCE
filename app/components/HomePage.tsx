

import  border from "../assets/Decorative border.png"
import Image from "next/image"


export default function HomePage(){
    return(
       <section className="min-h-screen bg-accent">

          {/* 1st section */}
          <div className="grid grid-cols-1 md:grid-cols-2">

         <div>
         <h1 className="font-jaro text-3xl sm:text-center sm:text-[12rem] lg:text-[15rem] p-5 sm:p-0 tracking-tight ">UELOCE</h1>
         </div>

         <div className="font-staat space-y-20  sm:mt-8">
        <p className="text-2xl hidden sm:block pl-5">The ZERO-PROOF aperitif for modern living.</p>
        <div className=" px-5 font-medium sm:flex justify-between border-t-1 border-gray-300">
            <p>About</p>
            <p>Find Stocklists</p>
            <p>Contact</p>
        </div>
        
         </div>

         </div>

   {/* border */}

   <div className="mt-3">
       <Image
        src={border}
        alt="border"
       className="object-cover w-full" />
   </div>



   {/*  2nd section */}

       </section>
)}