---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_grid_get_grid_data_access

Filters whether the current AJAX request is allowed to retrieve grid data. By default, access is granted when a valid public nonce is verified and a valid shortcode tag is provided.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$allowed` | bool | Whether the grid data request is allowed. Default is the result of `vc_verify_public_nonce() && $tag`. |
| `$tag` | string | The shortcode tag being requested (with dots stripped). |

## Usage

```php
<?php
add_filter( 'vc_grid_get_grid_data_access', 'my_custom_grid_access', 10, 2 );

function my_custom_grid_access( $allowed, $tag ) {
    // Add additional access control for grid data requests
    if ( ! is_user_logged_in() && 'vc_media_grid' === $tag ) {
        return false;
    }
    return $allowed;
}
```

## Source

File: `include/autoload/hooks/hook-vc-grid.php`
