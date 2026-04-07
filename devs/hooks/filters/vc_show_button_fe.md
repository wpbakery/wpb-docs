---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_show_button_fe

Filters whether the Frontend Editor button should be displayed for a given post.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$result` | bool | Whether the Frontend Editor button should be shown. |
| `$post_id` | int | The current post ID. |
| `$type` | string | The current post type. |

## Usage

```php
<?php
add_filter( 'vc_show_button_fe', 'my_hide_fe_button', 10, 3 );

function my_hide_fe_button( $result, $post_id, $type ) {
    // Hide the Frontend Editor button for the 'product' post type.
    if ( 'product' === $type ) {
        return false;
    }

    return $result;
}
```

## Source

File: `include/classes/editors/class-vc-frontend-editor.php`
