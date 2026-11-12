---
sidebar_position: 4
---

# Abilities over REST

***Since WPBakery AI 1.0.0***

The tools of [WPBakery AI](/devs/wpbakery-ai/overview) are registered with the WordPress Abilities API (WordPress 6.9+) under the `wpbakery/` namespace, for example `wpbakery/list-pages` and `wpbakery/update-page`. Besides MCP, WordPress's own `wp-abilities/v1` REST routes run them, so scripts and integrations that don't speak MCP can use them too.

## Where it works

The REST routes work only for **direct connections**, which WPBakery AI allows on:

- sites with the WordPress environment type `local`, `development` or `staging`;
- sites on a local address: `localhost`, a single-label host name, `.local`, `.test`, `.localhost`, `.internal` and similar, or a private or loopback IP.

Public sites connect only through WPBakery Cloud, and there the REST routes refuse the WPBakery tools. There's no setting or filter to change this.

The site also needs an active WPBakery AI subscription, as for every other connection.

## Authentication and permissions

Use an application password created by hand in Users > Profile > Application Passwords. Passwords created with the button on the WPBakery AI MCP screen only work for the MCP endpoint and are refused here.

Every call is checked in this order:

1. An active subscription.
2. A direct connection is allowed on this site (see above).
3. The user's WPBakery AI level from the WPBakery Role Manager (Disabled by default for every role; see [`wpbai_user_level`](/devs/wpbakery-ai/hooks#wpbai_user_level)).
4. The tool's own checks: WordPress capabilities, the WPBakery Role Manager and edit rights on the post.

Calls are logged in WPBakery AI's activity log with the source `rest`.

## Calling a tool

List the abilities and their input schemas:

```bash
curl -u 'admin:xxxx xxxx xxxx xxxx xxxx xxxx' \
  https://example.test/wp-json/wp-abilities/v1/abilities
```

Run one at `/wp-json/wp-abilities/v1/abilities/<name>/run`. The HTTP method depends on the ability's annotations (`meta.annotations` in the list):

- read-only abilities: `GET`, with the input as `input[key]=value` query parameters;
- abilities marked destructive and idempotent (for example `wpbakery/delete-template`): `DELETE`, with the input as query parameters, like `GET`;
- all others: `POST`, with a JSON body `{ "input": { … } }`.

The input must be an object, so pass at least one key, even for a tool without required input (an empty value works, for example `input[search]=`).

```bash
# Read: list draft pages (input as query parameters)
curl -u 'admin:xxxx xxxx xxxx xxxx xxxx xxxx' -G \
  --data-urlencode 'input[status]=draft' \
  https://example.test/wp-json/wp-abilities/v1/abilities/wpbakery/list-pages/run

# Write: check creating a page without saving it (input in the JSON body)
curl -u 'admin:xxxx xxxx xxxx xxxx xxxx xxxx' \
  -H 'Content-Type: application/json' \
  -d '{"input":{"title":"Spring offer","dry_run":true}}' \
  https://example.test/wp-json/wp-abilities/v1/abilities/wpbakery/create-page/run
```

Each ability's input and output schema and description are in the list response; they're the same as the MCP tools (`wpbakery/update-page` is the MCP tool `wpbakery-update-page`). Write tools accept `dry_run` to check a change without saving it, and page updates take the `content_hash` from `get-page` so a change made by someone else in between isn't overwritten.
