import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const OG_SIZE = { width: 1200, height: 630 };

let fontsPromise: Promise<{ michroma: Buffer; inter: Buffer }> | null = null;

function loadFonts() {
  fontsPromise ??= Promise.all([
    readFile(join(process.cwd(), "assets", "og", "Michroma-Regular.woff")),
    readFile(join(process.cwd(), "assets", "og", "Inter-Regular.woff")),
  ]).then(([michroma, inter]) => ({ michroma, inter }));
  return fontsPromise;
}

let logoPromise: Promise<string> | null = null;

/** White FUTURA wordmark (for the dark OG background) as a data URI. */
function loadLogo() {
  logoPromise ??= readFile(
    join(process.cwd(), "public", "futura-logo-white.png")
  ).then((buf) => `data:image/png;base64,${buf.toString("base64")}`);
  return logoPromise;
}

/** Shared branded OG template — dark cinematic FUTURA card. */
export async function brandOg({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  const [{ michroma, inter }, logo] = await Promise.all([
    loadFonts(),
    loadLogo(),
  ]);
  const fontSize = title.length > 40 ? 54 : title.length > 22 ? 68 : 84;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#04070d",
          backgroundImage:
            "radial-gradient(620px 620px at 90% 0%, rgba(79,143,232,0.30), rgba(4,7,13,0) 60%), radial-gradient(520px 520px at 0% 100%, rgba(232,130,58,0.16), rgba(4,7,13,0) 65%)",
          fontFamily: "Inter",
          color: "#e8ecf2",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} width={220} height={46} alt="FUTURA" style={{ display: "flex" }} />
          <span
            style={{
              fontSize: 20,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#8a94a6",
            }}
          >
            {eyebrow}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize,
              lineHeight: 1.15,
              letterSpacing: 1,
              fontFamily: "Michroma",
              textTransform: "uppercase",
            }}
          >
            {title}
          </span>
          {subtitle && (
            <span
              style={{
                marginTop: 26,
                fontSize: 26,
                color: "#8a94a6",
                letterSpacing: 1,
              }}
            >
              {subtitle}
            </span>
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: 22, color: "#8a94a6", letterSpacing: 2 }}>
            thefutura.llc
          </span>
          <span
            style={{
              width: 170,
              height: 4,
              borderRadius: 999,
              backgroundImage: "linear-gradient(90deg, #4f8fe8, #e8823a)",
            }}
          />
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Michroma", data: michroma, weight: 400, style: "normal" },
        { name: "Inter", data: inter, weight: 400, style: "normal" },
      ],
    }
  );
}
