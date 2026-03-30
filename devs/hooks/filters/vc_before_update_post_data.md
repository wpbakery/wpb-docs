---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_before_update_post_data

Filters the post data object before WPBakery Page Builder updates the post with its own data. This filter allows modification of the post object before the plugin processes and saves post parameters.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$post` | WP_Post | The post object about to be updated. |

## Usage

```php
<?php
add_filter( 'vc_before_update_post_data', 'my_before_update_post_data' );

function my_before_update_post_data( $post ) {
    // Modify the post slug before WPBakery processes the update
    if ( 'page' === $post->post_type ) {
        $post->post_name = sanitize_title( $post->post_title );
    }
    return $post;
}
```

## Source

File: `include/classes/core/class-vc-post-admin.php`
