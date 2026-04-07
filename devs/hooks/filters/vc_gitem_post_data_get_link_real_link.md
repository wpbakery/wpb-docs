---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_gitem_post_data_get_link_real_link

Filters the link HTML fragment (the opening `<a>` tag markup) for a grid item element when rendering with real post data. Unlike the template-based `vc_gitem_post_data_get_link_link` filter, this filter is applied by `vc_gitem_create_link_real()` where URLs are resolved to actual post permalinks and image URLs rather than placeholder tokens. Use this to modify, replace, or extend the anchor tag markup for grid items during real rendering.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$link` | string | The opening anchor tag markup string with resolved URLs (e.g., `a href="https://..." class="..."`). Empty string if no link is configured. |
| `$atts` | array | The shortcode attributes array for the grid item element. |
| `$post` | WP_Post | The post object associated with the grid item. |
| `$link_css_class` | string | The CSS class string applied to the link. |

## Usage

```php
<?php
add_filter( 'vc_gitem_post_data_get_link_real_link', 'my_custom_real_grid_link', 10, 4 );

function my_custom_real_grid_link( $link, $atts, $post, $link_css_class ) {
    // Append a query parameter to post links
    if ( ! empty( $link ) && isset( $atts['link'] ) && 'post_link' === $atts['link'] ) {
        $link = str_replace( '"' . esc_url( get_permalink( $post->ID ) ) . '"', '"' . esc_url( add_query_arg( 'ref', 'grid', get_permalink( $post->ID ) ) ) . '"', $link );
    }
    return $link;
}
```

## Source

File: `include/autoload/params/vc-grid-item.php`
