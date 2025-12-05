import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, Smile, Shield, Stethoscope, Zap, Baby, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Smile,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, teeth whitening, and smile makeovers tailored to your unique features.",
    features: ["Porcelain Veneers", "Professional Whitening", "Smile Design", "Dental Bonding", "Gum Contouring"],
    price: "Starting at $299",
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Comprehensive cleanings and exams to maintain your oral health and prevent future problems.",
    features: ["Deep Cleanings", "Oral Cancer Screening", "Fluoride Treatment", "Sealants", "Digital X-Rays"],
    price: "Starting at $99",
  },
  {
    icon: Stethoscope,
    title: "Restorative Dentistry",
    description: "Restore function and beauty with crowns, bridges, and dental implants using premium materials.",
    features: ["Dental Implants", "Crowns & Bridges", "Root Canals", "Dentures", "Inlays & Onlays"],
    price: "Starting at $499",
  },
  {
    icon: Sparkles,
    title: "Invisalign®",
    description: "Straighten your teeth discreetly with clear aligners. Certified Invisalign provider with proven results.",
    features: ["Clear Aligners", "Digital Planning", "Fast Results", "Comfortable Fit", "Removable Design"],
    price: "Starting at $2,999",
  },
  {
    icon: Zap,
    title: "Emergency Care",
    description: "Same-day appointments for dental emergencies. Quick relief and expert care when you need it most.",
    features: ["Same-Day Service", "Pain Relief", "Trauma Care", "Broken Tooth Repair", "Infection Treatment"],
    price: "Call for pricing",
  },
  {
    icon: Baby,
    title: "Family Dentistry",
    description: "Gentle, comprehensive care for patients of all ages. Creating positive dental experiences for your family.",
    features: ["Pediatric Care", "Senior Dentistry", "Family Plans", "First Visit Programs", "Cavity Prevention"],
    price: "Starting at $79",
  },
];

const Services = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container-max text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Services</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Complete Dental Care Solutions
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From routine checkups to advanced cosmetic procedures, we provide comprehensive dental services for the whole family.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-background rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="font-display text-2xl font-bold text-foreground">
                        {service.title}
                      </h2>
                      <span className="text-sm font-semibold text-primary">{service.price}</span>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                          <Check className="w-4 h-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-primary rounded-3xl p-12">
            <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Schedule a consultation today and let us help you achieve the smile you've always wanted.
            </p>
            <Link to="/#contact">
              <Button variant="secondary" size="lg">
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
