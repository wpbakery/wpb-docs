# WPBakery Page Builder API Documentation

## What is it?
This is the official API documentation for [WPBakery Page Builder](https://wpbakery.com), providing comprehensive guides and references for developers working with the plugin. The documentation covers custom element development, parameter settings, hooks, filters, and advanced customization techniques.

## Who is it for?
This documentation is designed for developers who want to:
- Create custom elements and add-ons for WPBakery Page Builder
- Extend and customize the page builder functionality
- Integrate WPBakery with themes and other plugins
- Understand the core API and architecture

## How to contribute?
WPBakery API documentation is built with [Docusaurus](https://docusaurus.io/), a modern static website generator. Documentation is written in Markdown, making it easy to contribute.

1. Fork this repository on GitHub
2. Clone your forked repository to your local machine:
   ```bash
   git clone https://github.com/YOURUSERNAME/wpb-docs-new.git
   ```
3. Navigate to the project directory:
   ```bash
   cd wpb-docs
   ```
4. Initialize and start development

### Installation

```bash
yarn install
```

### Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Search (Algolia)

This documentation uses Algolia DocSearch for search functionality.

### Setup

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Add your Algolia Admin API key to `.env.local` (never commit this file!)

### Indexing Documentation

Indexing runs automatically after every deploy to `main` (see `.github/workflows/deploy.yml`), so you don't need to index manually after merging changes.

To index manually (e.g. while testing locally):

```bash
yarn run index-algolia
```

Or build and index together:

```bash
yarn run build-and-index
```

**Security Note:** The Admin API key should only be stored in `.env.local` (gitignored) or as a CI/CD secret. Never commit it to the repository.

**CI setup:** For the automatic indexing step to run, configure these in the repository's Settings → Secrets and variables → Actions:
- `ALGOLIA_ADMIN_KEY` (secret, required) — the Algolia Admin API key
- `ALGOLIA_APP_ID` (variable, required) — the Algolia Application ID
- `ALGOLIA_INDEX_NAME` (variable, optional) — defaults to `wp_kb`
- `SITE_URL` (variable, optional) — the canonical site URL. Drives the Docusaurus `url` (sitemap/canonical links), the generated `CNAME` custom domain file, and the URLs of indexed Algolia records. Currently `https://kb-new.wpbakery.com`; on domain switch day update this variable to `https://kb.wpbakery.com` and re-run the deploy workflow. When unset, builds fall back to `https://kb.wpbakery.com` (Algolia indexing script falls back to `http://localhost:3000`)

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Resources

- [WPBakery Page Builder](https://wpbakery.com) - Official website
- [Customer Center](https://support.wpbakery.com) - Support and resources
- [Docusaurus Documentation](https://docusaurus.io/) - Learn more about Docusaurus

## License

Documentation content is maintained by the WPBakery team.
