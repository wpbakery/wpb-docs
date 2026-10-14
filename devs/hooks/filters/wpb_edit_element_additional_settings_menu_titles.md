---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# wpb_edit_element_additional_settings_menu_titles

Filters the labels used for the items in the "additional settings" menu of the edit element modal. *(Available from WPBakery Page Builder 9.1)*.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$menu_titles` | array | Associative array of menu item labels, keyed by menu item slug. Default: `['copy' => 'Copy Design Options', 'paste' => 'Paste Design Options', 'edit-element' => 'Edit Element', 'save-as-template' => 'Save as template', 'save-as-element-preset' => 'Save as element preset']`. |

## Usage

```php
<?php
add_filter( 'wpb_edit_element_additional_settings_menu_titles', 'my_edit_element_additional_settings_menu_titles', 10, 1 );

function my_edit_element_additional_settings_menu_titles( $menu_titles ) {
    // Rename the "Copy Design Options" and "Paste Design Options" menu items
    $menu_titles['copy'] = __( 'Copy', 'my-text-domain' );
    $menu_titles['paste'] = __( 'Paste', 'my-text-domain' );
    return $menu_titles;
}
```

## Source

File: `include/classes/core/presets/class-vc-settings-presets.php`
