import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kpyeaithydmbskpnztsp.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_API_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)

