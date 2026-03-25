---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_hooks_vc_post_settings

Filters the post settings array before it is saved as post meta (`_vc_post_settings`). This hook is used internally by the grid system to store shortcode IDs found in post content, and can be used to add custom settings that are stored alongside WPBakery post metadata.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$settings` | array | The post settings array to be saved. |
| `$post_id` | int | The ID of the post being saved. |
| `$post` | WP_Post | The post object. |

## Usage

```php
<?php
add_filter( 'vc_hooks_vc_post_settings', 'my_custom_post_settings', 10, 3 );

function my_custom_post_settings( $settings, $post_id, $post ) {
    // Add a custom setting to the WPBakery post settings
    $settings['my_custom_option'] = get_post_meta( $post_id, '_my_custom_option', true );
    return $settings;
}
```

## Source

File: `include/classes/core/class-vc-post-admin.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4.3 | Introduced. |
