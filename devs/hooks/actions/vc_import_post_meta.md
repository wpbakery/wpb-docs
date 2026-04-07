---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_import_post_meta

Fires when importing post meta during a template import. This hook runs after each post meta entry is added to the database via `add_post_meta()`, allowing you to perform additional processing on imported metadata.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$post_id` | `int` | The post ID that the meta was added to. |
| `$key` | `string` | The meta key. |
| `$value` | `mixed` | The meta value. |

## Usage

```php
add_action( 'vc_import_post_meta', 'wpb_process_imported_meta', 10, 3 );

function wpb_process_imported_meta( $post_id, $key, $value ) {
    // Process specific meta keys during import
    if ( '_wpb_shortcodes_custom_css' === $key ) {
        // Regenerate custom CSS cache for the imported post
        update_post_meta( $post_id, '_wpb_css_cache_updated', false );
    }
}
```

## Source

File: `include/classes/core/shared-templates/importer/class-vc-wp-import.php`
