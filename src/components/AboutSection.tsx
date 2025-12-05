import { GraduationCap, Award, Heart, CheckCircle } from "lucide-react";

const credentials = [
  "BDS (Dhaka University)",
  "PGT (DDCH) - Post Graduate Training",
  "Advanced Training in Oral & Maxillofacial Surgery",
  "PGT (COMCH), Dentistry",
  "Fellowship in Advanced Endodontics (Thailand)",
  "BMDC Registration Number: 6330",
];

const values = [
  { icon: Heart, title: "Patient-Centered", desc: "Your comfort and needs always come first" },
  { icon: GraduationCap, title: "Advanced Training", desc: "International fellowship from Thailand" },
  { icon: Award, title: "Excellence", desc: "Committed to the highest standards of care" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Dr. Md. Ajahel Islam (Mitul) - Professional dental surgeon in Cumilla"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
              <p className="font-display text-4xl font-bold">15+</p>
              <p className="text-sm opacity-90">Years of Experience</p>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
          </div>

          {/* Content side */}
          <div className="space-y-8">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">About Me</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Dr. Md. Ajahel Islam (Mitul)
              </h2>
              <p className="text-lg text-primary font-medium mb-4">
                Dentist & Dental Surgeon | Oral & Dental Specialist
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With over 15 years of experience in comprehensive dental care, I have dedicated my career 
                to helping patients achieve optimal oral health. My advanced training in Oral & Maxillofacial 
                Surgery and Fellowship in Advanced Endodontics from Thailand enables me to provide world-class 
                dental solutions right here in Cumilla. I believe in combining the latest dental technology 
                with a gentle, patient-focused approach.
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Qualifications & Certifications
              </h3>
              <ul className="space-y-2">
                {credentials.map((credential, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{credential}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {values.map((value, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm">{value.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;