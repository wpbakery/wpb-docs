---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_settings_exclude_post_type

Filters the list of post types excluded from the WPBakery Role Manager settings. Post types in this list will not appear as options in the role access configuration for post types.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$post_types` | array | Array of post type slugs to exclude. Default: `['attachment', 'revision', 'nav_menu_item', 'mediapage']`. |

## Usage

```php
<?php
add_filter( 'vc_settings_exclude_post_type', 'my_exclude_post_types', 10, 1 );

function my_exclude_post_types( $post_types ) {
    // Also exclude a custom post type from role settings
    $post_types[] = 'my_internal_cpt';
    return $post_types;
}
```

## Source

File: `include/classes/settings/class-vc-roles.php`
