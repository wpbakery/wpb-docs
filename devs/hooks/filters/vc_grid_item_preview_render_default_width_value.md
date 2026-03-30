---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_grid_item_preview_render_default_width_value

Filters the default width value used when rendering a grid item preview in the editor. The value represents the number of columns the grid item occupies in the preview.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$default_width_value` | int | The default column width for the grid item preview. Default is `4`. |

## Usage

```php
<?php
add_filter( 'vc_grid_item_preview_render_default_width_value', 'my_custom_preview_width', 10, 1 );

function my_custom_preview_width( $default_width_value ) {
    // Set the default preview width to 6 columns
    return 6;
}
```

## Source

File: `include/params/vc_grid_item/editor/class-vc-grid-item-preview.php`
