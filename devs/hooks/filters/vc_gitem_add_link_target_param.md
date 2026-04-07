---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_gitem_add_link_target_param

Filters the "Open link in a new tab" parameter definition array used by Grid Item shortcodes. This parameter provides a checkbox to control whether the grid item link opens in a new browser tab.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$param` | `array` | The parameter definition array with keys: `type` (`'checkbox'`), `heading`, `param_name` (`'link_target'`), `value`, `description`, and `dependency` (depends on the `link` parameter not being `'custom'` or `'none'`). |

## Usage

```php
add_filter( 'vc_gitem_add_link_target_param', 'wpb_modify_gitem_link_target' );

function wpb_modify_gitem_link_target( $param ) {
    // Change the default description
    $param['description'] = 'Check to open the link in a new window.';
    return $param;
}
```

## Source

File: `include/params/vc_grid_item/shortcodes.php`
