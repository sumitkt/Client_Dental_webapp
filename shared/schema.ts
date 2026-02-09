import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === INQUIRIES / APPOINTMENTS ===
export const insertInquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email"),
  service: z.string().optional(),
  preferredDate: z.string().optional(),
  message: z.string().optional(),
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;

// === TESTIMONIALS ===
export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role"), // e.g., "Patient", "Root Canal Patient"
  content: text("content").notNull(),
  rating: serial("rating").notNull(), // 1-5
  imageUrl: text("image_url"),
  isApproved: boolean("is_approved").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({ 
  id: true, 
  createdAt: true 
});

export type Testimonial = typeof testimonials.$inferSelect;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;

// === API TYPES ===
export type CreateInquiryRequest = InsertInquiry;
export type TestimonialResponse = Testimonial;
