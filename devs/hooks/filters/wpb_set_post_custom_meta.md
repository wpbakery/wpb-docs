---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# wpb_set_post_custom_meta

Filters the custom meta values associated with a post in the editor. This allows injecting additional custom meta data that WPBakery editor uses for the current post.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$post_custom_meta` | array | An array of custom meta values. Default empty array. |
| `$post` | WP_Post | The current post object. |

## Usage

```php
<?php
add_filter( 'wpb_set_post_custom_meta', 'my_custom_post_meta', 10, 2 );

function my_custom_post_meta( $post_custom_meta, $post ) {
    // Add custom meta for a specific post type
    if ( 'product' === $post->post_type ) {
        $post_custom_meta['custom_layout'] = get_post_meta( $post->ID, '_custom_layout', true );
    }
    return $post_custom_meta;
}
```

## Source

File: `include/classes/editors/class-vc-editor.php`
