import { Suspense } from "react";
import Link from "next/link";
import { getProducts } from "@/app/actions/products";
import ProductsClientWrapper from "./ProductsClientWrapper";

export const metadata = {
  title: "Prodotti | Electronics Rizzo",
  description:
    "Scopri i nostri prodotti: materiale elettrico, elettrodomestici, lampadari e illuminazione a Velina.",
};

export default async function ProdottiPage() {
  const products = await getProducts();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-linear-to-br from-primary-900 via-primary-800 to-primary-950 pt-28 pb-14 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary-300 hover:text-white text-sm mb-6 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Torna alla home
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            I Nostri Prodotti
          </h1>
          <p className="text-primary-200 max-w-xl mx-auto text-base sm:text-lg">
            Qualità e convenienza per ogni esigenza elettrica, domestica e di
            illuminazione.
          </p>
        </div>
      </div>

      {/* Products grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Suspense fallback={<ProductsSkeleton />}>
          <ProductsClientWrapper initialProducts={products} />
        </Suspense>

        {products.length === 0 && (
          <div className="text-center py-20">
            <svg
              className="w-16 h-16 text-gray-300 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <p className="text-gray-500 text-lg font-medium">
              Nessun prodotto disponibile al momento
            </p>
            <p className="text-gray-400 mt-2 text-sm">
              Contattaci per scoprire il nostro catalogo completo
            </p>
            <a
              href="https://wa.me/393899937298"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-whatsapp hover:bg-whatsapp-dark text-white rounded-xl text-sm font-semibold transition-all"
            >
              Scrivici su WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

function ProductsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl overflow-hidden border border-gray-100 animate-pulse"
        >
          <div className="h-48 bg-gray-200" />
          <div className="p-5 space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-3 bg-gray-200 rounded w-full" />
            <div className="h-3 bg-gray-200 rounded w-2/3" />
            <div className="h-8 bg-gray-200 rounded-xl mt-4" />
          </div>
        </div>
      ))}
    </div>
  );
}
