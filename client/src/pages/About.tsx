import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function About() {
  return (
    <div className="w-full pt-20">
      {/* Header */}
      <div className="bg-primary py-20 text-white text-center">
        <div className="container-custom">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Our Clinic
          </motion.h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Dedicated to providing exceptional dental care in a comfortable and welcoming environment.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Philosophy</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-4">
                Founded by Dr. Anurag Hemani, our clinic has served the Jaipur community for over 5 years. We believe that dentistry is not just about treating teeth, but about caring for the person behind the smile.
              </p>
              <p className="mb-4">
                We take a holistic approach to oral health, understanding how it connects to your overall well-being. Our team stays updated with the latest advancements in dental technology to ensure you receive the best possible care.
              </p>
              <p>
                Whether you're visiting for a routine cleaning or a complex restoration, our goal is to make every visit as comfortable and stress-free as possible.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              {['Advanced Technology', 'Sterile Environment', 'Comfortable Care', 'Experienced Team'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid gap-6">
            <img 
              src="/doctor_client.jpeg" 
              alt="Clinic Interior" 
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
            />
            <img 
              src="/photo-1.jpeg" 
              alt="Dental Equipment" 
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-muted/30 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Clinic Gallery</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our state-of-the-art facility and welcoming environment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['/doctor_client.jpeg', '/photo-1.jpeg', '/photo-2.jpeg', '/photo-3.jpeg', '/photo-4.jpeg', '/photo-5.jpeg'].map((img, i) => (
              <div key={i} className="rounded-2xl shadow-lg overflow-hidden h-64 group">
                <img 
                  src={img}
                  alt={`Clinic Gallery ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
