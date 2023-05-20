import Agricultores from "./Agricultores";
import Agro from "./Agro";
import AgroDescription from "./AgroDescription";
import LatestProducts from "./LatestProducts";

export default function Home () {

  return (
    <main className='py-11 px-4 flex flex-col'>
      <Agro />
      <AgroDescription />
      <LatestProducts />
      <Agricultores />
    </main>
  )
}
