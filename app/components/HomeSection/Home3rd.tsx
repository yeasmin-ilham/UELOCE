import Image from "next/image";
import Img3 from "@/app/assets/aneta-voborilova-gEkTo1Oi78A-unsplash.jpg"

export default function Home3rd() {
  return (

     <section className="relative h-200 overflow-hidden flex items-end justify-center">

      {/* Background Image */}
      <Image
        src={Img3}
        alt="Primavera aperitif in a crystal glass"
        fill
        priority
        className="absolute inset-0  object-cover w-full object-top"
      />

      {/* Dark overlay for extra depth */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Foreground Content */}
      <div className="absolute z-10 flex flex-col pb-20 px-6 text-center text-white">

        {/* NEW Badge */}
        <div className="mb-4">
          <span
            className="border-2 border-white rounded-full px-4 py-1 text-xs font-bold tracking-widest uppercase"
          >
            New
          </span>
        </div>

        {/* Product Name */}
        <h1
          className="text-9xl font-staat leading-none uppercase"
        >
          Primavera
        </h1>

        {/* Description */}
        <p
          className="mt-4 text-2xl sm:text-3xl  uppercase text-white/90 max-w-md leading-relaxed font-staat"
        >
          A bold, spiced aperitif featuring cardamom,
          ginger, and cinnamon.
        </p>

      </div>
    </section>
  );
}
