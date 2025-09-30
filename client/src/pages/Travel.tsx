import InfoSection from "@/components/InfoSection";

export default function Travel() {
  return (
    <div className="pt-20 min-h-screen">
      <InfoSection
        title="Travel & Accommodations"
        description="Everything you need to know about getting to Akyaka"
      >
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="border-l-2 border-primary/30 pl-8 py-6">
            <h3 className="text-2xl font-serif mb-4">Getting There</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-lg mb-2">Flight Information</h4>
                <p className="text-muted-foreground leading-relaxed">
                  The nearest airport is Dalaman Airport (DLM), approximately 20
                  km from Akyaka. We recommend booking flights well in advance
                  during the fall season.
                </p>
              </div>
              <div>
                <h4 className="font-serif text-lg mb-2">Airport Transfer</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Detailed transfer options and recommendations will be provided
                  closer to the wedding date. The drive from Dalaman to Akyaka
                  takes about 25-30 minutes.
                </p>
              </div>
            </div>
          </div>

          <div className="border-l-2 border-primary/30 pl-8 py-6">
            <h3 className="text-2xl font-serif mb-4">Where to Stay</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-serif text-lg mb-2">Recommended Hotels</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We'll be sharing our curated list of recommended
                  accommodations soon. Akyaka offers a range of options from
                  boutique hotels to charming guesthouses, all within easy reach
                  of the venue.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Hotel recommendations and booking links coming soon
                </p>
              </div>
            </div>
          </div>

          <div className="border-l-2 border-primary/30 pl-8 py-6">
            <h3 className="text-2xl font-serif mb-4">About Akyaka</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Akyaka is a charming coastal town on Turkey's Aegean coast,
              known for its distinctive wooden architecture, pristine beaches,
              and stunning mountain backdrop. It's the perfect blend of
              natural beauty and authentic Turkish culture.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The town is ideal for kitesurfing, hiking, and simply relaxing
              by the turquoise waters. We encourage you to arrive a few days
              early or stay after to explore this beautiful region.
            </p>
          </div>
        </div>
      </InfoSection>
    </div>
  );
}
