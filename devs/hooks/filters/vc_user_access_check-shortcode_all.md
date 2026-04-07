---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_user_access_check-shortcode_all

Filters the access check result for a shortcode before the default role-based access logic runs. This filter is applied in both `vc_user_access_check_shortcode_edit()` and `vc_user_access_check_shortcode_all()`. If the filter returns a non-null value, that value is used as the access check result and the default role manager lookup is skipped. Use this to programmatically grant or deny access to specific shortcodes.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$do_check` | null\|bool | The access check result. Default `null` (use default role manager logic). Return `true` to grant access or `false` to deny. |
| `$shortcode` | string | The shortcode tag being checked (e.g., `vc_row`, `vc_column`). |

## Usage

```php
<?php
add_filter( 'vc_user_access_check-shortcode_all', 'my_custom_shortcode_access', 10, 2 );

function my_custom_shortcode_access( $do_check, $shortcode ) {
    // Restrict access to a custom shortcode for editors only
    if ( 'my_custom_shortcode' === $shortcode && ! current_user_can( 'edit_others_posts' ) ) {
        return false;
    }
    return $do_check;
}
```

## Source

File: `include/helpers/helpers.php`
