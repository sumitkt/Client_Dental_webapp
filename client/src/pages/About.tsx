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
                Founded by Dr. Anurag Hemani, our clinic has served the Jaipur community for over 15 years. We believe that dentistry is not just about treating teeth, but about caring for the person behind the smile.
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
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
              alt="Clinic Interior" 
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=800" 
              alt="Dental Equipment" 
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-muted/30 py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet The Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our team of specialists works together to provide comprehensive care under one roof.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TeamMember 
              name="Dr. Anurag Hemani" 
              role="Chief Dentist" 
              img="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400" 
            />
            <TeamMember 
              name="Dr. Sarah Johnson" 
              role="Orthodontist" 
              img="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400" 
            />
            <TeamMember 
              name="Dr. Michael Chen" 
              role="Oral Surgeon" 
              img="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamMember({ name, role, img }: { name: string, role: string, img: string }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center group">
      <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border-4 border-accent/30 group-hover:border-primary transition-colors">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-primary font-medium">{role}</p>
    </div>
  );
}
