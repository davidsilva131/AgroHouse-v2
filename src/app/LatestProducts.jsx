'use client'
import React from 'react'
import { useInView } from 'react-intersection-observer'

const LatestProducts = ({prods}) => {
  const { ref: productsRef, inView: productsIsVisible } = useInView()
  
  return (
    <section ref={productsRef} className={`w-full h-20 py-20 flex justify-center items-center border-b border-black border-opacity-30 ${productsIsVisible && 'animate-fade-right'}`}>
      <h2>
        {
          prods.map(el=>(
            <div key={el.id}>
              <p>{el.id}</p>
              <p>{el.name}</p>
              <p>{el.image}</p>
            </div>
          ))
        }
      </h2>
    </section>
  )
}

export default LatestProducts