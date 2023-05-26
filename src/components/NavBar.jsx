'use client'
import { useState } from 'react'
import DialogLogIn from './DialogLogIn'
import DialogRegister from './DialogRegister'
import DropMenu from './DropMenu'
import LinkLogo from './LinkLogo'
import Links from './Links'
import { signOutUser } from '@/services/supaUser'
import { useRouter } from 'next/navigation'
const NavBar = () => {
  const router = useRouter()
  const [session, setSession] = useState(null)

  const handleSignOut = async () => {
    await signOutUser()
    router.refresh()
  }

  return (
    <header className='w-full h-20 md:h-32 flex items-center px-4 bg-green-700'>
      <section className='hidden md:flex'>
        <LinkLogo />
      </section>
      <section className='flex w-full justify-between'>
        <div className='flex md:hidden'>
          <DropMenu />
        </div>
        <Links />
        <div className='flex gap-4'>
          <button
            onClick={handleSignOut}
            type='button'
            className='w-fit p-1 flex justify-center items-center bg-white rounded text-xs md:text-base md:p-2 hover:bg-opacity-80 hover:shadow-sm'
          >
            Cerrar Sesion
          </button>

          <DialogRegister setSession={setSession} />
          <DialogLogIn setSession={setSession} />
        </div>
      </section>
    </header>
  )
}

export default NavBar
