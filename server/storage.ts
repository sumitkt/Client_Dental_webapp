import { testimonials, type InsertTestimonial, type Testimonial } from "@shared/schema";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

// Production/storage backed by real DB
let DatabaseStorage: { new (): IStorage } | null = null;
try {
  // Importing `db` (drizzle) is avoided in development when DATABASE_URL is
  // not provided. Only attempt to use the real database when available.
  // This lazy import keeps dev runs without a DB working.
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  // Note: use require to avoid ESM import-time errors when DB is unavailable.
  // If `./db` throws, we'll fall back to in-memory storage below.
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { db } = require("./db");
  DatabaseStorage = class implements IStorage {
    async getTestimonials(): Promise<Testimonial[]> {
      return await db.select().from(testimonials).where(eq(testimonials.isApproved, true)).orderBy(desc(testimonials.createdAt));
    }

    async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
      const [testimonial] = await db.insert(testimonials).values(insertTestimonial).returning();
      return testimonial;
    }
  };
} catch (err) {
  // If DB can't be initialized (missing DATABASE_URL) we'll fall back
  // to an in-memory implementation for development.
}

// In-memory storage used when DB is unavailable (development)
class InMemoryStorage implements IStorage {
  private items: Testimonial[] = [];
  private idCounter = 1;

  async getTestimonials(): Promise<Testimonial[]> {
    return this.items.filter((t) => t.isApproved).sort((a, b) => +b.createdAt - +a.createdAt);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const now = new Date();
    const testimonial: any = {
      id: this.idCounter++,
      ...insertTestimonial,
      createdAt: now,
      updatedAt: now,
    };
    this.items.push(testimonial);
    return testimonial as Testimonial;
  }
}

export const storage: IStorage = DatabaseStorage ? new DatabaseStorage() : new InMemoryStorage();
