import { getProducts } from "@/app/actions/products";
import { getOrari } from "@/lib/orari";
import AdminDashboard from "./AdminDashboard";

export const metadata = {
  title: "Dashboard Admin | Electronics Rizzo",
};

export default async function AdminPage() {
  const [products, orari] = await Promise.all([
    getProducts(),
    getOrari(),
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <p className="text-sm text-gray-500 mb-1">Prodotti totali</p>
          <p className="text-3xl font-bold text-gray-900">{products.length}</p>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <p className="text-sm text-gray-500 mb-1">Categorie</p>
          <p className="text-3xl font-bold text-gray-900">
            {new Set(products.map((p) => p.category)).size}
          </p>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <p className="text-sm text-gray-500 mb-1">Ultimo aggiornamento</p>
          <p className="text-sm font-medium text-gray-900 mt-2">
            {products[0]
              ? new Date(products[0].created_at).toLocaleDateString("it-IT", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })
              : "—"}
          </p>
        </div>
      </div>

      <AdminDashboard initialProducts={products} initialOrari={orari} />
    </div>
  );
}
