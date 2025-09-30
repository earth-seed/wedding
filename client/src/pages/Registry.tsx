import InfoSection from "@/components/InfoSection";

export default function Registry() {
  return (
    <div className="pt-20 min-h-screen">
      <InfoSection
        title="Registry & Gifts"
        description="Your presence is the greatest gift, but if you wish to contribute..."
      >
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="border-l-2 border-primary/30 pl-8 py-6">
            <h3 className="text-2xl font-serif mb-4">Our First Priority</h3>
            <p className="text-lg text-foreground mb-4 leading-relaxed">
              Instead of traditional gifts, we'd be honored if you would
              consider making a donation to a charity supporting Palestinians.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This cause is deeply meaningful to us, and any contribution in
              lieu of a wedding gift would mean the world. We'll share details
              about the specific charity organization shortly.
            </p>
            <p className="text-sm italic text-muted-foreground">
              Charity details coming soon (TBD)
            </p>
          </div>

          <div className="border-l-2 border-primary/30 pl-8 py-6">
            <h3 className="text-2xl font-serif mb-4">Honeymoon Fund</h3>
            <p className="text-lg text-foreground mb-4 leading-relaxed">
              If you'd also like to give us a personal gift, we've set up a
              honeymoon fund.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We're planning an adventure to explore new destinations and
              create lasting memories as newlyweds. Your contribution will
              help make our honeymoon dreams come true.
            </p>
            <button
              onClick={() => console.log("Honeymoon fund clicked")}
              className="px-8 py-3 bg-primary text-primary-foreground border border-primary-border hover-elevate active-elevate-2 transition-colors"
              data-testid="button-honeymoon-fund"
            >
              Contribute to Honeymoon Fund
            </button>
            <p className="text-sm text-muted-foreground mt-4">
              Fund details and payment options will be available soon
            </p>
          </div>

          <div className="text-center pt-8">
            <p className="text-muted-foreground italic leading-relaxed">
              Your presence at our wedding is truly the greatest gift of all.
              Thank you for being part of our special day.
            </p>
          </div>
        </div>
      </InfoSection>
    </div>
  );
}
