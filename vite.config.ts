import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

// Figma Make writes imports like "next-themes@0.4.6" or
// "@radix-ui/react-tabs@1.1.3", pinning the version inside the import
// path itself. Plain Vite/Rollup doesn't understand that syntax, so this
// plugin strips the trailing "@x.y.z" and lets normal resolution continue.
function versionedImportResolver() {
  const versionSuffix = /^(@[^/]+\/[^@/]+|[^@/]+)@\d[\d.\w-]*(\/.*)?$/
  return {
    name: 'versioned-import-resolver',
    async resolveId(id, importer, options) {
      const match = id.match(versionSuffix)
      if (!match) return null
      const cleanId = match[1] + (match[2] || '')
      return this.resolve(cleanId, importer, { ...options, skipSelf: true })
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    versionedImportResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    // Comprime automáticamente las imágenes en cada build, sin tocar los
    // archivos originales en src/assets ni las rutas de import. Así, si
    // Figma Make vuelve a sincronizar imágenes pesadas sin comprimir, se
    // optimizan solas al publicar.
    ViteImageOptimizer({
      png: { quality: 80, compressionLevel: 9, palette: true },
      jpeg: { quality: 78 },
      jpg: { quality: 78 },
      webp: { quality: 80 },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
