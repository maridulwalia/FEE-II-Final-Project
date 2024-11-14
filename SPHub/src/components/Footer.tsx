import { FaPhone  as Phone,FaMapPin  as MapPin, FaFacebook  as Facebook, FaTwitter  as Twitter, FaInstagram  as Instagram, FaLinkedin  as Linkedin } from 'react-icons/fa';
import { FiMail  as Mail} from 'react-icons/fi' ;
import { Link } from 'react-router-dom';

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold dark:text-white">Contact Us</h3>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p className="flex items-center gap-2">
                <MapPin size={16} />
                CHITKARA UNIVERSITY PATIALA, PUNJAB
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} />
                +91 1800 XXXXXX
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} />
                admissions@chitkara.edu.in
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 dark:text-white">Quick Links</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><Link to="/about" className="hover:text-indigo-500">About Us</Link></li>
              <li><Link to="/services" className="hover:text-indigo-500">Services</Link></li>
              <li><Link to="/work" className="hover:text-indigo-500">Our Work</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-500">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 dark:text-white">Services</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><Link to="/services?category=travel" className="hover:text-indigo-500">Travel PR</Link></li>
              <li><Link to="/services?category=hospitality" className="hover:text-indigo-500">Hospitality</Link></li>
              <li><Link to="/services?category=food" className="hover:text-indigo-500">Food & Beverage</Link></li>
              <li><Link to="/services?category=lifestyle" className="hover:text-indigo-500">Lifestyle Brands</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 dark:text-white">Newsletter</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for subscribing to our newsletter!');
              (e.target as HTMLFormElement).reset();
            }} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Service Promotion Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}