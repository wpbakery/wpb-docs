---
sidebar_position: 2
---

# Make your elements work with AI assistants

***Since WPBakery AI 1.0.0***

When a customer connects an AI assistant to their site with [WPBakery AI](/devs/wpbakery-ai/overview), the assistant finds the elements of your theme or add-on by itself and uses them where they fit. This page explains what the assistant reads from your `vc_map()` call and how to guide it.

## What the assistant sees

The assistant works with two tools:

- **`list-elements`** lists every element the current user may add: tag, name, category, description and whether it's a container. Elements with `'deprecated'` set are left out. The WPBakery Role Manager applies, so an element the user can't use isn't listed.
- **`get-element-schema`** returns the details of up to 10 elements: their params, nesting rules and your guidance.

For each element, `get-element-schema` returns:

| Field | From `vc_map()` |
|---|---|
| `tag`, `name`, `description` | `base`, `name`, `description` |
| `container` | Whether the element holds other elements (`is_container`, `as_parent`) |
| `parents`, `children` | `as_child`, `as_parent` |
| `params` | `params`, without `hidden` and `vc_grid_id` params |
| `ai_description` | `ai_description` (see below) |

For each param:

| Field | From the param |
|---|---|
| `name`, `type`, `heading`, `description` | `param_name`, `type`, `heading`, `description` (HTML removed) |
| `options` | The values of a `value` array (dropdowns, checkboxes) |
| `default` | `std`, or `settings.default` |
| `group`, `depends_on` | `group`, `dependency.element` |
| `format` | A hint about the value format, for the built-in param types |
| `items` | The inner params of a `param_group` |
| `ai_description` | `ai_description` (see below) |

Clear names, headings and descriptions already help. Params with a meaningful `heading` and a `description` that says what the value does are used correctly far more often.

## The `ai_description` key

`ai_description` is an optional key on the element and on each param. Use it for guidance meant for AI assistants: where the element belongs, which params matter, and how values look. The assistant is told to follow it.

```php
add_action( 'vc_before_init', 'my_pricing_table_map' );

function my_pricing_table_map() {
	vc_map( [
		'name'           => __( 'Pricing Table', 'my-textdomain' ),
		'base'           => 'my_pricing_table',
		'category'       => __( 'My Add-on', 'my-textdomain' ),
		'description'    => __( 'Plan name, price and features.', 'my-textdomain' ),
		'ai_description' => 'Use for one pricing plan. Put two to four of them in the columns of one row to compare plans. Set "featured" on the recommended plan only.',
		'params'         => [
			[
				'type'           => 'textfield',
				'heading'        => __( 'Price', 'my-textdomain' ),
				'param_name'     => 'price',
				'ai_description' => 'Number only, without the currency sign, e.g. 49 or 49.90. The currency is the "currency" param.',
			],
			[
				'type'           => 'exploded_textarea',
				'heading'        => __( 'Features', 'my-textdomain' ),
				'param_name'     => 'features',
				'ai_description' => 'One feature per line, at most 8. Short phrases, no full sentences.',
			],
			[
				'type'        => 'checkbox',
				'heading'     => __( 'Featured', 'my-textdomain' ),
				'param_name'  => 'featured',
				'value'       => [ __( 'Yes', 'my-textdomain' ) => 'yes' ],
			],
		],
	] );
}
```

Rules:

- Plain text only. HTML is removed and HTML entities are decoded.
- At most 1000 characters; longer text is cut.
- `get-element-schema` returns it; `list-elements` doesn't, so the element list stays small.
- It's guidance only. It never changes permissions, validation or what the element accepts.
- Write it in English: AI assistants follow it in any language, and it isn't shown to users, so it doesn't need translating.

Good guidance is short and concrete:

- **Where the element belongs:** "Use in a full-width row as the page header", "Only inside My Tabs".
- **Which params matter:** "Set at least title and link; the other params are styling."
- **Value formats:** units, separators, allowed ranges, an example value.
- **What to avoid:** "Don't use for a single image; use the Single Image element."

## Param types

The assistant reads and writes values as JSON and knows the formats of WPBakery's built-in param types: links (`vc_link`), images (`attach_image`, `attach_images`), font settings (`font_container`, `google_fonts`), `param_group` rows, colors and the others.

Custom param types registered with `vc_add_shortcode_param()` reach the assistant as plain strings. Describe the expected format in the param's `ai_description`, with an example:

```php
[
	'type'           => 'my_range_slider',
	'heading'        => __( 'Opacity', 'my-textdomain' ),
	'param_name'     => 'opacity',
	'ai_description' => 'Number from 0 to 100, without the % sign, e.g. 80.',
],
```

`textarea_raw_html` and `textarea_ace` params can only be set by users with the `unfiltered_html` capability, as in the editor.

## Nested elements

For container elements, `get-element-schema` returns `as_parent` and `as_child` as `children` and `parents`, and the assistant follows them. Set them as described in [Nested content elements](/devs/element-development/nested-content-elements), and add an `ai_description` when the structure needs explaining, e.g. "Add one My Tab element per tab".

## Testing

1. On a local site with WPBakery AI and a license with an active Support Plus plan, open WPBakery > WPBakery AI > MCP. On a local address, the steps there connect your MCP client directly with an application password and the site's endpoint.
2. Ask the assistant to call `get-element-schema` for your element and check the output.
3. Ask it to build a section with your element and check the result in the editor.
