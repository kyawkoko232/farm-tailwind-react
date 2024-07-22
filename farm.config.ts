import { defineConfig } from '@farmfe/core';
import farmPluginPostcss from "@farmfe/js-plugin-postcss";

export default defineConfig({
  plugins: ["@farmfe/plugin-react", farmPluginPostcss()],
});
