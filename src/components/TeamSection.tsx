import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Lead Dentist & Founder",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "20+ years of experience in cosmetic and restorative dentistry. Harvard School of Dental Medicine graduate.",
    specialties: ["Cosmetic Dentistry", "Implants", "Smile Design"],
  },
  {
    name: "Dr. James Anderson",
    role: "Orthodontist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Certified Invisalign provider with expertise in both traditional braces and clear aligners.",
    specialties: ["Invisalign", "Braces", "Jaw Alignment"],
  },
  {
    name: "Dr. Emily Chen",
    role: "Pediatric Dentist",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Specialized in children's dentistry with a gentle approach that makes kids love visiting the dentist.",
    specialties: ["Pediatric Care", "Preventive Dentistry", "Sedation"],
  },
  {
    name: "Dr. Michael Roberts",
    role: "Oral Surgeon",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Board-certified oral surgeon specializing in dental implants and complex extractions.",
    specialties: ["Oral Surgery", "Implants", "Wisdom Teeth"],
  },
  {
    name: "Lisa Thompson",
    role: "Dental Hygienist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "15 years of experience providing thorough cleanings and patient education on oral health.",
    specialties: ["Deep Cleaning", "Periodontal Care", "Patient Education"],
  },
  {
    name: "Maria Garcia",
    role: "Office Manager",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Ensures smooth operations and exceptional patient experience from scheduling to billing.",
    specialties: ["Scheduling", "Insurance", "Patient Care"],
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="section-padding bg-background">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Team</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-muted-foreground text-lg">
            Our dedicated team of dental professionals is committed to providing you with the highest quality care in a comfortable environment.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-muted/30 rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Social Links */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
                
                {/* Specialties */}
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
