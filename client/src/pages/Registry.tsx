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
              consider making a donation to a charity supporting Palestinians 
              who have escaped the ongoing genocide in their homeland and are now living in Egypt.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
             Our commitment for Palestinian liberation is a pillar of our relationship and we hope you'll join us in supporting this cause.
             We are against the occupation of Palestine and the existence of the apartheid state of Israel.
             We would like to only have guests at our wedding who are aligned with us on these principles.
            </p>
            <a
              href="https://www.globalgiving.org/projects/essential-support-for-palestinians/reports/#menu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground border border-primary-border hover:bg-primary/90 transition-colors rounded-lg font-display tracking-wider uppercase text-sm"
            >
              Contribute to Palestinian Support
            </a>
            </div>

            <div className="border-l-2 border-primary/30 pl-8 py-6">
            <h3 className="text-2xl font-serif mb-4">Honeymoon Fund</h3>
            <p className="text-lg text-foreground mb-4 leading-relaxed">
              If you'd also like to give us a personal gift, we've set up a
              honeymoon fund.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We're planning an adventure to explore new destinations after our wedding.
              Your contribution will help make our honeymoon dreams come true.
            </p>
            <button
              onClick={() => console.log("Honeymoon fund clicked")}
              className="px-8 py-3 bg-primary text-primary-foreground border border-primary-border hover:bg-primary/90 transition-colors rounded-lg font-display tracking-wider uppercase text-sm"
              data-testid="button-honeymoon-fund"
            >
              Contribute to Honeymoon Fund
            </button>
            </div>

            <div className="border-l-2 border-primary/30 pl-8 py-6">
            <h3 className="text-2xl font-serif mb-4">Turkish Wedding Customs</h3>
            <p className="text-lg text-foreground mb-4 leading-relaxed">
              Following Turkish wedding tradition, guests often bring gold as a gift to the couple.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This tradition symbolizes prosperity and good fortune for the newlyweds. 
              If you'd like to participate in this beautiful custom, there will be a place to contribute during the ceremony.
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
