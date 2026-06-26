import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { GALLERY_IMAGES } from "../data";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-20 bg-brand-bg/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Carousel container with Neumorphism style */}
        <div className="relative max-w-4xl mx-auto">
          <div className="card-neo-flat p-4 sm:p-6 md:p-8">
            
            {/* Viewport */}
            <div className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full overflow-hidden rounded-2xl bg-brand-bg/40 border border-white/20 group">
              {GALLERY_IMAGES.map((img, index) => (
                <div
                  key={img.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform flex items-center justify-center bg-brand-bg/10 ${
                    index === currentIndex
                      ? "opacity-100 scale-100 translate-x-0"
                      : "opacity-0 scale-95 translate-x-full pointer-events-none"
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="max-h-full max-w-full object-contain select-none"
                  />
                  
                  {/* Expand option button */}
                  <button
                    onClick={() => setLightboxImage(img.url)}
                    aria-label="Expandir foto do consultório"
                    className="absolute top-4 right-4 p-3 rounded-xl bg-black/40 text-white/90 hover:bg-black/60 backdrop-blur-sm transition-colors focus:ring-2 focus:ring-brand-gold/50 focus:outline-none animate-fade-in"
                  >
                    <Maximize2 size={16} />
                  </button>
                </div>
              ))}

              {/* Navigation Arrows inside viewport (hidden on small screens, shown on hover/large) */}
              <button
                onClick={prevSlide}
                aria-label="Foto anterior do consultório"
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-white/70 hover:bg-white text-brand-dark shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-brand-gold z-10"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Próxima foto do consultório"
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-white/70 hover:bg-white text-brand-dark shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-brand-gold z-10"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Bottom Indicators & Manual Thumbnails */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Thumbnail strip */}
              <div className="flex gap-2.5 overflow-x-auto py-1">
                {GALLERY_IMAGES.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Visualizar foto ${idx + 1}`}
                    className={`relative w-16 h-10 sm:w-20 sm:h-12 rounded-lg overflow-hidden flex-shrink-0 transition-all focus:outline-none ${
                      idx === currentIndex
                        ? "ring-2 ring-brand-gold scale-105 border-transparent"
                        : "opacity-60 hover:opacity-90 border border-brand-dark/10"
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={`Miniatura ${idx + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>

              {/* Indicator dots */}
              <div className="flex items-center gap-2">
                {GALLERY_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Ir para a foto ${idx + 1}`}
                    className={`h-2 rounded-full transition-all focus:outline-none ${
                      idx === currentIndex ? "w-6 bg-brand-gold" : "w-2 bg-brand-dark/20 hover:bg-brand-dark/40"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
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
