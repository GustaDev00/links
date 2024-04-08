import { DefaultTheme } from "styled-components";

export const theme: ExtendedTheme = {
  gunmetal: "#2D2F39",
  cultured: "#F6F7FA",
  white: "#FFFFFF",
  black: "#000000",
  darkSilver: "#707070",
  youtube: "#F44336",
  linkedin: "#0B66C2",
};

export interface ColorFamily {
  [key: string]: string;
}

export interface ExtendedTheme extends DefaultTheme, ColorFamily {}
