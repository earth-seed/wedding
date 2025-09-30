import InfoSection from "@/components/InfoSection";
import { Card, CardContent } from "@/components/ui/card";
import venueImage from "@assets/generated_images/NUUP_Hotel_venue_exterior_39f7f791.png";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Venue() {
  return (
    <div className="pt-20 min-h-screen">
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${venueImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pb-12 md:pb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
              NUUP Hotel
            </h1>
            <p className="text-xl text-white/90">
              Our celebration venue in Akyaka
            </p>
          </div>
        </div>
      </div>

      <InfoSection title="The Venue">
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-serif font-semibold mb-3">
                  About NUUP Hotel
                </h3>
                <p className="text-muted-foreground">
                  NUUP Hotel embodies the essence of Mediterranean elegance,
                  blending contemporary design with natural materials and
                  traditional Turkish hospitality. Nestled among olive groves
                  and overlooking the Aegean, it's the perfect setting for our
                  special day.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What to Expect</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Stunning views of the surrounding mountains and sea</li>
                  <li>• Beautiful outdoor ceremony and reception spaces</li>
                  <li>• Contemporary Mediterranean architecture</li>
                  <li>• Lush gardens and intimate courtyards</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-serif font-semibold mb-4">
                  Location & Contact
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Address</p>
                      <p className="text-muted-foreground text-sm">
                        Akyaka, Muğla, Turkiye
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <p className="text-muted-foreground text-sm">
                        Contact details will be provided
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <p className="text-muted-foreground text-sm">
                        Venue inquiries available upon request
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </InfoSection>
    </div>
  );
}
