const Agro = () => {
  return (
    <section className='w-full flex flex-col items-center pb-20 border-b border-black border-opacity-25 animate-fade-right'>
      <aside>
        <h1 className='text-4xl md:text-6xl font-bold uppercase'>Agro <span className='text-green-700'>House</span></h1>
      </aside>
      <aside className='flex flex-col gap-3 items-center text-center mt-4'>
        <h2 className='text-base md:text-xl font-semibold uppercase'>Del <span className='text-green-700'>campo</span> para <span className='text-green-700'>todos</span></h2>
        <h3 className='text-sm md:text-lg'>Conectando con las regiones, sus campesinos y sus productos</h3>
      </aside>
    </section>
  )
}

export default Agro