---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_import\_post\_exists

Fires when an imported post has an invalid post type. Despite its name, this hook fires when the post type specified in the import data does not exist on the current site, causing the post to be skipped during import.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$post` | `array` | The raw post data from the import source that was skipped. |

## Usage

```php
add_action( 'vc_import_post_exists', 'wpb_handle_skipped_import_post' );

function wpb_handle_skipped_import_post( $post ) {
    // Log posts that were skipped during import
    error_log( sprintf(
        'WPBakery Import: Skipped post "%s" (ID: %d) - post type "%s" does not exist.',
        $post['post_title'],
        $post['post_id'],
        $post['post_type']
    ) );
}
```

## Source

File: `include/classes/core/shared-templates/importer/class-vc-wp-import.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
