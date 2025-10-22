import InfoSection from "@/components/InfoSection";
import MediaGallery from "@/components/MediaGallery";
import photo1 from "@assets/10-14-25-Engagement-466_1760454989749.webp";
import photo2 from "@assets/10-14-25-Engagement-374_1760455012794.webp";
import akyakaBackground from "@assets/Turkiye-Fall-2024-494.webp";

export default function Home() {
  return (
    <div>
      {/* Mobile-First Layout */}
      <div className="flex flex-col lg:grid lg:grid-rows-2 lg:grid-cols-2 lg:h-[200vh]">
        {/* Top Left - Invitation */}
        <div className="flex items-center justify-center bg-background px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-0 min-h-[80vh] sm:min-h-[70vh] lg:min-h-0">
          <div className="max-w-lg w-full text-center animate-slide-in-left">
            {/* Decorative Element */}
            <div className="flex items-center justify-center mb-6 sm:mb-8 md:mb-10">
              <div className="h-px w-16 sm:w-20 md:w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              <div className="mx-4 sm:mx-6 text-primary/70 text-xl sm:text-2xl">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <div className="h-px w-16 sm:w-20 md:w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            </div>
            
            {/* Wedding Invitation Text */}
            <div className="space-y-6 sm:space-y-8">
              <p className="text-sm sm:text-sm md:text-base font-display tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] text-muted-foreground uppercase font-medium" data-testid="text-hero-invitation">
                You are invited to the wedding of
              </p>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-light tracking-[0.02em] sm:tracking-[0.03em] md:tracking-[0.05em] text-foreground leading-tight" data-testid="text-hero-title">
                <span className="block drop-shadow-sm">Leyla Fıratlı</span>
                <span className="block text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extralight tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] text-muted-foreground mt-2 sm:mt-3">&</span>
                <span className="block drop-shadow-sm">Bryce Merrill</span>
              </h1>
              
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-muted-foreground">
                <p className="tracking-wider font-medium" data-testid="text-hero-date">September 24th, 2026</p>
                <p className="tracking-wider font-medium" data-testid="text-hero-location">Akyaka, Turkiye</p>
              </div>
              
              {/* RSVP Button */}
              <div className="pt-6 sm:pt-8">
                <a 
                  href="/rsvp"
                  className="group inline-block px-8 sm:px-10 py-3 sm:py-4 bg-primary text-primary-foreground font-display tracking-wider uppercase text-xs sm:text-sm hover:bg-primary/90 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span className="relative z-10">RSVP</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Top Right - Engagement Photo */}
        <div className="relative animate-slide-in-right h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-full order-2 lg:order-2">
          <img
            src={photo1}
            alt="Leyla and Bryce engagement photo"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        
        {/* Bottom Left - Sitting Photo */}
        <div className="relative animate-slide-in-left h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-full order-4 lg:order-3">
          <img
            src={photo2}
            alt="Leyla and Bryce sitting and holding hands"
            className="w-full h-full object-cover object-left"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        
        {/* Bottom Right - Details */}
        <div className="flex items-center justify-center bg-background px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-0 min-h-[80vh] sm:min-h-[70vh] lg:min-h-0 order-3 lg:order-4">
          <div className="max-w-lg w-full text-center animate-slide-in-right">
            {/* Decorative Element */}
            <div className="flex items-center justify-center mb-6 sm:mb-8 md:mb-10">
              <div className="h-px w-16 sm:w-20 md:w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              <div className="mx-4 sm:mx-6 text-primary/70 text-xl sm:text-2xl">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <div className="h-px w-16 sm:w-20 md:w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            </div>
            
            {/* Wedding Details */}
            <div className="space-y-6 sm:space-y-8">
    
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  We would love for you to join us as we celebrate our wedding in the beautiful coastal town of Akyaka, Turkiye. 
                </p>
                <p>
                  After moving here in 2024, we have fallen more in love with eachother and the dramatic seasons, 
                  healing rivers, stunning Mediterranean coastline, and fragrant pine forests of the region. 
                </p>
                <p>
                  We are excited to bring our loved ones together in this special place and look forward to reconnecting and celebrating with each of you.
                </p>
              </div>
              
              {/* CTA Button */}
              <div className="pt-6 sm:pt-8">
                <a 
                  href="/schedule"
                  className="group inline-block px-8 sm:px-10 py-3 sm:py-4 bg-primary text-primary-foreground font-display tracking-wider uppercase text-xs sm:text-sm hover:bg-primary/90 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span className="relative z-10">View Schedule</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Akyaka Section */}
      <section 
        className="py-12 sm:py-16 md:py-20 bg-cover bg-center relative"
        style={{ 
          backgroundImage: `url(${akyakaBackground})`,
          backgroundAttachment: 'scroll'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                <div className="h-px w-8 sm:w-12 bg-primary/40"></div>
                <div className="mx-4 sm:mx-6 text-primary/70 text-xl sm:text-2xl">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <div className="h-px w-8 sm:w-12 bg-primary/40"></div>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-light text-white text-center">
                About Akyaka
              </h2>
              
              <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed text-center">
                Nestled between the azure Aegean Sea and the pine-covered mountains, 
                Akyaka is a hidden gem that has captured our hearts. This charming 
                coastal town offers the perfect blend of natural beauty and authentic 
                Turkish hospitality.
              </p>
              
              <div className="pt-3 sm:pt-4 flex justify-center">
                <a 
                  href="/travel"
                  className="group inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-primary text-primary-foreground font-display tracking-wider uppercase text-xs sm:text-sm hover:bg-primary/90 transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span className="relative z-10">Travel Information</span>
                  <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}