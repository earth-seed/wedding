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
                  The nearest airport is Dalaman Airport (DLM). There are several daily flights from Istanbul and some European cities to DLM.
                  Flying to Rhodes Island in Greece and taking the 1 hour ferry to Marmaris, which is a 20 minute drive from Akyaka, is also an option.
                </p>
              </div>
              <div>
                <h4 className="font-serif text-lg mb-2">Airport Transfer</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Detailed transfer options and recommendations will be provided
                  closer to the wedding date. The drive from Dalaman to Akyaka
                  takes about an hour. There are several transfer options available,
                  and we will share more details closer to the wedding date.
                </p>
              </div>
            </div>
          </div>

          <div className="border-l-2 border-primary/30 pl-8 py-6">
            <h3 className="text-2xl font-serif mb-4">Where to Stay</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-lg mb-2">Akyaka Valley Hotels</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For guests planning to stay more than two nights in the Akyaka area, we recommend staying in 
                  the Akyaka Valley itself. This gives you easy access to the town's restaurants, beaches, and 
                  local attractions while still being within reasonable distance of the ceremony venue.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Akyaka offers a range of options from boutique hotels to charming guesthouses, all within 
                  the beautiful valley setting. We'll be sharing our curated list of recommended accommodations soon.
                </p>
              </div>
              
              <div>
                <h4 className="font-serif text-lg mb-2">Nuup Hotel - Ceremony Venue</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nuup Hotel is where our ceremony will take place, located about 25 minutes from Akyaka in a small, isolated village. 
                  If you'd like to stay at Nuup for the night of the ceremony, please reach out to us directly for booking details and discounted rates.
                  There are only 28 rooms at Nuup, so we recommend booking early.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Contact us for Nuup Hotel booking details and special rates
                </p>
              </div>

              <div>
                <h4 className="font-serif text-lg mb-2">House Rentals</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For guests planning to stay longer and prefer the comfort of a home over a hotel, we have friends and neighbors 
                  who rent beautiful houses in the area. These properties offer more space, outdoor areas and the opportunity to experience 
                  local life in Akyaka.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We'd love to connect you with them! If you're interested in renting a house for your stay, 
                  please reach out to us and we'll put you in touch with our friends who have beautiful rental properties.
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
              by the turquoise waters. We encourage you to arrive 
              early or stay after to explore this beautiful region and we would be happy to help you plan your trip.
            </p>
          </div>

          <div className="border-l-2 border-primary/30 pl-8 py-6">
            <h3 className="text-2xl font-serif mb-4">Exploring Turkiye</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you're thinking about spending more time in Turkey, here are some places we think you'd enjoy. 
              We've visited all of these and can give you the inside scoop on what's worth seeing.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-serif text-lg mb-2">Istanbul</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Leyla's hometown and honestly one of the most interesting cities in the world. You can't miss the Hagia Sophia 
                  and Blue Mosque, but we also love wandering around Beyoğlu and Kadıköy for great food and coffee. 
                  The city has two airports and good public transport, so it's easy to get around.
                </p>
              </div>
              <div>
                <h4 className="font-serif text-lg mb-2">Cappadocia</h4>
                <p className="text-muted-foreground leading-relaxed">
                  This place is pretty surreal - imagine staying in a cave hotel and watching hot air balloons at sunrise. 
                  The balloon rides are amazing but depend on weather, so spring or fall are your best bets. 
                  The underground cities are fascinating, and the hiking is great too.
                </p>
              </div>
              <div>
                <h4 className="font-serif text-lg mb-2">Konya</h4>
                <p className="text-muted-foreground leading-relaxed">
                  This is where the whirling dervishes come from, and seeing their ceremony is really something special. 
                  The Mevlana Museum is beautiful, and the city has some incredible old architecture. 
                  It's a good stop if you're traveling between Istanbul and Cappadocia.
                </p>
              </div>
              <div>
                <h4 className="font-serif text-lg mb-2">Kas, Antalya</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Kas is a cute little coastal town perfect for diving and boat trips. The water is crystal clear, 
                  and there are some great fish restaurants. Antalya is bigger with an airport and a charming old town. 
                  Both are nice if you want to extend your beach time.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Let us know if you want more details about any of these places - we're happy to help with recommendations!
            </p>
          </div>
        </div>
      </InfoSection>
    </div>
  );
}
