import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Jennifer Martinez",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "Dr. Mitchell transformed my smile with veneers, and I couldn't be happier! Her attention to detail and gentle approach made the entire process comfortable. I finally have the confidence to smile in photos.",
    service: "Cosmetic Dentistry",
  },
  {
    name: "Robert Chen",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "As someone with dental anxiety, I was nervous about getting implants. Dr. Mitchell and her team were incredibly patient and reassuring. The results exceeded my expectations, and I actually look forward to my checkups now!",
    service: "Dental Implants",
  },
  {
    name: "Amanda Thompson",
    role: "Teacher",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "My whole family sees Dr. Mitchell. She's wonderful with my kids and has made dental visits a positive experience for them. Her preventive care approach has kept our family's teeth healthy for years.",
    service: "Family Dentistry",
  },
  {
    name: "Michael Davis",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "The Invisalign treatment I received was life-changing. Dr. Mitchell's expertise and the advanced technology in her office made the process seamless. My teeth are perfectly aligned now, and no one knew I was wearing aligners!",
    service: "Invisalign",
  },
  {
    name: "Sarah Williams",
    role: "Nurse",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "I had a dental emergency on a Saturday and Dr. Mitchell's office was able to see me the same day. The care I received was exceptional, and they followed up to make sure I was healing properly.",
    service: "Emergency Care",
  },
  {
    name: "David Park",
    role: "Architect",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "After years of being self-conscious about my teeth, I decided to get a complete smile makeover. The results are stunning! Dr. Mitchell took the time to understand exactly what I wanted and delivered beyond my expectations.",
    service: "Smile Makeover",
  },
  {
    name: "Emily Rodriguez",
    role: "Restaurant Owner",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "Professional teeth whitening made such a difference! The staff explained everything thoroughly and made sure I was comfortable throughout the process. I recommend Dr. Mitchell to everyone.",
    service: "Teeth Whitening",
  },
  {
    name: "James Wilson",
    role: "Retired",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "Getting dentures was a big step for me, but Dr. Mitchell made the experience so positive. The fit is perfect, and I can eat and speak normally again. Her patience with seniors is remarkable.",
    service: "Dentures",
  },
];

const Testimonials = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container-max text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Patient Stories</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            What Our Patients Say
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Read real stories from our patients about their experiences and transformations at our practice.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-6 shadow-md border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join thousands of satisfied patients and experience the difference of exceptional dental care.
            </p>
            <Link to="/#contact">
              <Button variant="hero" size="lg">
                Schedule Your Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Testimonials;
