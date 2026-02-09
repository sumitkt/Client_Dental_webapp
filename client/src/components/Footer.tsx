import { Link } from "wouter";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg leading-tight text-white">
                Dr. Anurag Hemani
              </span>
              <span className="text-xs text-white/60 uppercase tracking-wider font-medium">
                Dental Clinic
              </span>
            </div>
          </div>
          <p className="text-white/70 leading-relaxed text-sm">
            Providing world-class dental care with a gentle touch. Advanced technology, expert team, and a warm environment for your perfect smile.
          </p>
          <div className="flex gap-4">
            <SocialLink icon={<Facebook className="w-5 h-5" />} href="#" />
            <SocialLink icon={<Instagram className="w-5 h-5" />} href="#" />
            <SocialLink icon={<Twitter className="w-5 h-5" />} href="#" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
          <ul className="space-y-4">
            <li><Link href="/" className="text-white/70 hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/about" className="text-white/70 hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/services" className="text-white/70 hover:text-primary transition-colors">Services</Link></li>
            <li><Link href="/contact" className="text-white/70 hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-bold mb-6 text-lg">Our Services</h3>
          <ul className="space-y-4 text-sm text-white/70">
            <li>Cosmetic Dentistry</li>
            <li>Dental Implants</li>
            <li>Root Canal Treatment</li>
            <li>Orthodontics</li>
            <li>Pediatric Dentistry</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-bold mb-6 text-lg">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3 text-white/70">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <span>D-75a, Paramhans Colony, Sindhu Nagar, Murlipura, Jaipur Rajasthan 302039</span>
            </li>
            <li className="flex items-center gap-3 text-white/70">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <span>+91 93520 30055</span>
            </li>
            <li className="flex items-center gap-3 text-white/70">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <span>hemanianurag@gmail.com</span>
            </li>
            <li className="flex items-start gap-3 text-white/70">
              <Clock className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p>Mon - Sat: 9:30 AM - 2:00 PM and 4:30 PM - 9:00 PM</p>
                <p>Sun: 10:00 AM - 2:00 PM</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-custom border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
        <p>&copy; {new Date().getFullYear()} Dr. Anurag Hemani. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a 
      href={href} 
      className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 text-white/70"
    >
      {icon}
    </a>
  );
}
