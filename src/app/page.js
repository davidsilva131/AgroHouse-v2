import Agro from "./Agro";
import AgroDescription from "./AgroDescription";

export default function Home () {

  return (
    <main className='py-11 px-4 flex flex-col'>
      <Agro />
      <AgroDescription />
    </main>
  )
}
