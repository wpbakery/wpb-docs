---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_import\_pre\_end

Fires just before the import process ends. This hook runs after parent backfilling, attachment URL backfilling, and featured image remapping are complete, but before `import_end()` performs final cleanup. The importer instance is passed so you can access processed data.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$importer` | `Vc_WP_Import` | The importer instance, providing access to processed posts, URL mappings, and other import state. |

## Usage

```php
add_action( 'vc_import_pre_end', 'wpb_before_import_cleanup' );

function wpb_before_import_cleanup( $importer ) {
    // Access the processed posts before final cleanup
    // e.g., perform additional URL remapping or data migration
}
```

## Source

File: `include/classes/core/shared-templates/importer/class-vc-wp-import.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
