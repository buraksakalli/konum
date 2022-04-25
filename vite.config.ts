import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/package/index.ts"),
      name: "Konum",
      fileName: (format) => `konum.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
  plugins: [react()],
});
