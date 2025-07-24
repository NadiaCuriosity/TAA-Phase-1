export default function StrategicRoadmap() {
  const phases = [
    {
      number: 1,
      title: "Foundational Automation",
      isCurrent: true,
      timeline: "4-6 weeks",
      investment: "$3,500 Investment",
      features: [
        "Slack voice note integration",
        "Scoro task automation",
        "Basic workflow optimization"
      ],
      bgClass: "bg-gradient-to-br from-accent-green to-primary-dark text-white"
    },
    {
      number: 2,
      title: "Meeting Summary Automation",
      isCurrent: false,
      timeline: "6-8 weeks",
      investment: "Future Investment",
      features: [
        "Enhanced AI summarization",
        "Action item auto-extraction",
        "Client notification system"
      ],
      bgClass: "bg-white border-2 border-primary-dark/20 hover:border-accent-green hover:shadow-lg"
    },
    {
      number: 3,
      title: "End-to-End Integration",
      isCurrent: false,
      timeline: "8-10 weeks",
      investment: "Future Investment",
      features: [
        "Complete workflow automation",
        "Advanced reporting dashboard",
        "Performance analytics"
      ],
      bgClass: "bg-white border-2 border-primary-dark/20 hover:border-accent-green hover:shadow-lg"
    },
    {
      number: 4,
      title: "Advanced Optimization",
      isCurrent: false,
      timeline: "10-12 weeks",
      investment: "Future Investment",
      features: [
        "AI-powered insights",
        "Predictive workflow optimization",
        "Custom integrations"
      ],
      bgClass: "bg-white border-2 border-primary-dark/20 hover:border-accent-green hover:shadow-lg"
    }
  ];

  return (
    <section id="roadmap" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-accent-green mb-4">Our Strategic Roadmap</h2>
          <p className="text-lg text-primary-dark/70 max-w-2xl mx-auto">
            This investment is just the beginning. Here's our complete vision for transforming 
            your workflow over the next 12 months.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-6">
          {phases.map((phase) => (
            <div key={phase.number} className={`roadmap-phase ${phase.bgClass} rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1`}>
              {phase.isCurrent && (
                <div className="absolute top-0 right-0 bg-highlight-gold px-3 py-1 rounded-bl-lg text-sm font-semibold">
                  CURRENT FOCUS
                </div>
              )}
              <div className="mb-4">
                <div className={`text-3xl font-bold mb-2 ${phase.isCurrent ? 'text-white' : 'text-primary-dark'}`}>
                  Phase {phase.number}
                </div>
                <div className={`text-lg font-semibold ${phase.isCurrent ? 'text-white opacity-90' : 'text-accent-green'}`}>
                  {phase.title}
                </div>
              </div>
              <div className="space-y-3 text-sm">
                {phase.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <i className={`${phase.isCurrent ? 'fas fa-check-circle text-white' : 'fas fa-circle-notch text-primary-dark/30'} mr-2`}></i>
                    <span className={phase.isCurrent ? 'text-white opacity-80' : 'text-primary-dark/70'}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <div className={`mt-4 pt-4 ${phase.isCurrent ? 'border-t border-white/20' : 'border-t border-primary-dark/10'}`}>
                <div className={`text-xs ${phase.isCurrent ? 'text-white opacity-70' : 'text-primary-dark/60'}`}>
                  Timeline: {phase.timeline}
                </div>
                <div className={`font-semibold ${phase.isCurrent ? 'text-highlight-gold' : 'text-primary-dark'}`}>
                  {phase.investment}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-background-light rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-primary-dark mb-4">Total Potential Savings After Full Implementation</h3>
            <div className="text-4xl font-bold text-highlight-gold mb-2">$5,000+ /month</div>
            <p className="text-primary-dark/70">
              Our complete roadmap can save you over $60,000 annually in operational efficiency.
              <br />
              <span className="font-semibold text-accent-green">Let's start with Phase 1 and build from there.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
