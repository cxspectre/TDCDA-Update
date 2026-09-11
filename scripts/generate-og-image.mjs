/**
 * Regenerates public/og-image.png (1200x630) from the site's own hero.
 *
 *   node scripts/generate-og-image.mjs
 *
 * Needs `sharp`, which ships as a transitive dependency; resolved below so the
 * script works without adding a direct dependency.
 */
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const require = createRequire(import.meta.url);
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function loadSharp() {
  try {
    return require('sharp');
  } catch {
    const pnpm = path.join(ROOT, 'node_modules/.pnpm');
    const dir = fs
      .readdirSync(pnpm)
      .find((d) => d.startsWith('sharp@') && fs.existsSync(path.join(pnpm, d, 'node_modules/sharp')));
    if (!dir) throw new Error('sharp not found; run `pnpm install` first.');
    return require(path.join(pnpm, dir, 'node_modules/sharp'));
  }
}

const sharp = loadSharp();

const W = 1200;
const H = 630;
const PANEL = 720; // cream text column; the portrait fills the remainder
const CREAM = '#f9f7f2';
const INK = '#172c39';
const GOLD = '#8b7958';
const RULE = '#ded9cd';
const MUTED = '#667075';
// DM Sans is loaded from Google Fonts at runtime and is not installed locally,
// so this falls back to the same stack globals.css declares after it.
const FONT = 'Helvetica Neue, Helvetica, Arial, sans-serif';

const panelSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="${CREAM}"/>
  <g font-family="${FONT}">
    <text x="72" y="92" font-size="40" font-weight="500" fill="${INK}" letter-spacing="-2.4">TDC</text>
    <text x="152" y="92" font-size="14" fill="#7c8079" letter-spacing="3.4">DIGITAL ADVISORY</text>
    <rect x="72" y="120" width="${PANEL - 144}" height="1" fill="${RULE}"/>
    <text x="72" y="178" font-size="13" font-weight="500" fill="#686b65" letter-spacing="2.1">INDEPENDENT PERSPECTIVE · EXECUTIVE COMMITMENT</text>
    <text x="72" y="270" font-size="62" fill="${INK}" letter-spacing="-2.8">Transformation</text>
    <text x="72" y="340" font-size="62" fill="${INK}" letter-spacing="-2.8">needs <tspan fill="${GOLD}">clarity.</tspan></text>
    <text x="72" y="410" font-size="62" fill="${INK}" letter-spacing="-2.8">Delivery needs</text>
    <text x="72" y="480" font-size="62" fill="${GOLD}" letter-spacing="-2.8">leadership.</text>
    <rect x="72" y="524" width="${PANEL - 144}" height="1" fill="${RULE}"/>
    <text x="72" y="566" font-size="19" fill="${MUTED}">AI governance · Digital transformation · SAP S/4HANA</text>
  </g>
</svg>`;

const seamFade = `<svg xmlns="http://www.w3.org/2000/svg" width="${W - PANEL}" height="${H}">
  <defs><linearGradient id="g" x1="0" x2="1">
    <stop offset="0" stop-color="${CREAM}" stop-opacity="0.9"/>
    <stop offset="0.18" stop-color="${CREAM}" stop-opacity="0"/>
  </linearGradient></defs>
  <rect width="${W - PANEL}" height="${H}" fill="url(#g)"/>
</svg>`;

const source = path.join(ROOT, 'assets/tanja-drefke-source.png');
const output = path.join(ROOT, 'public/og-image.png');

const portrait = await sharp(source)
  .resize({ width: W - PANEL, height: H, fit: 'cover', position: 'top' })
  .modulate({ saturation: 0.73 })
  .toBuffer();

await sharp(Buffer.from(panelSvg))
  .composite([
    { input: portrait, left: PANEL, top: 0 },
    { input: Buffer.from(seamFade), left: PANEL, top: 0 },
  ])
  .png({ quality: 90, compressionLevel: 9 })
  .toFile(output);

const { width, height } = await sharp(output).metadata();
console.log(`Wrote public/og-image.png (${width}x${height})`);
