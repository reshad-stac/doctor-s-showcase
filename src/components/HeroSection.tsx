import { Button } from "@/components/ui/button";
import { Calendar, Star, Award, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "15,000+", label: "Happy Patients" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Star, value: "4.9", label: "Patient Rating" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Star className="w-4 h-4 fill-current" />
              <span>Expert Dental Care in Cumilla</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Your Smile,{" "}
              <span className="text-gradient">Our Expertise</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Experience exceptional dental care with Dr. Md. Ajahel Islam (Mitul). Specialized in 
              Oral & Maxillofacial Surgery with advanced training from Thailand, delivering world-class 
              dental solutions at Medinova Medical Services Ltd., Cumilla.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border/50">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-2xl text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:h-[600px] animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative h-full">
              {/* Main image placeholder */}
              <div className="relative w-full h-[400px] lg:h-full rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Dr. Ajahel Islam - Modern dental clinic in Cumilla"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-4 shadow-xl border border-border animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">BMDC Certified</p>
                    <p className="text-sm text-muted-foreground">Reg. #6330</p>
                  </div>
                </div>
              </div>

              {/* Rating card */}
              <div className="absolute -top-4 -right-4 bg-background rounded-2xl p-4 shadow-xl border border-border">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-1">500+ Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;