import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import React from "react";
import { ImageResponse } from "next/og.js";
import sharp from "sharp";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const publicDir = join(__dirname, "..", "public");
const e = React.createElement;
const background = `data:image/png;base64,${readFileSync(join(publicDir, "og-ecosystem-bg.png"), "base64")}`;
const logo = `data:image/png;base64,${readFileSync(join(publicDir, "logo.png"), "base64")}`;

const markup = e(
  "div",
  {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#0a1220",
      padding: 0,
      position: "relative",
      overflow: "hidden",
    },
  },
  e("img", {
    src: background,
    width: 1200,
    height: 630,
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: 1200,
      height: 630,
      objectFit: "cover",
    },
  }),
  e("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: 1200,
      height: 630,
      background: "linear-gradient(90deg, #0a1220 0%, rgba(10,18,32,0.98) 38%, rgba(10,18,32,0.45) 61%, rgba(10,18,32,0.05) 100%)",
    },
  }),
  e("div", {
    style: {
      position: "absolute",
      top: 1,
      left: 1,
      width: 1198,
      height: 628,
      border: "1px solid rgba(244, 238, 226, 0.12)",
    },
  }),
  e(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        position: "absolute",
        top: 60,
        left: 64,
      },
    },
    e("img", {
      src: logo,
      width: 40,
      height: 40,
      style: { objectFit: "contain" },
    }),
    e(
      "div",
      {
        style: {
          fontSize: 30,
          fontWeight: 700,
          color: "#f4eee2",
          letterSpacing: -0.7,
        },
      },
      "Shoptype"
    )
  ),
  e(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        top: 192,
        left: 64,
        width: 760,
      },
    },
    e(
      "div",
      {
        style: {
          fontSize: 70,
          fontWeight: 700,
          lineHeight: 0.98,
          color: "#f4eee2",
          letterSpacing: -3.2,
        },
      },
      "Market Ecosystems"
    ),
    e(
      "div",
      {
        style: {
          marginTop: 10,
          fontSize: 58,
          fontWeight: 700,
          lineHeight: 1,
          color: "#ffd700",
          letterSpacing: -2.6,
        },
      },
      "for the Age of Agents."
    ),
    e(
      "div",
      {
        style: {
          marginTop: 30,
          fontSize: 23,
          lineHeight: 1.35,
          color: "#d1c9bb",
          maxWidth: 640,
        },
      },
      "Turn your business into the platform for your industry — where human cosellers and AI agents find buyers and drive sales."
    )
  ),
  e(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        position: "absolute",
        left: 64,
        bottom: 48,
        gap: 18,
        fontSize: 16,
        color: "#9d9587",
        letterSpacing: 2.4,
        textTransform: "uppercase",
      },
    },
    e("div", {
      style: { width: 110, height: 2, backgroundColor: "#ffd700" },
    }),
    "shoptype.com"
  )
);

const response = new ImageResponse(markup, { width: 1200, height: 630 });
const buffer = Buffer.from(await response.arrayBuffer());
const outPath = join(publicDir, "og-image-v2.png");
writeFileSync(outPath, buffer);
console.log(`Wrote ${outPath} (${buffer.length} bytes)`);

async function makeIcon(size) {
  const inset = Math.round(size * 0.12);
  const mark = await sharp(join(publicDir, "logo.png"))
    .resize(size - inset * 2, size - inset * 2, { fit: "contain" })
    .png()
    .toBuffer();
  const tile = Buffer.from(
    `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg"><rect width="${size}" height="${size}" rx="${Math.round(size * 0.22)}" fill="#0a1220"/></svg>`,
  );

  return sharp(tile)
    .composite([{ input: mark, left: inset, top: inset }])
    .png()
    .toBuffer();
}

const icon16 = await makeIcon(16);
const icon32 = await makeIcon(32);
const appleIcon = await makeIcon(180);
writeFileSync(join(publicDir, "icon.png"), icon32);
writeFileSync(join(publicDir, "apple-touch-icon.png"), appleIcon);

const icoHeader = Buffer.alloc(6);
icoHeader.writeUInt16LE(0, 0);
icoHeader.writeUInt16LE(1, 2);
icoHeader.writeUInt16LE(2, 4);
const entries = Buffer.alloc(32);
let offset = 38;
for (const [index, [size, png]] of [[16, icon16], [32, icon32]].entries()) {
  const base = index * 16;
  entries.writeUInt8(size, base);
  entries.writeUInt8(size, base + 1);
  entries.writeUInt16LE(1, base + 4);
  entries.writeUInt16LE(32, base + 6);
  entries.writeUInt32LE(png.length, base + 8);
  entries.writeUInt32LE(offset, base + 12);
  offset += png.length;
}
writeFileSync(join(publicDir, "favicon.ico"), Buffer.concat([icoHeader, entries, icon16, icon32]));
console.log("Wrote favicon.ico, icon.png, and apple-touch-icon.png");
