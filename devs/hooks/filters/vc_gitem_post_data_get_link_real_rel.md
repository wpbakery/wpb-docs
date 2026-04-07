---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_gitem_post_data_get_link_real_rel

Filters the `rel` attribute string for a grid item link when rendering with real post data. This filter is applied by `vc_gitem_create_link_real()` and allows you to modify or add `rel` attribute values (e.g., `nofollow`, `noopener`) on resolved grid item links.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$rel` | string | The `rel` attribute string (e.g., ` rel="nofollow"`). Empty string if no rel attribute is set. |
| `$atts` | array | The shortcode attributes array for the grid item element. |
| `$post` | WP_Post | The post object associated with the grid item. |

## Usage

```php
<?php
add_filter( 'vc_gitem_post_data_get_link_real_rel', 'my_custom_grid_real_rel', 10, 3 );

function my_custom_grid_real_rel( $rel, $atts, $post ) {
    // Add nofollow to all grid item links for external post types
    if ( 'external_post' === $post->post_type ) {
        $rel = ' rel="nofollow noopener"';
    }
    return $rel;
}
```

## Source

File: `include/autoload/params/vc-grid-item.php`
