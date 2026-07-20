export const site = {
  name: "FUTURA",
  legalName: "Futura Digital LLC",
  // Canonical is non-www (www 301-redirects to non-www) — must match this exactly.
  domain: "https://thefutura.llc",
  tagline: "We're building the future.",
  description:
    "FUTURA is the parent company behind digital brands in software, media and technology — including Luminor Solutions and TechPlay.gg.",
  email: "hello@thefutura.llc",
  founded: "2026-07-09",
  address: {
    street: "75 E 3rd St",
    locality: "Sheridan",
    region: "WY",
    postalCode: "82801",
    country: "US",
  },
  brands: [
    { name: "Luminor Solutions", url: "https://luminor.solutions" },
    { name: "TechPlay.gg", url: "https://techplay.gg" },
  ],
} as const;
