import Button from "../Button";
import Image from 'next/image'
import Img from "@/app/assets/k15-photos-SMUrHECtH3M-unsplash.jpg"


export default function Home2nd(){
    return(
        
<>
                  {/* ─────────────────────────────── 2nd SECTION  Part 1 ──--------- */}

              <section className="grid grid-cols-1 md:grid-cols-[2fr_5fr] min-h-[60vh]">

        {/* LEFT — Headline + CTA */}
        <div
          className="bg-secondary flex flex-col gap-13 p-8 "
        >
          <h2
            className=" text:3xl sm:text-4xl md:text-5xl uppercase font-staat "
            
          >
            The only spirit-free aperitif that tastes as good as it  makes you feel.
          </h2>

     <Button text='Shop Now'/>
        </div>

        {/* RIGHT Image */}
        <div className="relative min-h-[55vw] md:min-h-0 overflow-hidden bg-neutral-200">
          <Image
            src={Img}
            alt="VÉLOCE zero-proof aperitif cocktails"
            fill
            priority
            
            className="object-cover object-bottom"
          />

          {/* Subtle darkening overlay at left edge to blend with tan section */}
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[var(--color-brand-tan)]/30 to-transparent pointer-events-none" />
        </div>
      </section>


                  {/*-----------------------  2nd SECTION  Part 2 ----------------------- */}
              <section
                className=" px-6 py-10 md:px-10 md:py-12 bg-accent"
              >
                <div className="max-w-5xl md:max-w-7xl mx-auto  items-center space-y-13">
                  <h3 className='text-2xl sm:text-4xl md:text-6xl font-staat'>
                   Véloce is the ZERO-PROOF aperitif for modern living,
                    crafted with super herbs and nutraceuticals to elevate your well-being, 
                   without compromising the sophisticated ritual of the aperitif.
                  </h3>
                  <Button text='About Us'/>
                  </div>
              </section>


              </>
    )
}