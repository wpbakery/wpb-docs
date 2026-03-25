---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# vc\_page\_settings\_build

Fires after the WPBakery settings page tabs have been built and their load callbacks registered. Use this hook to add custom settings tabs or extend the settings page with additional functionality.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'vc_page_settings_build', 'wpb_extend_settings_page' );

function wpb_extend_settings_page() {
    // Add a custom settings tab or register additional settings
    add_submenu_page(
        VC_PAGE_MAIN_SLUG,
        esc_html__( 'My Settings', 'my-plugin' ),
        esc_html__( 'My Settings', 'my-plugin' ),
        'manage_options',
        'my-vc-settings',
        'wpb_render_my_settings'
    );
}

function wpb_render_my_settings() {
    echo '<div class="wrap"><h1>My WPBakery Settings</h1></div>';
}
```

## Source

File: `include/autoload/vc-pages/settings-tabs.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.5 | Introduced. |
