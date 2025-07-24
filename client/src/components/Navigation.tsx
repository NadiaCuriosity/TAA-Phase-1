import { useEffect, useState } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("current-workflow");

  const navigationItems = [
    { id: "current-workflow", number: "1" },
    { id: "cost-calculator", number: "2" },
    { id: "future-workflow", number: "3" },
    { id: "offer-roi", number: "4" },
    { id: "roadmap", number: "5" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id);
      
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="fixed left-0 top-0 h-full w-16 bg-primary-dark shadow-lg z-50 hidden lg:flex flex-col items-center py-8 space-y-6">
      <div className="text-white text-xl font-bold">T</div>
      <div className="space-y-4">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`block w-8 h-8 rounded-full transition-colors duration-300 flex items-center justify-center ${
              activeSection === item.id 
                ? 'bg-accent-green' 
                : 'bg-accent-green/20 hover:bg-accent-green/40'
            }`}
          >
            <span className="text-xs text-white font-semibold">{item.number}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
