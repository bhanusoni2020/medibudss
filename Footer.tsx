import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Heart } from 'lucide-react';
import { Link } from './ui/Link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-teal-400 mr-2" />
              <h2 className="text-2xl font-bold">MediBud</h2>
            </div>
            <p className="text-teal-200 mb-6">
              Your trusted partner for emergency medical resources. We connect patients with hospitals, doctors, and medical services when every second counts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-teal-800 p-2 rounded-full hover:bg-teal-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-teal-800 p-2 rounded-full hover:bg-teal-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-teal-800 p-2 rounded-full hover:bg-teal-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-100">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Doctors', 'Hospitals', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-teal-300 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-100">Services</h3>
            <ul className="space-y-3">
              {[
                'ICU Booking', 
                'Ventilator Availability', 
                'Doctor Appointments', 
                'Emergency Transfers', 
                'Hospital Comparison',
                'Medical Insurance'
              ].map((item) => (
                <li key={item}>
                  <Link 
                    href="#"
                    className="text-teal-300 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-100">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-teal-400 mr-3 mt-1" />
                <span className="text-teal-200">
                  123 Medical Plaza, Sector 62<br />
                  Noida, UP 201301
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-teal-400 mr-3" />
                <span className="text-teal-200">+91 1800-123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-teal-400 mr-3" />
                <span className="text-teal-200">support@medibud.com</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-md font-medium mb-3 text-teal-100">Emergency Helpline</h4>
              <div className="bg-teal-800 p-3 rounded-lg">
                <div className="flex items-center">
                  <div className="bg-red-500 p-2 rounded-full mr-3">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block text-white font-bold">1800-MED-HELP</span>
                    <span className="text-sm text-teal-300">Available 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-teal-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-teal-300 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} MediBud. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-teal-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-teal-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-teal-300 hover:text-white text-sm transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;