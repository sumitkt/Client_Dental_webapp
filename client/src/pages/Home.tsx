import { motion } from "framer-motion";
import { Shield, Clock, Award, ChevronRight, CheckCircle2, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AppointmentForm } from "@/components/AppointmentForm";
import { useTestimonials } from "@/hooks/use-testimonials";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const FEATURES = [
  {
    icon: <Shield className="w-8 h-8 text-secondary" />,
    title: "Safety First",
    desc: "Rigorous sterilization protocols and safety standards."
  },
  {
    icon: <Clock className="w-8 h-8 text-secondary" />,
    title: "Quick Care",
    desc: "Minimal waiting times and efficient treatment plans."
  },
  {
    icon: <Award className="w-8 h-8 text-secondary" />,
    title: "Expert Team",
    desc: "Highly qualified specialists for comprehensive care."
  }
];

const SERVICES = [
  { title: "General Dentistry", desc: "Routine checkups, cleaning, and preventative care.", img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=400" },
  { title: "Cosmetic Dentistry", desc: "Veneers, whitening, and smile makeovers.", img: "/photo-2.jpeg" },
  { title: "Dental Implants", desc: "Permanent solutions for missing teeth.", img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=400" },
  { title: "Orthodontics", desc: "Braces and aligners for a straighter smile.", img: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=400" },
];

export default function Home() {
  const { data: testimonials } = useTestimonials();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden bg-accent/20">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          {/* Abstract background blobs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-primary/20 text-primary font-semibold text-sm mb-6 shadow-sm">
              ✨ Best Dental Care in Jaipur
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-foreground">
              Your Smile,<br />
              <span className="text-primary">Our Passion</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Experience world-class dental care with Dr. Anurag Hemani. 
              Advanced technology meets compassionate care for a healthier, brighter smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 text-lg h-14" onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}>
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 text-foreground hover:bg-primary/5 rounded-full px-8 text-lg h-14" asChild>
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main Hero Image */}
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              {/* woman smiling dental portrait */}
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" 
                alt="Patient smiling" 
                className="w-full h-auto object-cover aspect-[4/5] lg:aspect-square"
              />
            </div>
            
            {/* Floating Card 1 */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 animate-float flex items-center gap-3 max-w-[200px]">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-sm">Top Rated</p>
                <p className="text-xs text-muted-foreground">500+ Happy Patients</p>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute top-10 -right-6 bg-white p-4 rounded-xl shadow-xl z-20 animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex -space-x-3">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">
                     U{i}
                   </div>
                 ))}
                 <div className="w-8 h-8 rounded-full bg-primary text-white border-2 border-white flex items-center justify-center text-[10px] font-bold">
                   +2k
                 </div>
              </div>
              <p className="text-xs text-center mt-2 font-medium">Community Trust</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {FEATURES.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-accent/10 hover:bg-accent/20 transition-colors border border-primary/5"
              >
                <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            {/* male dentist portrait */}
            <img 
              src="/doctor.jpeg" 
              alt="Dr. Anurag Hemani" 
              className="rounded-2xl shadow-lg w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-xl shadow-xl">
              <p className="text-3xl font-bold">5+</p>
              <p className="text-sm opacity-90">Years of Experience</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h4 className="text-primary font-semibold mb-2">About The Doctor</h4>
            <h2 className="text-4xl font-bold mb-6">Meet Dr. Anurag Hemani</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With over 5 years of experience in clinical dentistry, Dr. Anurag Hemani is one of Jaipur's leading dental practitioners.
              Specializing in comprehensive restorative and cosmetic procedures, he combines technical precision with an artistic eye.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our clinic is equipped with state-of-the-art technology to ensure precise diagnostics and effective treatments, minimizing discomfort and maximizing results.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
              <Link href="/about">Read More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Dental Care</h2>
            <p className="text-muted-foreground">We offer a full range of dental treatments to keep your smile healthy and beautiful.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => (
              <Link key={i} href="/services">
                <div className="group cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white border border-gray-100 h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">{service.desc}</p>
                    <div className="flex items-center text-primary font-semibold text-sm mt-auto">
                      Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary text-white rounded-full px-8" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick WhatsApp WTA */}
      <section className="py-16 bg-green-50 border-y border-green-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-green-100">
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-foreground mb-3">Chat with us on WhatsApp</h3>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                Get instant replies to your dental questions and book appointments directly via WhatsApp. Quick, easy, and convenient!
              </p>
            </div>
            <Button 
              onClick={() => window.open('https://wa.me/919352030055?text=Hi%20Dr%20Anurag,%20I%20would%20like%20to%20book%20an%20appointment', '_blank')}
              className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 py-6 text-lg font-bold shadow-lg flex items-center gap-2 whitespace-nowrap h-auto"
            >
              <MessageCircle className="w-5 h-5" />
              Chat Now
            </Button>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="py-16 md:py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Smile?</h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Don't wait for dental pain to strike. Schedule your checkup today and experience the difference of compassionate, expert care.
            </p>
            <ul className="space-y-4 mb-8">
              {['Same-day appointments available', 'Transparent pricing', 'State-of-the-art facility', 'Friendly & caring staff'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-accent/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Patient Stories</h2>
            <p className="text-muted-foreground">See what our happy patients have to say about their experience.</p>
          </div>

          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials?.length ? (
                testimonials.map((t) => (
                  <CarouselItem key={t.id} className="md:basis-1/2 lg:basis-1/2 pl-6">
                    <div className="p-8 rounded-2xl bg-white shadow-lg border border-primary/5 h-full flex flex-col">
                      <div className="flex gap-1 mb-4">
                        {[1,2,3,4,5].map(star => (
                          <span key={star} className="text-yellow-400 text-lg">★</span>
                        ))}
                      </div>
                      <p className="text-foreground/80 italic mb-6 flex-1">"{t.content}"</p>
                      <div className="flex items-center gap-4 mt-auto">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                          {t.name[0]}
                        </div>
                        <div>
                          <p className="font-bold text-sm">{t.name}</p>
                          <p className="text-xs text-muted-foreground">{t.role || 'Patient'}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))
              ) : (
                <div className="text-center w-full py-12 text-muted-foreground">
                  Loading stories...
                </div>
              )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
