---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_gitem_template_attribute_post_image_background_image_css_value

Filters the CSS background-image property value for a post's featured image in a grid item template.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$output` | string | The CSS `background-image` property string, e.g. `background-image: url('...') !important;`. |

## Usage

```php
<?php
add_filter( 'vc_gitem_template_attribute_post_image_background_image_css_value', 'my_custom_bg_image_css', 10, 1 );

function my_custom_bg_image_css( $output ) {
    // Add additional CSS properties or modify the background-image value
    return $output . ' background-size: cover;';
}
```

## Source

File: `include/params/vc_grid_item/attributes.php`
