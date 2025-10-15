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
                <h4 className="text-lg font-display mb-2 text-foreground">What time should I arrive?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Please arrive by 5:30 PM for the ceremony at 6:00 PM. This gives you time to find parking, 
                  get settled, and enjoy the beautiful venue before the ceremony begins.
                </p>
              </div>
              
              <div className="border-l-2 border-primary/30 pl-6 py-4">
                <h4 className="text-lg font-display mb-2 text-foreground">Is there parking available?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Yes, there is parking available at NUUP Hotel. We'll provide more detailed parking 
                  instructions closer to the wedding date.
                </p>
              </div>
            </div>
          </div>

          {/* Travel & Accommodation */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-serif mb-6 text-foreground">Travel & Accommodation</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-primary/30 pl-6 py-4">
                <h4 className="text-lg font-display mb-2 text-foreground">How do I get to Akyaka?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  The nearest airport is Dalaman (DLM). From there, it's about an hour's drive to Akyaka. 
                  You can also fly to Rhodes and take a ferry to Marmaris, which is 20 minutes from Akyaka. 
                  Check our Travel page for more detailed information.
                </p>
              </div>
              
              <div className="border-l-2 border-primary/30 pl-6 py-4">
                <h4 className="text-lg font-display mb-2 text-foreground">Where should I stay?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We recommend staying in Akyaka Valley for the full experience. If you'd like to stay at 
                  NUUP Hotel (our ceremony venue), please reach out to us for booking details and special rates.
                </p>
              </div>
              
              <div className="border-l-2 border-primary/30 pl-6 py-4">
                <h4 className="text-lg font-display mb-2 text-foreground">How long should I stay?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We'd love for you to stay a few days to explore the beautiful Akyaka area! Many guests 
                  are planning to arrive a day or two early to enjoy the beaches and local attractions.
                </p>
              </div>
            </div>
          </div>

          {/* Ceremony & Reception */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-serif mb-6 text-foreground">Ceremony & Reception</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-primary/30 pl-6 py-4">
                <h4 className="text-lg font-display mb-2 text-foreground">What's the schedule for the day?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  The ceremony begins at 6:00 PM, followed by a live performance during cocktail hour at 7:00 PM, 
                  dinner at 8:00 PM, and dancing until late. Check our Schedule page for the complete timeline.
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
                <h4 className="text-lg font-display mb-2 text-foreground">Is the ceremony indoors or outdoors?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  The ceremony will be held outdoors at NUUP Hotel, surrounded by the beautiful farm and gardens. 
                  We'll have a backup plan in case of weather, but September in Akyaka is typically perfect!
                </p>
              </div>
            </div>
          </div>

          {/* Gifts & Registry */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-serif mb-6 text-foreground">Gifts & Registry</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-primary/30 pl-6 py-4">
                <h4 className="text-lg font-display mb-2 text-foreground">What gifts do you prefer?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Your presence is the greatest gift! If you'd like to give something, we have three options: 
                  a charity donation for Palestinian support, contributions to our honeymoon fund, or 
                  following Turkish tradition with gold gifts. See our Registry page for details.
                </p>
              </div>
              
              <div className="border-l-2 border-primary/30 pl-6 py-4">
                <h4 className="text-lg font-display mb-2 text-foreground">Can I bring a plus one?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Please check your invitation for your specific guest count. Due to venue capacity, 
                  we can only accommodate the number of guests listed on your invitation.
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
