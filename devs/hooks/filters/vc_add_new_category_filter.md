---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_add_new_category_filter

Filters the user shortcode categories returned by `WPBMap::getUserCategories()`. This hook is used internally to add the "Presets" category and can be used to modify the categories list.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$categories` | array | Array of user shortcode categories. |

## Usage

```php
<?php
add_filter( 'vc_add_new_category_filter', 'my_custom_function', 10, 1 );

function my_custom_function( $categories ) {
    // Add a custom category to the list
    $categories[] = [
        'name' => 'My Custom Category',
        'slug' => 'my-custom-category',
    ];
    return $categories;
}
```

## Source

File: `include/classes/editors/popups/class-vc-add-element-box.php`
