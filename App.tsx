import React from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Hospitals from './components/Hospitals';
import Footer from './components/Footer';
import HealthBot from './components/HealthBot/HealthBot';

function App() {
  return (
    <div className="min-h-screen">
      <Toaster position="top-center" />
      <Header />
      <main>
        <Hero />
        <Services />
        <Doctors />
        <Hospitals />
      </main>
      <Footer />
      <HealthBot />
    </div>
  );
}

export default App;