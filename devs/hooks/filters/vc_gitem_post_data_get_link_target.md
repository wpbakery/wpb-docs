---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_gitem_post_data_get_link_target

Filters the `target` attribute string for a grid item link in template-based rendering. This filter is applied by `vc_gitem_create_link()` where links may contain placeholder tokens. Use this to modify or override the link target behavior for grid item elements.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$target` | string | The `target` attribute string (e.g., ` target="_blank"`). Empty string if no target is set. |
| `$atts` | array | The shortcode attributes array for the grid item element. |

## Usage

```php
<?php
add_filter( 'vc_gitem_post_data_get_link_target', 'my_custom_grid_link_target', 10, 2 );

function my_custom_grid_link_target( $target, $atts ) {
    // Force external custom links to open in a new tab
    if ( isset( $atts['link'] ) && 'custom' === $atts['link'] ) {
        return ' target="_blank"';
    }
    return $target;
}
```

## Source

File: `include/autoload/params/vc-grid-item.php`
