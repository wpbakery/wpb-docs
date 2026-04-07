---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_gitem_zone_image_block_link

Filters the image block link HTML in a grid item zone. This filter is applied after the link type has been determined (e.g., post link, image link, lightbox, custom URL) and allows modification of the generated anchor tag markup.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$image_block` | string | The HTML markup for the image block link (an `<a>` tag or empty string). |
| `$link` | string | The link type setting value (e.g., `post_link`, `image`, `image_lightbox`, `image_full`, `image_full_lightbox`, `custom`, `post_author`, or empty). |
| `$css_class` | string | The CSS class string applied to the link, typically `vc_gitem-link vc-zone-link`. |

## Usage

```php
<?php
add_filter( 'vc_gitem_zone_image_block_link', 'my_custom_image_block_link', 10, 3 );

function my_custom_image_block_link( $image_block, $link, $css_class ) {
    // Add a custom data attribute to the image block link
    if ( 'post_link' === $link ) {
        $image_block = str_replace( 'class="', 'data-custom="true" class="', $image_block );
    }
    return $image_block;
}
```

## Source

File: `include/templates/shortcodes/vc_gitem_zone.php`
