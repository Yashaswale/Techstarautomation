import React, { useState, useEffect } from "react";
import { MapPin, Mail, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer section id="contact" className="bg-sky-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* About Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">TECH STAR</h2>
            <p className="text-sm">
              Tech Star is a leading technology company dedicated to innovation and excellence in software development.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:infotechstar15@yahoo.in "
                aria-label="Mail"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div className="space-y-4">
            <div className="w-full h-48 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15125.110589009822!2d73.81973326768274!3d18.606577565919775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9041a56f8db%3A0x9a103a8d59c14c5b!2sTech%20Star!5e0!3m2!1sen!2sin!4v1733466181213!5m2!1sen!2sin"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tech Star Location"
              ></iframe>
            </div>
            <div className="flex items-center text-sm">
              <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
              <p>Bhosari, Plot No T/180, MIDC, Bhosari, Pimpri-Chinchwad, Maharashtra 411039</p>
            </div>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">IMPORTANT LINKS</h3>
            <ul className="space-y-2">
              <li>
                <a href="/AboutUs" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider and Footer Text */}
        <div className="mt-8 pt-4 border-t border-white">
          <div className="text-center">
            <p className="text-sm">
              © {currentYear} Tech Star. All rights reserved. Made with ❤️ by Tech Star Team.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
