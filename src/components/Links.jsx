import Link from "next/link"

const PAGES = [
  {
    text: 'Inicio',
    url: '/'
  },
  {
    text: 'Eventos',
    url: '/eventos'
  },
  {
    text: 'Productos',
    url: '/productos'
  }
]

const Links = () => {
  return (
    <nav className='hidden md:flex justify-center items-center pl-8'>
      <ul className='flex gap-7'>
        {
          PAGES.map(page => (
            <li key={page.text}>
              <Link href={page.url} className='text-white uppercase transition-all ease-in-out duration-500 hover:text-green-400'>
                {page.text}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Links