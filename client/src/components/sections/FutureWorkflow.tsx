import { useEffect } from "react";
import mermaid from "mermaid";

export default function FutureWorkflow() {
  useEffect(() => {
    // Re-initialize Mermaid when component mounts
    setTimeout(() => {
      mermaid.run();
    }, 100);
  }, []);

  const staysTheSame = [
    {
      icon: "fas fa-users",
      title: "Meeting Process",
      description: "Your client meetings continue exactly as they are"
    },
    {
      icon: "fas fa-file-alt",
      title: "Meeting Summaries",
      description: "AI-generated summaries remain high quality"
    },
    {
      icon: "fas fa-database",
      title: "Scoro as Truth",
      description: "Scoro remains your single source of truth"
    }
  ];

  const improvements = [
    "No more manual correction sessions",
    "No more entry bottlenecks",
    "Micro tasks automatically captured",
    "Central planning view in Scoro"
  ];

  return (
    <section id="future-workflow" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-accent-green mb-6 font-corporate">The Future Workflow</h2>
          <p className="text-lg text-primary-dark font-corporate max-w-2xl mx-auto leading-relaxed">
            The proposed solution maintains existing strengths while eliminating bottlenecks 
            through strategic automation implementation.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* What Stays the Same */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary-dark mb-6 font-corporate">
              What Stays the Same
            </h3>
            
            <div className="space-y-4">
              {staysTheSame.map((item, index) => (
                <div key={index} className="flex items-center p-6 bg-background-light rounded-lg border border-gray-100 shadow-sm">
                  <i className={`${item.icon} text-accent-green text-xl mr-4`}></i>
                  <div>
                    <div className="font-semibold text-primary-dark font-corporate">{item.title}</div>
                    <div className="text-sm text-primary-dark font-corporate opacity-80">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* The New Frictionless Step */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary-dark mb-6 flex items-center">
              <i className="fas fa-magic text-highlight-gold mr-3"></i>
              The New Frictionless Step
            </h3>
            
            <div className="bg-gradient-to-br from-accent-green/5 to-highlight-gold/5 rounded-xl p-6">
              <pre className="mermaid" id="future-workflow-diagram">
{`graph TD
    classDef action fill:#145B51,stroke:#145B51,color:#fff
    classDef system fill:#fff,stroke:#06414F,stroke-width:2px,color:#06414F

    A["Record Voice Note in Slack"] --> B["Automated Processing"];
    B --> C["Tasks Created in Scoro"];

    class A action;
    class B,C system;`}
              </pre>
            </div>
            
            <div className="space-y-3 text-sm text-primary-dark/70">
              {improvements.map((improvement, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-accent-green rounded-full mr-3"></span>
                  {improvement}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
