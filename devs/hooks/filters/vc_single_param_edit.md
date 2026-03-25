---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_single_param_edit

Filters a single parameter configuration array before the edit form field is rendered in the shortcode settings panel.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$param` | array | The parameter configuration array (from `vc_map()` params). |
| `$value` | mixed | The current value of the parameter. |

## Usage

```php
<?php
add_filter( 'vc_single_param_edit', 'my_modify_param_edit', 10, 2 );

function my_modify_param_edit( $param, $value ) {
    // Add a custom CSS class to all textarea_html param holders.
    if ( 'textarea_html' === $param['type'] ) {
        $param['vc_single_param_edit_holder_class'][] = 'my-custom-textarea-class';
    }

    return $param;
}
```

## Source

File: `include/classes/editors/class-vc-edit-form-fields.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
