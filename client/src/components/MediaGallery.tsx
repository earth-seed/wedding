interface MediaItem {
  id: string;
  type: "image" | "video";
  src: string;
  alt: string;
  aspectRatio?: "1:1" | "16:9" | "3:4" | "4:3";
}

interface MediaGalleryProps {
  items: MediaItem[];
}

export default function MediaGallery({ items }: MediaGalleryProps) {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {items.map((item) => (
        <div
          key={item.id}
          className={`${getAspectClass(item.aspectRatio)} overflow-hidden rounded-lg hover-elevate transition-transform duration-300 hover:scale-[1.02]`}
          data-testid={`media-item-${item.id}`}
        >
          {item.type === "image" ? (
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">Video placeholder</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
