---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_gitem_add_link_param

Filters the "Add link" parameter definition array used by Grid Item shortcodes. This parameter provides a dropdown allowing users to select the link behavior for grid items (None, Post link, Post author, Large image, Full image, Custom, etc.).

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$param` | `array` | The parameter definition array with keys: `type` (`'dropdown'`), `heading`, `param_name` (`'link'`), `value` (associative array of label-value pairs for link options), and `description`. |

## Usage

```php
add_filter( 'vc_gitem_add_link_param', 'wpb_modify_gitem_link_param' );

function wpb_modify_gitem_link_param( $param ) {
    // Add a custom link option
    $param['value'][ esc_html__( 'Custom Archive', 'my-plugin' ) ] = 'custom_archive';
    return $param;
}
```

## Source

File: `include/params/vc_grid_item/shortcodes.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
