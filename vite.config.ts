import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from "vite-plugin-dts";
import path from "path";
import tailwindcss from "tailwindcss";
import libCss from 'vite-plugin-libcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts(), libCss()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "index.ts"),
      name: "Feedback-se-vite",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          'react-dom': "ReactDom",
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  css: {
    postcss: {
        plugins: [tailwindcss]
    }
}
  
})
