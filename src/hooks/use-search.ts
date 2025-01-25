"use client";

import React from "react";

// export function useSearch() {
//   const context = React.useContext(SearchContext);
//   if (context === undefined) {
//     throw new Error("useSearch must be used within a SearchProvider");
//   }
//   return context;
// }

interface UseSearchProps {
  shortcutKey?: string;
}

export function useSearch({ shortcutKey = "k" }: UseSearchProps = {}) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === shortcutKey && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [shortcutKey]);

  return {
    openSearch: open,
    setOpenSearch: setOpen,
  };
}
