
import Image from 'next/image'
import Img from "../assets/jahanzeb-ahsan-8a3-6yE-fio-unsplash.jpg"
import Img2 from "../assets/Decorative border.png"
import Link from 'next/link'



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
              className="text-[clamp(72px,23vw,280px)] leading-[0.88] tracking-tight uppercase select-none font-jaro"
            >
              UÉLOCE 
            </h1>
          </div>

          {/* RIGHT — Tagline + Nav */}
          <div className="flex flex-col justify-between px-6 py-6 md:px-10 md:py-10 ">
            {/* Tagline */}
            <p
              className="text-2xl hidden sm:block font-staat ">
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
                      className="nav-link text-xl font-semibold tracking-tight uppercase font-jaro transition-opacity hover:opacity-60">
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
          className="bg-secondary flex flex-col gap-10 p-5 "
        >
          <h2
            className="text-3xl uppercase font-staat"
            
          >
            The only spirit-free aperitif that tastes as good as it <br/> makes you feel.
          </h2>

          <button
            className="self-start bg-primary text-secondary font-bold tracking-tight uppercase text-xl px-4 py-3 font-jaro rounded-md cursor-pointer hover:text-primary hover:bg-secondary hover:border-2 transition-all duration-300"
           
          >
            Shop Now
          </button>
        </div>

        {/* RIGHT — Cocktail Image */}
        <div className="relative min-h-[55vw] md:min-h-0 overflow-hidden bg-neutral-200">
          {/* 
            Replace this src with your actual image.
            Example: src="/images/cocktails-hero.jpg"
          */}
          <Image
            src={Img}
            alt="VÉLOCE zero-proof aperitif cocktails"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 70vw"
            className="object-cover object-center"
          />

          {/* Subtle darkening overlay at left edge to blend with tan section */}
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[var(--color-brand-tan)]/30 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* ─────────────────────────────── CHECKERBOARD STRIP ─── */}
      <div className="checkerboard-cream h-[22px] w-full" aria-hidden="true" />

      {/* ─────────────────────────────── ABOUT SECTION ──────── */}
      <section
        id="about"
        className="bg-[var(--color-brand-black)] text-white px-6 py-20 md:px-20 md:py-28"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <h3
            className="text-[clamp(40px,7vw,90px)] leading-none uppercase text-[var(--color-brand-tan)]"
            style={{ fontFamily: 'var(--font-bebas)' }}
          >
            Crafted for the conscious drinker.
          </h3>
          <div className="space-y-5">
            <p
              className="text-[clamp(14px,1.4vw,16px)] font-semibold tracking-[0.1em] uppercase text-neutral-400"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              What We Stand For
            </p>
            <p
              className="text-base md:text-lg text-neutral-300 leading-relaxed font-medium"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              VÉLOCE was built for those who refuse to compromise — on taste, on
              experience, or on how they feel the morning after. Complex botanical
              flavour. Zero alcohol. Endless possibilities.
            </p>
            <a
              href="#contact"
              className="nav-link inline-block font-black tracking-[0.2em] uppercase text-sm text-[var(--color-brand-tan)] mt-4"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              Learn More →
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────── CHECKERBOARD STRIP ─── */}
      <div className="checkerboard h-[22px] w-full" aria-hidden="true" />

      {/* ─────────────────────────────── FOOTER ─────────────── */}
      <footer
        id="contact"
        className="bg-white px-6 py-12 md:px-20 md:py-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-t border-[var(--color-brand-black)]/10"
      >
        <span
          className="text-[clamp(28px,5vw,52px)] leading-none uppercase text-[var(--color-brand-black)]"
          style={{ fontFamily: 'var(--font-bebas)' }}
        >
          VÉLOCE
        </span>

        <nav>
          <ul
            className="flex flex-wrap gap-x-8 gap-y-3 font-bold tracking-[0.18em] uppercase text-sm text-[var(--color-brand-black)]"
            style={{ fontFamily: 'var(--font-barlow)' }}
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
          style={{ fontFamily: 'var(--font-barlow)' }}
        >
          © {new Date().getFullYear()} VÉLOCE
        </p>
      </footer>
    </main>
  )
}