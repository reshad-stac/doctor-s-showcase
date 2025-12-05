import { Sparkles, Smile, Shield, Stethoscope, Zap, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Smile,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, teeth whitening, and smile makeovers tailored to your unique features.",
    features: ["Porcelain Veneers", "Professional Whitening", "Smile Design"],
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Comprehensive cleanings and exams to maintain your oral health and prevent future problems.",
    features: ["Deep Cleanings", "Oral Cancer Screening", "Fluoride Treatment"],
  },
  {
    icon: Stethoscope,
    title: "Restorative Dentistry",
    description: "Restore function and beauty with crowns, bridges, and dental implants using premium materials.",
    features: ["Dental Implants", "Crowns & Bridges", "Root Canals"],
  },
  {
    icon: Sparkles,
    title: "Invisalign®",
    description: "Straighten your teeth discreetly with clear aligners. Certified Invisalign provider with proven results.",
    features: ["Clear Aligners", "Digital Planning", "Fast Results"],
  },
  {
    icon: Zap,
    title: "Emergency Care",
    description: "Same-day appointments for dental emergencies. Quick relief and expert care when you need it most.",
    features: ["Same-Day Service", "Pain Relief", "Trauma Care"],
  },
  {
    icon: Baby,
    title: "Family Dentistry",
    description: "Gentle, comprehensive care for patients of all ages. Creating positive dental experiences for your family.",
    features: ["Pediatric Care", "Senior Dentistry", "Family Plans"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Services</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive Dental Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From routine care to advanced procedures, we offer a full range of services 
            to meet all your dental needs under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto font-semibold">
                Learn More →
              </Button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link to="/services">
            <Button variant="hero" size="lg">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
