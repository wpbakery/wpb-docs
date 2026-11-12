---
sidebar_position: 1
sidebar_label: Overview
---

# WPBakery AI for developers

***Since WPBakery AI 1.0.0***

WPBakery AI is a separate plugin (slug `wpbakery-ai`) that adds an MCP server to WPBakery Page Builder. Customers with an active Support Plus plan connect WPBakery AI MCP to their AI client (Claude, ChatGPT, Cursor or any other MCP client) through WPBakery Cloud, and WPBakery AI MCP builds and edits WPBakery pages, templates, grid items and presets with the elements available on the site.

Requirements: WPBakery Page Builder 9.0+, WordPress 6.9+, PHP 8.2+.

## What this means for your add-on or theme

WPBakery AI MCP uses every element registered with `vc_map()`, including the elements of your theme or add-on, and is told to prefer the most specific element over HTML in a text block. You don't need a separate integration. What decides whether it uses your elements, and how well:

- **Your elements are mapped on every request**, so WPBakery AI MCP can find them.
- **Every attribute your element reads is declared in `params`.** WPBakery AI MCP can't set anything else.
- **Names, headings and descriptions are clear**, and the `ai_description` key adds guidance where they aren't enough.

[Make your elements work with WPBakery AI MCP](/devs/wpbakery-ai/elements-and-ai) has the details, a checklist and how to test.

## Custom elements created by WPBakery AI MCP

When nothing on the site fits, WPBakery AI MCP can create a custom element. Their shortcode tags start with `wpbc_`, so don't register shortcodes with that prefix in your own code. WPBakery AI owns these elements: they keep working while the plugin is active (also after the Support Plus plan ends) and stop rendering when the plugin is removed. The better your elements fit, the less often this happens.

## What WPBakery AI MCP can't do

It can't manage plugins, themes or users and can't run PHP. Raw HTML, Raw JS, code fields and custom JavaScript need a user with the `unfiltered_html` capability, the same as in the editor.
