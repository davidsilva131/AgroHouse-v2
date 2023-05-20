import Link from "next/link"
import Logo from '@/assets/logo.webp'
import Image from "next/image"
const LinkLogo = () => {
  return (
    <Link href='/' aria-label='Inicio'>
      <picture className="w-[150px] h-[95px]">
        <Image src={Logo} width={150} height={95} alt='AgroHouse logo' />
      </picture>
    </Link>
  )
}

export default LinkLogo