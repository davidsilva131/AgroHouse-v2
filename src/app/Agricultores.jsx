'use client'
import { useInView } from 'react-intersection-observer'

const Agricultores = ({ farmers }) => {
  const { ref: agricultoresRef, inView: agricultoresIsVisible } = useInView()
  return (
    <section
      ref={agricultoresRef}
      className={`w-full h-20 py-20 flex justify-center items-center border-b border-black border-opacity-30 ${
        agricultoresIsVisible && 'animate-fade-right'
      }`}
    >
      <h2>Agricultores</h2>
    </section>
  )
}

export default Agricultores
