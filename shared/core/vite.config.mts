import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      '/@': fileURLToPath(new URL('./src', import.meta.url)),
      '/#': fileURLToPath(new URL('./types', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: '@herodotus/core',
      fileName: (format) => (format === 'es' ? `index.${format}.mjs` : `index.${format}.js`),
    },
    minify: 'terser',
    terserOptions: {
      // 生产环境下移除console
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      keep_classnames: true,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        'qs',
        'lodash-es',
        'axios',
        'sweetalert2',
        'sm-crypto',
        'js-base64',
        'generate-avatar',
      ],
      output: {
        exports: 'named',
        assetFileNames: `assets/[ext]/[name][extname]`,
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          qs: 'qs',
          'lodash-es': 'lodashEs',
          axios: 'axios',
          sweetalert2: 'sweetalert2',
          'sm-crypto': 'smCrypto',
          'js-base64': 'jsBase64',
          'generate-avatar': 'generateAvatar',
        },
      },
    },
  },
});
