import { useEffect, useRef } from "react";
import mermaid from "mermaid";

export default function CurrentWorkflow() {
  const containerRef = useRef<HTMLDivElement>(null);

  const diagram = `
    flowchart TD
      A[Client WIP Meeting] --> B[Meeting Recording]
      B --> C[Chat GPT Action Extraction]
      C --> D[Manual Correction<br/>PAIN POINT<br/>15-30 min/meeting]
      D --> E[Action List Created]
      E --> F[Send to Client]
      E --> G[Create Tasks in Scoro]
      G --> H[Entry Bottleneck<br/>PAIN POINT<br/>Admin exceeds Task Time]
      H --> I[Task Size Classification]
      I --> J[Micro Tasks Missed<br/>PAIN POINT]
      I --> K[Standard Tasks Entered]
      K --> L[Verbal Planning<br/>PAIN POINT<br/>No Central View]
      L --> M[Manual Scoro Update]
      M --> N[Progress Tracking<br/>PAIN POINT<br/>Knowledge in Notebooks]

      %% Styling
      classDef pain fill:#ffe599,stroke:#bf8e29,stroke-width:3px;
      classDef normal fill:#f7f9f9,stroke:#06414f,stroke-width:2px;
      class D,H,J,L,N pain;
      class A,B,C,E,F,G,I,K,M normal;
  `;

  useEffect(() => {
    if (!containerRef.current) return;
    
    const renderDiagram = async () => {
      try {
        mermaid.initialize({ 
          startOnLoad: false,
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
        
        const { svg } = await mermaid.render("current-workflow", diagram);
        if (containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      } catch (error) {
        console.error('Current workflow diagram error:', error);
        // Fallback: show a simple text version
        if (containerRef.current) {
          containerRef.current.innerHTML = '<p class="text-center text-gray-500">Workflow diagram loading...</p>';
        }
      }
    };

    renderDiagram();
  }, [diagram]);

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
          <h2 className="text-3xl lg:text-5xl font-bold text-accent-green mb-6 font-corporate">The Current Workflow</h2>
          <p className="text-lg text-primary-dark font-corporate max-w-2xl mx-auto leading-relaxed">
            Your current process contains multiple bottlenecks that impact operational efficiency. 
            This analysis identifies key areas for improvement.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-background-light rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-primary-dark mb-6 font-corporate">
                Key Bottleneck Points
              </h3>
              <ul className="space-y-4">
                {painPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-highlight-gold text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold mr-4 mt-0.5 shadow-sm">
                      {index + 1}
                    </span>
                    <span className="text-primary-dark font-corporate leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div
            ref={containerRef}
            className="bg-white rounded-xl shadow-lg p-6 overflow-x-auto"
          />
        </div>
      </div>
    </section>
  );
}
