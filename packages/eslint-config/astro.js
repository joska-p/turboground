import eslintPluginAstro from "eslint-plugin-astro";
import { config as reactInternalConfig } from "./react-internal.js";

export const astroConfig = [
  ...reactInternalConfig,
  ...eslintPluginAstro.configs.recommended,
  { ignores: ["**/dist/**", ".astro"] },
];
