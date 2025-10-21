const fs = require('fs');
const path = require('path');
const { randomUUID } = require('crypto');

// Simple file-based storage for Netlify Functions
class NetlifyStorage {
  constructor() {
    this.dataDir = '/tmp/rsvp-data';
    this.rsvpsFile = path.join(this.dataDir, 'rsvps.json');
    this.ensureDataDir();
    this.loadRsvps();
  }

  ensureDataDir() {
    if (!fs.existsSync(this.dataDir)) {
      fs.mkdirSync(this.dataDir, { recursive: true });
    }
  }

  loadRsvps() {
    this.rsvps = new Map();
    if (fs.existsSync(this.rsvpsFile)) {
      try {
        const data = fs.readFileSync(this.rsvpsFile, 'utf-8');
        const rsvps = JSON.parse(data);
        rsvps.forEach(rsvp => {
          this.rsvps.set(rsvp.id, {
            ...rsvp,
            createdAt: new Date(rsvp.createdAt)
          });
        });
      } catch (error) {
        console.error('Error loading RSVPs:', error);
      }
    }
  }

  saveRsvps() {
    try {
      const rsvpsArray = Array.from(this.rsvps.values());
      fs.writeFileSync(this.rsvpsFile, JSON.stringify(rsvpsArray, null, 2));
    } catch (error) {
      console.error('Error saving RSVPs:', error);
    }
  }

  async createRsvp(insertRsvp) {
    const id = randomUUID();
    const rsvp = {
      id,
      guestName: insertRsvp.guestName,
      attending: insertRsvp.attending,
      numberOfGuests: "1", // Always default to 1 guest
      dietaryPreferences: insertRsvp.dietaryPreferences ?? null,
      message: insertRsvp.message ?? null,
      createdAt: new Date(),
    };
    this.rsvps.set(id, rsvp);
    this.saveRsvps();
    return rsvp;
  }

  async getAllRsvps() {
    return Array.from(this.rsvps.values());
  }

  async updateRsvp(id, updates) {
    const existingRsvp = this.rsvps.get(id);
    if (!existingRsvp) {
      return undefined;
    }

    const updatedRsvp = {
      ...existingRsvp,
      ...updates,
      id: existingRsvp.id,
      createdAt: existingRsvp.createdAt,
    };

    this.rsvps.set(id, updatedRsvp);
    this.saveRsvps();
    return updatedRsvp;
  }
}

// Export singleton instance
const storage = new NetlifyStorage();
module.exports = { storage };
