---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_import_insert_post

Fires after a post is inserted during a template import. This hook provides the new post ID, the original post ID from the import file, the prepared post data array, and the raw post data from the import source.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$post_id` | `int` | The newly inserted post ID in the local database. |
| `$original_post_ID` | `int` | The original post ID from the import file. |
| `$postdata` | `array` | The prepared post data array passed to `wp_insert_post()`. |
| `$post` | `array` | The raw post data from the import source. |

## Usage

```php
add_action( 'vc_import_insert_post', 'wpb_after_import_insert_post', 10, 4 );

function wpb_after_import_insert_post( $post_id, $original_post_ID, $postdata, $post ) {
    // Track the mapping between original and new post IDs
    update_post_meta( $post_id, '_imported_from_id', $original_post_ID );

    // Add custom meta data to the imported post
    update_post_meta( $post_id, '_import_date', current_time( 'mysql' ) );
}
```

## Source

File: `include/classes/core/shared-templates/importer/class-vc-wp-import.php`
