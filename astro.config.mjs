import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://anthonypreza.github.io',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
