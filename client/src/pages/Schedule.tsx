import InfoSection from "@/components/InfoSection";

export default function Schedule() {
  return (
    <div className="pt-20 min-h-screen">
      <InfoSection
        title="Wedding Schedule"
        description="Two days of celebration in beautiful Akyaka"
        className="bg-gradient-to-b from-background to-muted/20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Day 1 */}
            <div className="animate-slide-in-left border-l-2 border-primary/30 pl-8 py-6">
              <h3 className="text-2xl font-serif mb-4">September 23, 2026</h3>
              <p className="text-muted-foreground mb-6">The Day Before</p>
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-display tracking-wider text-primary/80 uppercase mb-2">
                    Time TBD
                  </div>
                  <h4 className="font-serif text-lg mb-2">Coastal Boat Ride</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Boat tour along the Akyaka coastline.
                  </p>
                </div>
                
                <div>
                  <div className="text-sm font-display tracking-wider text-primary/80 uppercase mb-2">
                    Time TBD
                  </div>
                  <h4 className="font-serif text-lg mb-2">Rehearsal Dinner</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    At favorite local restaurant: Sepia.
                  </p>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="animate-slide-in-right border-l-2 border-primary/30 pl-8 py-6">
              <h3 className="text-2xl font-serif mb-4">September 24, 2026</h3>
              <p className="text-muted-foreground mb-6">Wedding Day</p>
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-display tracking-wider text-primary/80 uppercase mb-2">
                    6:00 PM
                  </div>
                  <h4 className="font-serif text-lg mb-2">Ceremony</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Wedding ceremony at NUUP Hotel.
                  </p>
                </div>
                
                <div>
                  <div className="text-sm font-display tracking-wider text-primary/80 uppercase mb-2">
                    7:00 PM
                  </div>
                  <h4 className="font-serif text-lg mb-2">Live Performance</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Live music by our favorite band: Love Trip.
                  </p>
                </div>
                
                <div>
                  <div className="text-sm font-display tracking-wider text-primary/80 uppercase mb-2">
                    8:00 PM
                  </div>
                  <h4 className="font-serif text-lg mb-2">Wedding Dinner</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Mediterranean dinner with Turkish specialties.
                  </p>
                </div>
                
                <div>
                  <div className="text-sm font-display tracking-wider text-primary/80 uppercase mb-2">
                    9:30 PM
                  </div>
                  <h4 className="font-serif text-lg mb-2">DJ Set</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Dancing under the stars.
                  </p>
                </div>
                
                <div>
                  <div className="text-sm font-display tracking-wider text-primary/80 uppercase mb-2">
                    12:00 AM
                  </div>
                  <h4 className="font-serif text-lg mb-2">After Party</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Late night celebration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InfoSection>
    </div>
  );
}
