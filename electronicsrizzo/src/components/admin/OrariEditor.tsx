"use client";

import { useState, useTransition } from "react";
import { updateOrari } from "@/app/actions/orari";
import { type GiornoOrario } from "@/lib/orari";
import { Toast, useToast } from "@/components/Toast";

export default function OrariEditor({
  initialOrari,
}: {
  initialOrari: GiornoOrario[];
}) {
  const [orari, setOrari] = useState<GiornoOrario[]>(initialOrari);
  const [isPending, startTransition] = useTransition();
  const { toast, show, hide } = useToast();

  function setGiorno(index: number, patch: Partial<GiornoOrario>) {
    setOrari((prev) =>
      prev.map((g, i) => (i === index ? { ...g, ...patch } : g))
    );
  }

  function setTurno(
    index: number,
    turno: "mattina" | "pomeriggio",
    field: "apertura" | "chiusura",
    value: string
  ) {
    setOrari((prev) =>
      prev.map((g, i) => {
        if (i !== index) return g;
        if (turno === "pomeriggio") {
          return {
            ...g,
            pomeriggio: { ...(g.pomeriggio ?? { apertura: "", chiusura: "" }), [field]: value },
          };
        }
        return { ...g, mattina: { ...g.mattina, [field]: value } };
      })
    );
  }

  function togglePomeriggio(index: number) {
    setOrari((prev) =>
      prev.map((g, i) => {
        if (i !== index) return g;
        return {
          ...g,
          pomeriggio: g.pomeriggio ? null : { apertura: "16:00", chiusura: "20:00" },
        };
      })
    );
  }

  function handleSave() {
    startTransition(async () => {
      const result = await updateOrari(orari);
      if (result.success) {
        show("Orari aggiornati con successo", "success");
      } else {
        show(result.error, "error");
      }
    });
  }

  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-base font-bold text-gray-900">Orari di Apertura</h2>
          </div>
          <button
            onClick={handleSave}
            disabled={isPending}
            className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-300 text-white rounded-xl text-sm font-semibold transition-all"
          >
            {isPending ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Salvataggio...
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Salva orari
              </>
            )}
          </button>
        </div>

        {/* Days grid */}
        <div className="divide-y divide-gray-50">
          {orari.map((g, index) => (
            <div key={g.giorno} className={`px-5 py-4 ${g.chiuso ? "bg-red-50/40" : ""}`}>
              <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                {/* Day name + chiuso toggle */}
                <div className="flex items-center justify-between sm:justify-start sm:gap-4 sm:w-44 shrink-0">
                  <span className={`font-semibold text-sm ${g.chiuso ? "text-red-500" : "text-gray-800"}`}>
                    {g.giorno}
                  </span>
                  <label className="flex items-center gap-1.5 cursor-pointer select-none">
                    <div
                      onClick={() => setGiorno(index, { chiuso: !g.chiuso })}
                      className={`relative w-9 h-5 rounded-full transition-colors ${g.chiuso ? "bg-red-400" : "bg-gray-200"}`}
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${g.chiuso ? "translate-x-4" : "translate-x-0"}`}
                      />
                    </div>
                    <span className={`text-xs font-medium ${g.chiuso ? "text-red-500" : "text-gray-400"}`}>
                      Chiuso
                    </span>
                  </label>
                </div>

                {/* Time inputs */}
                {!g.chiuso && (
                  <div className="flex flex-col gap-2 flex-1">
                    {/* Mattina */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400 w-16 shrink-0">Mattina</span>
                      <div className="flex items-center gap-1.5">
                        <input
                          type="time"
                          value={g.mattina.apertura}
                          onChange={(e) => setTurno(index, "mattina", "apertura", e.target.value)}
                          className="border border-gray-200 rounded-lg px-2 py-1.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400 w-28"
                        />
                        <span className="text-gray-400 text-xs">–</span>
                        <input
                          type="time"
                          value={g.mattina.chiusura}
                          onChange={(e) => setTurno(index, "mattina", "chiusura", e.target.value)}
                          className="border border-gray-200 rounded-lg px-2 py-1.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400 w-28"
                        />
                      </div>
                    </div>

                    {/* Pomeriggio */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400 w-16 shrink-0">Pomeriggio</span>
                      {g.pomeriggio ? (
                        <div className="flex items-center gap-1.5">
                          <input
                            type="time"
                            value={g.pomeriggio.apertura}
                            onChange={(e) => setTurno(index, "pomeriggio", "apertura", e.target.value)}
                            className="border border-gray-200 rounded-lg px-2 py-1.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400 w-28"
                          />
                          <span className="text-gray-400 text-xs">–</span>
                          <input
                            type="time"
                            value={g.pomeriggio.chiusura}
                            onChange={(e) => setTurno(index, "pomeriggio", "chiusura", e.target.value)}
                            className="border border-gray-200 rounded-lg px-2 py-1.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400 w-28"
                          />
                          <button
                            onClick={() => togglePomeriggio(index)}
                            className="text-gray-400 hover:text-red-400 transition-colors p-1"
                            title="Rimuovi pomeriggio"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => togglePomeriggio(index)}
                          className="text-xs text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1 transition-colors"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                          </svg>
                          Aggiungi orario pomeridiano
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {g.chiuso && (
                  <span className="text-sm text-red-400 font-medium self-center">Negozio chiuso</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 text-xs text-gray-400 flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Le modifiche appaiono in vetrina immediatamente dopo aver premuto &quot;Salva orari&quot;.
        </div>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={hide} />}
    </>
  );
}
