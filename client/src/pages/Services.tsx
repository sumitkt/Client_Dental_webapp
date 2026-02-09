import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Smile, Ruler, Search, Heart, ShieldPlus, Baby, Zap } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const SERVICES_LIST = [
  {
    id: "general",
    icon: <Search className="w-8 h-8" />,
    title: "General Dentistry",
    description: "Comprehensive exams, x-rays, and professional cleaning to maintain optimal oral health.",
    features: ["Routine Checkups", "Ultrasonic Cleaning", "Oral Cancer Screening", "Fillings"]
  },
  {
    id: "cosmetic",
    icon: <Sparkles className="w-8 h-8" />,
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with our aesthetic treatments designed to boost your confidence.",
    features: ["Teeth Whitening", "Porcelain Veneers", "Smile Makeovers", "Composite Bonding"]
  },
  {
    id: "implants",
    icon: <ShieldPlus className="w-8 h-8" />,
    title: "Dental Implants",
    description: "Permanent, natural-looking replacements for missing teeth that restore function.",
    features: ["Single Tooth Implants", "All-on-4", "Bone Grafting", "Implant Dentures"]
  },
  {
    id: "ortho",
    icon: <Ruler className="w-8 h-8" />,
    title: "Orthodontics",
    description: "Straighten your teeth and correct your bite with modern orthodontic solutions.",
    features: ["Traditional Braces", "Invisalign", "Retainers", "Jaw Alignment"]
  },
  {
    id: "rct",
    icon: <Zap className="w-8 h-8" />,
    title: "Root Canal Treatment",
    description: "Save damaged or infected teeth with our painless root canal therapy.",
    features: ["Single-Sitting RCT", "Re-treatment", "Apicoectomy", "Post & Core"]
  },
  {
    id: "kids",
    icon: <Baby className="w-8 h-8" />,
    title: "Pediatric Dentistry",
    description: "Gentle care for children, focusing on prevention and building healthy habits.",
    features: ["Fluoride Treatment", "Pit & Fissure Sealants", "Space Maintainers", "Habit Breaking"]
  },
];

export default function Services() {
  return (
    <div className="w-full pt-20">
      <div className="bg-accent/30 py-20 text-center">
        <div className="container-custom">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Services
          </motion.h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We provide comprehensive dental care for the entire family, utilizing the latest techniques and technology.
          </p>
        </div>
      </div>

      <div className="container-custom py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">{service.description}</p>
              
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all" asChild>
                <Link href="/contact">
                  Book Consultation <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Not sure what you need?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
            Schedule a consultation with Dr. Hemani. We'll examine your oral health and recommend the best treatment plan for you.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 text-lg" asChild>
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
