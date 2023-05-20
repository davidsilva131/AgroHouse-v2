'use client'
import DropMenu from "./DropMenu"
import LinkLogo from "./LinkLogo"
import Links from "./Links"

const NavBar = () => {
  return (
    <header className="w-full h-20 md:h-32 flex items-center px-4 bg-green-700">
      <section className='hidden md:flex'>
        <LinkLogo />
      </section>
      <section className='flex w-full justify-between'>
        <div className='flex md:hidden'>
          <DropMenu />
        </div>
        <Links />
        <div className='flex gap-4'>
          <button type='button' className='w-fit p-1 flex justify-center items-center bg-white rounded text-xs md:text-base md:p-2 hover:bg-opacity-80 hover:shadow-sm'>Registrarse</button>
          <button type='button' className='w-fit p-1 flex justify-center items-center bg-green-500 rounded text-xs text-white md:text-base md:p-2 hover:bg-opacity-80 hover:shadow-sm'>Iniciar sesión</button>
        </div>
      </section>
    </header>
  )
}

export default NavBar