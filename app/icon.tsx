import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 34,
          fontWeight: 800,
          background: "transparent",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#778873",
          WebkitTextStroke: "1.5px #778873",
          textShadow: "0 0 2px #fff, 0 0 4px #fff",
        }}
      >
        V
      </div>
    ),
    {
      ...size,
    }
  );
}
