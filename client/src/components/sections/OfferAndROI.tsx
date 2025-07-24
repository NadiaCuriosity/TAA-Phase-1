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
      day: "Week 8",
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
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-semibold text-center text-primary-dark mb-8">Your ROI Timeline</h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 timeline-connector rounded-full transform -translate-y-1/2"></div>
            
            {/* Timeline Points */}
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {timelinePoints.map((point, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 ${point.bgColor} rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4`}>
                    {point.day === "∞" ? <i className="fas fa-infinity"></i> : point.day}
                  </div>
                  <div className={`${point.bgColor.includes('primary') ? 'bg-primary-dark/5' : point.bgColor.includes('accent') ? 'bg-accent-green/5' : 'bg-highlight-gold/5'} rounded-lg p-4`}>
                    <div className={`font-semibold ${point.textColor === 'text-accent-green' && point.title === 'BREAKEVEN POINT' ? 'text-accent-green text-lg' : point.textColor === 'text-highlight-gold' ? 'text-highlight-gold' : 'text-primary-dark'}`}>
                      {point.title}
                    </div>
                    <div className={`text-2xl font-bold ${point.textColor}`}>{point.amount}</div>
                    <div className="text-sm text-primary-dark/70 mt-2">{point.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 text-center p-4 bg-accent-green/10 rounded-lg">
            <p className="text-primary-dark font-semibold">
              In less than 2 months, the initial investment is 100% repaid.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
