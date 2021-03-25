import { defineConfig } from 'vite'
import path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'
import replace from '@rollup/plugin-replace'
import favicon from 'rollup-plugin-favicons'
import html from 'vite-plugin-html'

const getFaviconLinks = () => {
  const favicons = [
    { rel: 'icon', name: 'favicon', sizes: [16, 32, 48], extension: 'png' },
    {
      rel: 'apple-touch-icon',
      name: 'apple-touch-icon',
      sizes: [57, 60, 72, 76, 114, 120, 144, 152, 167, 180, 1024],
      extension: 'png',
    },
    {
      rel: 'android-chrome',
      name: 'android-chrome',
      sizes: [36, 48, 72, 96, 144, 192, 256, 384, 512],
      extension: 'png',
    },
  ]

  let faviconLinks: {
    tag: string
    attrs: { rel: string; type: string; href: string; size?: string }
  }[] = [
    {
      tag: 'link',
      attrs: { rel: 'icon', type: 'image/svg+xml', href: '/assets/favicon.ico' },
    },
    {
      tag: 'link',
      attrs: { rel: 'apple-touch-icon', type: 'image/png', href: '/assets/apple-touch-icon.png' },
    },
    {
      tag: 'link',
      attrs: {
        rel: 'apple-touch-icon',
        type: 'image/png',
        href: '/assets/apple-touch-icon-precomposed.png',
      },
    },
  ]

  favicons.forEach((favicon) =>
    favicon.sizes.forEach((size) =>
      faviconLinks.push({
        tag: 'link',
        attrs: {
          rel: favicon.rel,
          type: `image/${favicon.extension}`,
          size: `${size}x${size}`,
          href: `/assets/${favicon.name}-${size}x${size}.${favicon.extension}`,
        },
      })
    )
  )

  return faviconLinks
}

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
    favicon({
      source: `src/services/${service}/assets/favicon.png`,
      configuration: {
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          windows: false,
          yandex: false,
        },
      },
    }),
    html({
      inject: {
        injectData: { title: 'Hello World' },
        tags: [...getFaviconLinks()],
      },
    }),
  ],
})
