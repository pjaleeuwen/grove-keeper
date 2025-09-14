import { copyFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

// Ensure dist directory exists
const distDir = join(projectRoot, 'dist');
try {
  mkdirSync(distDir, { recursive: true });
} catch (err) {
  // Directory might already exist
}

// Copy CSS file to dist
const sourceCss = join(projectRoot, 'lib', 'styles', 'colors.css');
const destCss = join(distDir, 'gk-ds.css');

try {
  copyFileSync(sourceCss, destCss);
  console.log('✅ CSS file copied to dist/gk-ds.css');
} catch (err) {
  console.error('❌ Error copying CSS file:', err.message);
  process.exit(1);
}
