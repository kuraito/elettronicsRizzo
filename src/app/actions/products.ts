"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { handleSupabaseError } from "@/lib/supabase/handle-error";
import type { ActionResult, ProductInsert, ProductUpdate } from "@/types";

export async function getProducts() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(handleSupabaseError(error, "getProducts"));
  return data;
}

export async function createProduct(formData: FormData): Promise<ActionResult> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log("[createProduct] user:", user?.id ?? "NULL - non autenticato");
  if (!user) return { success: false, error: "Non sei autorizzato. Effettua il login come admin." };

  const product: ProductInsert = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    price: formData.get("price") as string,
    category: formData.get("category") as string,
    image_url: (formData.get("image_url") as string) || null,
  };

  const imageFile = formData.get("image_file") as File | null;
  if (imageFile && imageFile.size > 0) {
    const ext = imageFile.name.split(".").pop();
    const path = `products/${Date.now()}.${ext}`;
    const { error: uploadError } = await supabase.storage
      .from("product-images")
      .upload(path, imageFile, { upsert: false });

    if (uploadError) {
      return { success: false, error: handleSupabaseError(uploadError, "upload immagine") };
    }

    const { data: urlData } = supabase.storage
      .from("product-images")
      .getPublicUrl(path);
    product.image_url = urlData.publicUrl;
  }

  const { error } = await supabase.from("products").insert(product);
  if (error) return { success: false, error: handleSupabaseError(error, "createProduct") };

  revalidatePath("/prodotti");
  revalidatePath("/admin");
  return { success: true, message: "Prodotto creato con successo" };
}

export async function updateProduct(
  id: string,
  formData: FormData
): Promise<ActionResult> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { success: false, error: "Non sei autorizzato. Effettua il login come admin." };

  const updates: ProductUpdate = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    price: formData.get("price") as string,
    category: formData.get("category") as string,
    image_url: (formData.get("image_url") as string) || null,
  };

  const imageFile = formData.get("image_file") as File | null;
  if (imageFile && imageFile.size > 0) {
    const ext = imageFile.name.split(".").pop();
    const path = `products/${Date.now()}.${ext}`;
    const { error: uploadError } = await supabase.storage
      .from("product-images")
      .upload(path, imageFile, { upsert: false });

    if (uploadError) {
      return { success: false, error: handleSupabaseError(uploadError, "upload immagine") };
    }

    const { data: urlData } = supabase.storage
      .from("product-images")
      .getPublicUrl(path);
    updates.image_url = urlData.publicUrl;
  }

  const { error } = await supabase.from("products").update(updates).eq("id", id);
  if (error) return { success: false, error: handleSupabaseError(error, "updateProduct") };

  revalidatePath("/prodotti");
  revalidatePath("/admin");
  return { success: true, message: "Prodotto aggiornato con successo" };
}

export async function deleteProduct(id: string): Promise<ActionResult> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { success: false, error: "Non sei autorizzato. Effettua il login come admin." };

  const { error } = await supabase.from("products").delete().eq("id", id);
  if (error) return { success: false, error: handleSupabaseError(error, "deleteProduct") };

  revalidatePath("/prodotti");
  revalidatePath("/admin");
  revalidatePath("/");
  return { success: true, message: "Prodotto eliminato" };
}

export async function toggleFeatured(
  id: string,
  currentValue: boolean
): Promise<ActionResult> {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { success: false, error: "Non sei autorizzato." };

  // Se stiamo mettendo in evidenza, controlla il limite di 5
  if (!currentValue) {
    const { count } = await supabase
      .from("products")
      .select("*", { count: "exact", head: true })
      .eq("featured", true);
    if ((count ?? 0) >= 5) {
      return { success: false, error: "Puoi selezionare al massimo 5 prodotti in evidenza." };
    }
  }

  const { error } = await supabase
    .from("products")
    .update({ featured: !currentValue })
    .eq("id", id);

  if (error) return { success: false, error: handleSupabaseError(error, "toggleFeatured") };

  revalidatePath("/");
  revalidatePath("/admin");
  return { success: true, message: !currentValue ? "Prodotto in evidenza" : "Prodotto rimosso dall'evidenza" };
}

export async function getFeaturedProducts() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("featured", true)
    .order("created_at", { ascending: false });

  if (error) throw new Error(handleSupabaseError(error, "getFeaturedProducts"));
  return data;
}
