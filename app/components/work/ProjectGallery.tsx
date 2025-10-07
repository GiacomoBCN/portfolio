"use client";
import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface ProjectGalleryProps {
  images: GalleryImage[];
  title?: string;
}

export default function ProjectGallery({ 
  images, 
  title = "Project Gallery" 
}: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  return (
    <>
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            {title}
          </h2>
          <div className="relative">
            <div className="flex justify-center gap-4 overflow-x-auto pb-4">
              {images.map((image, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-80 h-48 bg-white backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setSelectedIndex(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="relative max-w-[95vw] max-h-[95vh] w-full">
            {/* Main Image */}
            <div className="flex items-center justify-center mb-4">
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex items-center justify-center gap-2">
              {/* Previous Button */}
              <button
                className="p-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors disabled:opacity-50"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                disabled={selectedIndex === 0}
              >
                <ChevronLeft size={20} />
              </button>

              {/* Thumbnails */}
              <div className="flex gap-2 overflow-x-auto max-w-[60vw] px-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden cursor-pointer transition-all ${
                      index === selectedIndex 
                        ? 'ring-2 ring-white scale-110' 
                        : 'opacity-60 hover:opacity-100'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedIndex(index);
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Next Button */}
              <button
                className="p-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors disabled:opacity-50"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                disabled={selectedIndex === images.length - 1}
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}