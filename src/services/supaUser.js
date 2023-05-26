import { supabase } from '@/services/supabaseConfig'
import { useRouter } from 'next/navigation'

export async function createNewUser(mail, password) {
  const { data, error } = await supabase.auth.signUp({
    email: mail,
    password: password,
  })
}

export async function signInWithEmail(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
}

export async function signOutUser() {
  const { error } = await supabase.auth.signOut()
}

export async function getUserSession() {
  const { data } = await supabase.auth.getUser()
  return data.user
}
