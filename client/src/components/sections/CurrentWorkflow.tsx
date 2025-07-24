import { useEffect } from "react";
import mermaid from "mermaid";

export default function CurrentWorkflow() {
  useEffect(() => {
    // Re-initialize Mermaid when component mounts
    setTimeout(() => {
      mermaid.run();
    }, 100);
  }, []);

  const painPoints = [
    "Manual correction taking 15-30 minutes per meeting",
    "Entry bottleneck where admin time exceeds task time", 
    "Micro tasks being missed in the workflow",
    "Verbal planning with no central view",
    "Progress tracking knowledge trapped in notebooks"
  ];

  return (
    <section id="current-workflow" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-accent-green mb-4">The Current Workflow</h2>
          <p className="text-lg text-primary-dark/70 max-w-2xl mx-auto">
            Your current process has multiple pain points that are costing you time and money. 
            Let's visualize where the inefficiencies lie.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-background-light rounded-xl p-6">
              <h3 className="text-xl font-semibold text-primary-dark mb-4">
                Key Bottleneck Points
              </h3>
              <ul className="space-y-3">
                {painPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-highlight-gold text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 overflow-x-auto">
            <pre className="mermaid" id="current-workflow-diagram">
{`graph TD
    classDef normal fill:#fff,stroke:#06414F,stroke-width:2px,color:#06414F
    classDef pain fill:#fff,stroke:#BF8E29,stroke-width:4px,color:#06414F

    A["Client WIP Meeting"] --> B["Meeting Recording"];
    B --> C["Chat GPT Action Extraction"];
    C --> D(Manual Correction<br/><b>PAIN POINT</b><br/>15-30 min/meeting);
    D --> E["Action List Created"];
    E --> F["Send to Client"];
    E --> G["Create Tasks in Scoro"];
    G --> H(Entry Bottleneck<br/><b>PAIN POINT</b><br/>Admin > Task Time);
    H --> I["Task Size Classification"];
    I --> J(Micro Tasks Missed<br/><b>PAIN POINT</b>);
    I --> K["Standard Tasks Entered"];
    K --> L(Verbal Planning<br/><b>PAIN POINT</b><br/>No Central View);
    L --> M["Manual Scoro Update"];
    M --> N(Progress Tracking<br/><b>PAIN POINT</b><br/>Knowledge in Notebooks);

    class D,H,J,L,N pain;
    class A,B,C,E,F,G,I,K,M normal;`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
