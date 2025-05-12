import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { MapPin } from 'lucide-react';

const containerStyle = {
  width: '100%',
  height: '400px'
};

// Kanpur coordinates
const center = {
  lat: 26.4499,
  lng: 80.3319
};

const LocationSearch: React.FC = () => {
  return (
    <div className="mb-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center space-x-4 mb-6">
          <MapPin className="w-5 h-5 text-teal-600" />
          <h3 className="text-lg font-medium text-gray-800">Kanpur, Uttar Pradesh</h3>
        </div>
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default LocationSearch;