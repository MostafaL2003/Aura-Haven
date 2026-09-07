import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://bvzkwrzphkarnptatger.supabase.co";
const supabaseKey = "sb_publishable_dgMe84k9tO6ULOZejt1MIQ_UDIPY_yJ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
