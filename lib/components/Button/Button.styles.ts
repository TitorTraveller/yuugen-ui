import theme from "../../styles/theme";
import { CSSProperties } from "@mui/material/styles/createMixins";

export function styles(variant: "primary" | "primary-outline" | "secondary" | "secondary-outline" | "transparent-primary" | "transparent-secondary", size: "medium" | "small", iconButtonMode: boolean): CSSProperties {

  const iconButtonModeStyles: CSSProperties = {
    padding: theme.spacingVariants["space-3xs"],
    minWidth: "28px",
    width: "28px",
    height: "28px",
     ...(size === "small" && {
      minWidth: "24px",
      width: "24px",
      height: "24px"})
  }

  const baseStyle: CSSProperties = {
    alignItems: "center",
    borderRadius: "4px",
    ...theme.typography["text-body-base"],
    "& .text-span": {
      px: theme.spacingVariants["space-3xs"]
    },
    "& .left-icon": {
      alignItems: "center",
      display: "flex",
      "svg": {
        height: "20px",
        width: "20px"
      }
    },
    "& .right-icon": {
      alignItems: "center",
      display: "flex",
      "svg": {
        height: "20px",
        width: "20px"
      }
    },
    ...(iconButtonMode && iconButtonModeStyles)
  };

  

  const variants = {
    "primary": {
      backgroundColor: theme.palette.colors["blue-700"],
      border: `1px solid ${theme.palette.colors["blue-700"]}`,
      color: theme.palette.colors["neutral-white"],
      ":hover": {
        backgroundColor: theme.palette.colors["blue-600"],
        borderColor: theme.palette.colors["blue-800"],
      },
    },
    "primary-outline": {
      border: `1px solid ${theme.palette.colors["blue-700"]}`,
      color: theme.palette.colors["blue-700"],
      ":hover": {
        backgroundColor: theme.palette.colors["blue-50"],
        borderColor: theme.palette.colors["blue-800"],
        color: theme.palette.colors["blue-700"],
      },
    },
    "secondary": {
      backgroundColor: theme.palette.colors["neutral-950"],
      border: `1px solid ${theme.palette.colors["neutral-black"]}`,
      color: theme.palette.colors["neutral-white"],
      ":hover": {
        backgroundColor: theme.palette.colors["neutral-800"],
        borderColor: theme.palette.colors["neutral-800"],
      },
    },
    "secondary-outline": {
      border: `1px solid ${theme.palette.colors["neutral-500"]}`,
      color: theme.palette.colors["neutral-600"],
      ":hover": {
        backgroundColor: theme.palette.colors["neutral-100"],
        border: `1px solid ${theme.palette.colors["neutral-900"]}`,
        color: theme.palette.colors["neutral-black"],
      }
    },
    "transparent-primary": {
      backgroundColor: "transparent",
    },
    "transparent-secondary": {
      backgroundColor: "transparent",
      color: theme.palette.colors["neutral-600"]
    },
  };

  const sizes = {
    "medium": {
      py: theme.spacingVariants["space-md"],
      px: theme.spacingVariants["space-sm"],
    },
    "small": {
      py: theme.spacingVariants["space-sm"],
      px: theme.spacingVariants["space-sm"],
    },
  };

  return {
    ...baseStyle,
    ...variants[variant],
    ...sizes[size]
  };
}
  

