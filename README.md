# Anthony Preza

A single-page portfolio built with Astro.

## Local development

```sh
npm ci
npm run dev
```

Open http://localhost:4321. Build with `npm run build`.

## Edit

- `src/pages/index.astro`: introduction and page structure.
- `src/data/projects.json`: project names, descriptions, and links.
- `src/data/profile.json`: name and LinkedIn URL.
- `src/styles/global.css`: styling.

## Publish to GitHub Pages yourself

1. Create an empty public GitHub repository named `anthonypreza.github.io`.
2. From this directory, run the following commands yourself:

   ```sh
   git init
   git add .
   git commit -m "Add personal portfolio"
   git branch -M main
   git remote add origin git@github.com:anthonypreza/anthonypreza.github.io.git
   git push -u origin main
   ```

3. In the repository, open Settings > Pages and select GitHub Actions as the source.
4. Configure the suggested Astro workflow and commit it on GitHub. If it is not
   offered, use the workflow in the official guide below. That workflow builds
   the site and publishes it to Pages.
5. After the deployment succeeds, visit https://anthonypreza.github.io.

The Astro `site` setting already matches this user-site URL; no repository-name
base path is needed. No deployment workflow is included in this local project.

[Official Astro GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/)
