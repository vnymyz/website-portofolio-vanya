import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.shortName} | ${profile.title}`;
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
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #F1F3E0 0%, #D2DCB6 55%, #8aa882 100%)",
          color: "#3d4a3a",
        }}
      >
        <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.1 }}>
          {profile.name}
        </div>
        <div style={{ marginTop: 32, fontSize: 40, fontWeight: 600, color: "#5a6857" }}>
          {profile.title}
        </div>
        <div style={{ marginTop: 12, fontSize: 30, color: "#778873" }}>
          {profile.subtitle}
        </div>
      </div>
    ),
    size
  );
}
