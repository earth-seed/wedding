import InfoSection from "@/components/InfoSection";
import { useQuery } from "@tanstack/react-query";
import { getQueryFn } from "@/lib/queryClient";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Lock, Edit, Save, X } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Rsvp {
  id: string;
  guestName: string;
  attending: boolean;
  numberOfGuests: string;
  dietaryPreferences: string | null;
  message: string | null;
  createdAt: string;
}

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<Rsvp>>({});
  const [showOnlyAttending, setShowOnlyAttending] = useState(false);
  
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: rsvps, isLoading, error: queryError } = useQuery({
    queryKey: ["/api/rsvp"],
    queryFn: getQueryFn({ on401: "throw" }),
    enabled: isAuthenticated, // Only fetch when authenticated
  });

  const updateRsvpMutation = useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: Partial<Rsvp> }) => {
      console.log("Updating RSVP:", { id, updates });
      const url = `/api/rsvp-update/${id}`;
      console.log("Making request to:", url);
      try {
        const response = await apiRequest("PUT", url, updates);
        console.log("Response status:", response.status);
        console.log("Response headers:", response.headers);
        const result = await response.json();
        console.log("Update response:", result);
        return result;
      } catch (error) {
        console.error("API request failed:", error);
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/rsvps"] });
      setEditingId(null);
      setEditForm({});
      toast({
        title: "RSVP Updated",
        description: "The RSVP has been successfully updated.",
      });
    },
    onError: (error) => {
      console.error("Update error:", error);
      toast({
        title: "Error",
        description: `Failed to update RSVP: ${error.message}`,
        variant: "destructive",
      });
    },
  });

  // Check if already authenticated (from session storage)
  useEffect(() => {
    const authStatus = sessionStorage.getItem("admin-authenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - you can change this password
    if (password === "Cabo2017") {
      setIsAuthenticated(true);
      sessionStorage.setItem("admin-authenticated", "true");
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("admin-authenticated");
    setPassword("");
  };

  const handleEdit = (rsvp: Rsvp) => {
    setEditingId(rsvp.id);
    setEditForm({
      guestName: rsvp.guestName,
      attending: rsvp.attending,
      numberOfGuests: rsvp.numberOfGuests,
      dietaryPreferences: rsvp.dietaryPreferences,
      message: rsvp.message,
    });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm({});
  };

  const handleSaveEdit = () => {
    if (editingId) {
      updateRsvpMutation.mutate({
        id: editingId,
        updates: editForm,
      });
    }
  };

  // Debug logging
  console.log("RSVPs data:", rsvps);
  console.log("Is array:", Array.isArray(rsvps));

  // Test API connectivity
  useEffect(() => {
    fetch("/api/rsvp")
      .then(res => res.json())
      .then(data => console.log("API test response:", data))
      .catch(err => console.error("API test failed:", err));
  }, []);

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="pt-20 min-h-screen">
        <InfoSection title="Admin Access" description="Enter password to view RSVPs">
          <div className="max-w-md mx-auto">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full"
                />
              </div>
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <Button type="submit" className="w-full">
                <Lock className="w-4 h-4 mr-2" />
                Access Admin
              </Button>
            </form>
          </div>
        </InfoSection>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="pt-20 min-h-screen">
        <InfoSection title="RSVP Admin" description="Loading RSVPs...">
          <div className="text-center">Loading...</div>
        </InfoSection>
      </div>
    );
  }

  if (queryError) {
    return (
      <div className="pt-20 min-h-screen">
        <InfoSection title="RSVP Admin" description="Error loading RSVPs">
          <div className="text-center text-red-500">Error loading RSVPs</div>
        </InfoSection>
      </div>
    );
  }

  const attendingGuests = Array.isArray(rsvps) 
    ? rsvps.filter(rsvp => rsvp.attending).reduce((sum, rsvp) => {
        const guestCount = parseInt(rsvp.numberOfGuests) || 0;
        return sum + guestCount;
      }, 0)
    : 0;
  const totalGuests = Array.isArray(rsvps) 
    ? rsvps.reduce((sum, rsvp) => {
        const guestCount = parseInt(rsvp.numberOfGuests) || 0;
        return sum + guestCount;
      }, 0)
    : 0;
  const totalResponses = Array.isArray(rsvps) ? rsvps.length : 0;
  
  // Filter RSVPs based on attending status
  const filteredRsvps = Array.isArray(rsvps) 
    ? showOnlyAttending 
      ? rsvps.filter(rsvp => rsvp.attending)
      : rsvps
    : [];

  return (
    <div className="pt-20 min-h-screen">
      <InfoSection
        title="RSVP Admin"
        description={`${attendingGuests} guests attending out of ${totalGuests} total guests (${totalResponses} responses)`}
        className="bg-gradient-to-b from-background to-muted/20"
      >
        <div className="flex justify-end mb-6">
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Total Responses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{totalResponses}</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Attending Guests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">{attendingGuests}</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Not Attending</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-red-600">{totalGuests - attendingGuests}</div>
              </CardContent>
            </Card>
          </div>

          {/* RSVP List */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif">All Responses</h3>
            
            <Tabs defaultValue="cards" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="cards">Card View</TabsTrigger>
                <TabsTrigger value="table">Table View</TabsTrigger>
              </TabsList>
              
              <TabsContent value="cards" className="space-y-4">
                {Array.isArray(rsvps) && rsvps.map((rsvp) => (
                  <Card key={rsvp.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          {editingId === rsvp.id ? (
                            <Input
                              value={editForm.guestName || ""}
                              onChange={(e) => setEditForm({ ...editForm, guestName: e.target.value })}
                              className="text-lg font-semibold"
                            />
                          ) : (
                            <CardTitle className="text-lg">{rsvp.guestName}</CardTitle>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          {editingId === rsvp.id ? (
                            <div className="flex items-center gap-2">
                              <Button
                                size="sm"
                                onClick={handleSaveEdit}
                                disabled={updateRsvpMutation.isPending}
                              >
                                <Save className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={handleCancelEdit}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          ) : (
                            <>
                              <Badge variant="outline">{rsvp.numberOfGuests} Guest{rsvp.numberOfGuests === "2" ? "s" : ""}</Badge>
                              <Badge variant={rsvp.attending ? "default" : "destructive"}>
                                {rsvp.attending ? "Attending" : "Not Attending"}
                              </Badge>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleEdit(rsvp)}
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {editingId === rsvp.id ? (
                          <div className="space-y-4">
                            <div>
                              <label className="text-sm font-medium">Attending:</label>
                              <Select
                                value={editForm.attending ? "true" : "false"}
                                onValueChange={(value) => setEditForm({ ...editForm, attending: value === "true" })}
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="true">Attending</SelectItem>
                                  <SelectItem value="false">Not Attending</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Number of Guests:</label>
                              <Select
                                value={editForm.numberOfGuests || "1"}
                                onValueChange={(value) => setEditForm({ ...editForm, numberOfGuests: value })}
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="1">1 Guest</SelectItem>
                                  <SelectItem value="2">2 Guests</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Dietary Preferences:</label>
                              <Input
                                value={editForm.dietaryPreferences || ""}
                                onChange={(e) => setEditForm({ ...editForm, dietaryPreferences: e.target.value })}
                                placeholder="Dietary preferences"
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium">Message:</label>
                              <Input
                                value={editForm.message || ""}
                                onChange={(e) => setEditForm({ ...editForm, message: e.target.value })}
                                placeholder="Message"
                              />
                            </div>
                          </div>
                        ) : (
                          <>
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
                          </>
                        )}
                        <div className="text-sm text-muted-foreground">
                          Submitted: {new Date(rsvp.createdAt).toLocaleString()}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="table">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-medium">RSVP Responses</h4>
                      <p className="text-sm text-muted-foreground">
                        Showing {filteredRsvps.length} of {totalResponses} responses
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <label className="flex items-center space-x-2 text-sm">
                        <input
                          type="checkbox"
                          checked={showOnlyAttending}
                          onChange={(e) => setShowOnlyAttending(e.target.checked)}
                          className="rounded"
                        />
                        <span>Show only attending</span>
                      </label>
                    </div>
                  </div>
                  <div className="rounded-md border">
                    <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name(s)</TableHead>
                        <TableHead>Guests</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Dietary</TableHead>
                        <TableHead>Message</TableHead>
                        <TableHead>Submitted</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredRsvps.map((rsvp) => (
                        <TableRow key={rsvp.id}>
                          <TableCell className="font-medium">
                            {editingId === rsvp.id ? (
                              <Input
                                value={editForm.guestName || ""}
                                onChange={(e) => setEditForm({ ...editForm, guestName: e.target.value })}
                                className="w-full"
                              />
                            ) : (
                              rsvp.guestName
                            )}
                          </TableCell>
                          <TableCell>
                            {editingId === rsvp.id ? (
                              <Select
                                value={editForm.numberOfGuests || "1"}
                                onValueChange={(value) => setEditForm({ ...editForm, numberOfGuests: value })}
                              >
                                <SelectTrigger className="w-20">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="1">1</SelectItem>
                                  <SelectItem value="2">2</SelectItem>
                                </SelectContent>
                              </Select>
                            ) : (
                              rsvp.numberOfGuests
                            )}
                          </TableCell>
                          <TableCell>
                            {editingId === rsvp.id ? (
                              <Select
                                value={editForm.attending ? "true" : "false"}
                                onValueChange={(value) => setEditForm({ ...editForm, attending: value === "true" })}
                              >
                                <SelectTrigger className="w-32">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="true">Attending</SelectItem>
                                  <SelectItem value="false">Not Attending</SelectItem>
                                </SelectContent>
                              </Select>
                            ) : (
                              <Badge variant={rsvp.attending ? "default" : "destructive"}>
                                {rsvp.attending ? "Attending" : "Not Attending"}
                              </Badge>
                            )}
                          </TableCell>
                          <TableCell>
                            {editingId === rsvp.id ? (
                              <Input
                                value={editForm.dietaryPreferences || ""}
                                onChange={(e) => setEditForm({ ...editForm, dietaryPreferences: e.target.value })}
                                className="w-full"
                              />
                            ) : (
                              rsvp.dietaryPreferences || "-"
                            )}
                          </TableCell>
                          <TableCell className="max-w-xs">
                            {editingId === rsvp.id ? (
                              <Input
                                value={editForm.message || ""}
                                onChange={(e) => setEditForm({ ...editForm, message: e.target.value })}
                                className="w-full"
                              />
                            ) : (
                              <span className="truncate">{rsvp.message || "-"}</span>
                            )}
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            {new Date(rsvp.createdAt).toLocaleDateString()}
                          </TableCell>
                          <TableCell>
                            {editingId === rsvp.id ? (
                              <div className="flex items-center gap-1">
                                <Button
                                  size="sm"
                                  onClick={handleSaveEdit}
                                  disabled={updateRsvpMutation.isPending}
                                >
                                  <Save className="w-4 h-4" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={handleCancelEdit}
                                >
                                  <X className="w-4 h-4" />
                                </Button>
                              </div>
                            ) : (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleEdit(rsvp)}
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {Array.isArray(rsvps) && rsvps.length === 0 && (
            <div className="text-center text-muted-foreground py-8">
              No RSVPs submitted yet.
            </div>
          )}
        </div>
      </InfoSection>
    </div>
  );
}
