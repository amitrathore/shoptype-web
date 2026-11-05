import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const publicDir = fileURLToPath(new URL("../public/", import.meta.url));
const logo = `data:image/png;base64,${readFileSync(join(publicDir, "logo.png"), "base64")}`;
const store = (x, y, label) =>
  `<g transform="translate(${x} ${y})"><rect x="-47" y="-40" width="94" height="82" rx="12" fill="#fffdf7" stroke="#c7bfac"/><g fill="none" stroke="#192a3b" stroke-width="2" stroke-linejoin="round"><path d="M-24-4v29h48V-4M-29-4l8-16h42l8 16M-29-4h58M-16-20v16M0-20v16M16-20v16M-10 25V9H4v16M11 9h6v7h-6"/></g><path d="M-24-20h48" stroke="#ffd700" stroke-width="5"/><text y="63" text-anchor="middle" font-size="15" fill="#192a3b">${label}</text></g>`;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#f8f4ea"/><rect x="20" y="20" width="1160" height="590" rx="20" fill="none" stroke="#ddd6c7"/>
<image href="${logo}" x="60" y="58" width="42" height="42"/><text x="116" y="90" font-family="Arial,sans-serif" font-size="31" fill="#192a3b">Shoptype</text>
<g font-family="Arial,sans-serif"><text x="60" y="228" font-size="64" font-weight="700" letter-spacing="-2" fill="#192a3b">Your business.</text><text x="60" y="304" font-size="64" font-weight="700" letter-spacing="-2" fill="#93680a">More markets.</text>
<text x="62" y="365" font-size="23" fill="#6e6457">Products, services and markets.</text><text x="62" y="399" font-size="23" fill="#6e6457">Connected for the age of agents.</text>
<text x="62" y="553" font-size="16" letter-spacing="3" fill="#6e6457">SHOPTYPE.COM</text>
<g fill="none" stroke="#b5b2a3" stroke-width="2"><path d="M624 228C695 228 670 320 738 320M624 415C695 415 670 320 738 320M802 320C860 320 843 186 895 186M802 320H895M802 320C860 320 843 442 895 442M989 186C1030 186 1033 240 1085 240M989 314C1030 314 1033 240 1085 240M989 442C1030 442 1033 400 1085 400M989 314C1030 314 1033 400 1085 400"/></g>
<circle cx="770" cy="320" r="49" fill="#192a3b" stroke="#ffd700" stroke-width="2"/><image href="${logo}" x="742" y="292" width="56" height="56"/><text x="770" y="396" text-anchor="middle" font-size="19" font-weight="700" fill="#192a3b">Shoptype</text>
<circle cx="604" cy="228" r="36" fill="#d7e9ec"/><g fill="none" stroke="#192a3b" stroke-width="2" stroke-linejoin="round"><path d="m583 220 21-10 21 10v22l-21 10-21-10ZM583 220l21 10 21-10M604 230v22"/></g><text x="604" y="287" text-anchor="middle" font-size="16" fill="#192a3b">Products</text>
<circle cx="604" cy="415" r="36" fill="#f3dfc6"/><g fill="none" stroke="#192a3b" stroke-width="2"><circle cx="604" cy="404" r="9"/><path d="M586 437v-5a18 18 0 0 1 36 0v5Z"/></g><text x="604" y="473" text-anchor="middle" font-size="16" fill="#192a3b">Services</text>
${store(942, 186, "Creator market")}${store(942, 314, "Business market")}${store(942, 442, "Industry market")}
<circle cx="1105" cy="240" r="31" fill="#f3dfc6"/><g fill="none" stroke="#192a3b" stroke-width="2"><circle cx="1105" cy="231" r="8"/><path d="M1091 256v-3a14 14 0 0 1 28 0v3Z"/></g><text x="1105" y="293" text-anchor="middle" font-size="16" fill="#192a3b">People</text>
<circle cx="1105" cy="400" r="31" fill="#d7e9ec"/><g fill="none" stroke="#192a3b" stroke-width="2"><rect x="1087" y="389" width="36" height="26" rx="7"/><path d="M1105 381v8M1099 408h12"/><circle cx="1097" cy="399" r="2"/><circle cx="1113" cy="399" r="2"/></g><text x="1105" y="453" text-anchor="middle" font-size="16" fill="#192a3b">AI agents</text>
</g></svg>`;
const buffer = await sharp(Buffer.from(svg)).png().toBuffer();
const outPath = join(publicDir, "og-market-connections-v4.png");
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
for (const [index, [size, png]] of [
  [16, icon16],
  [32, icon32],
].entries()) {
  const base = index * 16;
  entries.writeUInt8(size, base);
  entries.writeUInt8(size, base + 1);
  entries.writeUInt16LE(1, base + 4);
  entries.writeUInt16LE(32, base + 6);
  entries.writeUInt32LE(png.length, base + 8);
  entries.writeUInt32LE(offset, base + 12);
  offset += png.length;
}
writeFileSync(
  join(publicDir, "favicon.ico"),
  Buffer.concat([icoHeader, entries, icon16, icon32]),
);
console.log("Wrote favicon.ico, icon.png, and apple-touch-icon.png");
