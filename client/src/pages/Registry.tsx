import InfoSection from "@/components/InfoSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Plane } from "lucide-react";

export default function Registry() {
  return (
    <div className="pt-20 min-h-screen">
      <InfoSection
        title="Registry & Gifts"
        description="Your presence is the greatest gift, but if you wish to contribute..."
      >
        <div className="max-w-3xl mx-auto space-y-8">
          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our First Priority</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                Instead of traditional gifts, we'd be honored if you would
                consider making a donation to a charity supporting Palestinians.
              </p>
              <p className="text-muted-foreground">
                This cause is deeply meaningful to us, and any contribution in
                lieu of a wedding gift would mean the world. We'll share details
                about the specific charity organization shortly.
              </p>
              <div className="pt-2">
                <p className="text-sm italic text-muted-foreground">
                  Charity details coming soon (TBD)
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Plane className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Honeymoon Fund</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                If you'd also like to give us a personal gift, we've set up a
                honeymoon fund.
              </p>
              <p className="text-muted-foreground">
                We're planning an adventure to explore new destinations and
                create lasting memories as newlyweds. Your contribution will
                help make our honeymoon dreams come true.
              </p>
              <div className="pt-4">
                <Button
                  size="lg"
                  onClick={() => console.log("Honeymoon fund clicked")}
                  data-testid="button-honeymoon-fund"
                >
                  Contribute to Honeymoon Fund
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  Fund details and payment options will be available soon
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center pt-4">
            <p className="text-muted-foreground italic">
              Your presence at our wedding is truly the greatest gift of all.
              Thank you for being part of our special day.
            </p>
          </div>
        </div>
      </InfoSection>
    </div>
  );
}
