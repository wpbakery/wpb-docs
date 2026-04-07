---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_gitem_post_data_get_link_link

Filters the link HTML fragment (the opening `<a>` tag markup) for a grid item element before it is rendered. This filter applies to template-based (non-real) links built by `vc_gitem_create_link()`, where URLs may contain placeholder tokens such as `{{ post_link_url }}`. Use this to modify the link markup, add custom attributes, or change the destination URL for grid item links.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$link` | string | The opening anchor tag markup string (e.g., `a href="..." class="..."`). Empty string if no link is configured. |
| `$atts` | array | The shortcode attributes array for the grid item element. |
| `$css_class` | string | The CSS class string applied to the link. |

## Usage

```php
<?php
add_filter( 'vc_gitem_post_data_get_link_link', 'my_custom_grid_item_link', 10, 3 );

function my_custom_grid_item_link( $link, $atts, $css_class ) {
    // Add a custom data attribute to all grid item links
    if ( ! empty( $link ) ) {
        $link .= ' data-custom="grid-item"';
    }
    return $link;
}
```

## Source

File: `include/autoload/params/vc-grid-item.php`
