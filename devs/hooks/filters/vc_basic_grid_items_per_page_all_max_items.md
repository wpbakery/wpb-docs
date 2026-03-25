---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_basic_grid_items_per_page_all_max_items

Filters the maximum number of items per page when the grid pagination is set to display all items. The default value is `1000`. This filter is used as a fallback when the max items value is not greater than zero.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$default_max_items` | int | The default maximum number of items. Default `1000`. |

## Usage

```php
<?php
add_filter( 'vc_basic_grid_items_per_page_all_max_items', 'my_custom_grid_all_max' );

function my_custom_grid_all_max( $default_max_items ) {
    // Increase the maximum items when showing all grid items
    return 5000;
}
```

## Source

File: `include/classes/shortcodes/vc-basic-grid.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
