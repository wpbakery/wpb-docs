---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_settings\_tab-\{tab\}

Dynamic action that fires for each registered settings tab during section initialization. The `{tab}` portion of the hook name is the tab slug with the `vc-` prefix removed (e.g., for tab `vc-general`, the hook is `vc_settings_tab-general`). Receives the `Vc_Settings` instance for adding fields to the specific tab.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `$settings` | `Vc_Settings` | The WPBakery settings instance. |

## Usage

```php
add_action( 'vc_settings_tab-general', 'wpb_extend_general_tab' );

function wpb_extend_general_tab( $settings ) {
    // Add a custom field to the General settings tab
    $settings->addField(
        'general',
        esc_html__( 'Custom General Option', 'my-plugin' ),
        'my_general_option',
        'wpb_render_general_option'
    );
}

function wpb_render_general_option() {
    $value = get_option( 'my_general_option', '' );
    echo '<input type="text" name="my_general_option" value="' . esc_attr( $value ) . '" />';
}
```

## Source

File: `include/classes/settings/class-vc-settings.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
