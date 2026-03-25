---
sidebar_class_name: hidden-sidebar-item
hide_table_of_contents: true
---

# wpb\_add\_before\_settings\_form

Fires before the opening `<form>` tag on WPBakery settings pages. Use this hook to output custom HTML content, notices, or UI elements before the settings form.

## Parameters

This action has no parameters.

## Usage

```php
add_action( 'wpb_add_before_settings_form', 'wpb_custom_before_settings_form' );

function wpb_custom_before_settings_form() {
    echo '<div class="notice notice-info">';
    echo '<p>' . esc_html__( 'Remember to save your settings after making changes.', 'my-plugin' ) . '</p>';
    echo '</div>';
}
```

## Source

File: `include/templates/pages/vc-settings/tab.php`

## Changelog

| Version | Description |
|---------|-------------|
| 4.2 | Introduced. |
