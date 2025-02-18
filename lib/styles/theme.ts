import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    custom: typeof customColors
  }
  interface PaletteOptions {
    custom?: typeof customColors
  }
}

const customColors = {
  "white": "#FFFFFF",
  "black": "#171717",
  "blue-50" : "#EFF6FF",
  "blue-100" : "#DBEAFE",
  "blue-200" : "#BFDBFE",
  "blue-300" : "#93C5FD",
  "blue-400" : "#60A5FA",
  "blue-500" : "#3B82F6",
  "blue-600" : "#2563EB",
  "blue-700" : "#1D4ED8",
  "blue-800" : "#1E40AF",
  "blue-900" : "#1E3A8A",
  "blue-950" : "#172554",
  "neutral-50" : "#FAFAFA",
  "neutral-100" : "#F5F5F5",
  "neutral-200" : "#E5E5E5",
  "neutral-300" : "#D4D4D4",
  "neutral-400" : "#A3A3A3",
  "neutral-500" : "#737373",
  "neutral-600" : "#525252",
  "neutral-700" : "#404040",
  "neutral-800" : "#262626",
  "neutral-900" : "#171717",
  "neutral-950" : "#0A0A0A",
  "red-50" : "#FEF2F2",
  "red-100" : "#FEE2E2",
  "red-200" : "#FECACA",
  "red-300" : "#FCA5A5",
  "red-400" : "#F87171",
  "red-500" : "#EF4444",
  "red-600" : "#DC2626",
  "red-700" : "#B91C1C",
  "red-800" : "#991B1B",
  "red-900" : "#7F1D1D",
  "red-950" : "#450A0A",
  "green-50" : "#F0FDF4",
  "green-100" : "#DCFCE7",
  "green-200" : "#DCFCE7",
  "green-300" : "#DCFCE7",
  "green-400" : "#4ADE80",
  "green-500" : "#22C55E",
  "green-600" : "#22C55E",
  "green-700" : "#15803D",
  "green-800" : "#166534",
  "green-900" : "#14532D",
  "green-950" : "#052E16",
  "yellow-50" : "#FEFCE8",
  "yellow-100" : "#FEF9C3",
  "yellow-200" : "#FEF08A",
  "yellow-300" : "#FDE047",
  "yellow-400" : "#FACC15",
  "yellow-500" : "#EAB308",
  "yellow-600" : "#CA8A04", 
  "yellow-700" : "#A16207",
  "yellow-800" : "#854D0E",
  "yellow-900" : "#713F12",
  "yellow-950" : "#422006",
}

const theme = createTheme({
  palette: {
    custom: customColors 
  },
  typography: {
    fontFamily: "Circular, Helvetica, Arial, Sans-serif",
  }
});



export default theme;