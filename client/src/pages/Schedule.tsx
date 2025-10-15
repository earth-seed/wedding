import InfoSection from "@/components/InfoSection";
import EventCard from "@/components/EventCard";

export default function Schedule() {
  return (
    <div className="pt-20 min-h-screen">
      <InfoSection
        title="Wedding Schedule"
        description="Two days of celebration in beautiful Akyaka"
        className="bg-gradient-to-b from-background to-muted/20"
      >
        <div className="max-w-5xl mx-auto space-y-20">
          {/* Day 1 */}
          <div className="animate-slide-in-left">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-12 bg-primary/40"></div>
                <div className="mx-6 text-primary/70 text-2xl">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <div className="h-px w-12 bg-primary/40"></div>
              </div>
              <h3 className="text-4xl md:text-5xl font-display font-light mb-4 text-foreground">
                September 23, 2026
              </h3>
              <p className="text-xl text-muted-foreground font-light">The Day Before</p>
            </div>
            <div className="space-y-6">
              <EventCard
                time="Time TBD"
                title="Coastal Boat Ride"
                description="Boat tour along the Akyaka coastline."
              />
              <EventCard
                time="Time TBD"
                title="Rehearsal Dinner"
              />
            </div>
          </div>

          {/* Day 2 */}
          <div className="animate-slide-in-right">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-12 bg-primary/40"></div>
                <div className="mx-6 text-primary/70 text-2xl">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <div className="h-px w-12 bg-primary/40"></div>
              </div>
              <h3 className="text-4xl md:text-5xl font-display font-light mb-4 text-foreground">
                September 24, 2026
              </h3>
              <p className="text-xl text-muted-foreground font-light">Wedding Day</p>
            </div>
            <div className="space-y-6">
              <EventCard
                time="6:00 PM"
                title="Ceremony"
                description="Wedding ceremony at NUUP Hotel."
              />
              <EventCard
                time="7:00 PM"
                title="Live Performance"
                description="Live music during cocktail hour."
              />
              <EventCard
                time="8:00 PM"
                title="Wedding Dinner"
                description="Mediterranean dinner with Turkish specialties."
              />
              <EventCard
                time="9:30 PM"
                title="DJ Set"
                description="Dancing under the stars."
              />
              <EventCard
                time="12:00 AM"
                title="After Party"
                description="Late night celebration."
              />
            </div>
          </div>
        </div>
      </InfoSection>
    </div>
  );
}
