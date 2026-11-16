import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

// Copy index.html to 404.html and each SPA route so GitHub Pages serves HTTP 200 directly
const routes = ['privacy', 'terms', 'refund', 'delete-account', 'contact'];
fs.writeFileSync(path.join(distDir, '404.html'), indexHtml);

for (const route of routes) {
  const dir = path.join(distDir, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), indexHtml);
}

// Static HTML redirects for old policy URLs on GitHub Pages
const redirects = [
  ['privacy-policy', '/privacy'],
  ['privacypolicy', '/privacy'],
  ['terms-and-conditions', '/terms'],
  ['terms-of-service', '/terms'],
  ['refund-policy', '/refund'],
];

for (const [from, to] of redirects) {
  const dir = path.join(distDir, from);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.join(dir, 'index.html'),
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${to}"><link rel="canonical" href="https://propden.in${to}"><title>Redirecting...</title></head><body><script>location.replace("${to}")</script><p>Redirecting to <a href="${to}">${to}</a>...</p></body></html>`
  );
}

console.log('Postbuild: generated GitHub Pages route copies, 404.html, and policy redirects.');
