import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRsvpSchema, type InsertRsvp } from "@shared/schema";
import { sendRsvpNotification } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Test endpoint
  app.get("/api/test", (req, res) => {
    res.json({ message: "API is working" });
  });

  // RSVP routes
  app.post("/api/rsvp", async (req, res) => {
    try {
      const validatedData = insertRsvpSchema.parse(req.body);
      const rsvp = await storage.createRsvp(validatedData);
      
      // Send email notification
      await sendRsvpNotification(rsvp);
      
      res.json(rsvp);
    } catch (error) {
      res.status(400).json({ error: "Invalid RSVP data" });
    }
  });

  app.get("/api/rsvps", async (req, res) => {
    try {
      const rsvps = await storage.getAllRsvps();
      res.json(rsvps);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch RSVPs" });
    }
  });

  app.put("/api/rsvp/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const updates = req.body;
      
      console.log("Update request:", { id, updates });
      
      // Validate the updates
      const validUpdates: any = {};
      if (updates.guestName !== undefined) validUpdates.guestName = updates.guestName;
      if (updates.attending !== undefined) validUpdates.attending = updates.attending;
      if (updates.numberOfGuests !== undefined) validUpdates.numberOfGuests = updates.numberOfGuests;
      if (updates.dietaryPreferences !== undefined) validUpdates.dietaryPreferences = updates.dietaryPreferences;
      if (updates.message !== undefined) validUpdates.message = updates.message;
      
      console.log("Valid updates:", validUpdates);
      
      const updatedRsvp = await storage.updateRsvp(id, validUpdates);
      
      if (!updatedRsvp) {
        console.log("RSVP not found for id:", id);
        return res.status(404).json({ error: "RSVP not found" });
      }
      
      console.log("Updated RSVP:", updatedRsvp);
      res.json(updatedRsvp);
    } catch (error) {
      console.error("Update error:", error);
      res.status(400).json({ error: "Invalid update data" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
