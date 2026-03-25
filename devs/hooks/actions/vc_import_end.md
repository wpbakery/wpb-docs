---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_import\_end

Fires at the end of a template import process. This hook runs after term counting and comment counting are re-enabled, signaling that the import has fully completed.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_import_end', 'wpb_after_import_complete' );

function wpb_after_import_complete() {
    // Run cleanup or post-processing after the import finishes
    // e.g., flush rewrite rules or clear caches
    flush_rewrite_rules();
    wp_cache_flush();
}
```

## Source

File: `include/classes/core/shared-templates/importer/class-vc-wp-import.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
