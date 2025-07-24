export default function StrategicRoadmap() {
  const phases = [
    {
      number: 1,
      title: "Voice Note to Scoro Tasks",
      isCurrent: true,
      status: "Today's Focus",
      description: "Automate task creation from voice notes to eliminate the primary data entry bottleneck.",
      investment: "$3,500 NZD",
      bgClass: "bg-gradient-to-br from-highlight-gold to-yellow-600 text-white"
    },
    {
      number: 2,
      title: "Complete Meeting Automation",
      isCurrent: false,
      status: "Future Vision",
      description: "Automate the creation of client-ready meeting summaries and Scoro tasks directly from transcripts.",
      investment: "Future Investment",
      bgClass: "bg-white border-2 border-primary-dark/20 hover:border-accent-green hover:shadow-lg"
    },
    {
      number: 3,
      title: "Creative Brief Automation",
      isCurrent: false,
      status: "Future Vision", 
      description: "Streamline the creative briefing process, turning client conversations or notes into structured briefs automatically.",
      investment: "Future Investment",
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
        
        <div className="grid lg:grid-cols-3 gap-6">
          {phases.map((phase) => (
            <div key={phase.number} className={`roadmap-phase ${phase.bgClass} rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1`}>
              {phase.isCurrent && (
                <div className="absolute top-0 right-0 bg-white text-highlight-gold px-3 py-1 rounded-bl-lg text-sm font-semibold">
                  {phase.status}
                </div>
              )}
              {!phase.isCurrent && (
                <div className="absolute top-0 right-0 bg-gray-100 text-gray-600 px-3 py-1 rounded-bl-lg text-sm font-semibold">
                  {phase.status}
                </div>
              )}
              <div className="mb-4">
                <div className={`text-2xl font-bold mb-2 ${phase.isCurrent ? 'text-white' : 'text-primary-dark'}`}>
                  Phase {phase.number}:
                </div>
                <div className={`text-lg font-semibold ${phase.isCurrent ? 'text-white' : 'text-accent-green'}`}>
                  {phase.title}
                </div>
              </div>
              <div className={`text-sm mb-4 ${phase.isCurrent ? 'text-white opacity-90' : 'text-primary-dark/70'}`}>
                {phase.description}
              </div>
              <div className={`mt-4 pt-4 ${phase.isCurrent ? 'border-t border-white/20' : 'border-t border-primary-dark/10'}`}>
                <div className={`font-semibold ${phase.isCurrent ? 'text-white' : 'text-primary-dark'}`}>
                  {phase.investment}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
