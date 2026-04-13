"use server";

import { revalidatePath } from "next/cache";
import { saveOrari, getOrari, type GiornoOrario } from "@/lib/orari";
import { createClient } from "@/lib/supabase/server";

export { getOrari };

export async function updateOrari(
  orari: GiornoOrario[]
): Promise<{ success: true } | { success: false; error: string }> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { success: false, error: "Non autorizzato" };

  try {
    saveOrari(orari);
    revalidatePath("/");
    return { success: true };
  } catch {
    return { success: false, error: "Errore nel salvataggio degli orari" };
  }
}
