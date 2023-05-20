import { AGRO_DESCRIPTION } from "@/components/constants"
import Image from "next/image"
const AgroDescription = () => {
  return (
    <section className='w-full flex flex-wrap py-20 border-b border-black border-opacity-30 justify-center gap-4 animate-fade-right'>
      {
        AGRO_DESCRIPTION.map(desc => (
          <article className='w-80 flex flex-col items-center border border-green-700 border-opacity-25 shadow-lg rounded gap-3 px-4 py-3' key={desc.title}>
            <picture>
              <Image src={desc.image} width={150} height={150} alt={desc.title} />
            </picture>
            <div>
              <h4 className='text-green-400 font-bold uppercase'>{desc.title}</h4>
            </div>
            <div>
              <p className='text-xs text-center'>{desc.text}</p>
            </div>
          </article>
        ))
      }
    </section>
  )
}

export default AgroDescription