import React from 'react';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import PartnersAndFooter from './components/PartnersAndFooter';
import './App.css';

function App() {
  return (
    <ReactLenis root>
      <main className="w-full bg-white">
        {/* Premium fixed site navigation */}
        <Navbar />

        {/* Hero Section: Local Bazaar Overview */}
        <section className="max-w-7xl mx-auto py-24 px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight mb-6">
            Local Bazaar
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Local Bazaar is a hyperlocal e-commerce ecosystem designed to digitize small businesses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-800 mb-2">Domain Model</h3>
              <p className="text-sm text-gray-600">
                Uses a "Domain" system to separate Groceries (Local Bazaar), Professional Services, and Food.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-800 mb-2">Workflow</h3>
              <p className="text-sm text-gray-600">
                Follows a "Click & Collect" model (Browse → Order → OTP → Pickup), reducing delivery logistics for small vendors while ensuring secure transactions.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-800 mb-2">Current Inventory</h3>
              <p className="text-sm text-gray-600">
                Active listings from vendors like Andhra Naturals Organic Shop and Bharathis Book and Beyond, covering organic snacks and stationery.
              </p>
            </div>
          </div>
        </section>

        {/* Meet Your Neighbors (Vendor Spotlights) */}
        <section className="max-w-7xl mx-auto py-16 px-6">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 text-center">Meet Your Neighbors</h2>
          <div className="bg-[#cbd5c0]/40 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Vendor of the Week</h3>
            <p className="text-gray-600 mb-4">
              Meet Ravi from Andhra Naturals. He's been sourcing organic Anjeer and Avisa Laddus directly from farmers for 10 years. Shop his curated collection today!
            </p>
            <button className="bg-[#5a8a3a] hover:bg-[#4a7230] text-white font-bold text-sm uppercase tracking-wider py-3 px-8 rounded-full transition-colors">
              Shop Andhra Naturals
            </button>
          </div>
        </section>

        {/* Expanded Services Description */}
        <section className="max-w-7xl mx-auto py-16 px-6 bg-gray-50">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 text-center">Professional Services</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            "Professional help is just a click away. Verified local experts for your home and personal needs."
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {['Plumbers', 'Electricians', 'Tutors', 'Tailors', 'Beauticians'].map((service) => (
              <div key={service} className="p-6 bg-white rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-gray-800">{service}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Why Shop Hyperlocal? */}
        <section className="max-w-7xl mx-auto py-16 px-6">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 text-center">Why Shop Hyperlocal?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-800 mb-2">Fresher Goods</h3>
              <p className="text-sm text-gray-600">Products don't sit in long-haul trucks.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-800 mb-2">Community Growth</h3>
              <p className="text-sm text-gray-600">₹0.70 of every ₹1 spent locally stays in the community.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="font-bold text-gray-800 mb-2">Eco-Friendly</h3>
              <p className="text-sm text-gray-600">Minimal packaging and zero shipping emissions.</p>
            </div>
          </div>
        </section>

        {/* Interactive Food Teaser */}
        <section className="max-w-7xl mx-auto py-16 px-6 bg-[#cbd5c0]/40 backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 text-center">Food Domain: Coming Soon</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-600 mb-8">
              Hungry? We're onboarding the best local kitchens. Which neighborhood haunt do you want to see here first?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Local Diner', 'Family Bakery', 'Street Food Cart', 'Coffee Shop'].map((option) => (
                <button key={option} className="bg-white hover:bg-gray-50 text-gray-800 font-bold py-3 px-6 rounded-full border border-gray-200 transition-colors">
                  {option}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <PartnersAndFooter />
      </main>
    </ReactLenis>
  );
}

export default App;
