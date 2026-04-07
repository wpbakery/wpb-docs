---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_import_allow_fetch_attachments

Filters whether downloading attachments is allowed during the WPBakery template import process.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$allow` | bool | Whether fetching attachments is allowed. Default is `true`. |

## Usage

```php
<?php
add_filter( 'vc_import_allow_fetch_attachments', 'my_custom_fetch_attachments', 10, 1 );

function my_custom_fetch_attachments( $allow ) {
    // Disable attachment downloading during import
    return false;
}
```

## Source

File: `include/classes/core/shared-templates/importer/class-vc-wp-import.php`
