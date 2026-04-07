---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_base_save_post_\{meta_name\}

Filters the post meta value before it is saved during post update. The dynamic portion of the hook name, `{meta_name}`, refers to the specific post meta key being saved. This filter allows validation or modification of meta values before they are stored.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$post_param` | mixed | The meta value retrieved from the POST data. |
| `$id` | int | The post ID. |

## Usage

```php
<?php
add_filter( 'vc_base_save_post_custom_layout', 'my_validate_custom_layout', 10, 2 );

function my_validate_custom_layout( $post_param, $id ) {
    // Validate and sanitize the custom layout meta value
    if ( ! in_array( $post_param, [ 'default', 'full-width', 'boxed' ], true ) ) {
        return 'default';
    }
    return sanitize_text_field( $post_param );
}
```

## Source

File: `include/classes/core/class-vc-post-admin.php`
