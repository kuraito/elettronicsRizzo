const reviews = [
  {
    name: "Marco B.",
    rating: 5,
    text: "Negozio eccezionale, fornitissimo! Ho trovato tutto il materiale elettrico che cercavo a prezzi molto competitivi. Il titolare è stato gentilissimo e mi ha consigliato al meglio. Consigliatissimo!",
    date: "2 settimane fa",
    verified: true,
  },
  {
    name: "Anna R.",
    rating: 5,
    text: "Abbiamo acquistato qui il nostro nuovo frigorifero e una lavatrice. Prezzi imbattibili rispetto ai grandi centri commerciali e un servizio clienti davvero eccellente. Torneremo sicuramente!",
    date: "1 mese fa",
    verified: true,
  },
  {
    name: "Giuseppe M.",
    rating: 5,
    text: "Cercavo un lampadario moderno per il soggiorno e qui ho trovato una scelta incredibile. Il personale mi ha aiutato a scegliere quello perfetto per il mio ambiente. Molto soddisfatto!",
    date: "3 settimane fa",
    verified: true,
  },
  {
    name: "Lucia D.",
    rating: 5,
    text: "Attività familiare con valori veri. Competenza, onestà e prezzi giusti. Il signor Rizzo è sempre disponibile per consigli e assistenza. Un vero punto di riferimento nella zona.",
    date: "1 mese fa",
    verified: true,
  },
  {
    name: "Roberto C.",
    rating: 4,
    text: "Ottimo negozio per materiale elettrico professionale. Vasta scelta e prezzi competitivi. Il personale è preparato e ti aiuta a trovare la soluzione migliore. Lo consiglio a tutti gli elettricisti.",
    date: "2 mesi fa",
    verified: true,
  },
  {
    name: "Francesca T.",
    rating: 5,
    text: "Servizio impeccabile! Ho comprato un piano cottura e mi hanno anche spiegato tutte le funzionalità. Personale davvero qualificato e cortese. Prezzi onesti e prodotti di qualità.",
    date: "1 mese fa",
    verified: true,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 sm:w-5 sm:h-5 ${i < rating ? "text-accent-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Recensioni() {
  return (
    <section id="recensioni" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 reveal">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-xs sm:text-sm font-semibold mb-4">
            Recensioni
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Cosa dicono i nostri{" "}
            <span className="text-primary-600">clienti</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-4">
            Oltre 76 recensioni su Google con una media di 4.8 stelle. La
            soddisfazione dei nostri clienti è la nostra migliore pubblicità.
          </p>
        </div>

        {/* Overall rating card */}
        <div className="reveal max-w-md mx-auto mb-10 sm:mb-14 bg-linear-to-br from-primary-600 to-primary-800 rounded-2xl p-6 sm:p-8 text-center text-white shadow-xl">
          <div className="text-5xl sm:text-6xl font-bold mb-2">4.8</div>
          <div className="flex justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="text-primary-200 text-sm sm:text-base">
            Basato su 76 recensioni Google
          </div>
          <div className="flex items-center justify-center gap-2 mt-3">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-xs sm:text-sm text-primary-200">Recensioni verificate su Google</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className={`reveal delay-${(index % 3 + 1) * 100} bg-gray-50 hover:bg-white rounded-xl p-5 sm:p-6 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-100`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">
                      {review.name}
                    </div>
                    <div className="text-xs text-gray-400">{review.date}</div>
                  </div>
                </div>
                {review.verified && (
                  <div className="flex items-center gap-1 text-xs text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="hidden sm:inline">Verificata</span>
                  </div>
                )}
              </div>

              {/* Stars */}
              <div className="mb-3">
                <StarRating rating={review.rating} />
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-14 reveal">
          <a
            href="https://www.google.com/search?q=Electronics+Rizzo+Velina+recensioni"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm sm:text-base transition-colors"
          >
            Vedi tutte le recensioni su Google
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
