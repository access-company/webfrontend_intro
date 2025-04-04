import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const ROOT_PATH = resolve(__dirname, process.env.TARGET);
const PUBLIC_DIR_PATH = resolve(__dirname, 'public');
const OUTPUT_DIR_PATH = resolve(__dirname, 'dist');

export default defineConfig({
  root: ROOT_PATH,
  server: {
    host: 'localhost',
    port: 3000,
    open: true,
    watch: {
      usePolling: true,
    },
  },
  plugins: [react()],
  // 以下、本研修では使用しない build 設定
  // 静的アセットを配置するフォルダ
  publicDir: PUBLIC_DIR_PATH,
  // vite build 時に使用される設定
  build: {
    outDir: OUTPUT_DIR_PATH,
    emptyOutDir: true,
    minify: true,
    sourcemap: true,
  },
});
