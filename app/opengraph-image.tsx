import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const alt = siteConfig.seo.ogImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#F2EDE4",
          padding: "56px 64px",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 200,
            backgroundColor: "#C8391B",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: 300,
            height: 84,
            backgroundColor: "#D69A2A",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 56,
            top: 96,
            display: "flex",
            fontSize: 440,
            lineHeight: 1,
            letterSpacing: -24,
            color: "#C6BEB1",
          }}
        >
          BN
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginLeft: 216,
            width: "100%",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ fontSize: 17, letterSpacing: 9, textTransform: "uppercase", color: "#A82C12" }}>
              Portfolio / 2026
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                fontSize: 14,
                letterSpacing: 6,
                textTransform: "uppercase",
                color: "#141414",
              }}
            >
              <span>Focus</span>
              <span>Believe</span>
              <span>Achieve</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 126,
                lineHeight: 0.88,
                letterSpacing: -3,
                textTransform: "uppercase",
                fontWeight: 700,
                color: "#141414",
              }}
            >
              Binit Nayak
            </div>
            <div style={{ display: "flex", width: 96, height: 5, marginTop: 22, backgroundColor: "#C8391B" }} />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 26, color: "#141414" }}>
                17-year-old student in Biratnagar, Nepal
              </div>
              <div style={{ fontSize: 19, color: "#57534C", marginTop: 8 }}>
                binit-nayak.vercel.app
              </div>
            </div>
            <div style={{ fontSize: 14, letterSpacing: 6, textTransform: "uppercase", color: "#7A4F06" }}>
              Dream. Plan. Do.
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
