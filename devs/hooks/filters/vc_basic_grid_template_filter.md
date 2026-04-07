---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_basic_grid_template_filter

Filters the rendered HTML output of the grid filter (taxonomy filter) template before it is appended to the grid output. This allows customization of the filter buttons or links displayed above the grid.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$output` | string | The rendered HTML of the grid filter template. |
| `$attributes` | array | The template attributes array containing `filter_terms`, `atts`, and `grid_item` data. |

## Usage

```php
<?php
add_filter( 'vc_basic_grid_template_filter', 'my_custom_grid_filter', 10, 2 );

function my_custom_grid_filter( $output, $attributes ) {
    // Add a wrapper div around the grid filter
    return '<div class="my-custom-filter-wrapper">' . $output . '</div>';
}
```

## Source

File: `include/classes/shortcodes/vc-basic-grid.php`
