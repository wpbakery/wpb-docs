---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_font_container_get_allowed_tags

Filters the list of allowed HTML tags available in the font container parameter's tag selector. By default, the allowed tags are `h1` through `h6`, `p`, and `div`.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$allowed_tags` | `array` | An indexed array of allowed HTML tag names (e.g., `['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div']`). |

## Usage

```php
add_filter( 'vc_font_container_get_allowed_tags', 'wpb_add_allowed_font_container_tags' );

function wpb_add_allowed_font_container_tags( $allowed_tags ) {
    // Add span and blockquote to the list of allowed tags
    $allowed_tags[] = 'span';
    $allowed_tags[] = 'blockquote';
    return $allowed_tags;
}
```

## Source

File: `include/params/font_container/font_container.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.3 | Introduced. |
