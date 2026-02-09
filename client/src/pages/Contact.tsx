import { AppointmentForm } from "@/components/AppointmentForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="w-full pt-20">
      <div className="bg-accent/30 py-20 text-center">
        <div className="container-custom">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get In Touch
          </motion.h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We are here to help. Reach out to us for appointments or any dental queries.
          </p>
        </div>
      </div>

      <div className="container-custom py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
            
            <div className="grid gap-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Our Location</h3>
                  <p className="text-muted-foreground">123 Medical Plaza, Malviya Nagar,<br />Jaipur, Rajasthan 302017</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone Number</h3>
                  <p className="text-muted-foreground">+91 987 654 3210</p>
                  <p className="text-muted-foreground text-sm">Mon-Sat, 10am-8pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email Address</h3>
                  <p className="text-muted-foreground">info@drhemani.com</p>
                  <p className="text-muted-foreground">appointments@drhemani.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Working Hours</h3>
                  <p className="text-muted-foreground">Monday - Saturday: 10:00 AM - 8:00 PM</p>
                  <p className="text-muted-foreground">Sunday: By Appointment Only</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227822.4632128711!2d75.64972275685415!3d26.88511516027136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1709664555819!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div>
            <AppointmentForm />
          </div>
        </div>
      </div>
    </div>
  );
}
