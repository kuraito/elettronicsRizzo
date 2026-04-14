import { createClient } from "@/lib/supabase/server";

export type Turno = { apertura: string; chiusura: string };

export type GiornoOrario = {
  giorno: string;
  chiuso: boolean;
  mattina: Turno;
  pomeriggio: Turno | null;
};

const BUCKET = "config";
const FILE = "orari.json";

// Fallback usato se il file non esiste ancora nel bucket
const DEFAULT_ORARI: GiornoOrario[] = [
  { giorno: "Lunedì",    chiuso: false, mattina: { apertura: "07:30", chiusura: "13:00" }, pomeriggio: { apertura: "16:00", chiusura: "20:00" } },
  { giorno: "Martedì",   chiuso: false, mattina: { apertura: "07:30", chiusura: "13:00" }, pomeriggio: { apertura: "16:00", chiusura: "20:00" } },
  { giorno: "Mercoledì", chiuso: false, mattina: { apertura: "07:30", chiusura: "13:00" }, pomeriggio: { apertura: "16:00", chiusura: "20:00" } },
  { giorno: "Giovedì",   chiuso: false, mattina: { apertura: "07:30", chiusura: "13:00" }, pomeriggio: { apertura: "16:00", chiusura: "20:00" } },
  { giorno: "Venerdì",   chiuso: false, mattina: { apertura: "07:30", chiusura: "13:00" }, pomeriggio: { apertura: "16:00", chiusura: "20:00" } },
  { giorno: "Sabato",    chiuso: false, mattina: { apertura: "07:30", chiusura: "13:00" }, pomeriggio: { apertura: "16:00", chiusura: "20:00" } },
  { giorno: "Domenica",  chiuso: true,  mattina: { apertura: "",      chiusura: ""      }, pomeriggio: null },
];

export async function getOrari(): Promise<GiornoOrario[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.storage.from(BUCKET).download(FILE);
    if (error || !data) return DEFAULT_ORARI;
    const text = await data.text();
    return JSON.parse(text) as GiornoOrario[];
  } catch {
    return DEFAULT_ORARI;
  }
}

export async function saveOrari(orari: GiornoOrario[]): Promise<void> {
  const supabase = await createClient();
  const blob = new Blob([JSON.stringify(orari, null, 2)], {
    type: "application/json",
  });
  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(FILE, blob, { upsert: true, contentType: "application/json" });
  if (error) throw new Error(error.message);
}

export function formatOrario(g: GiornoOrario): string {
  if (g.chiuso) return "Chiuso";
  const parts: string[] = [];
  if (g.mattina.apertura && g.mattina.chiusura)
    parts.push(`${g.mattina.apertura} - ${g.mattina.chiusura}`);
  if (g.pomeriggio?.apertura && g.pomeriggio?.chiusura)
    parts.push(`${g.pomeriggio.apertura} - ${g.pomeriggio.chiusura}`);
  return parts.join(" / ") || "Chiuso";
}
