import { supabase } from '@/services/supabaseConfig'

export async function getSupaProducts() {
  let { data: products, error } = await supabase.from('products').select('*')

  return products
}

export async function getSupaLatestProducts() {
  let { data: latesProducts, error } = await supabase
    .from('products')
    .select('*')
    .range(0, 3)

  return latesProducts
}

export async function createNewUser(mail, password) {
  const { data, error } = await supabase.auth.signUp({
    email: mail,
    password: password,
    options: {
      emailRedirectTo: 'http://localhost:3000/',
    },
  })
}
