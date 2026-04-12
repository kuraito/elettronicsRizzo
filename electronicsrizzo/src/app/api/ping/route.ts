import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();
  await supabase.from("products").select("id").limit(1);
  return NextResponse.json({ ok: true, timestamp: new Date().toISOString() });
}
