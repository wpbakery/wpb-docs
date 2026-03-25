---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_custom_markup_render_filter

Filters the rendered output of the `custom_markup` parameter type in the shortcode edit form. This hook allows overriding the custom markup content displayed for a field in the editor.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$value` | mixed | The current value of the parameter field. |
| `$settings` | array | The parameter settings array from the shortcode mapping. |
| `$tag` | string | The shortcode tag name. |

## Usage

```php
<?php
add_filter( 'vc_custom_markup_render_filter', 'my_custom_markup_render', 10, 3 );

function my_custom_markup_render( $value, $settings, $tag ) {
    // Render custom HTML for a specific shortcode's custom_markup field
    if ( 'my_shortcode' === $tag ) {
        return '<div class="my-custom-markup">Custom editor interface</div>';
    }
    return $value;
}
```

## Source

File: `include/params/custom_markup/custom_markup.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
