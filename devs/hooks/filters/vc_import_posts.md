---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_import_posts

Filters the complete array of posts before they are processed during the WPBakery template import. This allows modification or filtering of the entire posts collection before any individual post is imported.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$posts` | array | An array of raw post data arrays from the import file. Each post array contains WordPress post fields and associated metadata. |

## Usage

```php
<?php
add_filter( 'vc_import_posts', 'my_custom_import_posts', 10, 1 );

function my_custom_import_posts( $posts ) {
    // Only import posts of a specific type
    return array_filter( $posts, function( $post ) {
        return 'vc4_templates' === $post['post_type'];
    } );
}
```

## Source

File: `include/classes/core/shared-templates/importer/class-vc-wp-import.php`
