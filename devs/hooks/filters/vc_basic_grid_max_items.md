---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_basic_grid_max_items

Filters the maximum number of items that can be displayed in the Post Grid element. This filter is applied when the post type is set to "ids" or when the configured max items value is less than 1. The default value is `1000`.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$default_max_items` | int | The default maximum number of items. Default `1000`. |

## Usage

```php
<?php
add_filter( 'vc_basic_grid_max_items', 'my_custom_grid_max_items' );

function my_custom_grid_max_items( $default_max_items ) {
    // Limit grid to a maximum of 500 items
    return 500;
}
```

## Source

File: `include/classes/shortcodes/vc-basic-grid.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
