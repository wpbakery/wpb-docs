---
sidebar_position: 1
---

# Registering elements

In WPBakery, elements (also called shortcodes or content blocks) are registered using the `vc_map()` function. This function defines the UI controls, icon, category, and shortcode behavior of your custom element.

## test

## Hook into `vc_before_init`

Always call `vc_map()` inside a function hooked to `vc_before_init`. This ensures WPBakery is fully loaded before you register elements:

```php
add_action('vc_before_init', 'register_my_custom_element');

function register_my_custom_element() {
    vc_map([
        'name' => __('My Custom Button', 'my-textdomain'),
        'base' => 'my_custom_button',
        'category' => __('Custom Elements', 'my-textdomain'),
        'icon' => 'icon-wpb-ui-button',
        'description' => __('A styled button with custom link.', 'my-textdomain'),
        'params' => [
            // Defined in next section
        ]
    ]);
}
```

* `name`: The element's display name in the editor.
* `base`: The shortcode name (used as [my_custom_button]).
* `category`: Grouping under WPBakery's sidebar (create your own).
* `icon`: Dashicon or custom icon class (optional).
* `description`: Tooltip shown when hovering over the element.
* `params`: List of configurable fields (see below).

## Link a Shortcode Handler

Once you've mapped an element, register the shortcode:

```php
add_shortcode('my_custom_button', 'render_my_custom_button');

function render_my_custom_button($atts) {
    $atts = shortcode_atts([
    'text' => 'Click me',
    'link' => '#'
    ], $atts, 'my_custom_button');

    return '<a href="' . esc_url($atts['link']) . '" class="my-button">' . esc_html($atts['text']) . '</a>';
}
```
This function handles the actual rendering of the shortcode's output on the frontend.
