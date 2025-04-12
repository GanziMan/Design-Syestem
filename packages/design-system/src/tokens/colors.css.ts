// packages/design-system/src/tokens/colors.css.ts
import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    primary: "#0070f3",
    secondary: "#ff4081",
    background: "#ffffff",
    text: "#333333",
  },
});
