import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import iteriaLowcode from '@iteria-app/vite-plugin-lowcode'
import * as path from 'path'

export default ({ command, mode }) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd()),
    VITE_CWD: process.cwd(),
    VITE_MODE: mode,
    VITE_BRANCH: process.env.BRANCH,
    VITE_REPOSITORY_URL: process.env.REPOSITORY_URL,
    VITE_SITE_ID: process.env.SITE_ID,
    NODE_ENV: "development" //for monorepo netlify preview pull req purposes only
  }

  return defineConfig({
    optimizeDeps: {
      exclude: ['@iteria-app/wysiwyg'], // [ '@iteria-app/component-templates',  '@iteria-app/ide-devserver', '@iteria-app/generator', '@iteria-app/graphql-lowcode']
    },
    resolve: {
      alias: {
        os: 'os-browserify',
        path: 'path-browserify',
        module: path.resolve(__dirname, './src/constants.ts'),
      },
      dedupe: ['react-router', 'react-router-dom', 'react', 'react-dom']
    },
    server: {
      port: 3000,
    },
    plugins: [
      htmlPlugin(process.env),
      react(),
      iteriaLowcode({
        command,
        mode,
        graphQLEndpoint: process.env.VITE_HASURA_GRAPHQL_ENDPOINT,
        cwd: process.cwd(),
        version: 'workspace:*',
        features: {
          tippy: true,
          generator: true,
          addFields: true,
          translations: true,
          themeEditor: true,
          graphQLEndpoint: true,
          floatingButton: true,
        },
      }),
    ],
    define: {
      'process.env.NODE_ENV': `"development"` //for monorepo netlify preview pull req purposes only
    }
  })
}

//Just for monorepo purposes, to replace env in index.html TODO move me
function htmlPlugin(env: ReturnType<typeof loadEnv>) {
  return {
    name: 'html-transform',
    transformIndexHtml: {
      enforce: 'pre' as const,
      transform: (html: string): string =>
        html.replace(
          /%(.*?)%/g,
          (match, p1) => env[p1].replace(/\\/g, '/') ?? match
        ),
    },
    transform(src, id): string {
      //We can run through all files like this and replace every env literal
      if (/App.tsx/g.test(id))
        return src.replace(/%(.*?)%/g, (match, p1) => env[p1] ?? match)
    },
  }
}
