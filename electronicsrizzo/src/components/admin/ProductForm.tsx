"use client";

import { useRef, useState, useTransition } from "react";
import Image from "next/image";
import type { Product } from "@/types";
import type { ActionResult } from "@/types";

const CATEGORIES = [
  "Materiale Elettrico",
  "Elettrodomestici",
  "Lampadari e Illuminazione",
  "Climatizzatori",
  "Automazione",
  "Altro",
];

interface ProductFormProps {
  product?: Product;
  action: (formData: FormData) => Promise<ActionResult>;
  onSuccess: (message: string) => void;
  onError: (message: string) => void;
  onCancel: () => void;
}

export default function ProductForm({
  product,
  action,
  onSuccess,
  onError,
  onCancel,
}: ProductFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  const [imageMode, setImageMode] = useState<"url" | "upload">("url");
  const [preview, setPreview] = useState<string | null>(product?.image_url ?? null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await action(formData);
      if (result.success) {
        onSuccess(result.message);
        formRef.current?.reset();
        setPreview(null);
      } else {
        onError(result.error);
      }
    });
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      {/* Nome */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Nome prodotto <span className="text-red-500">*</span>
        </label>
        <input
          name="name"
          defaultValue={product?.name}
          required
          placeholder="es. Lavatrice Samsung 9kg"
          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      {/* Descrizione */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Descrizione <span className="text-red-500">*</span>
        </label>
        <textarea
          name="description"
          defaultValue={product?.description}
          required
          rows={3}
          placeholder="Descrizione breve del prodotto..."
          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
        />
      </div>

      {/* Prezzo e Categoria */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Prezzo <span className="text-red-500">*</span>
          </label>
          <input
            name="price"
            defaultValue={product?.price}
            required
            placeholder="es. €299 o Su richiesta"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Categoria <span className="text-red-500">*</span>
          </label>
          <select
            name="category"
            defaultValue={product?.category ?? ""}
            required
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
          >
            <option value="" disabled>
              Seleziona...
            </option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Immagine */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Immagine
        </label>
        <div className="flex gap-2 mb-3">
          <button
            type="button"
            onClick={() => setImageMode("url")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              imageMode === "url"
                ? "bg-primary-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            URL immagine
          </button>
          <button
            type="button"
            onClick={() => setImageMode("upload")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              imageMode === "upload"
                ? "bg-primary-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Carica file
          </button>
        </div>

        {imageMode === "url" ? (
          <input
            name="image_url"
            defaultValue={product?.image_url ?? ""}
            placeholder="https://esempio.com/immagine.jpg"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        ) : (
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center hover:border-primary-400 transition-colors">
            <input
              type="file"
              name="image_file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              id="image-upload"
            />
            <label htmlFor="image-upload" className="cursor-pointer">
              <svg
                className="w-8 h-8 text-gray-400 mx-auto mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
              <span className="text-sm text-gray-500">
                Clicca per scegliere un file
              </span>
            </label>
          </div>
        )}

        {/* Preview */}
        {preview && (
          <div className="mt-3 relative w-full h-40 rounded-xl overflow-hidden border border-gray-100">
            <Image
              src={preview}
              alt="Anteprima"
              fill
              className="object-cover"
              unoptimized={preview.startsWith("blob:")}
            />
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all"
        >
          Annulla
        </button>
        <button
          type="submit"
          disabled={isPending}
          className="flex-1 px-4 py-2.5 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-300 text-white rounded-xl text-sm font-semibold transition-all"
        >
          {isPending ? "Salvataggio..." : product ? "Aggiorna" : "Crea prodotto"}
        </button>
      </div>
    </form>
  );
}
