---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_shortcodes_is_admin

Filters the result of the admin check used by shortcode classes to determine whether the current request is an admin context.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$is_admin` | bool | The result of `is_admin()`. |

## Usage

```php
<?php
add_filter( 'vc_shortcodes_is_admin', 'my_override_admin_check' );

function my_override_admin_check( $is_admin ) {
    // Force non-admin context for AJAX requests to render frontend output.
    if ( wp_doing_ajax() ) {
        return false;
    }

    return $is_admin;
}
```

## Source

File: `include/classes/shortcodes/core/class-wpbakeryshortcode.php`
