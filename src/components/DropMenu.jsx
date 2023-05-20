import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { PAGES_LINKS } from './constants';
import Link from 'next/link';
const DropMenu = () => {
  return (
    <DropdownMenu.Root className='md:hidden'>
      <DropdownMenu.Trigger asChild>
        <button className='rounded-full w-9 h-9 inline-flex items-center justify-center bg-transparent text-white' aria-label="Links de paginas">
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className='min-w-fit bg-white rounded-md p-2 md:hidden shadow-md animate-fade-down animate-duration-500' sideOffset={5}>
          {
            PAGES_LINKS.map(page => (
              <DropdownMenu.Item key={`${page.text} hamburguer`} className='text-xs text-green-700 rounded flex items-center h-6 px-1'>
                <Link href={page.url}>
                  {page.text}
                </Link>
              </DropdownMenu.Item>
            ))
          }
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default DropMenu