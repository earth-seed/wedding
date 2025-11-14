import { type User, type InsertUser, type Rsvp, type InsertRsvp } from "@shared/schema";
import { randomUUID } from "crypto";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createRsvp(rsvp: InsertRsvp): Promise<Rsvp>;
  getAllRsvps(): Promise<Rsvp[]>;
  updateRsvp(id: string, updates: Partial<InsertRsvp>): Promise<Rsvp | undefined>;
}

export class FileStorage implements IStorage {
  private users: Map<string, User>;
  private rsvps: Map<string, Rsvp>;
  private dataDir: string;
  private rsvpsFile: string;

  constructor() {
    this.users = new Map();
    this.rsvps = new Map();
    this.dataDir = join(process.cwd(), "data");
    this.rsvpsFile = join(this.dataDir, "rsvps.json");
    
    // Ensure data directory exists
    if (!existsSync(this.dataDir)) {
      mkdirSync(this.dataDir, { recursive: true });
    }
    
    // Load existing RSVPs from file
    this.loadRsvps();
  }

  private loadRsvps(): void {
    if (existsSync(this.rsvpsFile)) {
      try {
        const data = readFileSync(this.rsvpsFile, "utf-8");
        const rsvps: Rsvp[] = JSON.parse(data);
        rsvps.forEach(rsvp => {
          // Convert createdAt string back to Date
          this.rsvps.set(rsvp.id, {
            ...rsvp,
            createdAt: new Date(rsvp.createdAt)
          });
        });
      } catch (error) {
        console.error("Error loading RSVPs from file:", error);
      }
    }
  }

  private saveRsvps(): void {
    try {
      const rsvpsArray = Array.from(this.rsvps.values());
      writeFileSync(this.rsvpsFile, JSON.stringify(rsvpsArray, null, 2));
    } catch (error) {
      console.error("Error saving RSVPs to file:", error);
    }
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createRsvp(insertRsvp: InsertRsvp): Promise<Rsvp> {
    const id = randomUUID();
    const rsvp: Rsvp = {
      id,
      guestName: insertRsvp.guestName,
      attending: insertRsvp.attending,
      numberOfGuests: insertRsvp.numberOfGuests ?? "1",
      dietaryPreferences: insertRsvp.dietaryPreferences ?? null,
      message: insertRsvp.message ?? null,
      createdAt: new Date(),
    };
    this.rsvps.set(id, rsvp);
    this.saveRsvps(); // Save to file immediately
    return rsvp;
  }

  async getAllRsvps(): Promise<Rsvp[]> {
    return Array.from(this.rsvps.values());
  }

  async updateRsvp(id: string, updates: Partial<InsertRsvp>): Promise<Rsvp | undefined> {
    console.log("Storage updateRsvp called with:", { id, updates });
    
    const existingRsvp = this.rsvps.get(id);
    if (!existingRsvp) {
      console.log("RSVP not found in storage for id:", id);
      return undefined;
    }

    console.log("Existing RSVP:", existingRsvp);

    const updatedRsvp: Rsvp = {
      ...existingRsvp,
      ...updates,
      id: existingRsvp.id, // Ensure ID doesn't change
      createdAt: existingRsvp.createdAt, // Ensure createdAt doesn't change
    };

    console.log("Updated RSVP:", updatedRsvp);

    this.rsvps.set(id, updatedRsvp);
    this.saveRsvps(); // Save to file immediately
    return updatedRsvp;
  }
}

export const storage = new FileStorage();
