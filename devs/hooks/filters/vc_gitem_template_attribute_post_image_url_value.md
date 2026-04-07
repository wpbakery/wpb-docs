---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_gitem_template_attribute_post_image_url_value

Filters the post image URL value used in grid item templates. This filter is applied in multiple contexts including image URL retrieval, image alt text retrieval, and background image URL generation.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$output` | string | The image URL string or alt text value depending on the calling context. |

## Usage

```php
<?php
add_filter( 'vc_gitem_template_attribute_post_image_url_value', 'my_custom_image_url', 10, 1 );

function my_custom_image_url( $output ) {
    // Replace image URL with a CDN version
    return str_replace( home_url(), 'https://cdn.example.com', $output );
}
```

## Source

File: `include/params/vc_grid_item/attributes.php`
