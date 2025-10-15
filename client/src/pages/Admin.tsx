import InfoSection from "@/components/InfoSection";
import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Rsvp {
  id: string;
  guestName: string;
  attending: boolean;
  dietaryPreferences: string | null;
  message: string | null;
  createdAt: string;
}

export default function Admin() {
  const { data: rsvps, isLoading, error } = useQuery({
    queryKey: ["rsvps"],
    queryFn: () => apiRequest<Rsvp[]>("GET", "/api/rsvps"),
  });

  if (isLoading) {
    return (
      <div className="pt-20 min-h-screen">
        <InfoSection title="RSVP Admin" description="Loading RSVPs...">
          <div className="text-center">Loading...</div>
        </InfoSection>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-20 min-h-screen">
        <InfoSection title="RSVP Admin" description="Error loading RSVPs">
          <div className="text-center text-red-500">Error loading RSVPs</div>
        </InfoSection>
      </div>
    );
  }

  const attendingCount = rsvps?.filter(rsvp => rsvp.attending).length || 0;
  const totalCount = rsvps?.length || 0;

  return (
    <div className="pt-20 min-h-screen">
      <InfoSection
        title="RSVP Admin"
        description={`${attendingCount} attending out of ${totalCount} responses`}
        className="bg-gradient-to-b from-background to-muted/20"
      >
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Total Responses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{totalCount}</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Attending</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">{attendingCount}</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Not Attending</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-red-600">{totalCount - attendingCount}</div>
              </CardContent>
            </Card>
          </div>

          {/* RSVP List */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif">All Responses</h3>
            {rsvps?.map((rsvp) => (
              <Card key={rsvp.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{rsvp.guestName}</CardTitle>
                    <Badge variant={rsvp.attending ? "default" : "destructive"}>
                      {rsvp.attending ? "Attending" : "Not Attending"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {rsvp.dietaryPreferences && (
                      <div>
                        <span className="font-medium">Dietary Preferences:</span> {rsvp.dietaryPreferences}
                      </div>
                    )}
                    {rsvp.message && (
                      <div>
                        <span className="font-medium">Message:</span> {rsvp.message}
                      </div>
                    )}
                    <div className="text-sm text-muted-foreground">
                      Submitted: {new Date(rsvp.createdAt).toLocaleString()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {rsvps?.length === 0 && (
            <div className="text-center text-muted-foreground py-8">
              No RSVPs submitted yet.
            </div>
          )}
        </div>
      </InfoSection>
    </div>
  );
}
