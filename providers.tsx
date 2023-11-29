"use client";

import { StoreContext } from "@context";
import { AppThemes } from "@context/theme";
import { ThemeType } from "@types";
import { useContext } from "react";
import StyledComponentsRegistry from "registry";
import { ThemeProvider } from "styled-components";

const Providers = (props: React.PropsWithChildren) => {
  const { theme } = useContext(StoreContext);
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={AppThemes.light as ThemeType}>
        {props.children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
