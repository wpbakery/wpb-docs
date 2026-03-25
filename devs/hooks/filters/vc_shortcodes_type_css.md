---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_shortcodes\_\{type\}\_css

Filters stored shortcodes CSS for a given asset type. The dynamic portion of the hook name, `{type}`, refers to the CSS type (e.g., `custom`). This allows modifying the CSS string retrieved from post meta before it is output on the front end.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$shortcodes_css` | string | The shortcodes CSS retrieved from post meta. |
| `$id` | int | The post ID. |

## Usage

```php
<?php
add_filter( 'vc_shortcodes_custom_css', 'my_filter_shortcodes_css', 10, 2 );

function my_filter_shortcodes_css( $shortcodes_css, $id ) {
    // Append additional CSS for specific posts
    if ( 42 === $id ) {
        $shortcodes_css .= '.custom-element { margin-top: 20px; }';
    }
    return $shortcodes_css;
}
```

## Source

File: `include/classes/core/class-vc-base.php`

## Changelog

| Version | Description |
|---------|-------------|
| 7.6 | Introduced. |
