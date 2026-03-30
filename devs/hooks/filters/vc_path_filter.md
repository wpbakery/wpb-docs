---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_path_filter

Filters file paths resolved by the `Vc_Manager::path()` method. Use this to redirect or modify the file system paths used by WPBakery Page Builder for loading templates, assets, and other resources.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$path` | string | The resolved file path, constructed from a registered path name and optional file argument. |

## Usage

```php
<?php
add_filter( 'vc_path_filter', 'my_override_vc_path', 10, 1 );

function my_override_vc_path( $path ) {
    // Redirect template paths to a custom directory
    if ( strpos( $path, '/templates/' ) !== false ) {
        $custom_path = str_replace(
            '/plugins/js_composer/include/templates/',
            '/themes/my-theme/vc-templates/',
            $path
        );
        if ( file_exists( $custom_path ) ) {
            return $custom_path;
        }
    }
    return $path;
}
```

## Source

File: `include/classes/core/class-vc-manager.php`
