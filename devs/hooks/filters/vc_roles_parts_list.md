---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_roles_parts_list

Filters the list of role access parts (sections) available in the WPBakery Role Manager settings. Each part represents a permissions section that can be configured per user role.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$parts` | array | Array of part identifier strings. Default parts include `'post_types'`, `'post_settings'`, `'settings'`, `'templates'`, `'shortcodes'`, `'grid_builder'`, `'presets'`, and `'dragndrop'`. |

## Usage

```php
<?php
add_filter( 'vc_roles_parts_list', 'my_add_role_parts', 10, 1 );

function my_add_role_parts( $parts ) {
    // Add a custom permissions section
    $parts[] = 'my_custom_section';
    return $parts;
}
```

## Source

File: `include/classes/settings/class-vc-roles.php`
