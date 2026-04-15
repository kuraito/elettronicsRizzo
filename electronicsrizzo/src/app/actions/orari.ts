"use server";

import { revalidatePath } from "next/cache";
import { saveOrari, getOrari, type GiornoOrario } from "@/lib/orari";
import { createClient } from "@/lib/supabase/server";

export { getOrari };

export async function updateOrari(
  orari: GiornoOrario[]
): Promise<{ success: true } | { success: false; error: string }> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { success: false, error: "Non autorizzato" };

  try {
    await saveOrari(orari);
    revalidatePath("/");
    revalidatePath("/admin");
    return { success: true };
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Errore nel salvataggio degli orari";
    return { success: false, error: msg };
  }
}
