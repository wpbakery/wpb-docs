---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_add_new_elements_to_box

Filters the list of mapped shortcodes displayed in the "Add Element" box. This allows you to modify which elements are available for the user to add.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$shortcodes` | array | Array of sorted user shortcodes from `WPBMap::getSortedUserShortCodes()`. |

## Usage

```php
<?php
add_filter( 'vc_add_new_elements_to_box', 'my_custom_function', 10, 1 );

function my_custom_function( $shortcodes ) {
    // Remove a specific shortcode from the add element box
    $shortcodes = array_filter( $shortcodes, function( $shortcode ) {
        return $shortcode['base'] !== 'vc_column_text';
    });

    return $shortcodes;
}
```

## Source

File: `include/classes/editors/popups/class-vc-add-element-box.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
