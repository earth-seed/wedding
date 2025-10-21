interface HeroSectionProps {
  backgroundImage: string;
  alt?: string;
}

export default function HeroSection({
  backgroundImage,
  alt = "Hero image",
}: HeroSectionProps) {
  return (
    <div className="w-full">
      <img
        src={backgroundImage}
        alt={alt}
        className="w-full h-[70vh] object-cover"
        data-testid="image-hero"
        loading="eager"
        fetchPriority="high"
      />
    </div>
  );
}
