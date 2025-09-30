import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import MediaGallery from "@/components/MediaGallery";
import heroImage from "@assets/generated_images/Akyaka_coastline_sunset_hero_60f3d1df.png";
import ceremonyImage from "@assets/generated_images/Wedding_ceremony_setup_Mediterranean_e0c02fcc.png";
import oliveImage from "@assets/generated_images/Olive_grove_landscape_Turkey_69daa26c.png";
import dinnerImage from "@assets/generated_images/Wedding_dinner_reception_setup_0cdafc3e.png";
import boatImage from "@assets/generated_images/Coastal_boat_ride_activity_2d04e6b9.png";
import oliveBranch1 from "@assets/stock_images/watercolor_olive_bra_3ed55f45.jpg";
import oliveBranch2 from "@assets/stock_images/watercolor_olive_bra_2b145fc8.jpg";
import florals from "@assets/stock_images/watercolor_mediterra_b6492684.jpg";

export default function Home() {
  const galleryItems = [
    {
      id: "1",
      type: "image" as const,
      src: ceremonyImage,
      alt: "Wedding ceremony setup",
      aspectRatio: "3:4" as const,
    },
    {
      id: "2",
      type: "image" as const,
      src: oliveImage,
      alt: "Mediterranean olive grove",
      aspectRatio: "1:1" as const,
    },
    {
      id: "3",
      type: "image" as const,
      src: dinnerImage,
      alt: "Reception dinner setting",
      aspectRatio: "16:9" as const,
    },
    {
      id: "4",
      type: "image" as const,
      src: boatImage,
      alt: "Coastal boat ride",
      aspectRatio: "4:3" as const,
    },
  ];

  return (
    <div>
      <HeroSection
        backgroundImage={heroImage}
        alt="Akyaka coastline at sunset"
      />

      <div className="relative py-20 px-6">
        <img 
          src={oliveBranch1} 
          alt="" 
          className="absolute top-0 left-0 w-32 md:w-48 opacity-30 pointer-events-none"
        />
        <img 
          src={oliveBranch2} 
          alt="" 
          className="absolute top-0 right-0 w-32 md:w-48 opacity-30 pointer-events-none transform scale-x-[-1]"
        />
        <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-serif" data-testid="text-hero-title">
            Bryce & Leyla
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground" data-testid="text-hero-subtitle">
            are getting married
          </p>
          <div className="space-y-2 text-lg">
            <p data-testid="text-hero-date">October 1, 2026</p>
            <p data-testid="text-hero-location">Akyaka, Turkiye</p>
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

      <InfoSection title="Moments from Akyaka">
        <MediaGallery items={galleryItems} />
      </InfoSection>
    </div>
  );
}
