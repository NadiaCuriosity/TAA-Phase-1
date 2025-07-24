// Global type declarations
declare global {
  interface Window {
    mermaid: {
      initialize: (config: any) => void;
      run: () => void;
    };
  }
}

export {};