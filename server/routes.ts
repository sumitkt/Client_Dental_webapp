import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // === INQUIRIES ===
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // === TESTIMONIALS ===
  app.get(api.testimonials.list.path, async (req, res) => {
    const testimonials = await storage.getTestimonials();
    res.json(testimonials);
  });

  // === SEED DATA ===
  // Seed some testimonials if empty
  const existingTestimonials = await storage.getTestimonials();
  if (existingTestimonials.length === 0) {
    await storage.createTestimonial({
      name: "Rahul Sharma",
      role: "Dental Implant Patient",
      content: "Dr. Anurag Hemani is fantastic! The implant procedure was painless and the results are amazing.",
      rating: 5,
      isApproved: true
    });
    await storage.createTestimonial({
      name: "Priya Singh",
      role: "Cosmetic Dentistry",
      content: "I got veneers done here and my smile has completely transformed. Highly recommended!",
      rating: 5,
      isApproved: true
    });
    await storage.createTestimonial({
      name: "Amit Patel",
      role: "Routine Checkup",
      content: "Very professional staff and clean clinic. Best dental care in Jaipur.",
      rating: 4,
      isApproved: true
    });
  }

  return httpServer;
}
