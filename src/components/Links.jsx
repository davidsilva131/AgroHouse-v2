import Link from "next/link"
import { PAGES_LINKS } from "./constants"

const Links = () => {
  return (
    <nav className='hidden md:flex justify-center items-center pl-8'>
      <ul className='flex gap-7'>
        {
          PAGES_LINKS.map(page => (
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