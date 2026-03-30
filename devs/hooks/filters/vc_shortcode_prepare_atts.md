---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_shortcode_prepare_atts

Filters the prepared shortcode attributes after they have been processed and sanitized by WPBakery Page Builder.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$attributes` | array | The prepared and sanitized shortcode attributes. |
| `$shortcode` | string | The shortcode tag name. |
| `$settings` | array | The shortcode settings as registered via `vc_map()`. |

## Usage

```php
<?php
add_filter( 'vc_shortcode_prepare_atts', 'my_modify_shortcode_atts', 10, 3 );

function my_modify_shortcode_atts( $attributes, $shortcode, $settings ) {
    // Add a default value for a custom attribute on a specific element.
    if ( 'vc_column_text' === $shortcode && empty( $attributes['css_animation'] ) ) {
        $attributes['css_animation'] = 'fadeIn';
    }

    return $attributes;
}
```

## Source

File: `include/classes/shortcodes/core/class-wpbakeryshortcode.php`
