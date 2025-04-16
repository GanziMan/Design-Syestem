import { style } from "@vanilla-extract/css";

export const SelectTrigger = style({
  backgroundColor: "white",
  maxWidth: 342,
  width: "100%",
  height: 48,
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  outline: "none",
});

export const SelectContent = style({
  width: 342,
  borderRadius: "12px",
  backgroundColor: "white",
});

export const SelectViewPort = style({});

export const SelectItem = style({
  backgroundColor: "white",
  border: "1px solid #E0E0E0",
  height: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  userSelect: "none",
  outline: "none",
  ":first-child": {
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
  },
  ":last-child": {
    borderBottomLeftRadius: "12px",
    borderBottomRightRadius: "12px",
    borderTop: "none",
  },
});
