"use client";

import { theme } from "@/styles/theme";
import PageLinks from "@/templates/PageLinks";
import { ThemeProvider } from "styled-components";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <PageLinks />
    </ThemeProvider>
  );
}
