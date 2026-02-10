import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

const DEFAULT_TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Patient",
    content: "Dr. Anurag provided excellent dental care. My teeth have never felt better! Highly professional and caring team.",
    rating: 5,
    imageUrl: null,
    isApproved: true,
    createdAt: new Date(),
  },
  {
    id: 2,
    name: "Priya Singh",
    role: "Cosmetic Dentistry Patient",
    content: "Amazing smile transformation! The veneers look so natural. Dr. Anurag's attention to detail is incredible.",
    rating: 5,
    imageUrl: null,
    isApproved: true,
    createdAt: new Date(),
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Root Canal Patient",
    content: "Had severe tooth pain. Dr. Anurag fixed it painlessly. The treatment was quick and effective. Thank you!",
    rating: 5,
    imageUrl: null,
    isApproved: true,
    createdAt: new Date(),
  },
  {
    id: 4,
    name: "Neha Sharma",
    role: "Orthodontics Patient",
    content: "Got my braces 6 months ago. Dr. Anurag's team has been supportive throughout. Results exceed expectations!",
    rating: 5,
    imageUrl: null,
    isApproved: true,
    createdAt: new Date(),
  },
  {
    id: 5,
    name: "Vikas Reddy",
    role: "Patient",
    content: "Best dental clinic in Jaipur. Clean, modern facility with friendly staff. Highly recommended!",
    rating: 5,
    imageUrl: null,
    isApproved: true,
    createdAt: new Date(),
  },
];

export function useTestimonials() {
  return useQuery({
    queryKey: [api.testimonials.list.path],
    queryFn: async () => {
      try {
        const res = await fetch(api.testimonials.list.path);
        if (!res.ok) throw new Error("Failed to fetch testimonials");
        const data = await res.json();
        // Return fetched data if not empty, otherwise return defaults
        return Array.isArray(data) && data.length > 0 ? data : DEFAULT_TESTIMONIALS;
      } catch (error) {
        // On any error, return default testimonials
        return DEFAULT_TESTIMONIALS;
      }
    },
  });
}
