---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_gitem_post_data_get_link_title

Filters the `title` attribute string for a grid item link in the template-based link creation. Unlike the `vc_gitem_post_data_get_link_real_title` filter (which receives a `WP_Post` object), this filter is used with template placeholders.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$title_attr` | `string` | The HTML title attribute string (e.g., `' title="My Title"'`), or an empty string if no title is set. |
| `$atts` | `array` | The shortcode attributes array. |

## Usage

```php
add_filter( 'vc_gitem_post_data_get_link_title', 'wpb_modify_gitem_template_link_title', 10, 2 );

function wpb_modify_gitem_template_link_title( $title_attr, $atts ) {
    // Override title attribute for grid item links
    if ( empty( $title_attr ) ) {
        $title_attr = ' title="View details"';
    }
    return $title_attr;
}
```

## Source

File: `include/autoload/params/vc-grid-item.php`
