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
    const annualCost = weeklyCost * 52;
    const monthlyCost = annualCost / 12;
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
          <h2 className="text-3xl lg:text-5xl font-bold text-accent-green mb-6 font-corporate">The Hidden Cost of Inaction</h2>
          <p className="text-lg text-primary-dark font-corporate max-w-2xl mx-auto leading-relaxed">
            Calculate the financial impact of current inefficiencies. 
            Adjust the parameters below to see your specific cost analysis.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-primary-dark font-corporate">Weekly Admin Hours</label>
              <input 
                type="number" 
                value={adminHours}
                onChange={(e) => setAdminHours(Number(e.target.value))}
                min="1" 
                max="100"
                className="w-full px-6 py-4 border-2 border-primary-dark/20 rounded-lg text-xl font-semibold text-center focus:border-highlight-gold focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-highlight-gold/20 font-corporate"
              />
            </div>
            
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-primary-dark font-corporate">Average Hourly Rate ($NZD)</label>
              <input 
                type="number" 
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                min="1" 
                max="500"
                className="w-full px-6 py-4 border-2 border-primary-dark/20 rounded-lg text-xl font-semibold text-center focus:border-highlight-gold focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-highlight-gold/20 font-corporate"
              />
            </div>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-br from-highlight-gold to-amber-600 rounded-xl p-10 text-white text-center shadow-lg max-w-sm">
              <div className="text-sm font-medium opacity-95 mb-3 font-corporate uppercase tracking-wide">Annual Cost</div>
              <div className="text-4xl lg:text-5xl font-bold font-corporate">${calculations.annual.toLocaleString()}</div>
            </div>
          </div>
          
          <div className="text-center p-6 bg-highlight-gold/10 rounded-lg border border-highlight-gold/20">
            <p className="text-primary-dark font-corporate">
              <span className="font-semibold">Investment payback period: </span>
              <span className="font-bold text-highlight-gold">{calculations.paybackWeeks} weeks</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
