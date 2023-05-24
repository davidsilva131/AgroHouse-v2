import { getSupaLatestProducts } from '@/services/supaProducts'
import { NextResponse } from 'next/server'

export async function GET() {
  const res = await getSupaLatestProducts()
  return NextResponse.json(res)
}
