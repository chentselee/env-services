import { defineConfig } from 'vite'
import path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'
import replace from '@rollup/plugin-replace'

const mode = process.env.NODE_ENV
const service = process.env.SERVICE

if (mode === 'production' && !service) throw new Error('No service')

// https://vitejs.dev/config/
export default defineConfig({
  build: { outDir: `dist/${service}`, minify: false },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    reactRefresh(),
    ...(mode === 'production'
      ? [
          replace({
            include: ['src/services/index.tsx'],
            preventAssignment: true,
            'src/services/development': `src/services/${service}`,
          }),
          replace({
            include: ['src/auth/index.tsx'],
            preventAssignment: true,
            'machine-development': 'machine',
          }),
        ]
      : []),
  ],
})
