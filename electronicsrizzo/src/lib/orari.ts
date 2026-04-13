import fs from "fs";
import path from "path";

export type Turno = { apertura: string; chiusura: string };

export type GiornoOrario = {
  giorno: string;
  chiuso: boolean;
  mattina: Turno;
  pomeriggio: Turno | null;
};

const filePath = path.join(process.cwd(), "src/data/orari.json");

export function getOrari(): GiornoOrario[] {
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

export function saveOrari(orari: GiornoOrario[]): void {
  fs.writeFileSync(filePath, JSON.stringify(orari, null, 2), "utf-8");
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
