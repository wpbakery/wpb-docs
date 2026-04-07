---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_import_attachment_size_limit

Filters the maximum file size for downloaded attachments during the WPBakery template import process.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$size_limit` | int | Maximum attachment file size in bytes. Default is `0` (unlimited). |

## Usage

```php
<?php
add_filter( 'vc_import_attachment_size_limit', 'my_custom_attachment_size_limit', 10, 1 );

function my_custom_attachment_size_limit( $size_limit ) {
    // Limit attachment downloads to 5MB
    return 5 * 1024 * 1024;
}
```

## Source

File: `include/classes/core/shared-templates/importer/class-vc-wp-import.php`
