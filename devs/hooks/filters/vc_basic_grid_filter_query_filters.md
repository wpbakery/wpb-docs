---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_basic_grid_filter_query_filters

Filters the custom query string used in the Post Grid element when the post type is set to "custom". This allows modification of the custom WP_Query arguments before the grid queries posts.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$query` | string | The custom query string (decoded from the shortcode attribute). |
| `$atts` | array | The shortcode attributes for the grid element. |
| `$shortcode` | string | The shortcode tag name. |

## Usage

```php
<?php
add_filter( 'vc_basic_grid_filter_query_filters', 'my_custom_grid_query', 10, 3 );

function my_custom_grid_query( $query, $atts, $shortcode ) {
    // Add a custom meta query to the grid's custom query
    $query .= '&meta_key=featured&meta_value=yes';
    return $query;
}
```

## Source

File: `include/classes/shortcodes/vc-basic-grid.php`

## Changelog

| Version | Description |
|---------|-------------|
| 5.5 | Introduced. |
