'use client'
import { createNewUser, signInWithEmail } from '@/services/supaUser'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Swal from 'sweetalert2'

const emailRegex = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')
const DialogRegister = ({ setSession }) => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleSignUp = () => {
    const { value: email } = document.getElementById('correo')
    const { value: password } = document.getElementById('password')
    if (email !== '' && emailRegex.test(email) && password !== '') {
      try {
        createNewUser(email, password)
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo ha salido mal!',
        })
      } finally {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Cuenta creada',
          showConfirmButton: false,
          timer: 1500,
        })
        signInWithEmail(email, password)
        setIsOpen(false)
        router.refresh()
      }
    } else {
      Swal.fire({
        icon: 'error',
        text: 'Porfavor ingrese todos los campos',
      })
    }
  }

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Trigger onClick={() => setIsOpen(true)} asChild>
        <button
          type='button'
          className='w-fit p-1 flex justify-center items-center bg-white rounded text-xs md:text-base md:p-2 hover:bg-opacity-80 hover:shadow-sm'
        >
          Registrarse
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-20' />
        <Dialog.Content className='bg-white rounded-md shadow-lg fixed top-[50%] left-[50%] -translate-x-2/4 w-full max-w-md max-h-[85vh] p-6 focus:outline-none'>
          <Dialog.Title className='mb-4 font-normal text-green-400 text-base'>
            Registrate
          </Dialog.Title>
          <form>
            <fieldset className='flex gap-5 items-center mb-4 pr-4'>
              <label className='text-base text-black w-24 ' htmlFor='correo'>
                Correo
              </label>
              <input
                type='email'
                className='w-full flex-1 inline-flex items-center justify-center rounded px-2 text-base text-black shadow-lg h-9'
                id='correo'
                placeholder='example@correo.com'
                required
                pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                title='Ingrese un correo valido'
              />
            </fieldset>
            <fieldset className='flex gap-5 items-center mb-4'>
              <label className='text-base text-black w-24' htmlFor='password'>
                Contraseña
              </label>
              <input
                type='password'
                className='w-full flex-1 inline-flex items-center justify-center rounded px-2 text-base text-black shadow-lg h-9'
                id='password'
                placeholder='Ingresa tu contraseña'
                min={6}
                required
              />
            </fieldset>
            <div className='flex flex-col justify-center mt-25 gap-4'>
              <Dialog.Close asChild>
                <button
                  type='button'
                  onClick={handleSignUp}
                  className='flex justify-center items-center rounded bg-green-400 text-white p-2 hover:shadow-lg hover:opacity-90'
                >
                  Registrarse
                </button>
              </Dialog.Close>
              <Dialog.Close asChild>
                <button className='flex justify-center items-center rounded bg-green-400 text-white p-2 hover:shadow-lg hover:opacity-90'>
                  Google
                </button>
              </Dialog.Close>
            </div>
          </form>
          <Dialog.Close onClick={() => setIsOpen(!isOpen)} asChild>
            <button
              className='rounded-full h-6 w-6 inline-flex items-center justify-center text-green-700 absolute top-3 right-3'
              aria-label='Close'
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default DialogRegister
