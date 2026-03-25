---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_popup_save_as_template_elements

Filters the list of element tags that show a "Save as Template" option instead of presets in the element settings popup. By default, only `vc_row` and `vc_section` elements display the template save option.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$elements` | array | Array of shortcode tag names that should display the "Save as Template" option. Default: `['vc_row', 'vc_section']`. |

## Usage

```php
<?php
add_filter( 'vc_popup_save_as_template_elements', 'my_add_template_save_elements', 10, 1 );

function my_add_template_save_elements( $elements ) {
    // Allow vc_column to also be saved as a template
    $elements[] = 'vc_column';
    return $elements;
}
```

## Source

File: `include/classes/editors/class-vc-edit-form-fields.php`

## Changelog

| Version | Description |
|---------|-------------|
| 5.5 | Introduced. |
