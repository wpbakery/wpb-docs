---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_basic_grid_find_post_shortcode

Filters the shortcode data found by ID in a specific post. This filter is applied after the grid element searches post meta for the matching shortcode configuration, allowing modification of the shortcode data before it is used to render the grid.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$shortcode` | array\|false | The shortcode data array if found, or `false` if not found. |
| `$page_id` | int | The post ID where the shortcode is located. |
| `$grid_id` | string | The unique grid identifier. |

## Usage

```php
<?php
add_filter( 'vc_basic_grid_find_post_shortcode', 'my_custom_grid_shortcode', 10, 3 );

function my_custom_grid_shortcode( $shortcode, $page_id, $grid_id ) {
    // Override shortcode data for a specific grid
    if ( $shortcode && isset( $shortcode['tag'] ) ) {
        $shortcode['atts']['items_per_page'] = '6';
    }
    return $shortcode;
}
```

## Source

File: `include/classes/shortcodes/vc-basic-grid.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
