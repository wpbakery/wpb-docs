---
sidebar_position: 2
---

# Make your elements work with WPBakery AI MCP

***Since WPBakery AI 1.0.0***

When a customer connects [WPBakery AI MCP](/devs/wpbakery-ai/overview) to their AI client, WPBakery AI MCP finds the elements of your theme or add-on by itself and uses them where they fit. Everything it knows about an element comes from your `vc_map()` call. This page explains what it reads, what makes an element usable, and how to improve the results.

## How WPBakery AI MCP uses your elements

1. **`list-elements`** lists the elements the current user may add: tag, name, category, description and whether it's a container.
2. **`get-element-schema`** returns the details of up to 10 elements: their params, nesting rules and your `ai_description` guidance.
3. It writes the page as a tree of elements with param values. WPBakery AI checks the tree against your map before saving: unknown elements, unknown params and placements your nesting rules don't allow are refused, and WPBakery AI MCP corrects them.
4. Your shortcode renders the page as usual.

## Compatibility checklist

### Map your elements on every request

WPBakery AI MCP works through REST requests, not wp-admin or the editor. Call `vc_map()` from `vc_before_init` (or use `vc_lean_map()`) unconditionally, as in [Registering elements](/devs/element-development/registering-elements). Elements mapped only inside `is_admin()`, only on editor screens or only for the frontend editor don't exist for WPBakery AI MCP.

```php
// Don't: not mapped during REST requests.
if ( is_admin() ) {
	add_action( 'vc_before_init', 'my_elements_map' );
}

// Do
add_action( 'vc_before_init', 'my_elements_map' );
```

### Declare every attribute in `params`

WPBakery AI MCP can only set params declared in your map, plus `el_class`, `el_id`, `css` and `css_animation`. An attribute your shortcode reads but the map doesn't declare (for example, one your own editor JavaScript adds) can't be set, and a value written for it is refused.

Params of type `hidden` and `vc_grid_id` are left out: WPBakery AI MCP doesn't see or set them.

### Use the standard param types

WPBakery AI MCP knows the value formats of WPBakery's param types and gets a format hint for the ones that need it:

| Type | Value it writes |
|---|---|
| `vc_link` | `{"url":"","title":"","target":"_blank","rel":"nofollow"}` |
| `attach_image`, `attach_images` | Attachment ID, comma-separated IDs |
| `css_editor` | `{"margin_top":"20px","padding_left":"10px","background_color":"#ffffff","border_radius":"4px"}` |
| `font_container`, `google_fonts` | Font settings as JSON |
| `param_group` | A list of objects with the inner params |
| `checkbox` | Comma-separated values |
| `colorpicker` | A CSS color, e.g. `#1e73be` |
| `dropdown` | One of the values in `value` |

Prefer these over custom param types: links, images, colors and spacing then work without extra guidance. Use a `css_editor` param named `css` for Design Options instead of separate margin, padding and background params, so your element styles like the built-in ones.

Custom param types registered with `vc_add_shortcode_param()` reach WPBakery AI MCP as plain strings. Describe the expected format in the param's `ai_description`, with an example.

`textarea_raw_html` and `textarea_ace` params can only be set by users with the `unfiltered_html` capability, as in the editor. Don't use them for content that a normal text field can hold.

### Set the nesting rules

WPBakery AI MCP follows `as_parent` and `as_child` and returns them as `children` and `parents`. Set them as described in [Nested content elements](/devs/element-development/nested-content-elements):

- A child element that only works inside your container needs `'as_child' => [ 'only' => 'my_container' ]`. Without it, WPBakery AI MCP may place it anywhere.
- A container that accepts only certain children needs `'as_parent' => [ 'only' => 'my_item' ]`.
- Elements that aren't containers go inside a row and column; only containers can be at the page root.

### Render from the attributes alone

WPBakery AI MCP can check its work with a rendered preview of the page. Your shortcode must render correctly from its attributes and content on the frontend, without data that only the editor adds. Escape every value you print, as for any user input: `esc_attr()` inside HTML attributes, `esc_url()` for URLs, `esc_html()` for plain text, and `wp_kses_post()` only for HTML you print as element content (never inside an attribute).

## Improve the results

### Clear names, headings and descriptions

These are the first thing WPBakery AI MCP reads, in `list-elements` and `get-element-schema`:

- **Element `name` and `description`:** say what the element is for, not how it looks. "Pricing table: plan name, price and features" beats "Box style 3".
- **Param `heading`:** the meaning of the value, e.g. "Price" rather than "Text 2".
- **Param `description`:** units, ranges and what the value changes. HTML is removed.
- **Dropdown `value` labels:** readable labels, not internal codes.
- **`settings` => `default`:** sensible defaults, so an element looks right with only the important params set (`std` is deprecated).
- **`group`:** groups like "Design" or "Advanced" show which params are optional styling.

### The `ai_description` key

`ai_description` is an optional key on the element and on each param, for guidance meant only for WPBakery AI MCP: where the element belongs, which params matter, and how values look. It isn't shown in the editor, and WPBakery AI MCP is told to follow it.

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
				'heading'        => __( 'Plan name', 'my-textdomain' ),
				'param_name'     => 'plan_name',
				'admin_label'    => true,
				'ai_description' => 'Short tier name, e.g. Basic, Pro or Business.',
			],
			[
				'type'           => 'textfield',
				'heading'        => __( 'Price', 'my-textdomain' ),
				'param_name'     => 'price',
				'ai_description' => 'Number only, without the currency sign, e.g. 49 or 49.90. The currency is the "currency" param.',
			],
			[
				'type'           => 'textfield',
				'heading'        => __( 'Currency', 'my-textdomain' ),
				'param_name'     => 'currency',
				'settings'       => [ 'default' => '$' ],
				'ai_description' => 'Currency sign or code shown before the price, e.g. $, € or EUR.',
			],
			[
				'type'           => 'exploded_textarea',
				'heading'        => __( 'Features', 'my-textdomain' ),
				'param_name'     => 'features',
				'ai_description' => 'One feature per line, at most 8. Short phrases, no full sentences.',
			],
			[
				'type'       => 'checkbox',
				'heading'    => __( 'Featured', 'my-textdomain' ),
				'param_name' => 'featured',
				'value'      => [ __( 'Yes', 'my-textdomain' ) => 'yes' ],
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
- Write it in English. WPBakery AI MCP follows it in any language, and it isn't shown to users, so it doesn't need translating.

Good guidance is short and concrete:

- **Where the element belongs:** "Use in a full-width row as the page header", "Only inside My Tabs".
- **Which params matter:** "Set at least title and link; the other params are styling."
- **Value formats:** units, separators, allowed ranges, an example value.
- **When not to use it:** "Don't use for a single image; use the Single Image element."

### Themes: guidance for elements you change

Params a theme adds to built-in elements with `vc_add_param()` take `ai_description` too. To guide WPBakery AI MCP on a built-in element your theme restyles, add the key with `vc_map_update()`:

```php
add_action( 'vc_after_init', 'my_theme_ai_guidance' );

function my_theme_ai_guidance() {
	vc_map_update( 'vc_btn', [
		'ai_description' => 'Use the "theme-primary" style for the main call to action of a section and "theme-ghost" for secondary links.',
	] );
}
```

Elements removed with `vc_remove_element()` aren't offered to WPBakery AI MCP.

## How to test

1. Install WPBakery AI on a local site whose license has an active Support Plus plan, and open WPBakery > WPBakery AI > MCP. On a local address, the steps there connect your MCP client directly with an application password and the site's endpoint.
2. Ask WPBakery AI MCP to call `list-elements` and `get-element-schema` for your elements, and check names, params, defaults and `ai_description`.
3. Ask it to build a section that needs your elements without naming them, e.g. "Add a pricing section with three plans". Check that it picks your element, fills the important params and nests it correctly.
4. Open the page in the backend and frontend editor and check that every value shows and can be edited.
