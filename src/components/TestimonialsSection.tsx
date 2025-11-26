import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jennifer Martinez",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "Dr. Mitchell transformed my smile with veneers, and I couldn't be happier! Her attention to detail and gentle approach made the entire process comfortable. I finally have the confidence to smile in photos.",
  },
  {
    name: "Robert Chen",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "As someone with dental anxiety, I was nervous about getting implants. Dr. Mitchell and her team were incredibly patient and reassuring. The results exceeded my expectations, and I actually look forward to my checkups now!",
  },
  {
    name: "Amanda Thompson",
    role: "Teacher",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "My whole family sees Dr. Mitchell. She's wonderful with my kids and has made dental visits a positive experience for them. Her preventive care approach has kept our family's teeth healthy for years.",
  },
  {
    name: "Michael Davis",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "The Invisalign treatment I received was life-changing. Dr. Mitchell's expertise and the advanced technology in her office made the process seamless. My teeth are perfectly aligned now, and no one knew I was wearing aligners!",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Testimonials</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Hear from our satisfied patients about their experiences.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-hero rounded-3xl p-8 md:p-12 shadow-xl">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-muted transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5 text-foreground" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-muted transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5 text-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-primary" : "bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 pt-16 border-t border-border">
          <p className="text-center text-sm text-muted-foreground mb-8">Trusted by thousands of patients</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-foreground">500+</p>
              <p className="text-sm text-muted-foreground">5-Star Reviews</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-foreground">15,000+</p>
              <p className="text-sm text-muted-foreground">Patients Served</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-foreground">98%</p>
              <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-foreground">A+</p>
              <p className="text-sm text-muted-foreground">BBB Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
