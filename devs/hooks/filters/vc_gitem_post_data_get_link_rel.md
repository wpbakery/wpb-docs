---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_gitem_post_data_get_link_rel

Filters the `rel` attribute string for a grid item link. This filter is used in the template-based grid item link creation, allowing modification of the link relationship attribute.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$rel` | `string` | The HTML `rel` attribute string (e.g., `' rel="nofollow"'`), or an empty string if no rel attribute is set. |
| `$atts` | `array` | The shortcode attributes array. |

## Usage

```php
add_filter( 'vc_gitem_post_data_get_link_rel', 'wpb_modify_gitem_link_rel', 10, 2 );

function wpb_modify_gitem_link_rel( $rel, $atts ) {
    // Add noopener to external links
    if ( ! empty( $atts['link_target'] ) ) {
        $rel = ' rel="nofollow noopener"';
    }
    return $rel;
}
```

## Source

File: `include/autoload/params/vc-grid-item.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
