'use client'
import DialogLogIn from "./DialogLogIn"
import DialogRegister from "./DialogRegister"
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
          <DialogRegister />
          <DialogLogIn />
        </div>
      </section>
    </header>
  )
}

export default NavBar