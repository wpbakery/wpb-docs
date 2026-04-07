---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_is_valid_post_type_be

Filters whether a given post type is valid for the backend editor. Use this to override the default post type validation and enable or disable the backend editor for specific post types.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$valid` | bool | Whether the post type is valid for the backend editor, as determined by `vc_check_post_type()`. |
| `$type` | string | The post type slug being checked. |

## Usage

```php
<?php
add_filter( 'vc_is_valid_post_type_be', 'my_allow_custom_post_type_be', 10, 2 );

function my_allow_custom_post_type_be( $valid, $type ) {
    // Enable backend editor for a custom post type
    if ( 'my_custom_post_type' === $type ) {
        return true;
    }
    return $valid;
}
```

## Source

File: `include/classes/editors/class-vc-backend-editor.php`
