---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_role_access_all_caps_role

Filters the WordPress role object before its capabilities are read by the WPBakery role access controller. Use this to modify or replace the role object to alter which capabilities are recognized for role-based access control.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$role` | WP_Role | The WordPress role object whose capabilities will be inspected. |

## Usage

```php
<?php
add_filter( 'vc_role_access_all_caps_role', 'my_modify_role_caps', 10, 1 );

function my_modify_role_caps( $role ) {
    // Add a custom capability to the role before WPBakery reads it
    if ( 'editor' === $role->name ) {
        $role->capabilities['vc_access_rules_post_types/page'] = true;
    }
    return $role;
}
```

## Source

File: `include/classes/core/access/class-vc-role-access-controller.php`

## Changelog

| Version | Description |
|---------|-------------|
| 5.4 | Introduced. |
