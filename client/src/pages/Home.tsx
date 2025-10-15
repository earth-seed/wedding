import InfoSection from "@/components/InfoSection";
import photo1 from "@assets/10-14-25-Engagement-466_1760454989749.jpg";
import photo2 from "@assets/untitled-384_1760454997301.jpg";

export default function Home() {
  return (
    <div>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${photo1})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-background"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl w-full text-center px-6 pb-32">
          <div className="space-y-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display tracking-[0.2em] text-white" data-testid="text-hero-title">
              LEYLA & BRYCE
            </h1>
            
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-white/40"></div>
              <p className="text-sm md:text-base font-display tracking-[0.3em] text-white/90" data-testid="text-hero-subtitle">
                ARE GETTING MARRIED
              </p>
              <div className="h-px w-16 bg-white/40"></div>
            </div>
            
            <div className="space-y-2 text-lg md:text-xl text-white/95">
              <p className="tracking-wider" data-testid="text-hero-date">October 1, 2026</p>
              <p className="tracking-wider" data-testid="text-hero-location">Akyaka, Turkiye</p>
            </div>
          </div>
        </div>
      </div>

      <InfoSection
        title="Join Us in Paradise"
        description="We're thrilled to invite you to celebrate our wedding in the beautiful coastal town of Akyaka, Turkiye"
      >
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            After years of calling Akyaka home, we can't imagine a more perfect
            place to begin our journey as a married couple. Join us for a
            weekend of celebration, where the turquoise waters of the Aegean
            meet warm Mediterranean hospitality.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From coastal adventures to an unforgettable evening under the stars,
            we're creating memories that will last a lifetime, and we want you
            there with us.
          </p>
        </div>
      </InfoSection>

      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12 pb-12">
        <img
          src={photo2}
          alt="Akyaka coastline"
          className="w-full h-auto rounded-md object-cover"
          data-testid="img-coastline"
        />
      </div>
    </div>
  );
}
