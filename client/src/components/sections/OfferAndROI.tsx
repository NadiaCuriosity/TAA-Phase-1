export default function OfferAndROI() {
  const timelinePoints = [
    {
      day: "Day 1",
      title: "Initial Investment",
      amount: "$3,500",
      description: "Initial Investment",
      bgColor: "bg-primary-dark",
      textColor: "text-highlight-gold"
    },
    {
      day: "wk 6-8",
      title: "Breakeven Point", 
      amount: "$0 Net Cost",
      description: "Net Cost",
      bgColor: "bg-accent-green pulse-gold",
      textColor: "text-accent-green"
    },
    {
      day: "∞",
      title: "Time Savings",
      amount: "$2,400+/month",
      description: "Time Savings",
      bgColor: "bg-highlight-gold",
      textColor: "text-accent-green"
    }
  ];

  return (
    <section id="offer-roi" className="py-16 px-6 bg-background-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-accent-green mb-6 font-corporate">Your Foundational Partner Offer</h2>
          <p className="text-lg text-primary-dark font-corporate max-w-2xl mx-auto leading-relaxed">
            Special foundational partner pricing with accelerated return on investment. 
            Investment structure and timeline analysis below.
          </p>
        </div>
        
        {/* Pricing Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-10 text-center relative border border-gray-100">
            <div className="absolute top-4 right-4 bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-semibold font-corporate">
              Discounted
            </div>
            <div className="text-4xl font-bold text-primary-dark mb-3 font-corporate">$5,000</div>
            <div className="text-lg text-primary-dark font-corporate">Standard Investment</div>
          </div>
          
          <div className="from-highlight-gold to-amber-600 rounded-2xl shadow-xl p-10 text-center text-white relative transform scale-105 bg-[#bf8e29]">
            <div className="absolute top-4 right-4 bg-white text-highlight-gold px-4 py-2 rounded-full text-sm font-semibold font-corporate">
              Your Price
            </div>
            <div className="text-5xl font-bold mb-3 font-corporate">$3,500</div>
            <div className="text-lg opacity-95 font-corporate">Foundational Partner Investment</div>
            <div className="mt-6 text-sm opacity-95 font-corporate">
              + AI service subscription
            </div>
          </div>
        </div>
        
        {/* ROI Timeline */}
        <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
          <h3 className="text-3xl font-bold text-center text-accent-green mb-10 font-corporate">Investment Return Timeline</h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-primary-dark via-accent-green to-highlight-gold rounded-full transform -translate-y-1/2"></div>
            
            {/* Timeline Points */}
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {timelinePoints.map((point, index) => (
                <div key={index} className="text-center">
                  <div className={`w-20 h-20 ${point.bgColor} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 shadow-lg border-4 border-white`}>
                    {point.day === "∞" ? "∞" : point.day}
                  </div>
                  <div className="bg-white border-2 border-gray-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className={`font-bold text-sm uppercase tracking-wide mb-3 font-corporate ${point.textColor === 'text-accent-green' && point.title === 'BREAKEVEN POINT' ? 'text-accent-green' : point.textColor === 'text-highlight-gold' ? 'text-highlight-gold' : 'text-primary-dark'}`}>
                      {point.title}
                    </div>
                    <div className={`text-3xl font-bold font-corporate mb-2 ${point.textColor}`}>{point.amount}</div>
                    <div className="text-sm text-primary-dark font-corporate leading-relaxed">{point.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-10 text-center p-6 bg-gradient-to-r from-accent-green/5 to-highlight-gold/5 rounded-xl border border-accent-green/20">
            <p className="text-primary-dark font-bold text-lg font-corporate">
              Investment fully recovered within 8 weeks with immediate productivity gains.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
