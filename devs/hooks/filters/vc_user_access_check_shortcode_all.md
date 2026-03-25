---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_user_access_check-shortcode_all

Filters the access check result for shortcode operations. Returning a non-null value bypasses the default access logic and uses the returned value instead.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$result` | bool\|null | The access check result. Default `null` (use default access logic). Return `true` to grant access or `false` to deny. |
| `$shortcode` | string | The shortcode tag being checked. |

## Usage

```php
<?php
add_filter( 'vc_user_access_check-shortcode_all', 'my_shortcode_access_check', 10, 2 );

function my_shortcode_access_check( $result, $shortcode ) {
    // Restrict access to a specific element for non-admin users.
    if ( 'vc_raw_html' === $shortcode && ! current_user_can( 'manage_options' ) ) {
        return false;
    }

    return $result;
}
```

## Source

File: `include/helpers/helpers.php`

## Changelog

| Version | Description |
|---------|-------------|
| 5.4 | Introduced. |
