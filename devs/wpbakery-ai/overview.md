---
sidebar_position: 1
sidebar_label: Overview
---

# WPBakery AI for developers

***Since WPBakery AI 1.0.0***

WPBakery AI is a separate plugin (slug `wpbakery-ai`) that adds an MCP server to WPBakery Page Builder. Customers with an active Support Plus subscription connect an AI assistant (Claude, ChatGPT, Cursor or any other MCP client) through WPBakery Cloud, and the assistant builds and edits WPBakery pages, templates, grid items and presets with the elements available on the site.

Requirements: WPBakery Page Builder 9.0+, WordPress 6.9+, PHP 8.2+.

## What this means for your add-on or theme

The assistant uses every element registered with `vc_map()`, including the elements of your theme or add-on. You don't need to integrate anything for that. A few things help it use your elements well:

- **Describe your elements for AI assistants** with the `ai_description` key in `vc_map()`. See [Make your elements work with AI assistants](/devs/wpbakery-ai/elements-and-ai).
- **Keep using the standard param types** where you can. The assistant knows their value formats. For custom param types, explain the value format in `ai_description`.
- **Keep the WPBakery Role Manager in mind.** The assistant only sees and uses the elements the connected user may use.

## Customizing WPBakery AI

- [Hooks](/devs/wpbakery-ai/hooks): turn off JavaScript in custom elements, adjust a user's WPBakery AI level, run code after WPBakery AI has loaded.
- [Abilities over REST](/devs/wpbakery-ai/abilities-rest): call the same tools without an MCP client, on local and staging sites.

## Custom elements created by the assistant

The assistant can create custom elements. Their shortcode tags start with `wpbc_`, so don't register shortcodes with that prefix in your own code. WPBakery AI owns these elements: they keep working while the plugin is active (also after the subscription ends) and stop rendering when the plugin is removed.

## What the assistant can't do

It can't manage plugins, themes or users and can't run PHP. Raw HTML, Raw JS, code fields and custom JavaScript need a user with the `unfiltered_html` capability, the same as in the editor.
