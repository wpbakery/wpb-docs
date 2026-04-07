---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_grid_request_url

Filters the AJAX request URL used by the grid element for loading data (pagination, filtering, and lazy loading). By default, this points to the WordPress `admin-ajax.php` endpoint.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$url` | string | The AJAX request URL. Default is `admin_url( 'admin-ajax.php' )`. |

## Usage

```php
<?php
add_filter( 'vc_grid_request_url', 'my_custom_grid_request_url', 10, 1 );

function my_custom_grid_request_url( $url ) {
    // Use a custom AJAX endpoint for grid requests
    return home_url( '/wp-json/my-plugin/v1/grid-data' );
}
```

## Source

File: `include/templates/shortcodes/vc_basic_grid.php`
