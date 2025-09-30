import InfoSection from "@/components/InfoSection";
import florals1 from "@assets/stock_images/watercolor_mediterra_5b633f66.jpg";
import botanicals from "@assets/stock_images/delicate_botanical_l_dd3c246c.jpg";

export default function Registry() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="relative">
        <img 
          src={florals1} 
          alt="" 
          className="absolute top-20 left-0 w-40 md:w-64 opacity-25 pointer-events-none"
        />
        <img 
          src={botanicals} 
          alt="" 
          className="absolute top-40 right-0 w-32 md:w-48 opacity-25 pointer-events-none transform scale-x-[-1]"
        />
        <InfoSection
          title="Registry & Gifts"
          description="Your presence is the greatest gift, but if you wish to contribute..."
        >
          <div className="max-w-3xl mx-auto space-y-16 relative z-10">
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
    </div>
  );
}
