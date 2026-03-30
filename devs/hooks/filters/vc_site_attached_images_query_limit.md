---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_site_attached_images_query_limit

Filters the query limit for retrieving site-attached images in the deprecated `vc_siteAttachedImages()` function.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$limit` | int | The maximum number of attachment posts to retrieve. Default `-1` (no limit). |

## Usage

```php
<?php
add_filter( 'vc_site_attached_images_query_limit', 'my_limit_attached_images' );

function my_limit_attached_images( $limit ) {
    // Limit the query to 100 images for performance.
    return 100;
}
```

## Source

File: `include/classes/deprecated/helpers_deprecated.php`
