---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_post_meta_list

Filters the list of post meta keys managed by WPBakery Page Builder. Modules use this filter to register their meta keys so they are properly saved and managed during post operations.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$meta_list` | array | Array of post meta key definitions. Default is an empty array; modules add their entries via this filter. |

## Usage

```php
<?php
add_filter( 'vc_post_meta_list', 'my_register_custom_meta', 10, 1 );

function my_register_custom_meta( $meta_list ) {
    // Register a custom meta key to be managed by WPBakery
    $meta_list[] = [
        'key' => '_my_custom_meta',
        'default' => '',
    ];
    return $meta_list;
}
```

## Source

File: `include/classes/core/class-vc-post-admin.php`

## Changelog

| Version | Description |
|---------|-------------|
| 7.7 | Introduced. |
