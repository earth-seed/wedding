import InfoSection from "@/components/InfoSection";

export default function Registry() {
  return (
    <div className="pt-20 min-h-screen">
      <InfoSection
        title="Registry & Gifts"
        description="Your presence is the greatest gift, but if you wish to contribute..."
      >
        <div className="max-w-3xl mx-auto space-y-12 sm:space-y-16">
            <div className="border-l-2 border-primary/30 pl-4 sm:pl-6 md:pl-8 py-4 sm:py-6">
            <h3 className="text-xl sm:text-2xl font-serif mb-3 sm:mb-4">Our First Priority</h3>
            <p className="text-sm sm:text-base md:text-lg text-foreground mb-3 sm:mb-4 leading-relaxed">
              Instead of traditional gifts, we'd be honored if you would
              consider making a donation to a charity supporting Palestinians 
              who have escaped the ongoing genocide in their homeland and are now living in Egypt.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
             Our commitment for Palestinian liberation is a pillar of our relationship and we hope you'll join us in supporting this cause.
             We are against the occupation of Palestine and the existence of the apartheid state of Israel.
             We would like to only have guests at our wedding who are aligned with us on these principles.
            </p>
            <a
              href="https://www.globalgiving.org/projects/essential-support-for-palestinians/reports/#menu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-primary-foreground border border-primary-border hover:bg-primary/90 transition-colors rounded-lg font-display tracking-wider uppercase text-xs sm:text-sm"
            >
              Contribute to Palestinian Support
            </a>
            </div>

            <div className="border-l-2 border-primary/30 pl-4 sm:pl-6 md:pl-8 py-4 sm:py-6">
            <h3 className="text-xl sm:text-2xl font-serif mb-3 sm:mb-4">Turkish Wedding Customs</h3>
            <p className="text-sm sm:text-base md:text-lg text-foreground mb-3 sm:mb-4 leading-relaxed">
              Following Turkish wedding tradition, guests often bring gold as a gift to the couple.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              This tradition symbolizes prosperity and good fortune for the newlyweds. 
              If you'd like to participate in this beautiful custom, there will be a place to contribute during the ceremony.
            </p>
            </div>

            <div className="border-l-2 border-primary/30 pl-4 sm:pl-6 md:pl-8 py-4 sm:py-6">
            <h3 className="text-xl sm:text-2xl font-serif mb-3 sm:mb-4">For Those Who Can't Join Us</h3>
            <p className="text-sm sm:text-base md:text-lg text-foreground mb-3 sm:mb-4 leading-relaxed">
              We understand that traveling to Türkiye might not be possible for everyone. 
              If you'd like to contribute from afar, we've created a way for you to do so.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              We're planning to explore new places together after our wedding, and if you'd like to help make that possible, 
              we'd be so grateful for your support.
            </p>
            <button
              onClick={() => window.open("https://venmo.com/u/Bryce-Merrill", "_blank")}
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-primary-foreground border border-primary-border hover:bg-primary/90 transition-colors rounded-lg font-display tracking-wider uppercase text-xs sm:text-sm"
              data-testid="button-honeymoon-fund"
            >
              Contribute Here
            </button>
            </div>

            <div className="text-center pt-6 sm:pt-8">
            <p className="text-sm sm:text-base text-muted-foreground italic leading-relaxed">
              Your presence at our wedding is truly the greatest gift of all.
              Thank you for being part of our special day.
            </p>
            </div>
          </div>
      </InfoSection>
    </div>
  );
}
