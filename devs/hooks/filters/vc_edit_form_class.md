---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_edit_form_class

Filters the array of CSS classes applied to the edit form fields container element. This allows adding or modifying CSS classes on the wrapper element that contains all parameter fields in the shortcode edit form.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$editor_css_classes` | array | Array of CSS class strings. Default includes `wpb_edit_form_elements` and `vc_edit_form_elements`. |
| `$atts` | array | The shortcode attributes. |
| `$params` | array | The shortcode parameters configuration. |

## Usage

```php
<?php
add_filter( 'vc_edit_form_class', 'my_custom_edit_form_class', 10, 3 );

function my_custom_edit_form_class( $editor_css_classes, $atts, $params ) {
    // Add a custom class to the edit form container
    $editor_css_classes[] = 'my-custom-form-class';
    return $editor_css_classes;
}
```

## Source

File: `include/classes/editors/class-vc-edit-form-fields.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
