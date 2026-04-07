---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_import_start

Fires at the start of a template import process. This hook runs after the import data has been parsed and the base URL has been set, and after term counting and comment counting are deferred for performance.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_import_start', 'wpb_on_import_start' );

function wpb_on_import_start() {
    // Run setup logic at the start of an import
    // e.g., disable email notifications during import
    add_filter( 'wp_mail', '__return_false' );

    // Log import start
    error_log( 'WPBakery template import started at ' . current_time( 'mysql' ) );
}
```

## Source

File: `include/classes/core/shared-templates/importer/class-vc-wp-import.php`
