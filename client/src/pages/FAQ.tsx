import InfoSection from "@/components/InfoSection";

export default function FAQ() {
  return (
    <div className="pt-20 min-h-screen">
      <InfoSection
        title="Frequently Asked Questions"
        description="Everything you need to know about our wedding"
        className="bg-gradient-to-b from-background to-muted/20"
      >
        <div className="max-w-4xl mx-auto space-y-8">
          {/* General Questions */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-serif mb-6 text-foreground">General Questions</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-primary/30 pl-6 py-4">
                <h4 className="text-lg font-display mb-2 text-foreground">What should I wear?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We'd love to see you dressed up! Cocktail attire is perfect for the evening ceremony and dinner. 
                  The ceremony will be outdoors, so comfortable shoes are recommended. The weather in September 
                  should be warm, so light layers work well.
                </p>
              </div>
              
              <div className="border-l-2 border-primary/30 pl-6 py-4">
                <h4 className="text-lg font-display mb-2 text-foreground">Will there be food for dietary restrictions?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Yes! Please let us know about any dietary restrictions or allergies when you RSVP. 
                  The venue is experienced with accommodating various dietary needs.
                </p>
              </div>
              
              <div className="border-l-2 border-primary/30 pl-6 py-4">
                <h4 className="text-lg font-display mb-2 text-foreground">What happens if it rains?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We have a beautiful indoor backup plan at NUUP Hotel. The venue has covered areas and 
                  indoor spaces that will work perfectly if the weather doesn't cooperate. September in 
                  Akyaka is typically beautiful, but we're prepared for anything!
                </p>
              </div>
            </div>
          </div>

          {/* Travel & Logistics */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-serif mb-6 text-foreground">Travel & Logistics</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-primary/30 pl-6 py-4">
                <h4 className="text-lg font-display mb-2 text-foreground">Do I need a visa to visit Turkey?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  This depends on your nationality. Many countries can get an e-visa online before traveling, 
                  or you may be eligible for a visa on arrival. Please check the Turkish government's 
                  official visa requirements for your country well in advance.
                </p>
              </div>
              
              <div className="border-l-2 border-primary/30 pl-6 py-4">
                <h4 className="text-lg font-display mb-2 text-foreground">What currency should I bring?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Turkey uses the Turkish Lira (TRY). You can exchange money at the airport, in Akyaka, 
                  or use ATMs. Credit cards are widely accepted, but it's good to have some cash for 
                  smaller purchases and local transportation.
                </p>
              </div>
              
              <div className="border-l-2 border-primary/30 pl-6 py-4">
                <h4 className="text-lg font-display mb-2 text-foreground">Is there a dress code for the rehearsal dinner?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  The rehearsal dinner will be more casual than the wedding. Smart casual attire is perfect - 
                  think nice sundresses, khakis, or casual button-downs. We want everyone to be comfortable 
                  for the boat ride and dinner.
                </p>
              </div>
            </div>
          </div>

          {/* Ceremony & Reception */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-serif mb-6 text-foreground">Ceremony & Reception</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-primary/30 pl-6 py-4">
                <h4 className="text-lg font-display mb-2 text-foreground">Will the ceremony be in English or Turkish?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  The ceremony will be primarily in English, but we'll incorporate some Turkish traditions 
                  and elements. We want all our guests to feel included and understand what's happening!
                </p>
              </div>
              
              <div className="border-l-2 border-primary/30 pl-6 py-4">
                <h4 className="text-lg font-display mb-2 text-foreground">Can I take photos during the ceremony?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We'd love for you to be present and enjoy the moment! We'll have a professional photographer, 
                  so we ask that you keep phones and cameras away during the ceremony. Feel free to take 
                  photos during the reception and celebration!
                </p>
              </div>
              
              <div className="border-l-2 border-primary/30 pl-6 py-4">
                <h4 className="text-lg font-display mb-2 text-foreground">Will there be alcohol served?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Yes! We'll have a full bar during the reception with wine, beer, and cocktails. The venue 
                  can accommodate various drink preferences, and we'll have non-alcoholic options as well.
                </p>
              </div>
            </div>
          </div>

          {/* Gifts & Registry */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-serif mb-6 text-foreground">Gifts & Registry</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-primary/30 pl-6 py-4">
                <h4 className="text-lg font-display mb-2 text-foreground">Can I bring a plus one?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Please check your invitation for your specific guest count. Due to venue capacity, 
                  we can only accommodate the number of guests listed on your invitation.
                </p>
              </div>
              
              <div className="border-l-2 border-primary/30 pl-6 py-4">
                <h4 className="text-lg font-display mb-2 text-foreground">What's the Turkish gold tradition about?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  In Turkish culture, guests often bring gold jewelry or coins as a gift to symbolize 
                  prosperity and good fortune for the newlyweds. It's a beautiful tradition that we'd 
                  love to honor! Any gold item is appreciated, no matter how small.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-serif mb-6 text-foreground">Still Have Questions?</h3>
            <div className="border-l-2 border-primary/30 pl-6 py-4">
              <p className="text-muted-foreground leading-relaxed">
                If you have any other questions, please don't hesitate to reach out to us directly. 
                We're so excited to celebrate with you and want to make sure you have all the information you need!
              </p>
            </div>
          </div>
        </div>
      </InfoSection>
    </div>
  );
}
