import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourceImages = resolve(root, 'assets', 'img');
const dist = resolve(root, 'dist');
const distAssets = resolve(dist, 'assets');
const distImages = resolve(distAssets, 'img');

if (!distImages.startsWith(dist)) {
  throw new Error('Refusing to write outside the dist folder.');
}

await mkdir(distAssets, { recursive: true });
await rm(distImages, { recursive: true, force: true });
await cp(sourceImages, distImages, { recursive: true });

await writeFile(
  resolve(dist, 'HOSTINGER_UPLOAD_INSTRUCTIONS.txt'),
  [
    'Upload the CONTENTS of this dist folder to Hostinger public_html.',
    '',
    'Do not upload src, node_modules, package.json, or the old HTML files.',
    'This folder already contains the React build and assets/img files needed by the site.',
    '',
    'Main entry: index.html',
  ].join('\n'),
);

console.log('Hostinger package ready: dist contains the React build and assets/img.');
