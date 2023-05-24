'use client'
import { numberToMoney } from '@/utils/moneyFormat'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

const LatestProducts = ({ prods }) => {
  const { ref: productsRef, inView: productsIsVisible } = useInView()

  return (
    <section
      ref={productsRef}
      className={`w-full py-20 flex flex-wrap gap-4 justify-center border-b border-black border-opacity-30 ${
        productsIsVisible && 'animate-fade-right'
      }`}
    >
      {prods.map((el) => (
        <article
          key={el.id}
          className='w-52 rounded-md  flex flex-col gap-3 border items-center border-green-700 border-opacity-20 shadow-lg p-2'
        >
          <picture className='w-full h-[150px] flex justify-center'>
            <Image
              className='rounded-full w-[150px] h-[150px]'
              src={el.image}
              alt={`${el.name} image`}
              width={150}
              height={150}
            />
          </picture>
          <span className='text-green-400 text-lg font-bold uppercase'>
            {el.name}
          </span>
          <span className='text-sm'>{numberToMoney(el.price)}</span>
          <span className='text-base'>{el.region}</span>
        </article>
      ))}
    </section>
  )
}

export default LatestProducts
