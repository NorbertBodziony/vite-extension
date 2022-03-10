// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { chromeExtension } from 'rollup-plugin-chrome-extension'
import manifest from './manifest.json'
import { resolve } from 'path'
import NodeGlobalsPolyfillPlugin from '@esbuild-plugins/node-globals-polyfill'
import NodeModulesPolyfills from '@esbuild-plugins/node-modules-polyfill'
import inject from '@rollup/plugin-inject'
import commonjsExternals from 'vite-plugin-commonjs-externals'
import { builtinModules } from 'module'
export const r = (...args: string[]) => resolve(__dirname, '.', ...args)
export default defineConfig({
  plugins: [
    // inject({ Buffer: ['buffer', 'Buffer'] }),
    // NodeModulesPolyfills(),
    // NodeGlobalsPolyfillPlugin({ buffer: true, define: { global: 'globalThis' } }),
    react(),
    // commonjsExternals({
    //   externals: builtinModules,
    // }),
    chromeExtension({ manifest }),
  ],
  // optimizeDeps: { include: ['@solana/web3.js', 'buffer'] },

  // resolve: { dedupe: ['@solana/web3.js', 'borsh'] },

  // define: { global: 'globalThis' },
})
