---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_wpb_getimagesize

Filters the image data returned by `wpb_getImageBySize()`, which includes a thumbnail HTML tag and the large image source array.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$image_data` | array | Array with keys `thumbnail` (string, the `<img>` HTML tag) and `p_img_large` (array\|false, the result of `wp_get_attachment_image_src()` for the `large` size). |
| `$attach_id` | int | The attachment post ID. |
| `$params` | array | The original parameters passed to `wpb_getImageBySize()`. |

## Usage

```php
<?php
add_filter( 'vc_wpb_getimagesize', 'my_modify_image_data', 10, 3 );

function my_modify_image_data( $image_data, $attach_id, $params ) {
    // Add a custom wrapper around the thumbnail.
    if ( ! empty( $image_data['thumbnail'] ) ) {
        $image_data['thumbnail'] = '<div class="my-image-wrapper">' . $image_data['thumbnail'] . '</div>';
    }

    return $image_data;
}
```

## Source

File: `include/helpers/helpers.php`
