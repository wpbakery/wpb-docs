---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_nav_control_list

Filters the list of navbar controls displayed in the WPBakery editor navigation bar. Use this to add, remove, or reorder controls in the editor toolbar.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$controls` | array | Array of navbar control items. |
| `$navbar` | Vc_Navbar | The navbar instance object. |

## Usage

```php
<?php
add_filter( 'vc_nav_control_list', 'my_modify_nav_controls', 10, 2 );

function my_modify_nav_controls( $controls, $navbar ) {
    // Add a custom control to the navbar
    $controls[] = [
        'my_custom_control' => 'My_Custom_Nav_Control_Class',
    ];
    return $controls;
}
```

## Source

File: `include/classes/editors/navbar/class-vc-navbar.php`

## Changelog

| Version | Description |
|---------|-------------|
| 7.7 | Introduced. |
