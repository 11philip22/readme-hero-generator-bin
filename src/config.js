export const WIDTH = 1400;
export const HEIGHT = 280;
export const DPR = 2;
export const FONT_FAMILY = "'JetBrains Mono', monospace";

export const DEFAULTS = {
  name: "Project Title",
  subtitle: "Short project tagline",
  description: "A brief description of your project and what it does.",
  tags: "TAG1, TAG2, TAG3",
  accent: "ORANGE",
  bg: "WAVE",
  mode: "dark",
};

export const ACCENTS = [
  { name: "ORANGE", color: "#f97316" },
  { name: "CYAN", color: "#22d3ee" },
  { name: "LIME", color: "#84cc16" },
  { name: "VIOLET", color: "#a855f7" },
  { name: "RED", color: "#ff2d2d" },
  { name: "AMBER", color: "#f59e0b" },
  { name: "ROSE", color: "#f43f8e" },
  { name: "ICE", color: "#e0f2fe" },
];

export const BACKGROUNDS = ["NONE", "DOTS", "GRID", "SCAN", "WAVE", "VOID", "ZEBRA"];

export const PALETTE = {
  dark: {
    BG: "#0e0e0c",
    BORDER: "#2e2e26",
    FG: "#e8e6dc",
    DESC: "#b8b6ac",
    TAG_BG: "#181816",
    TAG_TEXT: "#e8e6dc",
    DOT: "#2a2a26",
    PATTERN_INV: false,
  },
  light: {
    BG: "#f2f1ea",
    BORDER: "#111111",
    FG: "#111111",
    DESC: "#4a4a40",
    TAG_BG: "#111111",
    TAG_TEXT: "#f2f1ea",
    DOT: "#b8b6ae",
    PATTERN_INV: true,
  },
};
