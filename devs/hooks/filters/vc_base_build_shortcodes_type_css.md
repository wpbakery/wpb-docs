---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_base_build_shortcodes\_\{type\}\_css

Filters the parsed shortcode CSS for a specific type before it is saved as post meta. The dynamic portion of the hook name, `{type}`, refers to the CSS type (e.g., `custom`).

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$css` | string | The parsed shortcode CSS extracted from the post content. |
| `$id` | int | The post ID. |

## Usage

```php
<?php
add_filter( 'vc_base_build_shortcodes_custom_css', 'my_custom_shortcodes_css', 10, 2 );

function my_custom_shortcodes_css( $css, $id ) {
    // Append additional custom CSS for the post
    $css .= '.my-custom-class { color: red; }';
    return $css;
}
```

## Source

File: `include/classes/core/class-vc-base.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
