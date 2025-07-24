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


      </main>
    </div>
  );
}