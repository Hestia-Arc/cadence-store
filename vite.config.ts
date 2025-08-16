import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment:'jsdom',
    global: true,
    setupFiles: './src/testing/setup.ts',
  }
 } as UserConfig);
