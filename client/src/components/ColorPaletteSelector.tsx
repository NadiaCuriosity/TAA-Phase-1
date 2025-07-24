import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Check } from "lucide-react";

export interface ColorPalette {
  id: string;
  name: string;
  colors: {
    normal: {
      fill: string;
      stroke: string;
      color: string;
    };
    highlight: {
      fill: string;
      stroke: string;
      color: string;
    };
  };
}

export const colorPalettes: ColorPalette[] = [
  {
    id: "default",
    name: "Professional Blue",
    colors: {
      normal: { fill: "#fff", stroke: "#06414F", color: "#06414F" },
      highlight: { fill: "#fff", stroke: "#BF8E29", color: "#06414F" }
    }
  },
  {
    id: "forest",
    name: "Forest Green", 
    colors: {
      normal: { fill: "#fff", stroke: "#145B51", color: "#145B51" },
      highlight: { fill: "#fff", stroke: "#2D8F47", color: "#145B51" }
    }
  },
  {
    id: "sunset",
    name: "Sunset Orange",
    colors: {
      normal: { fill: "#fff", stroke: "#D2691E", color: "#8B4513" },
      highlight: { fill: "#fff", stroke: "#FF6347", color: "#8B4513" }
    }
  },
  {
    id: "ocean",
    name: "Ocean Blue",
    colors: {
      normal: { fill: "#fff", stroke: "#1E90FF", color: "#003366" },
      highlight: { fill: "#fff", stroke: "#00CED1", color: "#003366" }
    }
  },
  {
    id: "royal",
    name: "Royal Purple",
    colors: {
      normal: { fill: "#fff", stroke: "#663399", color: "#663399" },
      highlight: { fill: "#fff", stroke: "#9966CC", color: "#663399" }
    }
  },
  {
    id: "monochrome",
    name: "Monochrome",
    colors: {
      normal: { fill: "#fff", stroke: "#333333", color: "#333333" },
      highlight: { fill: "#fff", stroke: "#666666", color: "#333333" }
    }
  }
];

interface ColorPaletteSelectorProps {
  selectedPalette: string;
  onPaletteChange: (paletteId: string) => void;
  className?: string;
}

export default function ColorPaletteSelector({ 
  selectedPalette, 
  onPaletteChange, 
  className = "" 
}: ColorPaletteSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 border-primary-dark/20 hover:border-accent-green"
      >
        <Palette className="w-4 h-4" />
        Colors
      </Button>

      {isOpen && (
        <Card className="absolute top-12 right-0 z-50 w-64 shadow-lg border border-primary-dark/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold text-primary-dark">
              Choose Color Palette
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {colorPalettes.map((palette) => (
              <div
                key={palette.id}
                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                  selectedPalette === palette.id
                    ? 'bg-accent-green/10 border border-accent-green/30'
                    : 'hover:bg-gray-50 border border-transparent'
                }`}
                onClick={() => {
                  onPaletteChange(palette.id);
                  setIsOpen(false);
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    <div
                      className="w-4 h-4 rounded border"
                      style={{
                        backgroundColor: palette.colors.normal.fill,
                        borderColor: palette.colors.normal.stroke
                      }}
                    />
                    <div
                      className="w-4 h-4 rounded border"
                      style={{
                        backgroundColor: palette.colors.highlight.fill,
                        borderColor: palette.colors.highlight.stroke
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium text-primary-dark">
                    {palette.name}
                  </span>
                </div>
                {selectedPalette === palette.id && (
                  <Check className="w-4 h-4 text-accent-green" />
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}