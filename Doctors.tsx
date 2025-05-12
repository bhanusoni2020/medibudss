import React, { useState } from 'react';
import { Calendar, Clock, Star, Phone, CreditCard } from 'lucide-react';

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  image: string;
  rating: number;
  reviews: number;
  availability: string;
  phone: string;
  address: string;
  fee: number;
  paymentMethods: string[];
  bio: string;
};

const DoctorCard: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  const [isBooking, setIsBooking] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('');

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <img 
          src={doctor.image} 
          alt={doctor.name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center shadow-md">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-gray-800 font-medium">{doctor.rating}</span>
          <span className="ml-1 text-gray-500 text-sm">({doctor.reviews})</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
        <p className="text-teal-600 font-medium">{doctor.specialty}</p>

        <div className="mt-4 space-y-2 text-gray-600">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>{doctor.availability}</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            <span>{doctor.phone}</span>
          </div>
        </div>

        <p className="mt-4 text-gray-600 text-sm">{doctor.bio}</p>

        <div className="mt-6 flex justify-between items-center">
          <div>
            <span className="text-gray-500">Consultation Fee</span>
            <p className="text-teal-700 font-bold text-xl">₹{doctor.fee}</p>
          </div>
          <button
            onClick={() => setIsBooking(!isBooking)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              isBooking 
                ? 'bg-gray-200 text-gray-700' 
                : 'bg-teal-600 text-white hover:bg-teal-700'
            }`}
          >
            {isBooking ? 'Cancel' : 'Book Appointment'}
          </button>
        </div>

        {isBooking && (
          <div className="mt-6 pt-4 border-t border-gray-100 animate-fadeIn">
            <h4 className="font-medium text-gray-800 mb-3">Select Payment Method</h4>
            <div className="space-y-2">
              {doctor.paymentMethods.map((method) => (
                <button
                  key={method}
                  onClick={() => setSelectedPayment(method)}
                  className={`w-full p-3 rounded-lg border transition-colors flex items-center ${
                    selectedPayment === method
                      ? 'border-teal-500 bg-teal-50'
                      : 'border-gray-200 hover:border-teal-500'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                    selectedPayment === method
                      ? 'border-teal-500 bg-teal-500'
                      : 'border-gray-400'
                  }`} />
                  <span className="text-gray-700">{method}</span>
                </button>
              ))}
            </div>

            {selectedPayment && (
              <button
                onClick={() => {
                  alert(`Appointment booked with ${doctor.name}. Payment method: ${selectedPayment}`);
                  setIsBooking(false);
                  setSelectedPayment('');
                }}
                className="mt-4 w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center font-medium"
              >
                <CreditCard className="w-4 h-4 mr-2" />
                Pay ₹{doctor.fee}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Rajesh Sharma',
    specialty: 'Cardiologist',
    image: 'https://images.pexels.com/photos/5327590/pexels-photo-5327590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.9,
    reviews: 125,
    availability: 'Mon-Fri, 9am-5pm',
    phone: '+91 9876543210',
    address: '123, Main Road, Kanpur',
    fee: 800,
    paymentMethods: ['Card', 'UPI', 'Net Banking'],
    bio: 'Dr. Sharma is a leading cardiologist with 20 years of experience.'
  },
  {
    id: 2,
    name: 'Dr. Priya Verma',
    specialty: 'Gynecologist',
    image: 'https://images.pexels.com/photos/7170649/pexels-photo-7170649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.7,
    reviews: 98,
    availability: 'Tue-Sat, 10am-6pm',
    phone: '+91 9988776655',
    address: '456, Civil Lines, Kanpur',
    fee: 700,
    paymentMethods: ['Card', 'Cash'],
    bio: 'Dr. Verma is an experienced gynecologist specializing in women healthcare.'
  },
  {
    id: 3,
    name: 'Dr. Arvind Patel',
    specialty: 'Orthopedist',
    image: 'https://images.pexels.com/photos/8475819/pexels-photo-8475819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.6,
    reviews: 76,
    availability: 'Mon-Sat, 11am-7pm',
    phone: '+91 8877665544',
    address: '789, Swaroop Nagar, Kanpur',
    fee: 900,
    paymentMethods: ['UPI', 'Net Banking'],
    bio: 'Dr. Patel is a renowned orthopedist specializing in joint replacements.'
  },
  {
    id: 4,
    name: 'Dr. Meera Singh',
    specialty: 'Pediatrician',
    image: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    rating: 4.8,
    reviews: 110,
    availability: 'Mon-Fri, 10am-2pm, 4pm-6pm',
    phone: '+91 7766554433',
    address: '101, Arya Nagar, Kanpur',
    fee: 600,
    paymentMethods: ['Card', 'UPI', 'Cash'],
    bio: 'Dr. Singh is a dedicated pediatrician providing care for infants and children.'
  },
  {
    id: 5,
    name: 'Dr. Rohan Gupta',
    specialty: 'Neurologist',
    image: 'https://images.pexels.com/photos/573219/pexels-photo-573219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    rating: 4.5,
    reviews: 65,
    availability: 'Tue-Sat, 9am-5pm',
    phone: '+91 7788990011',
    address: '222, Kakadeo, Kanpur',
    fee: 1000,
    paymentMethods: ['Card', 'Net Banking'],
    bio: 'Dr. Gupta is a leading neurologist specializing in nervous system disorders.'
  }
];

const Doctors: React.FC = () => {
  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Specialists</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Schedule appointments with our expert doctors specialized in various fields. 
            All consultations can be booked online with instant confirmation.
          </p>
        </div>
        
        <div className="max-h-[800px] overflow-y-auto rounded-xl shadow-lg bg-gray-50 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map(doctor => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-white text-teal-600 border border-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors">
            View All Doctors
          </button>
        </div>
      </div>
    </section>
  );
};

export default Doctors;