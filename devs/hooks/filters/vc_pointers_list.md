---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_pointers_list

Filters the list of WordPress admin pointer IDs used by WPBakery Page Builder. Pointers are used to guide users through the editor interface. Use this to add custom pointers or remove default ones.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$pointers` | array | Array of pointer identifier strings. Defaults include `vc_grid_item`, `vc_pointers_backend_editor`, and `vc_pointers_frontend_editor`. |

## Usage

```php
<?php
add_filter( 'vc_pointers_list', 'my_modify_vc_pointers', 10, 1 );

function my_modify_vc_pointers( $pointers ) {
    // Add a custom pointer
    $pointers[] = 'my_custom_pointer';
    return $pointers;
}
```

## Source

File: `include/autoload/hooks/vc-ui-pointers.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.5 | Introduced. |
