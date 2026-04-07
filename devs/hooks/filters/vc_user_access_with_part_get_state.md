---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_user_access_with_\{part\}_get_state

Filters the access state for a specific part for the current user. The dynamic portion of the hook name, `{part}`, refers to the access part being checked (e.g., `backend_editor`, `frontend_editor`, `shortcodes`). This allows overriding the access state for the currently logged-in user.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$state` | mixed | The current access state value, or `null` if not set. |
| `$part` | string | The access part name. |

## Usage

```php
<?php
add_filter( 'vc_user_access_with_backend_editor_get_state', 'my_custom_user_access_state', 10, 2 );

function my_custom_user_access_state( $state, $part ) {
    // Grant full access to the backend editor for the current user
    if ( current_user_can( 'manage_options' ) ) {
        return true;
    }
    return $state;
}
```

## Source

File: `include/classes/core/access/class-vc-current-user-access-controller.php`
