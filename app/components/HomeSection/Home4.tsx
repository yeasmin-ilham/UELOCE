
import wine1 from "@/app/assets/Image 02.png"
import wine2 from "@/app/assets/Image 03.png"
import wine3 from "@/app/assets/Image 04.png"
import Image from "next/image"

const product = [

 { 
    id:1,
  Img: wine1,
  description:"A delicate and floral aperitif with notes of lavender and chamomile.",
  label:"Find near you",
  name:"Lavande"

 },
 {
    id:2,
  Img:wine2,
  description:"A delicate and floral aperitif with notes of lavender and chamomile.",
  label:"Find near you",
 name:"primavera"

 },
 {
    id:3,
  Img:wine3,
  description:"A delicate and floral aperitif with notes of lavender and chamomile.",
  label:"Find near you",
 name:"spezia"
 }
]
   


export default function Home4(){
    return(
        <section className="relative overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-accent p-10 max-w-7xl space-x-5 mx-auto  ">

    {product.map((item)=>(
        <div key={item.id}>
            <p className="absolute z-10 p-5 text-white text-4xl font-staat">{item.name}</p>
            <Image
            src={item.Img}
            alt="Image" className="object-cover w-full hover:opacity-60 transition-all duration-300 cursor-pointer"
            />
            
           <div className="flex flex-col font-staat space-y-3 text:normal md:text-xl">
             <p>{item.description}</p>
             <p>{item.label}</p>
           </div>
        </div>
    ))}



        </section>
    )
}