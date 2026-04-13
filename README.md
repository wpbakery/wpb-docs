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

After making changes to documentation:

```bash
yarn run index-algolia
```

Or build and index together:

```bash
yarn run build-and-index
```

**Security Note:** The Admin API key should only be stored in `.env.local` (gitignored) or as a CI/CD secret. Never commit it to the repository.

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
