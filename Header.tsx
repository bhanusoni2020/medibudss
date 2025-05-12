import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, AlertCircle, User, Search } from 'lucide-react';
import { Link } from './ui/Link';
import toast from 'react-hot-toast';
import Auth from './Auth';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEmergency = () => {
    toast.error('Connecting to emergency services...', {
      duration: 2000,
      icon: '🚨'
    });
    setTimeout(() => {
      toast.success('Emergency services notified. Help is on the way!', {
        duration: 4000,
        icon: '🏥'
      });
    }, 2000);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      toast.error('Please enter a search term');
      return;
    }
    toast.success(`Searching for: ${searchQuery}`);
    // Implement search functionality here
  };

  const handleNavigation = (section: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('hero')}>
              <Heart className="h-8 w-8 text-teal-600 mr-2" />
              <h1 className={`text-2xl font-bold ${isScrolled ? 'text-teal-700' : 'text-white'}`}>
                MediBud
              </h1>
            </div>

            <form 
              onSubmit={handleSearch}
              className={`hidden md:flex items-center max-w-xl w-full mx-8 ${
                isScrolled ? 'bg-gray-100' : 'bg-white/20 backdrop-blur-sm'
              } rounded-full px-4 py-2`}
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for hospitals, doctors, or services..."
                className={`flex-1 bg-transparent border-none outline-none ${
                  isScrolled ? 'text-gray-700 placeholder-gray-500' : 'text-white placeholder-white/70'
                }`}
              />
              <button
                type="submit"
                className={`ml-2 ${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-teal-500 transition-colors`}
              >
                <Search className="w-5 h-5" />
              </button>
            </form>
            
            <nav className="hidden md:flex items-center space-x-8">
              {['Home', 'Services', 'Doctors', 'Hospitals', 'About'].map((item) => (
                <Link 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => handleNavigation(item.toLowerCase())}
                  className={`font-medium hover:text-teal-500 transition-colors ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item}
                </Link>
              ))}
              <button
                onClick={() => setShowAuth(true)}
                className={`font-medium hover:text-teal-500 transition-colors flex items-center ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                <User className="w-4 h-4 mr-2" />
                Login
              </button>
              <button 
                onClick={handleEmergency}
                className="ml-4 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center"
              >
                <AlertCircle className="w-4 h-4 mr-2" />
                Emergency
              </button>
            </nav>
            
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg mt-2 px-4 py-4 absolute w-full">
            <form 
              onSubmit={handleSearch}
              className="flex items-center bg-gray-100 rounded-lg px-4 py-2 mb-4"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-500"
              />
              <button
                type="submit"
                className="ml-2 text-gray-600 hover:text-teal-500 transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>
            <nav className="flex flex-col space-y-4">
              {['Home', 'Services', 'Doctors', 'Hospitals', 'About'].map((item) => (
                <Link 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-teal-500 font-medium py-2 transition-colors"
                  onClick={() => handleNavigation(item.toLowerCase())}
                >
                  {item}
                </Link>
              ))}
              <button
                onClick={() => {
                  setShowAuth(true);
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-teal-500 font-medium py-2 transition-colors flex items-center"
              >
                <User className="w-4 h-4 mr-2" />
                Login
              </button>
              <button 
                onClick={handleEmergency}
                className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center"
              >
                <AlertCircle className="w-4 h-4 mr-2" />
                Emergency
              </button>
            </nav>
          </div>
        )}
      </header>

      <Auth isOpen={showAuth} onClose={() => setShowAuth(false)} />
    </>
  );
};

export default Header;