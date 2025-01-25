"use client";

import React from "react";

interface SearchContextType {
  openSearch: boolean;
  setOpenSearch: (open: boolean) => void;
}

export const SearchContext = React.createContext<SearchContextType | undefined>(
  undefined
);

interface UseSearchProps {
  shortcutKey?: string;
}

export function SearchProvider({
  children,
  shortcutKey = "k",
}: UseSearchProps & { children: React.ReactNode }) {
  const [openSearch, setOpenSearch] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === shortcutKey && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpenSearch((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [shortcutKey]);

  return (
    <SearchContext.Provider value={{ openSearch, setOpenSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
