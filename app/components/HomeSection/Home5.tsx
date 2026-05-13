import Link from "next/link";

const links = [

  {  id:1, label: "LAVANDE" },
  {  id:2, label: "SPEZIA" },
  {  id:3,  label: "PRIMAVERA" },
];

export default function LocationBanner() {
  return (
    <section
      className="w-full min-h-[340px] px-6 py-3 md:px-12 md:py-5 bg-secondary"

    >
      <Link href={"/find-us"} className="flex flex-col  font-staat">
        {links.map(( title ) => (
          <span
            key={title.id}
            className="block text-6xl md:text-9xl text-accent1 uppercase cursor-pointer transition-opacity duration-200 hover:opacity-70 "
          >
            {title.label}
          </span>
        ))}

        <span
          className="block text-6xl md:text-9xl text- uppercase cursor-pointer transition-opacity duration-200 hover:opacity-70"
        >
          FIND US
        </span>
      </Link>
    </section>
  );
}

