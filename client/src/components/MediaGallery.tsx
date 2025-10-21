import { useState } from "react";
import photo1 from "@assets/10-14-25-Engagement-466_1760454989749.webp";
import photo2 from "@assets/10-14-25-Engagement-374_1760455012794.webp";
import photo3 from "@assets/untitled-384_1760454997301.webp";
import photo4 from "@assets/image_1759244048652.webp";
import photo5 from "@assets/image_1759244086022.webp";
import photo6 from "@assets/image_1759244171033.webp";

interface MediaItem {
  id: string;
  type: "image" | "video";
  src: string;
  alt: string;
  aspectRatio?: "1:1" | "16:9" | "3:4" | "4:3";
}

interface MediaGalleryProps {
  items?: MediaItem[];
}

export default function MediaGallery({ items }: MediaGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Default gallery images if none provided
  const defaultImages = [
    { id: "1", type: "image" as const, src: photo1, alt: "Engagement photo 1", aspectRatio: "3:4" as const },
    { id: "2", type: "image" as const, src: photo2, alt: "Engagement photo 2", aspectRatio: "3:4" as const },
    { id: "3", type: "image" as const, src: photo3, alt: "Akyaka coastline", aspectRatio: "16:9" as const },
    { id: "4", type: "image" as const, src: photo4, alt: "Wedding moment 1", aspectRatio: "1:1" as const },
    { id: "5", type: "image" as const, src: photo5, alt: "Wedding moment 2", aspectRatio: "1:1" as const },
    { id: "6", type: "image" as const, src: photo6, alt: "Wedding moment 3", aspectRatio: "1:1" as const },
  ];
  
  const galleryItems = items || defaultImages;

  const getAspectClass = (ratio?: string) => {
    switch (ratio) {
      case "1:1":
        return "aspect-square";
      case "16:9":
        return "aspect-video";
      case "3:4":
        return "aspect-[3/4]";
      case "4:3":
        return "aspect-[4/3]";
      default:
        return "aspect-video";
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            className={`group relative ${getAspectClass(item.aspectRatio)} overflow-hidden rounded-lg cursor-pointer hover:scale-105 transition-all duration-300 ${
              index === 0 ? 'md:col-span-2 md:row-span-2' : ''
            }`}
            onClick={() => setSelectedImage(item.src)}
            data-testid={`media-item-${item.id}`}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt}
                loading="eager"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">Video placeholder</span>
              </div>
            )}
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
