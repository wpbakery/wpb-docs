---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_import_post_meta_key

Filters the meta key for each post meta entry during the WPBakery template import process. Returning a falsy value will skip saving that particular meta entry.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$key` | string | The meta key for the current post meta entry. |
| `$post_id` | int | The ID of the newly inserted post. |
| `$post` | array | The original raw post data from the import file. |

## Usage

```php
<?php
add_filter( 'vc_import_post_meta_key', 'my_custom_import_meta_key', 10, 3 );

function my_custom_import_meta_key( $key, $post_id, $post ) {
    // Skip importing specific meta keys
    if ( '_thumbnail_id' === $key ) {
        return false;
    }

    // Rename a meta key during import
    if ( '_old_meta_key' === $key ) {
        return '_new_meta_key';
    }

    return $key;
}
```

## Source

File: `include/classes/core/shared-templates/importer/class-vc-wp-import.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
