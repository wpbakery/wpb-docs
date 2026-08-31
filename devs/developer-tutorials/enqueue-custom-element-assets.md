---
id: enqueue-custom-element-assets
title: Enqueue custom element assets
sidebar_label: Enqueue custom element assets
sidebar_position: 31
hide_table_of_contents: true
slug: /developer-tutorials/enqueue-custom-element-assets
---

# Enqueue custom element assets

When you create a new custom element with WPBakery, you can provide specific param attributes to enqueue specific CSS or JS files. These will be enqueued only if the shortcode is present on a specific plugin area.

- `admin_enqueue_js` – JS loaded in the backend editor.
- `admin_enqueue_css` – CSS loaded in the backend editor.
- `front_enqueue_js` – JS loaded in the frontend editor.
- `front_enqueue_css` – CSS loaded in the frontend editor.
- `view_enqueue_js` – JS loaded on a view page.
- `view_enqueue_css` – CSS loaded on a view page.

Please note that each parameter attribute can be provided with 3 different data types.

| Data type | Description |
| --- | --- |
| `string` | Absolute URL to the file. |
| `string[]` | List of absolute URLs to files. |
| <code>array&lt;int, array&#123;<br/>&nbsp;&nbsp;&nbsp;&nbsp;url: string,<br/>&nbsp;&nbsp;&nbsp;&nbsp;handle: string,<br/>&nbsp;&nbsp;&nbsp;&nbsp;deps: string[],<br/>&nbsp;&nbsp;&nbsp;&nbsp;args: array,<br/>&nbsp;&nbsp;&nbsp;&nbsp;media: string<br/>&#125;&gt;</code> | List of data for each enqueued asset. It corresponds to the params of the [`wp_enqueue_style`](https://developer.wordpress.org/reference/functions/wp_enqueue_style/) and [`wp_enqueue_script`](https://developer.wordpress.org/reference/functions/wp_enqueue_script/) functions. |

:::note

`admin_enqueue_js`, `admin_enqueue_css`, `front_enqueue_js`, and `front_enqueue_css` are always loaded in their respective editors, regardless of whether the shortcode is present. Only `view_enqueue_js` and `view_enqueue_css` are loaded conditionally – on a view page they are enqueued only when the shortcode is present on that page.

:::

:::note

For `view_enqueue_js` and `view_enqueue_css` to work on view pages, you must specify the shortcode class together with your custom element, like in the example below.

:::

:::note

Because our frontend editor always renders the view page as well, you can also see `view_enqueue_js` and `view_enqueue_css` assets in the frontend editor. The difference is that they are always loaded inside the iframe, whereas `front_enqueue_css` and `front_enqueue_js` are loaded on a regular page load.

:::

:::note

By default, `front_enqueue_js` and `front_enqueue_css` are always loaded in the footer, and `front_enqueue_js` has the `vc-frontend-editor-min-js` dependency to make them work more properly. You can override this behaviour using the third (array) data type.

:::

:::note

By default, `admin_enqueue_js` and `admin_enqueue_css` are always loaded in the footer, and `admin_enqueue_js` has the `jquery-core` dependency to make them work more properly. You can override this behaviour using the third (array) data type.

:::

## Example

For an example of how to use these params with a custom element, see [`elements/html-template-base`](https://github.com/wpbakery/dev-example/tree/master/elements/html-template-base) in the plugin boilerplate.
