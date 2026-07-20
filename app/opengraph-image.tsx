import { brandOg, OG_SIZE } from "@/lib/og";

export const alt = "FUTURA — We're Building the Future";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return brandOg({
    eyebrow: "Parent company — software, media & technology",
    title: "We're building the future",
    subtitle: "Luminor Solutions · TechPlay.gg",
  });
}
