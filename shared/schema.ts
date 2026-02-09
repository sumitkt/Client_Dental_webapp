import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === INQUIRIES / APPOINTMENTS ===
export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  service: text("service"),
  preferredDate: text("preferred_date"),
  message: text("message"),
  status: text("status").default("new"), // new, contacted, scheduled
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertInquirySchema = createInsertSchema(inquiries).omit({ 
  id: true, 
  status: true, 
  createdAt: true 
});

export type Inquiry = typeof inquiries.$inferSelect;
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
