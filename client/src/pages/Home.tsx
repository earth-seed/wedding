import InfoSection from "@/components/InfoSection";
import photo1 from "@assets/10-14-25-Engagement-466_1760454989749.jpg";
import photo2 from "@assets/untitled-384_1760454997301.jpg";
import photo3 from "@assets/10-14-25-Engagement-374_1760455012794.jpg";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="max-w-2xl w-full text-center space-y-12">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif uppercase tracking-wider" data-testid="text-hero-title">
              Leyla & Bryce
            </h1>
            
            <div className="w-24 h-px bg-foreground/30 mx-auto"></div>
            
            <p className="text-lg md:text-xl font-serif text-muted-foreground tracking-widest" data-testid="text-hero-subtitle">
              ARE GETTING MARRIED
            </p>
            
            <div className="space-y-3 text-base md:text-lg font-sans">
              <p className="tracking-wide" data-testid="text-hero-date">October 1, 2026</p>
              <p className="tracking-wide" data-testid="text-hero-location">Akyaka, Turkiye</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="md:col-span-1">
            <img
              src={photo1}
              alt="Leyla and Bryce at sunset"
              className="w-full h-auto rounded-md object-cover"
              data-testid="img-couple-sunset"
            />
          </div>
          
          <div className="md:col-span-1 flex flex-col gap-6 md:gap-8">
            <img
              src={photo2}
              alt="Akyaka coastline"
              className="w-full h-auto rounded-md object-cover"
              data-testid="img-coastline"
            />
            <img
              src={photo3}
              alt="Leyla and Bryce by the dock"
              className="w-full h-auto rounded-md object-cover"
              data-testid="img-couple-dock"
            />
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
    </div>
  );
}
