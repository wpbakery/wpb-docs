---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_check_post_type_validation

Filters the post type validation result when checking if WPBakery Page Builder should be enabled for a specific post type. Return a non-null value to override the default validation logic. Returning `true` enables the editor, `false` disables it, and `null` falls through to the default behavior.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$valid` | bool\|null | The validation result. Default `null` (use default logic). |
| `$type` | string | The post type being validated. |

## Usage

```php
<?php
add_filter( 'vc_check_post_type_validation', 'my_post_type_validation', 10, 2 );

function my_post_type_validation( $valid, $type ) {
    // Disable WPBakery for the 'product' post type
    if ( 'product' === $type ) {
        return false;
    }
    return $valid;
}
```

## Source

File: `include/helpers/helpers.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.8 | Introduced. |
