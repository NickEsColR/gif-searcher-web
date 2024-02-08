import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // new webpack.DefinePlugin({
    //   "process.env.GIPHY_KEY": process.env.GIPHY_KEY,
    // }),
  ],
});