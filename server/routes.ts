import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRsvpSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // RSVP routes
  app.post("/api/rsvp", async (req, res) => {
    try {
      const validatedData = insertRsvpSchema.parse(req.body);
      const rsvp = await storage.createRsvp(validatedData);
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

  const httpServer = createServer(app);

  return httpServer;
}
