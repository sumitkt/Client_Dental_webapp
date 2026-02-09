import { db } from "./db";
import { inquiries, testimonials, type InsertInquiry, type InsertTestimonial, type Inquiry, type Testimonial } from "@shared/schema";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  // Inquiries
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  
  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class DatabaseStorage implements IStorage {
  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db.insert(inquiries).values(insertInquiry).returning();
    return inquiry;
  }

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
