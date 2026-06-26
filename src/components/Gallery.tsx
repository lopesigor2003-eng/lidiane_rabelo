import { useState } from "react";
import { Maximize2, X, Image as ImageIcon } from "lucide-react";
import { GALLERY_IMAGES } from "../data";

export default function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-brand-bg/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-brand-gold uppercase justify-center">
            <span className="w-6 h-0.5 bg-brand-gold"></span>
            O Consultório
            <span className="w-6 h-0.5 bg-brand-gold"></span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark">
            Conheça Nosso Espaço
          </h2>
          
          <p className="text-brand-dark/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Um ambiente acolhedor, sigiloso e planejado com carinho para proporcionar a você o máximo de conforto e bem-estar durante os atendimentos presenciais em Criciúma.
          </p>
        </div>

        {/* Static Grid of Separate Photo Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              onClick={() => setLightboxImage(img.url)}
              className="card-neo-flat p-3 sm:p-4 rounded-3xl hover:translate-y-[-4px] hover:shadow-neo-flat-hover transition-all duration-300 group cursor-pointer flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-brand-bg/40 border border-white/20">
                <img
                  src={img.url}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none group-hover:scale-[1.03] transition-transform duration-500"
                />
                
                {/* Micro-Interaction Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-4 py-2 rounded-xl bg-white/90 text-brand-dark text-xs font-semibold shadow-md flex items-center gap-1.5 transform scale-90 group-hover:scale-100 transition-transform duration-300 backdrop-blur-sm">
                    <Maximize2 size={13} className="text-brand-gold" />
                    Ampliar Imagem
                  </span>
                </div>

                {/* Direct Action Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxImage(img.url);
                  }}
                  aria-label="Expandir foto do consultório"
                  className="absolute bottom-3 right-3 p-2.5 rounded-xl bg-black/40 text-white/95 hover:bg-black/60 backdrop-blur-sm transition-colors focus:ring-2 focus:ring-brand-gold/50 focus:outline-none"
                >
                  <Maximize2 size={14} />
                </button>
              </div>

              {/* Caption */}
              <div className="mt-3.5 px-1 flex-grow flex items-start gap-2.5">
                <ImageIcon size={15} className="text-brand-gold flex-shrink-0 mt-0.5 opacity-85" />
                <p className="text-xs sm:text-sm text-brand-dark/80 font-medium leading-relaxed">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Zoom-in image Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold"
            aria-label="Fechar ampliação"
          >
            <X size={24} />
          </button>
          
          <img
            src={lightboxImage}
            alt="Interior do consultório ampliado"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            referrerPolicy="no-referrer"
            onClick={(e) => e.stopPropagation()} // Prevent close on clicking image
          />
        </div>
      )}
    </section>
  );
}
