---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_autoload_components_manifest_file

Filters the file path to the autoload components manifest file. This allows developers to override the default manifest file used for autoloading WPBakery components.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$manifest_file_path` | string | The default file path to the components manifest file. |

## Usage

```php
<?php
add_filter( 'vc_autoload_components_manifest_file', 'my_custom_manifest_file' );

function my_custom_manifest_file( $manifest_file_path ) {
    // Use a custom manifest file for autoloading components
    return plugin_dir_path( __FILE__ ) . 'custom-manifest.json';
}
```

## Source

File: `include/classes/core/class-autoload-manager.php`
