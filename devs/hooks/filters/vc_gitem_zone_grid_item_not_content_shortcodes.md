---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_gitem_zone_grid_item_not_content_shortcodes

Filters the list of shortcodes that are not allowed inside the content zone of a grid item. These shortcodes are structural grid item elements and are excluded from the available content shortcodes in the grid item editor.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$invalid_shortcodes` | array | Array of shortcode base names that should be excluded from the content zone. Default includes `vc_gitem`, `vc_gitem_animated_block`, `vc_gitem_zone`, `vc_gitem_zone_a`, `vc_gitem_zone_b`, and others. |

## Usage

```php
<?php
add_filter( 'vc_gitem_zone_grid_item_not_content_shortcodes', 'my_custom_invalid_shortcodes', 10, 1 );

function my_custom_invalid_shortcodes( $invalid_shortcodes ) {
    // Add a custom shortcode to the exclusion list
    $invalid_shortcodes[] = 'my_custom_shortcode';
    return $invalid_shortcodes;
}
```

## Source

File: `include/autoload/hooks/vc-grid-item-editor.php`
