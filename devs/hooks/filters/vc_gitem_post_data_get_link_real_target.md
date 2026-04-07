---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_gitem_post_data_get_link_real_target

Filters the `target` attribute string for a grid item link when rendering with real post data. This filter is applied by `vc_gitem_create_link_real()` and allows you to modify or override the link target behavior (e.g., `_blank`, `_self`) on resolved grid item links.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$target` | string | The `target` attribute string (e.g., ` target="_blank"`). Empty string if no target is set. |
| `$atts` | array | The shortcode attributes array for the grid item element. |
| `$post` | WP_Post | The post object associated with the grid item. |

## Usage

```php
<?php
add_filter( 'vc_gitem_post_data_get_link_real_target', 'my_custom_grid_real_target', 10, 3 );

function my_custom_grid_real_target( $target, $atts, $post ) {
    // Force all grid item links to open in a new tab
    return ' target="_blank"';
}
```

## Source

File: `include/autoload/params/vc-grid-item.php`
