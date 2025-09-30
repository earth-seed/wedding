import InfoSection from "@/components/InfoSection";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertRsvpSchema, type InsertRsvp } from "@shared/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Rsvp() {
  const { toast } = useToast();

  const form = useForm<InsertRsvp>({
    resolver: zodResolver(insertRsvpSchema),
    defaultValues: {
      guestName: "",
      attending: true,
      dietaryPreferences: "",
      message: "",
    },
  });

  const rsvpMutation = useMutation({
    mutationFn: (data: InsertRsvp) =>
      apiRequest("POST", "/api/rsvp", data),
    onSuccess: () => {
      toast({
        title: "RSVP Submitted",
        description: "Thank you for your response! We look forward to celebrating with you.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit RSVP. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertRsvp) => {
    rsvpMutation.mutate(data);
  };

  return (
    <div className="pt-20 min-h-screen">
      <InfoSection
        title="RSVP"
        description="Please let us know if you'll be joining us"
      >
        <div className="max-w-2xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="guestName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your full name"
                        {...field}
                        data-testid="input-guest-name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="attending"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Will you be attending?</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(value === "true")}
                      defaultValue={field.value ? "true" : "false"}
                    >
                      <FormControl>
                        <SelectTrigger data-testid="select-attending">
                          <SelectValue placeholder="Select your response" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="true">Yes, I'll be there!</SelectItem>
                        <SelectItem value="false">Sorry, can't make it</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dietaryPreferences"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dietary Preferences</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g., Vegetarian, Vegan, Gluten-free, Allergies"
                        {...field}
                        value={field.value || ""}
                        data-testid="input-dietary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Share a note or well wishes"
                        className="resize-none"
                        rows={4}
                        {...field}
                        value={field.value || ""}
                        data-testid="textarea-message"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-center">
                <Button
                  type="submit"
                  size="lg"
                  disabled={rsvpMutation.isPending}
                  className="px-12"
                  data-testid="button-submit-rsvp"
                >
                  {rsvpMutation.isPending ? "Submitting..." : "Submit RSVP"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </InfoSection>
    </div>
  );
}
