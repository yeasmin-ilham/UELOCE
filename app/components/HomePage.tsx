
import Image from 'next/image'
import Img2 from "../assets/Decorative border.png"
import Link from 'next/link'
import Home3rd from './HomeSection/Home3rd'
import Home2nd from './HomeSection/Home2nd'
import Home4 from './HomeSection/Home4'



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


      {/* ─────────────────────────────── Home page 2nd SECTION ──────── */}
                  <Home2nd/>


            {/* -------------Home page 3rd section------------ */}

            <Home3rd/>

            {/* -------------Home page 4rth section------------ */}
            <Home4/>

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


