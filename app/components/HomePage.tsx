
import Image from 'next/image'
import Img from "../assets/jahanzeb-ahsan-8a3-6yE-fio-unsplash.jpg"
import Img2 from "../assets/Decorative border.png"
import Link from 'next/link'
import Button from './Button'
import Img3 from "../assets/Image 05.png"
import Home3rd from './Home3rd'



export default function HomePage() {
  return (
    <main
      className="min-h-screen overflow-x-hidden">
      {/* ─────────────────────────────────────── HERO HEADER ─── */}
      <section className="bg-accent">
        <div className="grid grid-cols-1 md:grid-cols-2 ">

          {/* LEFT — Brand Name */}
          <div>

            <h1
              className="text-[clamp(60px,20vw,200px)] lg:text-[clamp(80px,25vw,280px)] leading-[0.88] tracking-tight uppercase select-none font-jaro ml-4"
            >
              UÉLOCE 
            </h1>
          </div>

          {/* RIGHT — Tagline + Nav */}
          <div className="flex flex-col justify-between px-6 py-6 md:px-10 md:py-10 ">
            {/* Tagline */}
            <p
              className="text-3xl hidden sm:block font-staat ">
              The Zero-Proof Aperitif for Modern Living.
            </p>

            {/* Nav */}
            <nav>
              <div className="border-t" />
              <ul className="flex flex-wrap justify-between gap-y-2 pt-4">
                {['About', 'Find Stocklists', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="nav-link text-2xl font-semibold tracking-tight uppercase font-jaro transition-opacity hover:opacity-60">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* decorative border */}
        <div>
            <Image
            src={Img2}
            alt='Image'
            className='w-full object-cover'/>
        </div>
      </section>


      {/* ─────────────────────────────── HERO CONTENT SECTION ── */}
      <section className="grid grid-cols-1 md:grid-cols-[2fr_5fr] min-h-[60vh]">

        {/* LEFT — Headline + CTA */}
        <div
          className="bg-secondary flex flex-col gap-13 p-8 "
        >
          <h2
            className="text-4xl md:text-5xl uppercase font-staat "
            
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
            
            className="object-cover object-center"
          />

          {/* Subtle darkening overlay at left edge to blend with tan section */}
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[var(--color-brand-tan)]/30 to-transparent pointer-events-none" />
        </div>
      </section>



      {/* ─────────────────────────────── Home page 2nd SECTION ──────── */}
      <section
        className=" px-6 py-10 md:px-10 md:py-12 bg-accent"
      >
        <div className="max-w-5xl md:max-w-7xl mx-auto  items-center space-y-13">
          <h3 className='text-6xl font-staat'>
           Véloce is the ZERO-PROOF aperitif for modern living,
            crafted with super herbs and nutraceuticals to elevate your well-being, 
           without compromising the sophisticated ritual of the aperitif.
          </h3>
          <Button text='About Us'/>
          </div>
          
      </section>


            {/* ------Home page 3rd section------- */}
            <Home3rd/>

            {/*  */}

      {/* ─────────────────────────────── FOOTER ─────────────── */}
      <footer
        className="bg-accent px-6 py-12 md:px-20  flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-t border-gray-400 font-staat"
      >
        <span
          className="text-5xl leading-none uppercase font-jaro "

        >
          UÉLOCE
        </span>

        <nav>
          <ul
            className="flex flex-wrap gap-x-8 gap-y-3 font-bold tracking-tight uppercase text-sm text-gray-500"
          >
            {['About', 'Find Stocklists', 'Contact', 'Instagram', 'Privacy'].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:opacity-50 transition-opacity nav-link"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>

        <p
          className="text-xs tracking-widest uppercase text-neutral-400 font-semibold"
        >
          © {new Date().getFullYear()} VÉLOCE
        </p>
      </footer>

    </main>
  )
}


