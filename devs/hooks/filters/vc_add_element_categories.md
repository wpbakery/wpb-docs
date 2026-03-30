---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_add_element_categories

Filters the tab categories displayed in the "Add Element" panel. Use this to modify, add, or remove category tabs.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$tabs` | array | Array of tab data with keys like 'name', 'active', etc. |

## Usage

```php
<?php
add_filter( 'vc_add_element_categories', 'my_custom_function', 10, 1 );

function my_custom_function( $tabs ) {
    // Add a custom category tab
    $tabs[] = [
        'name'   => 'My Custom Category',
        'active' => false,
    ];
    return $tabs;
}
```

## Source

File: `include/templates/editors/partials/add_element_tabs.tpl.php`
