import React, { useState } from 'react';
import { MapPin, Phone, CheckCircle, Clock, Search, Star, Building2, Stethoscope } from 'lucide-react';
import toast from 'react-hot-toast';

type Hospital = {
  id: number;
  name: string;
  location: string;
  distance: string;
  type: string;
  icuAvailable: number;
  ventilators: number;
  image: string;
  rating: number;
  openHours: string;
  emergency: boolean;
  specialties: string[];
  doctors: number;
  coordinates: {
    lat: number;
    lng: number;
  };
};

const hospitals: Hospital[] = [
  {
    id: 1,
    name: 'Regency Healthcare',
    location: 'Mall Road, Kanpur',
    distance: '2.1 km',
    type: 'Multi-Specialty',
    icuAvailable: 15,
    ventilators: 12,
    image: 'https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    rating: 4.8,
    openHours: '24/7',
    emergency: true,
    specialties: ['Cardiology', 'Neurology', 'Orthopedics', 'Oncology', 'Gastroenterology'],
    doctors: 50,
    coordinates: { lat: 26.4499, lng: 80.3319 }
  },
  {
    id: 2,
    name: 'Laxmi Hospital',
    location: 'Civil Lines, Kanpur',
    distance: '3.5 km',
    type: 'Multi-Specialty',
    icuAvailable: 10,
    ventilators: 8,
    image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    rating: 4.6,
    openHours: '24/7',
    emergency: true,
    specialties: ['General Surgery', 'Gynecology', 'Pediatrics', 'ENT'],
    doctors: 35,
    coordinates: { lat: 26.4619, lng: 80.3219 }
  },
  {
    id: 3,
    name: 'Kanpur Medical Center',
    location: 'Kidwai Nagar, Kanpur',
    distance: '4.2 km',
    type: 'Super Specialty',
    icuAvailable: 20,
    ventilators: 15,
    image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    rating: 4.9,
    openHours: '24/7',
    emergency: true,
    specialties: ['Cardiology', 'Neurosurgery', 'Orthopedics', 'Urology', 'Nephrology'],
    doctors: 60,
    coordinates: { lat: 26.4709, lng: 80.3119 }
  },
  {
    id: 4,
    name: 'Rama Medical College Hospital',
    location: 'Mandhana, Kanpur',
    distance: '12.5 km',
    type: 'Teaching Hospital',
    icuAvailable: 25,
    ventilators: 20,
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    rating: 4.7,
    openHours: '24/7',
    emergency: true,
    specialties: ['General Medicine', 'Surgery', 'Obstetrics', 'Pediatrics', 'Psychiatry'],
    doctors: 80,
    coordinates: { lat: 26.4439, lng: 80.3519 }
  },
  {
    id: 5,
    name: 'Madhuraj Hospital',
    location: 'Kakadeo, Kanpur',
    distance: '5.8 km',
    type: 'Multi-Specialty',
    icuAvailable: 12,
    ventilators: 8,
    image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    rating: 4.5,
    openHours: '24/7',
    emergency: true,
    specialties: ['Internal Medicine', 'Orthopedics', 'ENT', 'Dermatology'],
    doctors: 30,
    coordinates: { lat: 26.4559, lng: 80.3419 }
  }
];

const specialtyOptions = [
  'Cardiology',
  'Neurology',
  'Orthopedics',
  'Oncology',
  'Gastroenterology',
  'General Surgery',
  'Gynecology',
  'Pediatrics',
  'ENT',
  'Urology',
  'Nephrology',
  'Internal Medicine',
  'Dermatology',
  'Psychiatry',
  'Obstetrics'
];

const Hospitals: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isEmergencyOnly, setIsEmergencyOnly] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  
  const filteredHospitals = hospitals.filter(hospital => {
    const matchesSearch = hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         hospital.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesEmergency = isEmergencyOnly ? hospital.emergency : true;
    const matchesSpecialty = selectedSpecialty ? hospital.specialties.includes(selectedSpecialty) : true;
    
    return matchesSearch && matchesEmergency && matchesSpecialty;
  });

  const handleBooking = (hospital: Hospital) => {
    toast.success(`Booking request sent for ${hospital.name}! Our team will contact you shortly.`);
  };

  const handleSpecialtyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSpecialty(e.target.value);
  };
  
  return (
    <section id="hospitals" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Hospitals in Kanpur</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the best hospitals in Kanpur with real-time availability of ICU beds and ventilators. 
            All information is updated in real-time for emergency situations.
          </p>
        </div>
        
        <div className="mb-10 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search hospitals by name or location..."
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            <select
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={selectedSpecialty}
              onChange={handleSpecialtyChange}
            >
              <option value="">All Specialties</option>
              {specialtyOptions.map(specialty => (
                <option key={specialty} value={specialty}>{specialty}</option>
              ))}
            </select>
            
            <div className="md:w-auto flex items-center">
              <label className="inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox"
                  className="sr-only peer"
                  checked={isEmergencyOnly}
                  onChange={() => setIsEmergencyOnly(!isEmergencyOnly)}
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-teal-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                <span className="ms-3 text-sm font-medium text-gray-700">Emergency Only</span>
              </label>
            </div>
          </div>
        </div>
        
        <div className="max-h-[800px] overflow-y-auto rounded-xl shadow-lg bg-white p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredHospitals.map((hospital) => (
              <div key={hospital.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row transition-all duration-300 hover:shadow-lg">
                <div className="md:w-2/5 h-56 md:h-auto relative">
                  <img 
                    src={hospital.image} 
                    alt={hospital.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center shadow-md">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-gray-800 font-medium">{hospital.rating}</span>
                  </div>
                </div>
                
                <div className="md:w-3/5 p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{hospital.name}</h3>
                      <div className="flex items-center mt-1 text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{hospital.location}</span>
                        <span className="ml-2 text-sm text-gray-500">({hospital.distance})</span>
                      </div>
                    </div>
                    <div className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                      {hospital.type}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {hospital.specialties.map((specialty, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center space-x-4">
                    <div className="flex items-center">
                      <Building2 className="w-4 h-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600">{hospital.specialties.length} Specialties</span>
                    </div>
                    <div className="flex items-center">
                      <Stethoscope className="w-4 h-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-600">{hospital.doctors} Doctors</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-3 flex flex-col">
                      <span className="text-blue-800 text-lg font-semibold">{hospital.icuAvailable}</span>
                      <span className="text-blue-600 text-sm">ICU Beds Available</span>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 flex flex-col">
                      <span className="text-green-800 text-lg font-semibold">{hospital.ventilators}</span>
                      <span className="text-green-600 text-sm">Ventilators Available</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{hospital.openHours}</span>
                    </div>
                    <button 
                      onClick={() => handleBooking(hospital)}
                      className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors text-sm"
                    >
                      Book Resource
                    </button>
                  </div>
                  
                  {hospital.emergency && (
                    <div className="mt-4 flex items-center text-green-600">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      <span className="text-sm">24/7 Emergency Services Available</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hospitals;