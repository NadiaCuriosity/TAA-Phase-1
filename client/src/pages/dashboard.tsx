import { useEffect } from 'react';
import mermaid from 'mermaid';
import Navigation from '../components/Navigation';
import CurrentWorkflow from '../components/sections/CurrentWorkflow';
import CostCalculator from '../components/sections/CostCalculator';
import FutureWorkflow from '../components/sections/FutureWorkflow';
import OfferAndROI from '../components/sections/OfferAndROI';
import StrategicRoadmap from '../components/sections/StrategicRoadmap';

export default function Dashboard() {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'base',
      themeVariables: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: '14px',
        primaryColor: '#F7F9F9',
        primaryTextColor: '#06414F',
        primaryBorderColor: '#06414F',
        lineColor: '#06414F',
        secondaryColor: '#145B51',
        tertiaryColor: '#BF8E29'
      }
    });
  }, []);

  return (
    <div className="font-poppins bg-background-light text-primary-dark">
      <Navigation />
      
      {/* Main Content */}
      <main className="lg:ml-16">
        {/* Header Section */}
        <section className="gradient-bg py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-dark mb-6">
              TAA - Phase 1<br />
              AI Optimisation Proposal
            </h1>
            <p className="text-xl lg:text-2xl font-light text-primary-dark/80 mb-6 max-w-3xl mx-auto">
              We'll build a reliable, frictionless system that tracks work without extra admin.
            </p>
            <div className="bg-white rounded-xl shadow-xl p-6 mb-8 max-w-2xl mx-auto border border-gray-100">
              <p className="text-xl lg:text-2xl font-semibold text-highlight-gold">
                Save $2400+ month on low value work
              </p>
            </div>

          </div>
        </section>

        <CurrentWorkflow />
        <CostCalculator />
        <FutureWorkflow />
        <OfferAndROI />
        <StrategicRoadmap />

        {/* Call to Action Footer */}
        <footer className="bg-primary-dark py-16 px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to Transform Your Workflow?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join us as a foundational partner and start saving $2,400+ every month. 
              The $3,500 investment pays for itself in just 6 weeks.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-highlight-gold">$3,500</div>
                <div className="text-sm opacity-80">One-time Investment</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-highlight-gold">6 Weeks</div>
                <div className="text-sm opacity-80">To Breakeven</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-highlight-gold">$28,800+</div>
                <div className="text-sm opacity-80">Annual Savings</div>
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-highlight-gold hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105">
                <i className="fas fa-handshake mr-2"></i>
                Let's Start Phase 1
              </button>
              <p className="text-sm opacity-70 mt-4">
                Questions? Let's discuss how this fits your specific needs.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}