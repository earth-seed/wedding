import InfoSection from "@/components/InfoSection";
import venue1 from "@assets/Screenshot 2025-10-15 at 12.26.43.png";
import venue2 from "@assets/Screenshot 2025-10-15 at 12.27.00.png";
import venue3 from "@assets/Screenshot 2025-10-15 at 12.27.16.png";
import venue4 from "@assets/Screenshot 2025-10-15 at 12.28.39.png";
import venue5 from "@assets/Screenshot 2025-10-15 at 12.28.51.png";
import venue6 from "@assets/Screenshot 2025-10-15 at 12.30.14.png";
import venue7 from "@assets/Screenshot 2025-10-15 at 12.30.43.png";
import venue8 from "@assets/Screenshot 2025-10-15 at 12.38.08.png";

export default function Venue() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <img
          src={venue1}
          alt="NUUP Hotel exterior"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="w-full text-center pb-16 px-6">
          </div>
        </div>
      </section>

      <InfoSection title="The Venue" className="bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* About Section */}
          <div className="animate-fade-in">
            <div className="grid md:grid-cols-3 gap-12 items-center">
              <div className="md:col-span-2 space-y-6">
                <h3 className="text-3xl md:text-4xl font-display font-light text-foreground">
                  About NUUP Hotel
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  NUUP Hotel is a unique boutique hotel nestled in a small village about 25 minutes from Akyaka. 
                  This charming property offers an authentic farm-to-table experience with its own working farm, 
                  fresh herb garden, and pottery studio. It's the perfect blend of rustic charm and modern comfort 
                  for our special day.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With only 28 rooms, NUUP provides an intimate and exclusive setting for our wedding celebration. 
                  The hotel's commitment to sustainability and local craftsmanship makes it a truly special place 
                  to gather with family and friends. Guests staying the night of the ceremony will enjoy a 
                  complimentary breakfast the following morning, and we'd love to help you book your stay.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  If you're interested in staying at NUUP for the wedding night, please reach out to us directly 
                  for booking details and special rates. We can help coordinate your stay at this beautiful venue.
                </p>
              </div>
              <div className="md:col-span-1 relative">
                <img
                  src={venue2}
                  alt="NUUP Hotel grounds"
                  className="w-full h-[28rem] object-cover rounded-lg shadow-xl"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>


          {/* Photo Gallery */}
          <div className="animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-display font-light text-center mb-12 text-foreground">
              Gallery
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={venue3}
                  alt="NUUP Hotel interior"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={venue4}
                  alt="NUUP Hotel grounds"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={venue5}
                  alt="NUUP Hotel facilities"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={venue6}
                  alt="NUUP Hotel garden"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={venue7}
                  alt="NUUP Hotel view"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={venue8}
                  alt="NUUP Hotel additional view"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>

        </div>
      </InfoSection>
    </div>
  );
}
