---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_autoload_components_list

Filters the list of components that are autoloaded during WPBakery initialization. Components are loaded from a manifest file and this filter allows you to add, remove, or modify which components are loaded.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$components` | array | Associative array of component file paths and their descriptions, decoded from the autoload manifest JSON. |

## Usage

```php
<?php
add_filter( 'vc_autoload_components_list', 'my_custom_function', 10, 1 );

function my_custom_function( $components ) {
    // Remove a component from autoloading
    unset( $components['path/to/component.php'] );

    return $components;
}
```

## Source

File: `include/classes/core/class-autoload-manager.php`
