---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_third_party_modules_list

Filters the list of third-party modules that should be registered with the WPBakery Page Builder module system.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$modules` | array | Array of module data arrays. Each module array should contain keys: `module_dir` (string, required) for the module directory path, `module_class` (string, optional) for the module class name, and `is_active` (bool, optional, default `true`) for whether the module is active. |

## Usage

```php
<?php
add_filter( 'vc_third_party_modules_list', 'my_register_third_party_modules' );

function my_register_third_party_modules( $modules ) {
    $modules[] = [
        'module_dir'   => plugin_dir_path( __FILE__ ) . 'my-module/',
        'module_class' => 'My_Custom_Module',
        'is_active'    => true,
    ];

    return $modules;
}
```

## Source

File: `include/classes/modules/class-modules-manager.php`
