import { db } from "./db";
import { testimonials, type InsertTestimonial, type Testimonial } from "@shared/schema";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class DatabaseStorage implements IStorage {
  async getTestimonials(): Promise<Testimonial[]> {
    return await db.select()
      .from(testimonials)
      .where(eq(testimonials.isApproved, true))
      .orderBy(desc(testimonials.createdAt));
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const [testimonial] = await db.insert(testimonials).values(insertTestimonial).returning();
    return testimonial;
  }
}

export const storage = new DatabaseStorage();
