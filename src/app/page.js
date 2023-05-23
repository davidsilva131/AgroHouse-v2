import Agricultores from "./Agricultores";
import Agro from "./Agro";
import AgroDescription from "./AgroDescription";
import LatestProducts from "./LatestProducts";

export async function getLatestProducts(){
  const res= await fetch('http://localhost:3000/api/products')
  const data = await res.json()
  return data
}

export async function getFarmers(){
  const res= await fetch('http://localhost:3000/api/farmers')
  const data= await res.json()
  return data
}

export default async function Home () {
  const latestProds= await getLatestProducts()
  const farmers= await getFarmers()
  return (
    <main className='py-11 px-4 flex flex-col'>
      <Agro />
      <AgroDescription />
      <LatestProducts prods={latestProds} />
      <Agricultores farmers={farmers} />
    </main>
  )
}
