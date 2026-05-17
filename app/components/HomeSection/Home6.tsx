import Image from "next/image";
import cocktailImg from "@/app/assets/hogir-saeed-5tG427SMcCM-unsplash.jpg";

export default function Home6() {
  return (
    <section className="grid grid-cols-2 min-h-[650px] bg-white overflow-hidden">
      {/* Left: Text */}
      <div className=" flex justify-center p-12">
        <h2 className="font-barlow-condensed font-staat uppercase text-2xl sm:text-4xl max-w-md">
          Experience the refined taste of Véloce. Visit our premium stockists
          for your next alcohol-free aperitif.
        </h2>
      </div>

      {/* Right: Image */}
      <div className="relative overflow-hidden">
        <Image
          src={cocktailImg}
          alt="Hand holding a rocks glass with dark amber cocktail, ice, and an orange peel garnish"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}