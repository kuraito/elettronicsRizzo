type SupabaseErrorLike = {
  message?: string;
  code?: string;
  status?: number;
  error?: string;
} | null | undefined;

export function handleSupabaseError(
  error: SupabaseErrorLike,
  context?: string
): string {
  if (!error) {
    return "Errore sconosciuto. Riprova.";
  }

  const msg = (error.message ?? error.error ?? "").toLowerCase();
  const code = error.code ?? "";
  const status = error.status ?? 0;

  // Progetto Supabase in pausa
  if (
    status === 503 ||
    status === 544 ||
    msg.includes("project paused") ||
    msg.includes("project is paused")
  ) {
    return "Il progetto Supabase è in pausa per inattività. Vai sulla dashboard Supabase e clicca \"Restore project\", poi riprova.";
  }

  // Errori di connessione / rete
  if (
    msg.includes("failed to fetch") ||
    msg.includes("networkerror") ||
    msg.includes("network error") ||
    msg.includes("fetch failed") ||
    msg.includes("typeerror") ||
    msg.includes("econnrefused") ||
    msg.includes("enotfound") ||
    error.message === null ||
    error.message === undefined
  ) {
    return "Servizio non raggiungibile. Il progetto potrebbe essere in pausa per inattività. Riprova tra qualche minuto o controlla la dashboard Supabase.";
  }

  // Storage quota
  if (
    msg.includes("quota") ||
    msg.includes("storage limit") ||
    msg.includes("exceeded") ||
    msg.includes("storage quota")
  ) {
    return "Limite spazio di archiviazione immagini raggiunto. Aggiorna il piano Supabase per continuare a caricare immagini.";
  }

  // Database quota / piano gratuito
  if (
    msg.includes("database size") ||
    msg.includes("limit reached") ||
    msg.includes("row limit") ||
    msg.includes("database limit")
  ) {
    return "Limite del piano gratuito raggiunto. Non è possibile aggiungere altri prodotti. Aggiorna il piano Supabase.";
  }

  // Errori PostgreSQL per codice
  if (code === "42501") {
    return "Non sei autorizzato. Effettua il login come admin.";
  }

  if (code === "23505") {
    return "Esiste già un prodotto con questi dati.";
  }

  if (code === "23502") {
    return "Compila tutti i campi obbligatori.";
  }

  if (code === "PGRST116") {
    return "Nessun prodotto trovato.";
  }

  // Fallback: messaggio originale
  const originalMsg = error.message ?? error.error ?? "Errore imprevisto";
  const prefix = context ? `[${context}] ` : "";
  return `${prefix}Errore: ${originalMsg}`;
}
