import { ImageResponse } from "next/og";
import { site } from "@/lib/data/site";

export const alt = `${site.name}: ${site.role} (${site.tagline})`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          color: "#111111",
          padding: "64px 72px",
          fontFamily: "sans-serif",
          borderTop: "8px solid #1a4be0",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #d8d8d4",
            paddingBottom: "20px",
            fontSize: "18px",
            color: "#6b6b6b",
          }}
        >
          <span>SPEC · THEPHUNG.DEV</span>
          <span>EXIMBANK TELLER PLATFORM · FPT IS</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "20px",
              color: "#1a4be0",
              fontWeight: 600,
              letterSpacing: "0.02em",
            }}
          >
            {`${site.displayName} · ${site.role}`}
          </div>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 600,
              lineHeight: 1.04,
              letterSpacing: "-0.035em",
              color: "#111111",
              maxWidth: "960px",
            }}
          >
            Java backend systems where money moves safely.
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#525252",
              lineHeight: 1.4,
              maxWidth: "880px",
            }}
          >
            Spring Boot 3 · Idempotent transfers · Maker-checker concurrency · Kafka pipelines · Angular Nx
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #d8d8d4",
            paddingTop: "20px",
            fontSize: "18px",
            color: "#525252",
          }}
        >
          <span>1.5+ yrs production banking · 14 microservices · 11 micro-frontends</span>
          <span style={{ color: "#1a4be0", fontWeight: 600 }}>thephung.vercel.app</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
