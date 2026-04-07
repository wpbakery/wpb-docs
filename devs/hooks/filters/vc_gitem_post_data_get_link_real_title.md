---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_gitem_post_data_get_link_real_title

Filters the `title` attribute string for a grid item link when creating a "real" link (as opposed to a template placeholder link). This is used during the actual rendering of grid items with real post data.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$title_attr` | `string` | The HTML title attribute string (e.g., `' title="Post Title"'`), or an empty string if no title is set. |
| `$atts` | `array` | The shortcode attributes array. |
| `$post` | `WP_Post` | The current post object for the grid item. |

## Usage

```php
add_filter( 'vc_gitem_post_data_get_link_real_title', 'wpb_modify_gitem_link_title_attr', 10, 3 );

function wpb_modify_gitem_link_title_attr( $title_attr, $atts, $post ) {
    // Override the title attribute with custom text
    return ' title="' . esc_attr( 'Read more about: ' . $post->post_title ) . '"';
}
```

## Source

File: `include/autoload/params/vc-grid-item.php`
