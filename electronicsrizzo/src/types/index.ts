export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image_url: string | null;
  category: string;
  created_at: string;
  featured: boolean;
}

export type ProductInsert = Omit<Product, "id" | "created_at" | "featured">;
export type ProductUpdate = Partial<ProductInsert>;

export type ActionResult =
  | { success: true; message: string }
  | { success: false; error: string };
