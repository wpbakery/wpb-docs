---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# wpb_navbar_getControlScreenSize

Filters the available screen sizes for the responsive preview control in the frontend editor navbar. This allows adding, removing, or modifying the screen size options.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$screen_sizes` | array | An array of screen size definitions. Each entry contains keys like `title` and other configuration values. |

## Usage

```php
<?php
add_filter( 'wpb_navbar_getControlScreenSize', 'my_custom_screen_sizes' );

function my_custom_screen_sizes( $screen_sizes ) {
    // Add a custom screen size for ultra-wide monitors
    $screen_sizes['ultrawide'] = [
        'title' => 'Ultra Wide (2560px)',
        'width' => '2560px',
    ];
    return $screen_sizes;
}
```

## Source

File: `include/classes/editors/navbar/class-vc-navbar-frontend.php`
