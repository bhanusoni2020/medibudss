import React, { useState } from 'react';
import { Bed, Home, Heart, Activity, CreditCard, Info } from 'lucide-react';

type Service = {
  id: number;
  title: string;
  description: string;
  price: number;
  icon: React.ReactNode;
  available: number;
};

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <div className="bg-teal-100 p-3 rounded-full mr-4">
              {service.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{service.description}</p>
            </div>
          </div>
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="text-gray-400 hover:text-teal-600 transition-colors"
          >
            <Info className="w-5 h-5" />
          </button>
        </div>

        {showDetails && (
          <div className="mt-4 pt-4 border-t border-gray-100 animate-fadeIn">
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-600">Availability:</span>
              <span className="font-medium text-gray-800">{service.available} units</span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-600">Price per day:</span>
              <span className="font-medium text-gray-800">₹{service.price.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Duration (days):</span>
              <div className="flex items-center">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="bg-gray-200 text-gray-600 w-8 h-8 rounded-md flex items-center justify-center"
                >
                  -
                </button>
                <span className="mx-3 font-medium w-6 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="bg-gray-200 text-gray-600 w-8 h-8 rounded-md flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center font-medium">
              <span className="text-gray-700">Total:</span>
              <span className="text-xl text-teal-700">₹{(service.price * quantity).toLocaleString()}</span>
            </div>
            <button 
              onClick={() => setShowPayment(!showPayment)}
              className="mt-4 w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center font-medium"
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Book Now
            </button>
          </div>
        )}

        {showPayment && (
          <div className="mt-4 pt-4 border-t border-gray-100 animate-fadeIn">
            <h4 className="font-medium text-gray-800 mb-3">Select Payment Method</h4>
            <div className="space-y-2 mb-4">
              {['card', 'upi', 'netbanking'].map((method) => (
                <div 
                  key={method}
                  className={`p-3 border rounded-lg cursor-pointer flex items-center ${
                    paymentMethod === method ? 'border-teal-500 bg-teal-50' : 'border-gray-200'
                  }`}
                  onClick={() => setPaymentMethod(method)}
                >
                  <div className={`w-4 h-4 rounded-full mr-3 border ${
                    paymentMethod === method ? 'border-teal-500 bg-teal-500' : 'border-gray-400'
                  }`}></div>
                  <span className="text-gray-700 capitalize">{method === 'netbanking' ? 'Net Banking' : method.toUpperCase()}</span>
                </div>
              ))}
            </div>
            <button 
              className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium"
              onClick={() => {
                alert('Booking successful! You will receive a confirmation shortly.');
                setShowPayment(false);
                setShowDetails(false);
              }}
            >
              Pay ₹{(service.price * quantity).toLocaleString()}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'ICU Beds',
      description: 'Fully equipped intensive care units with monitoring',
      price: 15000,
      icon: <Activity className="w-6 h-6 text-teal-600" />,
      available: 8,
    },
    {
      id: 2,
      title: 'Ventilators',
      description: 'Advanced respiratory support systems',
      price: 8000,
      icon: <Heart className="w-6 h-6 text-teal-600" />,
      available: 12,
    },
    {
      id: 3,
      title: 'Private Rooms',
      description: 'Comfortable private rooms with amenities',
      price: 5000,
      icon: <Home className="w-6 h-6 text-teal-600" />,
      available: 20,
    },
    {
      id: 4,
      title: 'Semi-Private Rooms',
      description: 'Shared rooms with privacy partitions',
      price: 3000,
      icon: <Bed className="w-6 h-6 text-teal-600" />,
      available: 15,
    },
    {
      id: 5,
      title: 'Deluxe Suites',
      description: 'Premium suites with enhanced comfort',
      price: 12000,
      icon: <Home className="w-6 h-6 text-teal-600" />,
      available: 5,
    },
    {
      id: 6,
      title: 'Emergency Resources',
      description: 'Priority access to emergency medical equipment',
      price: 10000,
      icon: <Activity className="w-6 h-6 text-teal-600" />,
      available: 10,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Medical Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Book medical resources and services in real-time with our easy-to-use platform. 
            All services are available 24/7 for both emergency and planned care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;