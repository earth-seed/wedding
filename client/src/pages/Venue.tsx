import InfoSection from "@/components/InfoSection";
import venueImage from "@assets/generated_images/NUUP_Hotel_venue_exterior_39f7f791.png";

export default function Venue() {
  return (
    <div className="pt-20 min-h-screen">
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${venueImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pb-12 md:pb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
              NUUP Hotel
            </h1>
            <p className="text-xl text-white/90">
              Our celebration venue in Akyaka
            </p>
          </div>
        </div>
      </div>

      <InfoSection title="The Venue">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="border-l-2 border-primary/30 pl-8 py-6">
            <h3 className="text-2xl font-serif mb-4">
              About NUUP Hotel
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              NUUP Hotel embodies the essence of Mediterranean elegance,
              blending contemporary design with natural materials and
              traditional Turkish hospitality. Nestled among olive groves
              and overlooking the Aegean, it's the perfect setting for our
              special day.
            </p>
            <div>
              <h4 className="font-serif text-lg mb-3">What to Expect</h4>
              <ul className="space-y-2 text-muted-foreground leading-relaxed">
                <li>Stunning views of the surrounding mountains and sea</li>
                <li>Beautiful outdoor ceremony and reception spaces</li>
                <li>Contemporary Mediterranean architecture</li>
                <li>Lush gardens and intimate courtyards</li>
              </ul>
            </div>
          </div>

          <div className="border-l-2 border-primary/30 pl-8 py-6">
            <h3 className="text-2xl font-serif mb-4">
              Location & Contact
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-serif text-lg mb-1">Address</p>
                <p className="text-muted-foreground leading-relaxed">
                  Akyaka, Muğla, Turkiye
                </p>
              </div>
              <div>
                <p className="font-serif text-lg mb-1">Phone</p>
                <p className="text-muted-foreground leading-relaxed">
                  Contact details will be provided
                </p>
              </div>
              <div>
                <p className="font-serif text-lg mb-1">Email</p>
                <p className="text-muted-foreground leading-relaxed">
                  Venue inquiries available upon request
                </p>
              </div>
            </div>
          </div>
        </div>
      </InfoSection>
    </div>
  );
}
