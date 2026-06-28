import { writeFileSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import React from "react";
import { ImageResponse } from "next/og.js";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const e = React.createElement;

const markup = e(
  "div",
  {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: "#0a0a0d",
      padding: "72px",
      position: "relative",
    },
  },
  e("div", {
    style: {
      position: "absolute",
      top: -160,
      right: -160,
      width: 560,
      height: 560,
      borderRadius: "50%",
      backgroundColor: "rgba(255, 215, 0, 0.16)",
    },
  }),
  e(
    "div",
    { style: { display: "flex", alignItems: "center", gap: 14 } },
    e("div", {
      style: {
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: "#FFD700",
      },
    }),
    e(
      "div",
      {
        style: {
          fontSize: 34,
          fontWeight: 700,
          color: "#f4eee2",
          letterSpacing: -0.5,
        },
      },
      "Shoptype"
    )
  ),
  e(
    "div",
    { style: { display: "flex", flexDirection: "column" } },
    e(
      "div",
      {
        style: {
          fontSize: 96,
          fontWeight: 700,
          lineHeight: 1.02,
          color: "#f4eee2",
          letterSpacing: -2,
        },
      },
      "Growth"
    ),
    e(
      "div",
      {
        style: {
          fontSize: 96,
          fontWeight: 700,
          lineHeight: 1.02,
          color: "#FFD700",
          letterSpacing: -2,
        },
      },
      "for the Age of AI."
    ),
    e(
      "div",
      {
        style: {
          marginTop: 28,
          fontSize: 28,
          color: "#b9b2a4",
          maxWidth: 880,
        },
      },
      "A network of human cosellers and AI agents that find buyers, share products, and drive sales for any business."
    )
  ),
  e(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        fontSize: 20,
        color: "#7a7468",
        letterSpacing: 2,
        textTransform: "uppercase",
      },
    },
    "shoptype.com"
  )
);

const response = new ImageResponse(markup, { width: 1200, height: 630 });
const buffer = Buffer.from(await response.arrayBuffer());
const outPath = join(__dirname, "..", "public", "og-image.png");
writeFileSync(outPath, buffer);
console.log(`Wrote ${outPath} (${buffer.length} bytes)`);
