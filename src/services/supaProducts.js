import { supabase } from '@/services/supabaseConfig'

export async function getSupaProducts () {
  let { data: products, error } = await
    supabase
      .from('products')
      .select('*')

  return products
}