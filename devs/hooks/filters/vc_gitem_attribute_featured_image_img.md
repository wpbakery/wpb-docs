---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_gitem_attribute_featured_image_img

Filters the featured image data returned by `wpb_getImageBySize()` for a Grid Item's featured image attribute. This allows modification of the image HTML and thumbnail before it is used in the grid item output.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$img` | `array\|null\|false` | The image data array returned by `wpb_getImageBySize()`, typically containing `thumbnail` (HTML img tag) and `p_img_large` (full-size image array) keys. Returns `null` or `false` if no image is found. |

## Usage

```php
add_filter( 'vc_gitem_attribute_featured_image_img', 'wpb_modify_gitem_featured_image' );

function wpb_modify_gitem_featured_image( $img ) {
    if ( is_array( $img ) && ! empty( $img['thumbnail'] ) ) {
        // Add lazy loading attribute to the thumbnail
        $img['thumbnail'] = str_replace( '<img ', '<img loading="lazy" ', $img['thumbnail'] );
    }
    return $img;
}
```

## Source

File: `include/templates/params/vc_grid_item/attributes/featured_image.php`
