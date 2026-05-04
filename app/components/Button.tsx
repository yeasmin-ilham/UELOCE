"use client"
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";


interface ButtonProps {
  text: string;
  
}

export default function Button({text }:ButtonProps){
  const {pending} = useFormStatus()
    return(
    <>
        {pending ? (
          <button disabled >
            <Loader2 className="animate-spin mr-2 w-4 h-4"/>
            Please Wait
          </button>
        ): (   <div>
            <button
            className="self-start bg-primary text-secondary font-bold tracking-tight
             uppercase text-2xl px-4 py-3 font-jaro rounded-md cursor-pointer hover:text-primary 
             hover:bg-secondary hover:border-2 transition-all duration-300 scale-105"
           
            >
            {text}
          </button>
      </div> )}
   
      </> 
    )
}



