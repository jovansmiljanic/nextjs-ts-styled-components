"use client";

// Core types
import type { FC } from "react";

// Core
import { createContext, useMemo, useEffect, useState } from "react";

// Create Context base
export const StoreContext = createContext({} as AppContext);

// Vendors
import { ThemeProvider } from "styled-components";

// App context properties
import { AppThemes } from "@context/theme";

// Instruct component Props Types
interface Props {
  children: React.ReactNode;
}

// Instruct component State Types
interface AppContext {
  isPhone?: boolean;
  isTablet?: boolean;

  theme: "light" | "dark";
}

type Theme = "light" | "dark";

export const Store: FC<Props> = props => {
  const [isPhone, setIsPhone] = useState<boolean>();
  const isPhoneMemo = useMemo(() => isPhone, [isPhone]);

  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Check if users device is smaller than 768px and enable Phone layout
    const isPhone = window.matchMedia("(max-width: 992px)").matches;

    if (isPhone) setIsPhone(isPhone);

    // Listen to window resize and resize layouts
    window.addEventListener("resize", detectLayout);
  }, []);

  // Detect window resize and enable respective layout
  const detectLayout = () => {
    const isPhone = window.matchMedia("(max-width: 992px)").matches;

    // Act accordingly by enabling isPhone layout
    setIsPhone(isPhone);
  };

  return (
    <StoreContext.Provider
      value={
        {
          isPhone: isPhoneMemo,
          theme: theme,
        } as AppContext
      }
    >
      <ThemeProvider theme={AppThemes[theme]}>{props.children}</ThemeProvider>
    </StoreContext.Provider>
  );
};
