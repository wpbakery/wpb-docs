---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_gitem_template_attribute_post_title

Filters the post title used in the `title` attribute of lightbox image links within grid item templates.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$post_title` | string | The post title from `$post->post_title`. |
| `$data_default` | array | The default data array containing `post` (WP_Post object) and `data` (string) keys. |

## Usage

```php
<?php
add_filter( 'vc_gitem_template_attribute_post_title', 'my_custom_post_title', 10, 2 );

function my_custom_post_title( $post_title, $data_default ) {
    // Append a suffix to the post title in grid item lightbox links
    return $post_title . ' - My Site';
}
```

## Source

File: `include/params/vc_grid_item/attributes.php`
