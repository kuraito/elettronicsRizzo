const brands: { name: string; logo?: string }[] = [
  { name: "BTicino",             logo: "/logos/bticino.svg" },
  { name: "Vimar" },
  { name: "Gewiss" },
  { name: "ABB",                 logo: "/logos/abb.svg" },
  { name: "Schneider Electric",  logo: "/logos/schneider.svg" },
  { name: "Finder" },
  { name: "Samsung",             logo: "/logos/samsung.svg" },
  { name: "LG",                  logo: "/logos/lg.svg" },
  { name: "Bosch",               logo: "/logos/bosch.svg" },
  { name: "Whirlpool",           logo: "/logos/whirlpool.svg" },
  { name: "Electrolux",          logo: "/logos/electrolux.svg" },
  { name: "Indesit",             logo: "/logos/indesit.svg" },
  { name: "De'Longhi",           logo: "/logos/delonghi.svg" },
  { name: "Philips",             logo: "/logos/philips.svg" },
  { name: "Osram",               logo: "/logos/osram.svg" },
  { name: "Artemide",            logo: "/logos/artemide.svg" },
  { name: "Flos" },
  { name: "Eglo",                logo: "/logos/eglo.svg" },
  { name: "V-TAC" },
  { name: "Daikin",              logo: "/logos/daikin.svg" },
  { name: "Mitsubishi Electric", logo: "/logos/mitsubishi.svg" },
  { name: "Hisense",             logo: "/logos/hisense.svg" },
  { name: "Ariston",             logo: "/logos/ariston.svg" },
];

const categories = [
  {
    title: "Materiale Elettrico",
    description:
      "Ampia gamma di materiale elettrico professionale e per uso domestico. Cavi, interruttori, prese, quadri elettrici, protezioni e molto altro dalle migliori marche del settore.",
    features: [
      "Cavi e conduttori",
      "Interruttori e prese",
      "Quadri elettrici",
      "Protezioni e sicurezza",
      "Canalizzazioni",
      "Automazione",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: "from-yellow-400 to-orange-500",
    bgLight: "bg-amber-50",
    iconBg: "bg-amber-100 text-amber-600",
  },
  {
    title: "Elettrodomestici",
    description:
      "I migliori elettrodomestici per la tua casa a prezzi imbattibili. Grandi e piccoli elettrodomestici delle marche più affidabili, con consulenza dedicata per ogni esigenza.",
    features: [
      "Lavatrici e asciugatrici",
      "Frigoriferi e congelatori",
      "Forni e piani cottura",
      "Lavastoviglie",
      "Piccoli elettrodomestici",
      "Climatizzatori",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    gradient: "from-blue-400 to-cyan-500",
    bgLight: "bg-blue-50",
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    title: "Lampadari e Illuminazione",
    description:
      "Soluzioni di illuminazione per ogni ambiente: dai lampadari classici ai moderni sistemi LED. Illumina la tua casa con stile e risparmio energetico.",
    features: [
      "Lampadari classici e moderni",
      "Plafoniere e applique",
      "Faretti e strip LED",
      "Illuminazione da esterno",
      "Lampade da tavolo",
      "Soluzioni smart",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    gradient: "from-purple-400 to-pink-500",
    bgLight: "bg-purple-50",
    iconBg: "bg-purple-100 text-purple-600",
  },
];

export default function Prodotti() {
  return (
    <section id="prodotti" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 reveal">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-xs sm:text-sm font-semibold mb-4">
            I Nostri Prodotti
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Tutto ciò di cui hai{" "}
            <span className="text-primary-600">bisogno</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-4">
            Un&apos;ampia selezione di prodotti di qualità per ogni esigenza.
            Dalle soluzioni elettriche professionali all&apos;illuminazione
            d&apos;interni ed esterni.
          </p>
        </div>

        {/* Brand marquee */}
        <div className="relative mb-12 sm:mb-16 overflow-hidden reveal">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-linear-to-r from-gray-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-linear-to-l from-gray-50 to-transparent pointer-events-none" />
          <div className="flex animate-marquee gap-4 items-stretch">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-2 shrink-0 w-40 h-24 px-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-primary-200 hover:-translate-y-0.5 transition-all duration-300"
              >
                {brand.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-12 max-w-[120px] w-auto object-contain"
                  />
                ) : (
                  <span className="text-sm font-bold text-gray-600 text-center leading-tight px-1">
                    {brand.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Product categories */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className={`reveal delay-${(index + 1) * 100} group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100`}
            >
              {/* Card header with gradient */}
              <div className={`relative h-36 sm:h-44 bg-linear-to-br ${category.gradient} p-5 sm:p-6 flex flex-col justify-end overflow-hidden`}>
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, white 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                </div>
                <div className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm text-white">
                  {category.icon}
                </div>
                <h3 className="relative text-xl sm:text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Card body */}
              <div className="p-5 sm:p-6">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
                  {category.description}
                </p>

                {/* Features grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-5 sm:mb-6">
                  {category.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-xs sm:text-sm text-gray-700"
                    >
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/393899937298?text=Ciao%2C%20vorrei%20informazioni%20sui%20vostri%20prodotti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 bg-primary-50 hover:bg-primary-600 text-primary-700 hover:text-white rounded-xl text-sm font-semibold transition-all duration-300 group-hover:bg-primary-600 group-hover:text-white"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Richiedi Informazioni
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 sm:mt-14 reveal">
          <a
            href="/prodotti"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl text-sm font-semibold transition-all mb-6 shadow-md hover:shadow-lg"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            Vedi tutti i prodotti
          </a>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
            Non trovi quello che cerchi? Contattaci e ti aiuteremo a trovare il prodotto giusto.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://wa.me/393899937298?text=Ciao%2C%20cerco%20un%20prodotto%20specifico"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-whatsapp hover:bg-whatsapp-dark text-white rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Scrivici su WhatsApp
            </a>
            <a
              href="tel:097462000"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0974 62000
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
