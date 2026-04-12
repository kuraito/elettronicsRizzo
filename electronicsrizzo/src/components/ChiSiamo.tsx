export default function ChiSiamo() {
  const values = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Qualità Garantita",
      description: "Solo prodotti delle migliori marche per garantirti affidabilità e durata nel tempo.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Prezzi Competitivi",
      description: "Offriamo i migliori prezzi della zona senza mai compromettere la qualità dei prodotti.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Assistenza Dedicata",
      description: "Il nostro team familiare è sempre pronto ad aiutarti con competenza e cortesia.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Ampia Scelta",
      description: "Un negozio fornito con migliaia di prodotti per soddisfare ogni tua esigenza.",
    },
  ];

  return (
    <section id="chi-siamo" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 reveal">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-xs sm:text-sm font-semibold mb-4">
            Chi Siamo
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            La nostra storia, la tua{" "}
            <span className="text-primary-600">fiducia</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-4">
            Electronics Rizzo è un&apos;attività a conduzione familiare radicata
            nel territorio di Velina. Da oltre 30 anni siamo il punto di
            riferimento per chi cerca materiale elettrico, elettrodomestici e
            soluzioni di illuminazione di qualità a prezzi competitivi.
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          {/* Left side - text */}
          <div className="reveal-left">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Un&apos;attività familiare al tuo servizio
            </h3>
            <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p>
                Il nostro negozio nasce dalla passione della famiglia Rizzo per il
                settore elettrico. Ogni giorno ci impegniamo per offrire ai
                nostri clienti un servizio impeccabile, con la stessa cura e
                attenzione che riserviamo alla nostra famiglia.
              </p>
              <p>
                Nel nostro punto vendita di Via Velina troverai un&apos;ampia gamma
                di prodotti: dal materiale elettrico professionale agli
                elettrodomestici delle migliori marche, fino a lampadari e
                soluzioni di illuminazione per ogni ambiente.
              </p>
              <p>
                La nostra forza? Un team competente e disponibile, pronto a
                consigliarti la soluzione migliore per le tue esigenze, sempre
                al miglior prezzo.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 px-3 sm:px-4 py-2 rounded-lg">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-whatsapp" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Attività familiare
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 px-3 sm:px-4 py-2 rounded-lg">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-whatsapp" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                30+ anni di esperienza
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 px-3 sm:px-4 py-2 rounded-lg">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-whatsapp" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                4.8★ su Google
              </div>
            </div>
          </div>

          {/* Right side - visual */}
          <div className="reveal-right">
            <div className="relative">
              <div className="bg-linear-to-br from-primary-100 to-primary-50 rounded-2xl p-6 sm:p-8 lg:p-10">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="text-lg sm:text-2xl font-bold text-gray-900">1000+</div>
                    <div className="text-xs sm:text-sm text-gray-500">Prodotti</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-400/20 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <div className="text-lg sm:text-2xl font-bold text-gray-900">4.8/5</div>
                    <div className="text-xs sm:text-sm text-gray-500">Valutazione</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-whatsapp/10 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-whatsapp" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="text-lg sm:text-2xl font-bold text-gray-900">76+</div>
                    <div className="text-xs sm:text-sm text-gray-500">Clienti soddisfatti</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-lg sm:text-2xl font-bold text-gray-900">30+</div>
                    <div className="text-xs sm:text-sm text-gray-500">Anni di attività</div>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-primary-200/30 rounded-2xl" />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`reveal delay-${(index + 1) * 100} group bg-gray-50 hover:bg-white rounded-xl p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-primary-100`}
            >
              <div className="w-12 h-12 bg-primary-100 group-hover:bg-primary-600 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 text-primary-600 group-hover:text-white">
                {value.icon}
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
