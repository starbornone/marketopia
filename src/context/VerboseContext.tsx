"use client";

import { createContext, useContext, useEffect, useState } from "react";

type VerboseContextType = {
  isVerbose: boolean;
  toggleVerbose: () => void;
};

const VerboseContext = createContext<VerboseContextType | undefined>(undefined);

export function VerboseProvider({ children }: { children: React.ReactNode }) {
  const [isVerbose, setIsVerbose] = useState(true);

  useEffect(() => {
    const savedVerbose = localStorage.getItem("verboseMode");
    if (savedVerbose) {
      setIsVerbose(savedVerbose === "true");
    }
  }, []);

  const toggleVerbose = () => {
    setIsVerbose((prev) => {
      const newValue = !prev;
      localStorage.setItem("verboseMode", JSON.stringify(newValue));
      return newValue;
    });
  };

  return (
    <VerboseContext.Provider value={{ isVerbose, toggleVerbose }}>
      {children}
    </VerboseContext.Provider>
  );
}

export function useVerbose() {
  const context = useContext(VerboseContext);
  if (!context) {
    throw new Error("useVerbose must be used within a VerboseProvider");
  }
  return context;
}
