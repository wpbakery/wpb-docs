---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc_edit_form_enqueue_script

Filters the array of scripts registered for parameter types in the edit form. This allows adding, removing, or modifying the JavaScript files that are enqueued when the shortcode edit form is rendered.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$scripts` | array | Associative array of scripts where keys are parameter type names and values are script URLs. |

## Usage

```php
<?php
add_filter( 'vc_edit_form_enqueue_script', 'my_custom_edit_form_scripts' );

function my_custom_edit_form_scripts( $scripts ) {
    // Add a custom script for a custom parameter type
    $scripts['my_custom_param'] = plugins_url( 'assets/js/my-custom-param.js', __FILE__ );
    return $scripts;
}
```

## Source

File: `include/classes/editors/class-vc-edit-form-fields.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.4 | Introduced. |
