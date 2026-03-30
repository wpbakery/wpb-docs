---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_role_access_with_\{part\}_can

Filters whether a role can perform an action for a specific access part. The dynamic portion of the hook name, `{part}`, refers to the access part being checked (e.g., `backend_editor`, `frontend_editor`, `shortcodes`).

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$result` | bool | The result of the capability check. |
| `$role` | WP_Role\|null | The WordPress role object being checked. |
| `$rule` | string | The specific rule being checked within the access part. |

## Usage

```php
<?php
add_filter( 'vc_role_access_with_backend_editor_can', 'my_custom_role_access', 10, 3 );

function my_custom_role_access( $result, $role, $rule ) {
    // Allow editors to access the backend editor
    if ( $role && 'editor' === $role->name ) {
        return true;
    }
    return $result;
}
```

## Source

File: `include/classes/core/access/class-vc-role-access-controller.php`
