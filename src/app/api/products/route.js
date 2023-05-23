import { getSupaProducts } from '@/services/supaProducts'
import { NextResponse } from 'next/server'

export async function GET () {
  const res = await getSupaProducts()
  return NextResponse.json(res)
}