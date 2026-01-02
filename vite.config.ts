import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    // 🔹 اسم الريبو على GitHub بالضبط
    base: '/Phon/',
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // يشير لمجلد src
      }
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets', // كل الملفات داخل dist/assets
    }
  };
});
