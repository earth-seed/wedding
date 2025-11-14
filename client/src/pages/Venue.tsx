import InfoSection from "@/components/InfoSection";
import venue1 from "@assets/Screenshot 2025-10-15 at 12.26.43.webp";
import venue2 from "@assets/Screenshot 2025-10-15 at 12.27.00.webp";
import venue3 from "@assets/Screenshot 2025-10-15 at 12.27.16.webp";
import venue4 from "@assets/Screenshot 2025-10-15 at 12.28.39.webp";
import venue5 from "@assets/Screenshot 2025-10-15 at 12.28.51.webp";
import venue6 from "@assets/Screenshot 2025-10-15 at 12.30.14.webp";
import venue7 from "@assets/Screenshot 2025-10-15 at 12.30.43.webp";
import venue8 from "@assets/Screenshot 2025-10-15 at 12.38.08.webp";

export default function Venue() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[30vh] sm:h-[35vh] md:h-[40vh] overflow-hidden">
        <img
          src={venue1}
          alt="NUUP Hotel exterior"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="w-full text-center pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6">
          </div>
        </div>
      </section>

      <InfoSection title="The Venue" className="bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
          {/* About Section */}
          <div className="animate-fade-in">
            <div className="grid md:grid-cols-3 gap-8 sm:gap-12 items-center">
              <div className="md:col-span-2 space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-light text-foreground">
                  About NUUP Hotel
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  NUUP Hotel is a unique boutique hotel nestled in a small village about 25 minutes from Akyaka. 
                  This charming property offers an authentic farm-to-table experience with its own working farm, 
                  fresh herb garden, and pottery studio.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  If you're interested in staying at NUUP for the wedding night, please reach out to us directly 
                  for booking details and special rates.
                </p>
              </div>
              <div className="md:col-span-1 relative">
                <img
                  src={venue2}
                  alt="NUUP Hotel grounds"
                  className="w-full h-64 sm:h-80 md:h-[28rem] object-cover rounded-lg shadow-xl"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>


          {/* Photo Gallery */}
          <div className="animate-fade-in">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-light text-center mb-8 sm:mb-12 text-foreground">
              Gallery
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={venue3}
                  alt="NUUP Hotel interior"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={venue4}
                  alt="NUUP Hotel grounds"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={venue5}
                  alt="NUUP Hotel facilities"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={venue6}
                  alt="NUUP Hotel garden"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={venue7}
                  alt="NUUP Hotel view"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={venue8}
                  alt="NUUP Hotel additional view"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
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
