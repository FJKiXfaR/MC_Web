import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://minecraft-server.example.com',
  integrations: [],
  output: "hybrid",
  adapter: cloudflare()
});