import React from 'react';
import { Search, Map, Clock, HeartPulse } from 'lucide-react';
import toast from 'react-hot-toast';

const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      toast.error('Please enter a search term');
      return;
    }
    toast.success(`Searching for: ${searchQuery}`);
  };

  const handleQuickAction = (action: string) => {
    toast.success(`Navigating to ${action} section`);
    const element = document.getElementById(action.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 pb-10 bg-gradient-to-r from-teal-700 to-teal-500 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Your Health, Our Priority
            </h1>
            <p className="text-lg md:text-xl mb-8 text-teal-100">
              Find and book medical services instantly when every second counts. From ICU beds to specialist appointments, all in one place.
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 flex flex-col">
              <h3 className="text-teal-800 font-semibold mb-4">Find What You Need</h3>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => handleQuickAction('services')}
                  className="flex-1 min-w-[120px] bg-teal-50 hover:bg-teal-100 text-teal-800 px-4 py-3 rounded-md flex items-center justify-center transition-colors"
                >
                  <HeartPulse className="w-5 h-5 mr-2" />
                  <span>ICU Beds</span>
                </button>
                <button 
                  onClick={() => handleQuickAction('hospitals')}
                  className="flex-1 min-w-[120px] bg-teal-50 hover:bg-teal-100 text-teal-800 px-4 py-3 rounded-md flex items-center justify-center transition-colors"
                >
                  <Map className="w-5 h-5 mr-2" />
                  <span>Hospitals</span>
                </button>
                <button 
                  onClick={() => handleQuickAction('doctors')}
                  className="flex-1 min-w-[120px] bg-teal-50 hover:bg-teal-100 text-teal-800 px-4 py-3 rounded-md flex items-center justify-center transition-colors"
                >
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Doctors</span>
                </button>
              </div>
              
              <form onSubmit={handleSearch} className="mt-4 relative">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for services, doctors, or hospitals..."
                  className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-700"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-teal-600 transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-12">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Medical professionals" 
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <p className="text-white font-medium">Emergency Services Available 24/7</p>
                  <div className="flex items-center mt-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></div>
                    <span className="text-green-200 text-sm">Medical staff on standby</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { icon: <Map className="w-6 h-6" />, count: '50+', label: 'Partner Hospitals' },
            { icon: <HeartPulse className="w-6 h-6" />, count: '200+', label: 'ICU Beds Available' },
            { icon: <Clock className="w-6 h-6" />, count: '15min', label: 'Average Response Time' },
            { icon: <Search className="w-6 h-6" />, count: '1000+', label: 'Lives Saved' }
          ].map((stat, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-4 text-center backdrop-blur-sm">
              <div className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-teal-600 mb-4">
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold">{stat.count}</h3>
              <p className="text-teal-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;