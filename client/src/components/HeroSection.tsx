import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  ctaText?: string;
  ctaAction?: () => void;
}

export default function HeroSection({
  backgroundImage,
  title,
  subtitle,
  date,
  location,
  ctaText,
  ctaAction,
}: HeroSectionProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 animate-in fade-in duration-1000"
          data-testid="text-hero-title"
        >
          {title}
        </h1>
        <p
          className="font-serif text-xl md:text-2xl text-white/90 mb-8 animate-in fade-in duration-1000 delay-200"
          data-testid="text-hero-subtitle"
        >
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-10 animate-in fade-in duration-1000 delay-300">
          <div className="flex items-center gap-2 text-white/95">
            <Calendar className="h-5 w-5" />
            <span className="text-lg font-medium" data-testid="text-hero-date">
              {date}
            </span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/40" />
          <div className="flex items-center gap-2 text-white/95">
            <MapPin className="h-5 w-5" />
            <span className="text-lg font-medium" data-testid="text-hero-location">
              {location}
            </span>
          </div>
        </div>

        {ctaText && (
          <Button
            variant="outline"
            size="lg"
            onClick={ctaAction}
            className="bg-background/10 backdrop-blur-md border-white/30 text-white hover:bg-background/20 animate-in fade-in duration-1000 delay-500"
            data-testid="button-hero-cta"
          >
            {ctaText}
          </Button>
        )}
      </div>
    </div>
  );
}
