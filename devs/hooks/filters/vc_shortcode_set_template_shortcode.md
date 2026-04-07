---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_shortcode_set_template_\{shortcode\}

Filters the template file path for a specific shortcode. The dynamic portion of the hook name, `{shortcode}`, refers to the shortcode base tag (e.g., `vc_column_text`, `vc_row`). This allows overriding the template used to render a specific element.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$template` | string | The absolute path to the template file, or an empty string if no template was found. |

## Usage

```php
<?php
add_filter( 'vc_shortcode_set_template_vc_column_text', 'my_custom_column_text_template' );

function my_custom_column_text_template( $template ) {
    // Use a custom template from the theme
    return get_stylesheet_directory() . '/wpbakery/vc_column_text.php';
}
```

## Source

File: `include/classes/shortcodes/core/class-wpbakeryshortcode.php`
