import { useState, useEffect } from "react";

export default function CostCalculator() {
  const [adminHours, setAdminHours] = useState(12);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [calculations, setCalculations] = useState({
    weekly: 600,
    monthly: 2400,
    annual: 28800,
    paybackWeeks: 6
  });

  useEffect(() => {
    const weeklyCost = adminHours * hourlyRate;
    const monthlyCost = weeklyCost * 4;
    const annualCost = monthlyCost * 12;
    const paybackWeeks = Math.ceil(3500 / weeklyCost);

    setCalculations({
      weekly: weeklyCost,
      monthly: monthlyCost,
      annual: annualCost,
      paybackWeeks: paybackWeeks
    });
  }, [adminHours, hourlyRate]);

  return (
    <section id="cost-calculator" className="py-16 px-6 bg-background-light">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-accent-green mb-4">The Hidden Cost of Inaction</h2>
          <p className="text-lg text-primary-dark/70 max-w-2xl mx-auto">
            Calculate exactly how much your current inefficiencies are costing you. 
            Adjust the numbers below to see your real financial impact.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-primary-dark">Team's Weekly Admin Hours</label>
              <input 
                type="number" 
                value={adminHours}
                onChange={(e) => setAdminHours(Number(e.target.value))}
                min="1" 
                max="100"
                className="w-full px-4 py-3 border-2 border-primary-dark/20 rounded-lg text-xl font-semibold text-center focus:border-highlight-gold focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-highlight-gold/30"
              />
            </div>
            
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-primary-dark">Average Hourly Rate ($NZD)</label>
              <input 
                type="number" 
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                min="1" 
                max="500"
                className="w-full px-4 py-3 border-2 border-primary-dark/20 rounded-lg text-xl font-semibold text-center focus:border-highlight-gold focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-highlight-gold/30"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-primary-dark to-accent-green rounded-xl p-6 text-white text-center">
              <div className="text-sm font-medium opacity-80 mb-2">Weekly Cost</div>
              <div className="text-2xl font-bold">${calculations.weekly.toLocaleString()}</div>
            </div>
            
            <div className="bg-gradient-to-br from-accent-green to-primary-dark rounded-xl p-6 text-white text-center">
              <div className="text-sm font-medium opacity-80 mb-2">Monthly Cost</div>
              <div className="text-2xl font-bold">${calculations.monthly.toLocaleString()}</div>
            </div>
            
            <div className="bg-gradient-to-br from-highlight-gold to-yellow-600 rounded-xl p-8 text-white text-center pulse-gold">
              <div className="text-sm font-medium opacity-90 mb-2">Annual Cost</div>
              <div className="text-3xl lg:text-4xl font-bold">${calculations.annual.toLocaleString()}</div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-highlight-gold/10 rounded-lg text-center">
            <p className="text-sm text-primary-dark">
              <i className="fas fa-lightbulb text-highlight-gold mr-2"></i>
              Our $3,500 investment pays for itself in just <span className="font-bold">{calculations.paybackWeeks} weeks</span>!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
