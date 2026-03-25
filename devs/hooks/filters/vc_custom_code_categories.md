---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_custom_code_categories

Filters the list of tab categories displayed in the Custom Code popup panel. Modules such as Custom CSS and Custom JS use this filter to register their categories as tabs in the panel.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$categories` | array | Array of category data for the custom code panel tabs. Default empty array. |

## Usage

```php
<?php
add_filter( 'vc_custom_code_categories', 'my_custom_code_category' );

function my_custom_code_category( $categories ) {
    // Add a custom tab category to the code panel
    $categories[] = array(
        'label' => 'Custom PHP',
        'slug'  => 'custom_php',
    );
    return $categories;
}
```

## Source

File: `include/classes/editors/popups/class-vc-custom-code.php`

## Changelog

| Version | Description |
|---------|-------------|
| 8.0 | Introduced. |
