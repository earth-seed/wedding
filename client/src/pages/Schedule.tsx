import InfoSection from "@/components/InfoSection";
import EventCard from "@/components/EventCard";
import {
  Ship,
  Utensils,
  Heart,
  Music,
  UtensilsCrossed,
  Disc3,
  PartyPopper,
} from "lucide-react";

export default function Schedule() {
  return (
    <div className="pt-20 min-h-screen">
      <InfoSection
        title="Wedding Schedule"
        description="Two days of celebration in beautiful Akyaka"
      >
        <div className="max-w-4xl mx-auto space-y-16">
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-2">
                September 30, 2026
              </h3>
              <p className="text-muted-foreground">Day Before the Wedding</p>
            </div>
            <div className="space-y-6">
              <EventCard
                time="Time TBD"
                title="Coastal Boat Ride"
                description="Join us for a relaxing boat tour along the stunning Akyaka coastline. Enjoy the crystal-clear waters and breathtaking views of the Mediterranean."
                icon={Ship}
              />
              <EventCard
                time="Time TBD"
                title="Rehearsal Dinner"
                description="Casual evening gathering with close family and friends. Enjoy authentic Turkish cuisine in a relaxed atmosphere."
                icon={Utensils}
                isLeft
              />
            </div>
          </div>

          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-2">
                October 1, 2026
              </h3>
              <p className="text-muted-foreground">Wedding Day</p>
            </div>
            <div className="space-y-6">
              <EventCard
                time="Time TBD"
                title="Ceremony"
                description="Our wedding ceremony will take place in the beautiful gardens of NUUP Hotel, surrounded by nature and with views of the mountains."
                icon={Heart}
              />
              <EventCard
                time="Time TBD"
                title="Live Performance"
                description="Enjoy live music during cocktail hour as we celebrate becoming husband and wife."
                icon={Music}
                isLeft
              />
              <EventCard
                time="Time TBD"
                title="Dinner"
                description="Savor a carefully curated Mediterranean feast featuring local Turkish specialties and seasonal ingredients."
                icon={UtensilsCrossed}
              />
              <EventCard
                time="Time TBD"
                title="DJ Set"
                description="Dance the night away under the stars with our DJ spinning your favorite tunes."
                icon={Disc3}
                isLeft
              />
              <EventCard
                time="Time TBD"
                title="After Party"
                description="Keep the celebration going! Join us for drinks, dancing, and making unforgettable memories."
                icon={PartyPopper}
              />
            </div>
          </div>
        </div>
      </InfoSection>
    </div>
  );
}
