import { supabase } from '@/services/supabaseConfig'

export async function createNewUser(mail, password) {
  const { data, error } = await supabase.auth.signUp({
    email: mail,
    password: password,
    options: {
      emailRedirectTo: 'http://localhost:3000/',
    },
  })
}

export async function signInWithEmail(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
}
