---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_shared_templates_import_shortcodes

Filters the list of shortcodes and their attribute keys that should be processed during shared template import for ID remapping.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$shortcodes` | array | Associative array of shortcode tags mapped to arrays of attribute names containing attachment or post IDs that need remapping. Default includes `gallery`, `vc_single_image`, `vc_gallery`, `vc_images_carousel`, `vc_media_grid`, and `vc_masonry_media_grid`. |

## Usage

```php
<?php
add_filter( 'vc_shared_templates_import_shortcodes', 'my_custom_import_shortcodes' );

function my_custom_import_shortcodes( $shortcodes ) {
    // Add a custom shortcode with an image attribute for ID remapping.
    $shortcodes['my_custom_element'] = [ 'image_id' ];

    return $shortcodes;
}
```

## Source

File: `include/classes/core/shared-templates/importer/class-vc-wxr-parser-plugin.php`
