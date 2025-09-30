import InfoSection from "@/components/InfoSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Hotel, MapPin } from "lucide-react";

export default function Travel() {
  return (
    <div className="pt-20 min-h-screen">
      <InfoSection
        title="Travel & Accommodations"
        description="Everything you need to know about getting to Akyaka"
      >
        <div className="grid gap-8 md:gap-12">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Plane className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Getting There</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Flight Information</h4>
                <p className="text-muted-foreground">
                  The nearest airport is Dalaman Airport (DLM), approximately 20
                  km from Akyaka. We recommend booking flights well in advance
                  during the fall season.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Airport Transfer</h4>
                <p className="text-muted-foreground">
                  Detailed transfer options and recommendations will be provided
                  closer to the wedding date. The drive from Dalaman to Akyaka
                  takes about 25-30 minutes.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Hotel className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Where to Stay</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Recommended Hotels</h4>
                <p className="text-muted-foreground mb-4">
                  We'll be sharing our curated list of recommended
                  accommodations soon. Akyaka offers a range of options from
                  boutique hotels to charming guesthouses, all within easy reach
                  of the venue.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Hotel recommendations and booking links coming soon
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>About Akyaka</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Akyaka is a charming coastal town on Turkey's Aegean coast,
                known for its distinctive wooden architecture, pristine beaches,
                and stunning mountain backdrop. It's the perfect blend of
                natural beauty and authentic Turkish culture.
              </p>
              <p className="text-muted-foreground">
                The town is ideal for kitesurfing, hiking, and simply relaxing
                by the turquoise waters. We encourage you to arrive a few days
                early or stay after to explore this beautiful region.
              </p>
            </CardContent>
          </Card>
        </div>
      </InfoSection>
    </div>
  );
}
