---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_load\_default\_params

Fires after WPBakery registers its built-in parameter types (textfield, textarea, dropdown, etc.). Use this hook to register custom shortcode parameter types via `vc_add_shortcode_param()`.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_load_default_params', 'wpb_register_custom_params' );

function wpb_register_custom_params() {
    vc_add_shortcode_param( 'my_custom_param', 'my_custom_param_field' );
}

function my_custom_param_field( $settings, $value ) {
    return '<div class="my_param_block">'
        . '<input name="' . esc_attr( $settings['param_name'] ) . '"'
        . ' class="wpb_vc_param_value"'
        . ' type="text"'
        . ' value="' . esc_attr( $value ) . '" />'
        . '</div>';
}
```

## Source

File: `include/classes/editors/class-vc-edit-form-fields.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
