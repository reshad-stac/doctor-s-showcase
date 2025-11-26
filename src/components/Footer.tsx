import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container-max section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">DS</span>
              </div>
              <div>
                <p className="font-display font-semibold text-lg">Dr. Sarah Mitchell</p>
                <p className="text-sm opacity-80">DDS, FAGD</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Providing exceptional dental care with a gentle touch. Your smile is our passion, 
              and your comfort is our priority.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={`Social media link ${index + 1}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["About Dr. Mitchell", "Our Services", "Patient Resources", "Insurance & Payment", "Before & After", "Blog"].map(
                (link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Cosmetic Dentistry",
                "Preventive Care",
                "Dental Implants",
                "Invisalign",
                "Emergency Care",
                "Family Dentistry",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-80">
                  123 Dental Care Boulevard<br />
                  Suite 200, New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@drmitchell.com" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                  info@drmitchell.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-70">
              © {currentYear} Dr. Sarah Mitchell, DDS. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Service", "Accessibility"].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
