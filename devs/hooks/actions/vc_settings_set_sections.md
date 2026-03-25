---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_settings\_set\_sections

Fires after all settings sections and tabs have been configured. Receives the `Vc_Settings` instance so you can register custom settings sections, fields, or tabs programmatically.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$settings` | `Vc_Settings` | The WPBakery settings instance. |

## Usage

```php
add_action( 'vc_settings_set_sections', 'wpb_add_custom_settings_section' );

function wpb_add_custom_settings_section( $settings ) {
    // Add a custom field to an existing settings section
    $settings->addField(
        'general',
        esc_html__( 'My Custom Option', 'my-plugin' ),
        'my_custom_option',
        'wpb_render_my_custom_option'
    );
}

function wpb_render_my_custom_option() {
    $value = get_option( 'my_custom_option', '' );
    echo '<input type="text" name="my_custom_option" value="' . esc_attr( $value ) . '" />';
}
```

## Source

File: `include/classes/settings/class-vc-settings.php`

## Changelog

| Version | Description |
|---------|-------------|
| 7.7 | Introduced. |
